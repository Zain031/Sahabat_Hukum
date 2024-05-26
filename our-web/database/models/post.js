import { ObjectId } from "mongodb";
import { database } from "../config";
import { z } from "zod";

const postSchema = z.object({
  userId: z.string().nonempty("userId tidak boleh kosong"),
  title: z.string().nonempty("Title tidak boleh kosong"),
  content: z.string().nonempty("Content tidak boleh kosong"),
});

function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export default class Post {
  static collection() {
    return database.collection("posts");
  }

  static async getIdBySlug(slug) {
    const post = await this.collection().findOne({ slug });
    return post._id;
  }

  static async createPost(postInput) {
    const postValidation = postSchema.safeParse(postInput);

    if (!postValidation.success) {
      throw postValidation.error;
    }

    postInput.userId = new ObjectId(String(postInput.userId));
    postInput.vote = 0;
    postInput.slug = slugify(postInput.title);
    postInput.createdAt = new Date();
    const post = await this.collection().insertOne(postInput);

    return {
      _id: post.insertedId,
      ...postInput,
    };
  }

  

  static async getPost(search, page) {
    const aggregate = [
      {
        $match: {
          title: {
            $regex: `^${search || ""}`,
            $options: "i",
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
          includeArrayIndex: "string",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $unset: ["user.password", "content"],
      },
      {
        $lookup: {
          from: "answers",
          localField: "_id",
          foreignField: "postId",
          as: "answers",
        },
      },
      {
        $sort: {
          createdAt: 1,
        },
      },
      {
        $skip: ((page || 1) - 1) * 5,
      },
    ];

    try {
      const data = await this.collection().aggregate(aggregate).toArray();

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getPostBySlug(slug) {
    const aggregate = [
      {
        $match: {
          slug: slug,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
          includeArrayIndex: "string",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $lookup: {
          from: "answers",
          localField: "_id",
          foreignField: "postId",
          as: "answers",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "answers.userId",
          foreignField: "_id",
          as: "answersUser",
        },
      },
      {
        $unset: [
          "answers-user.password",
          "answers-user.city",
          "answers-user.category",
          "answers-user.education",
          "answers-user.about",
          "answers-user.identifier",
        ],
      },
    ];

    try {
      const data = await this.collection().aggregate(aggregate).toArray();

      return data[0];
    } catch (error) {
      throw error;
    }
  }
}

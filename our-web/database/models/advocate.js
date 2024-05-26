import { ObjectId } from "mongodb";
import { database } from "../config";

export default class Advocate {
  static collection() {
    return database.collection("advocates");
  }

  static async findByNIA(NIA) {
    const user = await this.collection().findOne({ NIA });
    return user;
  }

  static async addAdvocate(newAdvocate) {
    const result = registerSchema.safeParse(newAdvocate);
    if (!result.success) {
      throw result.error;
    }

    const existingNIA = await this.findByNIA(newAdvocate.NIA);
    if (existingNIA) {
      throw new Error("NIA sudah terdaftar");
    }

    const user = await this.collection().insertOne(newAdvocate);

    return {
      _id: user.insertedId,
      ...newAdvocate,
    };
  }
  static async getAdvocates(search, page) {
    const aggregate = [
      {
        $match: {
          role: "Advokat",
        },
      },
      {
        $match: {
          name: {
            $regex: `^${search || ""}`,
            $options: "i",
          },
        },
      },
      {
        $unset: ["about", "password"],
      },
      {
        $sort: {
          experience: -1,
        },
      },
      {
        $skip: ((page || 1) - 1) * 8,
      },
    ];
    return await database.collection("users").aggregate(aggregate).toArray();
  }

  static async getAdvocateById(_id) {
    return await database
      .collection("users")
      .findOne({ _id: new ObjectId(String(_id)) });
  }
  static async getAdvocateByName(name) {
    return await database
      .collection("users")
      .find({ _id: new ObjectId(String(_id)) });
  }
}

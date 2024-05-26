import { ObjectId } from "mongodb";
import { database } from "../config";

export default class Answer {
  static collection() {
    return database.collection("answers");
  }

  static async createAnswer(answerInput) {
    const { userId, postId, content } = answerInput;
    await this.collection().insertOne({
      userId: new ObjectId(String(userId)),
      postId: new ObjectId(String(postId)),
      content: content,
      createdAt: new Date(),
    });
  }

  static async deleteAnswer(id) {
    await this.collection().deleteOne({ _id: ObjectId(String(id)) });
  }
}

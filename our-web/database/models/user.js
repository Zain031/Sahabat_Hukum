import { ObjectId } from "mongodb";

const { hashPassword } = require("../helpers/bcrypt");
const { database } = require("../config/index");
const { z } = require("zod");

export const registerSchema = z.object({
  name: z.string().nonempty("Nama tidak boleh kosong"),
  identifier: z.union([
    z.string().email("Format email salah"),
    z
      .string()
      .min(10, "No Handphone minimal 10 digit")
      .max(13, "No handphone maksimal 13 digit")
      .regex(/^\d+$/, "No handphone hanya boleh berisi nomor"),
  ]),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .nonempty("Password tidak boleh kosong"),
});

export const loginSchema = z.object({
  identifier: z.union([
    z.string().email("Format email salah"),
    z
      .string()
      .min(10, "No Handphone minimal 10 digit")
      .max(13, "No handphone maksimal 13 digit")
      .regex(/^\d+$/, "No handphone hanya boleh berisi nomor"),
  ]),
  password: z
    .string()
    .min(6, "Password minimal 6 karakter")
    .nonempty("Password tidak boleh kosong"),
});

export default class User {
  static collection() {
    return database.collection("users");
  }

  static async findById(id) {
    return await this.collection().findOne({ _id: new ObjectId(String(id)) });
  }

  static async findByIdentifier(identifier) {
    const user = await this.collection().findOne({ identifier });
    return user;
  }

  static async addUser(newUser) {
    const result = registerSchema.safeParse(newUser);
    if (!result.success) {
      throw result.error;
    }
  
    const existingIdentifier = await this.findByIdentifier(newUser.identifier);
    console.log(existingIdentifier, "<<<<<")
    if (existingIdentifier) {
      throw new Error("Email/no handphone sudah terdaftar");
    }

    newUser.password = hashPassword(newUser.password);
    newUser.role = "User";

    const user = await this.collection().insertOne(newUser);

    return {
      _id: user.insertedId,
      ...newUser,
    };
  }
}

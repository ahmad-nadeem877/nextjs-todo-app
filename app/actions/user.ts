"use server";

import prisma from "../db";
import { z } from "zod";

const emailSchema = z.string().email();
const usernameSchema = z.string();

export async function signUp(
  email: string,
  username: string,
  password: string
) {
  var { success } = emailSchema.safeParse(email);
  if (!success) {
    return { message: "input invalid" };
  }
  var { success } = usernameSchema.safeParse(email);
  if (!success) {
    return { message: "input invalid" };
  }

  const user = await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });

  console.log("user id", user.id);
  if (!user) {
    return { message: "Sign Up Failed" };
  }
  return { message: "Sign Up SuccessFull !" };
}

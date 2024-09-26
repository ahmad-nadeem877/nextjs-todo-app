"use server";

import { redirect } from "next/navigation";
import prisma from "../db";
import { z } from "zod";

const emailSchema = z.string().email();
const usernameSchema = z.string();

type signUpState = {
  username: string;
  email: string;
  password: string;
};

export async function signUp(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const email = formData.get("email")?.toString() || "";
  const username = formData.get("username")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  var { success } = emailSchema.safeParse(email);
  if (!success) {
    return { success: false, message: "input invalid" };
  }
  var { success } = usernameSchema.safeParse(email);
  if (!success) {
    return { success: false, message: "input invalid" };
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
    return { success: false, message: "Sign Up Failed" };
  }
  return { success: true, message: "Sign Up SuccessFull !" };
}

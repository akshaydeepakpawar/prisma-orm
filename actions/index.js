"use server"

import { prisma } from "../lib/db";
import { revalidatePath } from "next/cache";

export const CreatePost=async(formData)=>{
const title = formData.get("title");
  const description = formData.get("description");

  if (!title || title.trim() === "") {
    return { success: false };
  }
  const post = await prisma.post.create({
    data: {
      title: title,
      description: description,
    },
  });
  revalidatePath("/")
  return {
    success: true,
    data: post,
  };
}

export const getPost=async()=>{
    const posts=await prisma.post.findMany()
    return posts;
}

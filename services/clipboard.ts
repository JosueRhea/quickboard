"use server";
import { kv } from "@vercel/kv";

function generateRandomId(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  return id;
}

export const saveText = async (text: string) => {
  const id = generateRandomId(4);
  const res = await kv.set(`clip-${id}`, text);
  if (res === "OK") return { id };

  return null;
};

export const getText = async (id: string) => {
  const res = await kv.get(`clip-${id}`);
  if (res) return { text: res as string };

  return null;
};

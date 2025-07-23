"use server";

import { deletePostApi } from "@/services/postService";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function deletePost(prevState, { postId }) {
  // try {
  //   await deletePostApi(postId);
  //   revalidatePath("/profile/posts");
  //   redirect("/profile/posts");
  // } catch (error) {}
  const cookieStore = cookies();

  try {
    const options = setCookiesOnReq(cookieStore);
    const { message } = await deletePostApi(postId, options);

    revalidatePath("/profile/posts");

    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    console.log({ error });

    return {
      error,
    };
  }
}

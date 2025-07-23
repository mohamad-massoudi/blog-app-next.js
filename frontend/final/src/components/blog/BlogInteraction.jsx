"use client";

import { toPersianDigits } from "@/utils/numberFormatter";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  BookmarkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as SolidHearIcon,
  BookmarkIcon as SolideBookmarkIcon,
} from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import ButtonIcon from "../ui/ButtonIcon";
import { usePathname, useRouter } from "next/navigation";
import { bookmarkPostApi, likePostApi } from "@/services/postService";

const BlogInteraction = ({ post }) => {
  const router = useRouter();
  const pathname = usePathname();

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      router.refresh();
      toast.success(message);
    } catch (err) {
      console.log(err);

      toast.error(err?.response?.data?.message);
    }
  };

  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      router.refresh();
      toast.success(message);
    } catch (error) {
      toast.error(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon onClick={() => likeHandler(post._id)} variant="red">
        {post.isLiked ? <SolidHearIcon /> : <HeartIcon />}
        <span>{toPersianDigits(post.likesCount)}</span>
      </ButtonIcon>
      <ButtonIcon onClick={() => bookmarkHandler(post._id)} variant="primary">
        {post.isBookmarked ? <SolideBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
};

export default BlogInteraction;

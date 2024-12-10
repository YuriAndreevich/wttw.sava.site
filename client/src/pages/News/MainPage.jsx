import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PopularPosts } from "./PopularPosts";
import { PostItem } from "./PostItem";
import { getAllPosts } from "../../redux/features/post/postSlice";

export const News = () => {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts || !posts.length) {
    return (
      <div className="text-xl text-center text-white p-20">
        Постов не существует.
      </div>
    );
  }
  

  return (
    <div className="max-w-[900px] mx-auto py-32">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-10 basis-4/5">
          {posts?.map((post, idx) => (
            <PostItem key={idx} post={post} />
          ))}
        </div>
        <div className="basis-1/5">
          <div className="text-xs uppercase text-white">Популярное:</div>

          {popularPosts?.map((post, idx) => (
            <PopularPosts key={idx} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

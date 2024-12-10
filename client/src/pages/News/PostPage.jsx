import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "../../axios";
import { removePost } from "../../redux/features/post/postSlice";
import {
  createComment,
  getPostComments,
} from "../../redux/features/comment/commentSlice";
import { CommentItem } from "./CommentItem";
import { showToast } from "../../redux/features/toastSlice";

export const PostPage = () => {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  const { user } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.comment);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const removePostHandler = async () => {
    try {
      await dispatch(removePost(params.id));
      dispatch(showToast("Пост был удален"));
      navigate("/news");
    } catch (error) {
      dispatch(showToast("Ошибка при удалении поста"));
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const postId = params.id;
      await dispatch(createComment({ postId, comment }));
      setComment("");
      dispatch(showToast("Комментарий успешно отправлен"));
    } catch (error) {
      dispatch(showToast("Ошибка при отправке комментария"));
      console.log(error);
    }
  };

  const fetchComments = useCallback(async () => {
    try {
      dispatch(getPostComments(params.id));
    } catch (error) {
      console.log(error);
    }
  }, [params.id, dispatch]);

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/api/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  if (!post) {
    return (
      <div className="text-xl text-center text-white p-20">Загрузка...</div>
    );
  }

  return (
    <div className="m-auto py-20">
      <button className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4">
        <Link className="flex" to={"/news"}>
          Назад
        </Link>
      </button>

      <div className="flex gap-3 py-8 flex flex-col items-center">
        <button
          className="flex items-center justify-center gap-2 text-white opacity-50"
          onClick={removePostHandler}
        >
          Удалить пост
        </button>

        <div className="w-1/3 p-8 bg-gray-700 flex flex-col gap-2 rounded-sm">
          <form
            className="flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment"
              className="text-black w-full rounded-sm bg-gray-400 border p-2 text-xs outline-none placeholder:text-gray-700"
            />
            <button
              onClick={handleSubmit}
              className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

import { Router } from "express";
import {
  createPost,
  getAll,
  getById,
  getMyPosts,
  removePost,
  updatePost,
  getPostComments,
} from "../controllers/posts.js";
import { checkAuth } from "../middleware/checkAuth.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";
const router = new Router();

router.post('/',
  checkAuth, 
  authorizeRoles(['admin']), 
  createPost
);

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", checkAuth, updatePost);

router.get("/user/me", checkAuth, getMyPosts);

router.delete("/:id", checkAuth, removePost);

router.get("/comments/:id", getPostComments);

export default router;

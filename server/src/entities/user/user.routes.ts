import { Router } from "express";
import { MCsrf } from "@/middlewares/csrf";
import { MFingerprint } from "@/middlewares/fingerprint";
import { UserController } from "./user.controller";

const router = Router();

const ROUTE_PREFIX = "user";

//router.get(`/${ROUTE_PREFIX}/`, PostController.all);
//router.get(`/${ROUTE_PREFIX}/:id`, PostController.getById);

router.post(`/${ROUTE_PREFIX}/login`, MFingerprint, MCsrf, UserController.login);

export { router as userRouter };


import express from "express";
import { json } from 'body-parser'
import { prisma } from "@/prisma/client";
import { logger } from "@/config/logger";
import { userRouter } from '@/entities/user/user.routes'
import { postRouter } from "@/entities/post/post.routes";
import { csrfRouter } from "@/entities/csrf/csrf.routes";
import { jwtRouter } from "@/entities/jwt/jwt.routes";
import { MGzip } from '@/middlewares/compression'
import { MFatal } from "@/middlewares/error";
import { MSession } from "@/middlewares/session";
import { MCors } from "@/middlewares/cors";
import * as SentryHandlers from '@/middlewares/sentry'
import { EXPRESS_PORT } from "@/config/env";
import { initSentry } from '@/config/sentry'

// вынести отсюда, тест коннект к БД
// проверка env переменных
// prisma.$connect().catch((err) => {
//   logger.error(err);
// });

const app = express();

/* Initial setups */
initSentry(app);

/* Отключение */
app.disable('x-powered-by');

/* Sentry */
app.use(SentryHandlers.MSentryRequestHandler);
app.use(SentryHandlers.MSentryTracingHandler);

/* NPM packages middlewars */
app.use(json())

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.use(MGzip)
app.use(MCors);
app.use(MSession);

/* App routers */
app.use(userRouter)
app.use(postRouter)
app.use(csrfRouter)
app.use(jwtRouter)

/* Uncaught error on the server */
app.use(SentryHandlers.MSentryErrorHandler);
app.use(MFatal);

app.listen(EXPRESS_PORT, () => {
  console.log("Server started on port: " + EXPRESS_PORT);
});


import express, { Router as router } from "express";
import path from "path";

export default router()
  .use(express.static(path.join(process.cwd(), "build/client")))
  .use(express.static(path.join(process.cwd(), "public")))
;

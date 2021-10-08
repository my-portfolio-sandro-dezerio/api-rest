import { Router } from "express";

import { getAll } from './getAll';
import { getById } from "./getById";
import { post } from "./post";
import { put } from './put';
import { remove } from "./remove";

const router = Router();

router.get("/persons", getAll);
router.get("/persons/:id", getById);
router.post("/persons", post);
router.put("/persons/:id", put);
router.delete("/persons/:id", remove);

export default router;
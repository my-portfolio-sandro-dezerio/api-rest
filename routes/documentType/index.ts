import { Router } from "express";

import { select } from './select';

const router = Router();

router.get("/documents_type/select", select);

export default router;
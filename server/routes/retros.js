import express from 'express';
import { getRetros } from '../controllers/retros.js';

const router = express.Router();

router.get('/', getRetros);

export default router;
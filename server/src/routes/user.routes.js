import { Router } from "express";

const router = Router();

router.get('/users', (req, res) => {
    res.send('Get all users');
})

export { router as userRouter }
import { Router } from "express";
const router = Router();
import { verifyToken } from "../config/verifyToken.js";
import { login , register } from "../controllers/users.js";
import { createTicket, fetchTickets } from "../controllers/createTicket.js";


router.post("/register", register);

router.post("/login", login);

router.post("/createTicket",verifyToken, createTicket);

router.get("/tickets/:userId",verifyToken, fetchTickets);


export default router;
import express from "express"
import StudentAuthRouteController from "../../controllers/student/AuthController.js";

const AdminAuthRouter = express.Router();

AdminAuthRouter.get("/signin", StudentAuthRouteController)



export default AdminAuthRouter
import express from "express"
import StudentAuthRouteController from "../../controllers/student/AuthController.js";

const StudentAuthRouter = express.Router();

StudentAuthRouter.post("/signin", StudentAuthRouteController.handleStudentLogin)



export default StudentAuthRouter
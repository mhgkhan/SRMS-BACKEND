import express from "express"
import StudentAuthRouteController from "../../controllers/student/AuthController.js";
import { verifyStudentToken } from "../../../middlewares/TokenVerification.js";

const StudentAuthRouter = express.Router();


// checkValidation
StudentAuthRouter.get("/", verifyStudentToken, StudentAuthRouteController.handleVerify)
// signup 
StudentAuthRouter.post("/signup", StudentAuthRouteController.handleStudentSignup)
// signin 
StudentAuthRouter.post("/signin", StudentAuthRouteController.handleStudentSignin)




export default StudentAuthRouter
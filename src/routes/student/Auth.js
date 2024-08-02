import express from "express"
import StudentAuthRouteController from "../../controllers/student/AuthController.js";

const StudentAuthRouter = express.Router();


// signup 
StudentAuthRouter.post("/signup", StudentAuthRouteController.handleStudentSignup)
// signin 
StudentAuthRouter.post("/signin", StudentAuthRouteController.handleStudentSignin)




export default StudentAuthRouter
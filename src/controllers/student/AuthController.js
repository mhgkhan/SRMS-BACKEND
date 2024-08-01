import { checkIfValueExistsInCollection } from "../../../helpers/dbActions.js";
import { sendSuccessResponse } from "../../../helpers/UtilityFunctions.js";
import StudentModel from "../../db/models/students/Student.js";

class StudentAuthRouteController {
    static handleStudentLogin = async (req,res) =>{
        try {

            const {stdId,stdPassword} = req.body;
            // console.log(req.body)
            // console.log(stdId, stdPassword)

            const findStudent = await checkIfValueExistsInCollection(StudentModel, "stdId", stdId)

            console.log(findStudent)


            sendSuccessResponse(res, true, "user logged success", {}, 201)

            // return res.status(200).json({success:true, message:"hello world "})
        } catch (error) {
            
        }
    }
}

export default StudentAuthRouteController
import { checkIfValueExistsInCollection } from "../../../helpers/dbActions.js";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../../../helpers/UtilityFunctions.js";
import StudentModel from "../../db/models/students/Student.js";

class StudentAuthRouteController {
  static handleStudentLogin = async (req, res) => {
    try {
      const { stdId, stdPassword } = req.body;
      // console.log(req.body)
      // console.log(stdId, stdPassword)

      const findStudent = await checkIfValueExistsInCollection(
        StudentModel,
        "stdId",
        stdId
      );

      // console.log(findStudent)
      if (findStudent.error)
        return sendErrorResponse(
          res,
          false,
          "Server Error",
          findStudent.message,
          500
        );
      if (findStudent.success)
        return sendErrorResponse(
          res,
          false,
          "dublicate",
          "Student of this id already exists",
          400
        );

        if(!findStudent.success){
            
        }

      return sendSuccessResponse(res, true, "user logged success", {}, 201);
      // return res.status(200).json({success:true, message:"hello world "})
    } catch (error) {}
  };
}

export default StudentAuthRouteController;

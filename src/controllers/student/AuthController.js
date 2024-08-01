import {
  addSingleDocumentToCollection,
  checkIfValueExistsInCollection,
} from "../../../helpers/dbActions.js";
import {
    checkReciveDataValidations,
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

      const checkvalidation = checkReciveDataValidations([stdId, stdPassword])
      console.log(checkvalidation)
      if(!checkvalidation){
        return sendErrorResponse(res, false, "invilid data", "Your data is not valid ", 400)
      }
      else{
          const findStudent = await checkIfValueExistsInCollection(
        StudentModel,
        "stdId",
        stdId
      );

    //   console.log(findStudent);
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

      if (!findStudent.success) {
        const addingData = await addSingleDocumentToCollection(StudentModel, {
          stdId,
          stdPassword,
        });
        
        if (addingData.success)
            return sendSuccessResponse(
            res,
            true,
            "Student Regiestered Sucessfully",
            addingData.data,
            201
        );
        if (!addingData.success)
          return sendErrorResponse(
            res,
            false,
            "Server Error",
            addingData.message,
            500
        );
    }
}
    
    //   console.log("second returned")
    //   return sendSuccessResponse(res, true, "user logged success", {}, 201);
    
      // return res.status(200).json({success:true, message:"hello world "})
    } catch (error) {}
  };
}

export default StudentAuthRouteController;

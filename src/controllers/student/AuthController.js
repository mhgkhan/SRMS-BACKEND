import {
  addSingleDocumentToCollection,
  checkIfValueExistsInCollection,
} from "../../../helpers/dbActions.js";
import { generateStudentAccessToken } from "../../../helpers/TokensGenerators.js";
import {
  checkReciveDataValidations,
  sendErrorResponse,
  sendSuccessResponse,
} from "../../../helpers/UtilityFunctions.js";
import StudentModel from "../../db/models/students/Student.js";

class StudentAuthRouteController {


  /*
    1*
      Validate Payload
    2*
      checking if this value is exists or not 
    3*
      Adding to the database
    4*  
      Creating Token
    5*
      Send to user 

  */
  static handleStudentSignup = async (req, res) => {
    try {
      const { className, rollNo, fullName, password } = req.body;
      // console.log(req.body)
      // console.log(stdId, stdPassword)

      const checkvalidation = checkReciveDataValidations([className, rollNo, fullName, password]);
      console.log(checkvalidation);
      if (!checkvalidation) {
        return sendErrorResponse(res,false,"invilid data","Your data is not valid ",400);
      } 
      else {
        const stdId = `${className}${rollNo}`
        const findStudent = await checkIfValueExistsInCollection(StudentModel,"stdId",stdId);

        //   console.log(findStudent);
        if (findStudent.error)
          return sendErrorResponse(res,false,"Server Error",findStudent.message,500);
        if (findStudent.success)
          return sendErrorResponse(res,false,"dublicate","Student of this id already exists",400);

        if (!findStudent.success) {
          const addingData = await addSingleDocumentToCollection(StudentModel, {stdId, stdPassword:password, className, rollNo, fullName});

          if (addingData.success) {
            const obj = {stdId: addingData.stdId,};
            const token = await generateStudentAccessToken(obj,process.env.STUDENT_ACCESS_TOKEN);

            if (token.error) {
              return sendErrorResponse(res,false,"JWT Error",{token:token},500);
            } else {
              return sendSuccessResponse(res,true,"Student Regiestered Sucessfully",token.token,201);
            }
          }
          if (!addingData.success)
            return sendErrorResponse(res,false,"Server Error",addingData.message,500);
        }
      }
    } catch (error) {
      return sendErrorResponse(res, false, "internal server", error.message, 500)
    }
  };


  static handleStudentSignin = async (req,res) =>{
    try {
      
      // const {}


    } catch (error) {
      return sendErrorResponse(res, false, "internal server", error.message, 500)
    }
  }


}

export default StudentAuthRouteController;

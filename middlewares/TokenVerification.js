import JWT from "jsonwebtoken";
import { checkIfValueExistsInCollection } from "../helpers/dbActions.js";
import StudentModel from "../src/db/models/students/Student.js";

export const verifyStudentToken = async (req, res, next) => {
  const user = {
    asVerify: false,
    message: "",
  };
  try {
    let token;
    // console.log(req.headers)
    if (req.headers["studenttoken"]) {
      token = req.headers["studenttoken"];

      const checkToken = JWT.verify(token, process.env.STUDENT_ACCESS_TOKEN);

      console.log(checkToken)
      const { stdId } = checkToken;
      console.log(stdId)

      // checking if this stdId is exists or not in the db
      const checkExists = await checkIfValueExistsInCollection(
        StudentModel,
        "stdId",
        stdId
      );

    //   console.log(checkExists)

      if (checkExists.success) {
        user.verifyStudentToken = true;
        user.asVerify = true
        user.message = "";
        // return sendSuccessResponse(res, true, "User Authoraize", checkExists.data)
      } else {
        user.verifyStudentToken = false;
        user.asVerify = false
        user.message = "";
      }
    } else {
      user.verifyStudentToken = false;
      user.message = "token not found";
    }

    req.user = user;
    next();
  } catch (error) {
    
    user.verifyStudentToken = false;
    user.message = error.message;
    req.user = user;
    next()
  }
};



export const VerifyAdminToken = async (req,res,next) =>{
  let admin = {
    asVerify: false,
    asAdminToken: false,
    token:"",
    message:"",
    error:false
  }
  try {

    let token;

    if(req.headers["admintoken"]){

      token = req.headers["admintoken"]
      admin.token = token

      // checking if v  alue is exists or not in the databse
      

    }

    else{
      return res.redirect("/appportal/admin/login")
    }



  } catch (error) {
    admin.asVerify = false
    admin.asAdminToken = false
    admin.token = null,
    admin.message = error.message,
    admin.error = true

    req.admindata = admin
    next()
  }
}
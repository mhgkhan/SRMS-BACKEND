import JWT from "jsonwebtoken";
import { checkIfValueExistsInCollection } from "../helpers/dbActions.js";
import StudentModel from "../src/db/models/students/Student.js";
import Admin from "../src/db/models/admin/Admin.js";

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

      console.log(checkToken);
      const { stdId } = checkToken;
      console.log(stdId);

      // checking if this stdId is exists or not in the db
      const checkExists = await checkIfValueExistsInCollection(
        StudentModel,
        "stdId",
        stdId
      );

      //   console.log(checkExists)

      if (checkExists.success) {
        user.verifyStudentToken = true;
        user.asVerify = true;
        user.message = "";
        // return sendSuccessResponse(res, true, "User Authoraize", checkExists.data)
      } else {
        user.verifyStudentToken = false;
        user.asVerify = false;
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
    next();
  }
};

export const VerifyAdminTokenFromApi = async (req, res, next) => {
  console.log("hello")
  let admin = {
    asVerify: false,
    asAdminToken: false,
    token: "",
    message: "",
    error: false,
  };
  try {
    let token;

    if (req.headers["admintoken"]) {
      token = req.headers["admintoken"];
      admin.token = token;

      // verifying the token
      const checkToken = JWT.verify(token, process.env.ADMIN_ACCESS_TOKEN);

      const { email } = checkToken;

      // checking if v  alue is exists or not in the databse
      const checkExists = await checkIfValueExistsInCollection(
        Admin,
        "email",
        email
      );

      if (checkExists.error) {
        admin.asVerify = false;
        admin.asAdminToken = false;
        admintoken.token = token;
        admin.message = checkExists.message;
        admin.error = true;
        req.admindata = admin;
        next();
      } else {
        if (!checkExists.success) {
          admin.asVerify = false;
          admin.asAdminToken = false;
          admintoken.token = token;
          admin.message = "Invilid token";
          admin.error = true;
          req.admindata = admin;
          next();
        } else {
          admin.asVerify = true;
          admin.asAdminToken = true;
          admintoken = token;
          admin.message = "Token verified";
          admin.error = false;
          req.admindata = admin;
          next();
        }
      }
    } else {
      return res.redirect("/appportal/admin/login");
    }
  } catch (error) {
    admin.asVerify = false;
    admin.asAdminToken = false;
    (admin.token = null), (admin.message = error.message), (admin.error = true);
    req.admindata = admin;
    next();
  }
};


export const verifyAccessAdminToken = async (req,res,next) =>{

  let fromMiddleWareData = {
    error:false,
    message:"",
    token:"",
    asVerified:false
  }

  try {
  
    if(req.cookies.ghsrmsadmin){


      const token = req.cookies.ghsrmsadmin;

      // validating token 
      const verifyToken = JWT.verify(token, process.env.ADMIN_ACCESS_TOKEN)

      const {adminId}  = verifyToken;

      // checking if this adminId is exists in the database or not 
      const checkIfAdminExists = await checkIfValueExistsInCollection(Admin, "id", adminId)

      if(checkIfAdminExists.error){
        fromMiddleWareData.error = true
        fromMiddleWareData.message = checkIfAdminExists.message
        fromMiddleWareData.asVerified = false
        req.user = fromMiddleWareData;
        return next()
      }

      else{

        if(!checkIfAdminExists.success){
          return res.redirect("appportal/admin/login")
        }

        else{

          fromMiddleWareData.userId = checkIfAdminExists.data._id
          fromMiddleWareData.userIdFromCookie = adminId
          fromMiddleWareData.asVerified = true
          fromMiddleWareData.token = token
          req.user = fromMiddleWareData
          return next()
        }



      }






    }

    else{
      return res.redirect("/appportal/admin/login")
    }



  } catch (error) {
    console.log(error)
    fromMiddleWareData.error = true
    fromMiddleWareData.message = error.message
    fromMiddleWareData.asVerified = false
    req.user = fromMiddleWareData
    return next()
    // return res.redirect("/appportal/admin/login")
  }
}
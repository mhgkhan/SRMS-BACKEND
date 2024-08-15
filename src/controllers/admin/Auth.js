import { checkIfValueExistsInCollection } from "../../../helpers/dbActions.js";
import JWT from "jsonwebtoken"
import { sendErrorResponse, sendSuccessResponse } from "../../../helpers/UtilityFunctions.js"
import Admin from "../../db/models/admin/Admin.js";


class AuthAdminHandlers {
    static handleLoginAdmin = async (req,res)=>{
        
        try {

            // console.log(req.body)
            // console.log('length is ', req.headers['content-length'])

            const {cnic,password} = req.body;

            if(!cnic || !password || cnic.length<10 || password.length<5){
                return res.status(401).render("login",{
                    title:"Login Page",
                    formError:"Wrong Credientials",
                    isFormErr: true
                })
            }

            else{
                
                // checking if this user is exists or not in the database 

                const checkingCnic = await checkIfValueExistsInCollection(Admin, "cnic", cnic)

                if(checkingCnic.error){
                    return res.status(500).render("login",{
                        title:"Error",
                        formError: checkingCnic.message,
                        isFormErr:true
                    })
                }
                else{

                    if(!checkingCnic.success){
                        return res.status(401).render("login",{
                            title:"Login Page",
                            formError: "Cnic not exists",
                            isFormErr:true
                        })
                    }

                    else{

                        // checking if passwords are the smae or not 
                        if(password == checkingCnic.data.password){
                            
                            const data = {
                                id: checkingCnic.data._id,
                                cnic: checkingCnic.data.cnic
                            }

                            const createToken = JWT.sign(data, process.env.ADMIN_ACCESS_TOKEN)

                            res.cookie('ghsrmsadmin',createToken, { httpOnly: true })

                            // return res.status(200).render("index",{
                            //     title:"ADMIN DASHBOARD || HOME"
                            // })
                            return res.redirect("/appportal/admin/home")
                        }
                        else{
                            // return res.redirect("/appporta/admin/login/")
                            return res.status(401).render("login",{
                                title:"Login Page",
                                formError: "Password does not matched",
                                isFormErr:true
                            })
                        }

                    }


                }


            }



            // return sendSuccessResponse(res, true, "logged success", req.body, 200)


        } catch (error) {
            return sendErrorResponse(res, false, "serverr error", error.message, 500)
        }
    }
}


export default AuthAdminHandlers
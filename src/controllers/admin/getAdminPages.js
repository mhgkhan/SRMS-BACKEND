import { sendErrorResponse } from "../../../helpers/UtilityFunctions.js"

class GetADMINPages {
    static getIndexPage = async (req,res) =>{
        try {

            return res.status(200).render("index",{
                title:"GH SRMS ADMIN PORTAL",
            })
            
        } catch (error) {
            return sendErrorResponse(res, false, "Server Error", error.message, 500)
        }
    } 
    
    
    static getLoginPage = async (req,res) =>{
        try {
            // console.log(req)
            return res.status(200).render("login",{
                title:"Login",
                formError:"",
                isFormErr:false
            })
            
        } catch (error) {
            return sendErrorResponse(res, false, "Server Error", error.message, 500)
        }
    } 


    static getClassesPageHandler = async (req,res) =>{
        try {
            return res.status(200).render("pages/addclasses",{
                title:"Manage Classes And Subjects",
            })
        } catch (error) {
            return sendErrorResponse(res, false, "Server Error", error.message, 500)
        }
    }


    
    static getAllResultPageHandler = async (req,res) =>{
        try {
            return res.status(200).render("pages/allresults",{
                title:"School Student Result",
            })
        } catch (error) {
            return sendErrorResponse(res, false, "Server Error", error.message, 500)
        }
    }

    
    static getDmcPageHandler = async (req,res) =>{
        try {
            return res.status(200).render("pages/dmcs",{
                title:"Student DMC",
            })
        } catch (error) {
            return sendErrorResponse(res, false, "Server Error", error.message, 500)
        }
    }



}


export default GetADMINPages
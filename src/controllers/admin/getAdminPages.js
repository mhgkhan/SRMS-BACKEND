import { sendErrorResponse } from "../../../helpers/UtilityFunctions.js"

class GetADMINPages {
    static getIndexPage = async (req,res) =>{
        try {

            return res.status(200).render("index",{
                title:"GH SRMS ADMIN PORTAL"
            })
            
        } catch (error) {
            return sendErrorResponse(res, false, "Server Error", error.message, 500)
        }
    } 


    static getLoginPage = async (req,res) =>{
        try {

            return res.status(200).render("login",{
                title:"Login"
            })
            
        } catch (error) {
            return sendErrorResponse(res, false, "Server Error", error.message, 500)
        }
    } 
}


export default GetADMINPages
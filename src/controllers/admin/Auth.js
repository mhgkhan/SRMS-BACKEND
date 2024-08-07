import { sendErrorResponse, sendSuccessResponse } from "../../../helpers/UtilityFunctions.js"

class AuthAdminHandlers {
    static handleLoginAdmin = async (req,res)=>{
        try {

            console.log(req.body)
            return sendSuccessResponse(res, true, "logged success", req.body, 200)

        } catch (error) {
            return sendErrorResponse(res, false, "serverr error", error.message, 500)
        }
    }
}


export default AuthAdminHandlers
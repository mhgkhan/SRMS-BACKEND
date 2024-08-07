import { sendErrorResponse, sendSuccessResponse } from "../../../helpers/UtilityFunctions.js"

class AuthAdminHandlers {
    static handleLoginAdmin = async (req,res)=>{
        try {

            console.log(req.body)
            console.log('length is ', req.headers['content-length'])
            return sendSuccessResponse(res, true, "logged success", req.body, 200)

        } catch (error) {
            return sendErrorResponse(res, false, "serverr error", error.message, 500)
        }
    }
}


export default AuthAdminHandlers
import { sendErrorResponse } from "../../../helpers/UtilityFunctions"

class GetADMINPages {
    static getIndexPage = async (req,res) =>{
        try {

            
            
        } catch (error) {
            return sendErrorResponse(res, false, "Server Error", error.message, 500)
        }
    } 
}


export default GetADMINPages
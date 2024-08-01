export const sendSuccessResponse = (res,success,message,data, status) => res.status(status).json({success:success, message, data})
export const sendErrorResponse = (res, success, type, message,status) =>  res.status(status).json({success:success, message})


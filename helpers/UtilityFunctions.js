export const sendSuccessResponse = (res,success,message,data, status) => res.status(status).json({success:success, message, data})
export const sendErrorResponse = (res, success, type, message,status) =>  res.status(status).json({success:success, message, errType:type})

export const checkReciveDataValidations = (arr) => arr.map(ele=> ele.length<2?false:true)

export async function checkIfValueExistsInCollection(collection, field,value) {
    try {
    
        // console.log("runned")

        // console.log(field, value)


        const findData = await collection.findOne({[field]:value});

        // console.log(findData)

        if(findData == null || findData == undefined || findData == NaN) return{
            error:false,
            success:false,
            data:findData
        } 
        else{
            return{
                error:false,
                success:true,
                data:findData


            }
        }

        


    } catch (error) {
        return {
            error:true,
            success:false,
            data: null
        }
    }
}
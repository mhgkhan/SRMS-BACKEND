export async function checkIfValueExistsInCollection(collection, field,value) {
    try {
    
        
        const findData = await collection.findOne({field:value});

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
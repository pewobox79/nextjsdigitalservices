export const getSingleProduct =async (id)=>{
    try{

        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        return await response.json();


    }catch(e){
        console.log("error")
    }

}
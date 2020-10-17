export const get = async ( ) =>{
    try {
        let response = await fetch('https://fakestoreapi.com/products/')
        return await response.json()
    } catch (error) {
        console.log( error )
    }
}
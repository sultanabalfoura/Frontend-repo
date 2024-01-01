
async function getAllProduct(){
    const product =  await fetch('https://fakestoreapi.com/products');
    const data = await product.json();
    // return data;
    console.log(data);
}
getAllProduct();
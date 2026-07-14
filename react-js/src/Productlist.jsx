function ProductList({products}) {
    return (
        <>
            <h1>Product list</h1>  
        <div style={{display:"flex", justifyContent:"space-around", marginBottom:"50px"}} >
            {products.map((product,index) => (
            <div key={index} style={{border:"solid 1px white", width:"250px",padding:"20px", borderRadius:"50px"}}>
                <img src={product.obraz} alt="obraz" />
                <h2>Name: {product.name}</h2>
                <p>Price: {product.price}$</p>
                 <br />
                <button>Buy now</button>
            </div>
            ))}
        </div>
        </>


    );
}
export default ProductList;
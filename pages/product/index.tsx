import Link from "next/link"

function ProductList( { productId = 100 } ) {
    return (
        <>
            <h2>
                <Link legacyBehavior href="/"><a>Home</a></Link>
            </h2>

            <h2>
                <Link legacyBehavior href="/product/1"><a>Product 1</a></Link>
            </h2>

            <h2>
                <Link legacyBehavior href="/product/2"><a>Product 2</a></Link>    
            </h2>

            <h2>
                <Link legacyBehavior href="/product/3" replace><a>Product 3</a></Link>
            </h2>

            <h2>
                <Link legacyBehavior href={`/product/${productId}`}><a>Product {productId}</a></Link>            
            </h2>
        </>
    )
}

export default ProductList
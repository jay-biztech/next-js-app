import { useRouter } from "next/router"

function Product({ product }) {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h2>{product.id} {product.title} {product.price}</h2>
            <p>{product.body}</p>
        </>
    )
}

export default Product

export async function getStaticPaths() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()

    const paths = data.map(product => {
        return {
            params: {
                productId: `${product.id}`
            }
        }
    })


    return {
        paths: [
            {
                params: { productId: '1' },
            },
            {
                params: { productId: '2' },
            },
            {
                params: { productId: '3' },
            },                                    
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { params } = context 
    const response = await fetch(
        `http://localhost:4000/products/${params.productId}`
    )
    const data = await response.json()

    if (! data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            product: data,
        },
    }
}
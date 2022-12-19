import Link from "next/link"
import Router, { useRouter } from "next/router"

function Home() {
  const route = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    route.push('/product')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Link legacyBehavior href='/blog'>
        <a>Blog</a>
      </Link>
      <Link legacyBehavior href='/product'>
        <a>Product</a>
      </Link>
      <Link legacyBehavior href='/users'>
        <a>Users</a>
      </Link>
      <Link legacyBehavior href='/posts'>
        <a>Posts</a>
      </Link>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  )
}

export default Home
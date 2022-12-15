import Link from "next/link"

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link legacyBehavior href='/blog'>
        <a>Blog</a>
      </Link>
      <Link legacyBehavior href='/product'>
        <a>Product</a>
      </Link>
    </div>
  )
}

export default Home
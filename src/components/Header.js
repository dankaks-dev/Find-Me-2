import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-eco-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Find Me
          </Link>
          
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search sustainable products..."
              className="w-full py-2 px-4 rounded-full text-earth-brown-900 focus:outline-none focus:ring-2 focus:ring-eco-green-500"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-eco-green-500 rounded-r-full hover:bg-eco-green-600 transition">
              Search
            </button>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-eco-green-200 transition">Home</Link></li>
              <li><Link href="/products/all" className="hover:text-eco-green-200 transition">Shop</Link></li>
              <li><Link href="#" className="hover:text-eco-green-200 transition">About</Link></li>
              <li><Link href="#" className="hover:text-eco-green-200 transition">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

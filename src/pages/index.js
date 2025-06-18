import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { products } from '../data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 4)
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-eco-green-600 text-white rounded-xl p-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Sustainable Living Made Simple</h1>
            <p className="text-xl mb-6">
              Discover eco-friendly products that help you reduce waste and live more sustainably.
            </p>
            <button className="bg-white text-eco-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-eco-green-100 transition">
              Shop Now
            </button>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <div key={category.slug} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition">
                <Link href={`/products/${category.slug}`} className="font-medium text-eco-green-700">
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </section>
        
        {/* Mission Statement */}
        <section className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            Find Me is dedicated to making green living accessible and appealing by curating the best sustainable, 
            ethically sourced, and environmentally friendly products from trusted partners.
          </p>
          <p>
            Every purchase you make through our affiliate links supports both the planet and our mission to promote 
            responsible consumption - at no additional cost to you.
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

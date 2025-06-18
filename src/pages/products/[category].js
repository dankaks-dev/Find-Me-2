import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Footer'
import { products, categories } from '../../data/products'

export default function CategoryPage() {
  const router = useRouter()
  const { category } = router.query
  
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category)
  
  const currentCategory = categories.find(cat => cat.slug === category) || { name: 'All Products' }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{currentCategory.name}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl">No products found in this category.</p>
            <Link href="/products/all" className="text-eco-green-600 hover:underline mt-2 inline-block">
              Browse all products
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}

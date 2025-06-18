import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { products } from '../../data/products'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  
  const product = products.find(p => p.id === id)
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <p className="text-xl">Product not found.</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6">
              <div className="relative pb-[100%]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 p-6">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-eco-green-100 text-eco-green-800 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-eco-green-700">${product.price}</span>
              </div>
              
              <p className="mb-6 text-earth-brown-700">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Eco Benefits:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Reduces plastic waste</li>
                  <li>Made from sustainable materials</li>
                  <li>Ethically produced</li>
                  <li>Biodegradable or recyclable</li>
                </ul>
              </div>
              
              <a 
                href={product.affiliateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-eco-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-eco-green-700 transition"
              >
                Buy Now on Partner Site
              </a>
              
              <p className="mt-3 text-sm text-earth-brown-500">
                Note: This is an affiliate link. We earn a small commission at no extra cost to you.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

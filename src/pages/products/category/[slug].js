import { useRouter } from 'next/router'
import Header from '../../../components/Header'
import ProductCard from '../../../components/ProductCard'
import { products } from '../../../data/products'

export default function CategoryPage() {
  const router = useRouter()
  const { slug } = router.query
  
  const filteredProducts = slug === 'all' 
    ? products 
    : products.filter(product => product.category === slug)
  
  return (
    <div>
      <Header />
      <h1>{slug} Products</h1>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

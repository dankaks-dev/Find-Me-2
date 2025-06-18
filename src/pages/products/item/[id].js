import { useRouter } from 'next/router'
import Header from '../../../components/Header'
import { products } from '../../../data/products'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find(p => p.id === id)
  
  return (
    <div>
      <Header />
      <h1>{product?.name}</h1>
      <img src={product?.image} alt={product?.name} />
      <p>Price: ${product?.price}</p>
      <a href={product?.affiliateLink}>Buy Now</a>
    </div>
  )
}

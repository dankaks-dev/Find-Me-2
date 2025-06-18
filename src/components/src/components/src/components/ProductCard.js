import Link from 'next/link'

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative pb-[100%]">
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {product.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-eco-green-100 text-eco-green-800 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="font-bold text-eco-green-700">${product.price}</span>
            <button className="bg-eco-green-600 text-white px-3 py-1 rounded hover:bg-eco-green-700 transition">
              View Deal
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard

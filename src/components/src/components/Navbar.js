import Link from 'next/link'

const Navbar = () => {
  const categories = [
    { name: 'Zero-Waste', slug: 'zero-waste' },
    { name: 'Natural Care', slug: 'natural-care' },
    { name: 'Ethical Fashion', slug: 'ethical-fashion' },
    { name: 'Sustainable Home', slug: 'sustainable-home' },
    { name: 'Plastic-Free', slug: 'plastic-free' },
  ]

  return (
    <nav className="bg-eco-green-800 text-white shadow-sm">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-8 py-3 overflow-x-auto">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link 
                href={`/products/${category.slug}`}
                className="whitespace-nowrap hover:text-eco-green-200 transition"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

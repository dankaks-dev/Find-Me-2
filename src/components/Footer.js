const Footer = () => {
  return (
    <footer className="bg-earth-brown-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Find Me</h3>
            <p className="text-earth-brown-300">
              Your destination for sustainable, ethically sourced, and environmentally friendly products.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-earth-brown-300 hover:text-white transition">All Products</a></li>
              <li><a href="#" className="text-earth-brown-300 hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="text-earth-brown-300 hover:text-white transition">Best Sellers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-earth-brown-300 hover:text-white transition">Our Mission</a></li>
              <li><a href="#" className="text-earth-brown-300 hover:text-white transition">Sustainability</a></li>
              <li><a href="#" className="text-earth-brown-300 hover:text-white transition">Affiliate Program</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-earth-brown-300 hover:text-white transition">Support</a></li>
              <li><a href="#" className="text-earth-brown-300 hover:text-white transition">Partnerships</a></li>
              <li><a href="#" className="text-earth-brown-300 hover:text-white transition">Social Media</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-earth-brown-700 mt-8 pt-6 text-center text-earth-brown-400">
          <p>© {new Date().getFullYear()} Find Me. All rights reserved.</p>
          <p className="mt-2 text-sm">Making green living accessible and appealing.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

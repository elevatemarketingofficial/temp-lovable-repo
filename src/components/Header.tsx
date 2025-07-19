import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Desktop Header */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/wp-content/uploads/2022/10/cvh-logo.svg" 
                alt="Choice Valley Homes" 
                className="h-16 w-auto"
              />
            </Link>
            
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary transition-colors flex items-center">
                  Homes
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link to="/homes/oceanside" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Oceanside</Link>
                    <Link to="/homes/skyview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Skyview</Link>
                    <Link to="/homes/skyview-ii" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Skyview II</Link>
                    <Link to="/homes/windridge" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Windridge</Link>
                    <Link to="/homes/mountain-top" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mountain Top</Link>
                    <Link to="/homes/mountain-top-ii" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mountain Top II</Link>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/community" className="text-gray-700 hover:text-primary transition-colors">
                Community
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <a 
              href="/listings/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 15 15" fill="currentColor">
                <path d="M13.5 4.1L8.8.4C8.4.1 8 0 7.5 0s-.9.1-1.3.4L1.5 4.1C.8 4.7.4 5.6.4 6.5v7.1c0 .8.6 1.4 1.4 1.4H13.2c.8 0 1.4-.6 1.4-1.4V6.5c0-.9-.4-1.8-1.1-2.4zM9 13.5H6V7.7c0-.4.3-.7.6-.7h1.7c.4 0 .7.3.7.7v5.8zm4.1-.2c0 .1-.1.2-.2.2h-2.4V7.7c0-1.2-1-2.1-2.1-2.1H6.6c-1.2 0-2.1 1-2.1 2.1v5.8H2.1c-.1 0-.2-.1-.2-.2V6.5c0-.5.2-1 .6-1.3L7 1.7c.2-.1.3-.2.5-.2s.4.1.5.2l4.4 3.5c.4.3.6.8.6 1.3v6.8z"/>
              </svg>
              View Listings
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/wp-content/uploads/2022/10/cvh-logo.svg" 
              alt="Choice Valley Homes" 
              className="h-12 w-auto"
            />
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="px-4 py-4 space-y-3">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/homes" 
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Homes
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/community" 
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t">
                <a 
                  href="/listings/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 15 15" fill="currentColor">
                    <path d="M13.5 4.1L8.8.4C8.4.1 8 0 7.5 0s-.9.1-1.3.4L1.5 4.1C.8 4.7.4 5.6.4 6.5v7.1c0 .8.6 1.4 1.4 1.4H13.2c.8 0 1.4-.6 1.4-1.4V6.5c0-.9-.4-1.8-1.1-2.4zM9 13.5H6V7.7c0-.4.3-.7.6-.7h1.7c.4 0 .7.3.7.7v5.8zm4.1-.2c0 .1-.1.2-.2.2h-2.4V7.7c0-1.2-1-2.1-2.1-2.1H6.6c-1.2 0-2.1 1-2.1 2.1v5.8H2.1c-.1 0-.2-.1-.2-.2V6.5c0-.5.2-1 .6-1.3L7 1.7c.2-.1.3-.2.5-.2s.4.1.5.2l4.4 3.5c.4.3.6.8.6 1.3v6.8z"/>
                  </svg>
                  View Listings
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
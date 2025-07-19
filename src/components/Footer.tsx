import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center space-y-6">
          <img 
            src="/wp-content/uploads/2022/10/cvh-logo.svg" 
            alt="Choice Valley Homes" 
            className="h-16 w-auto mx-auto filter brightness-0 invert"
          />
          
          <p className="text-gray-300 text-lg">
            Building communities throughout the Central Valley
          </p>
          
          <div className="space-y-2">
            <p className="text-gray-300">
              For More Information about PASEO, Please Call or Text
            </p>
            <div className="space-y-1">
              <p className="text-white font-medium">Stephanie Stine</p>
              <p className="text-gray-300">Community Sales Manager</p>
              <p className="text-gray-300">209-308-9000</p>
              <p className="text-gray-300">DRE# 02189834</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-white font-medium">Hours</p>
            <div className="text-gray-300 space-y-1">
              <p>Monday – Closed</p>
              <p>Tuesday – Saturday 10am – 5pm</p>
              <p>Sunday – 11am – 4pm</p>
            </div>
          </div>
          
          <p className="text-gray-300">
            154 Montage Drive, Merced, CA 95348
          </p>
          
          <div className="flex justify-center items-center space-x-6">
            <a 
              href="tel:209-308-9000" 
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              209-308-9000
            </a>
            <a 
              href="/contact" 
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
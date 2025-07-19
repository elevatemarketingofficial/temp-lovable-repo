import { Link } from 'react-router-dom'

const homeModels = [
  {
    name: 'Oceanside',
    sqft: '1,691',
    beds: '4',
    baths: '2 1/2',
    slug: 'oceanside',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  },
  {
    name: 'Skyview',
    sqft: '1,724',
    beds: '4',
    baths: '2 1/2',
    slug: 'skyview',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  },
  {
    name: 'Skyview II',
    sqft: '1,724',
    beds: '4',
    baths: '2 1/2',
    slug: 'skyview-ii',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  },
  {
    name: 'Windridge',
    sqft: '1,791',
    beds: '5',
    baths: '2 1/2',
    slug: 'windridge',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  },
  {
    name: 'Mountain Top',
    sqft: '1,874',
    beds: '4',
    baths: '2 1/2',
    slug: 'mountain-top',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  },
  {
    name: 'Mountain Top II',
    sqft: '1,874',
    beds: '4',
    baths: '2 1/2',
    slug: 'mountain-top-ii',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  }
]

export default function Homes() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">YOUR HOME CHOICES</h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
            Discover the perfect home design to fit your family's lifestyle and needs.
          </p>
        </div>
      </section>

      {/* Home Models Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeModels.map((home) => (
              <div key={home.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={home.image}
                    alt={home.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{home.name}</h3>
                  
                  <div className="space-y-2 text-gray-600 mb-6">
                    <p className="text-lg font-medium">{home.sqft} Sq. Ft.</p>
                    <p>{home.beds} Bed, {home.baths} Bath</p>
                  </div>
                  
                  <Link
                    to={`/homes/${home.slug}`}
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium w-full justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help you explore our available homes and find the one that's perfect for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Contact Us Today
            </Link>
            <a
              href="/listings/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors font-medium"
            >
              View Available Listings
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
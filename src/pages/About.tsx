export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-lg mb-4 text-primary-foreground/80">Discover Your Future</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">ABOUT PASEO</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/wp-content/uploads/2022/11/95348_3_Elevation-A_i.01_28-Photo.jpg"
                alt="Paseo Community"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Welcome to Paseo
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Paseo collection consists of 142 homes that offers a variety of designs to satisfy today's lifestyle. These two-story, single-family homes have an open floor plan with modern amenities and thoughtful details throughout.
                </p>
                
                <p>
                  Located in the heart of Merced, California, our community provides easy access to shopping, dining, parks, and excellent schools. Each home is designed with quality craftsmanship and energy-efficient features to provide comfort and value for years to come.
                </p>
                
                <p>
                  From spacious family rooms to gourmet kitchens, every detail has been carefully considered to create homes that truly serve as the foundation for your family's future memories.
                </p>
              </div>
              
              <div className="pt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Learn More About Our Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Community Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the amenities and features that make Paseo the perfect place to call home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Construction</h3>
              <p className="text-gray-600">Built with premium materials and superior craftsmanship for lasting quality.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Location</h3>
              <p className="text-gray-600">Conveniently located with easy access to schools, shopping, and recreation.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Efficient</h3>
              <p className="text-gray-600">Modern energy-efficient features help reduce utility costs and environmental impact.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
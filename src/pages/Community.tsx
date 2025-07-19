export default function Community() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">COMMUNITY</h1>
          <p className="text-xl lg:text-2xl text-accent-foreground/80 max-w-3xl mx-auto">
            More than just homes - we're building a vibrant community where families thrive.
          </p>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Life at Paseo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of modern convenience and community spirit in Merced's premier neighborhood.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/wp-content/uploads/2022/11/Neighborhood_Map_Render-scaled.jpg"
                alt="Community Map"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Thoughtfully Planned Community
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Paseo is designed with families in mind, featuring wide tree-lined streets, 
                  beautiful landscaping, and plenty of open spaces for children to play and 
                  families to gather.
                </p>
                
                <p>
                  Our community amenities include parks, walking trails, and recreational 
                  areas that encourage an active, healthy lifestyle while fostering 
                  connections between neighbors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Community Amenities
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center min-h-[250px] flex flex-col justify-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Parks & Recreation</h3>
              <p className="text-gray-600">Beautiful parks and recreational areas for family fun and outdoor activities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center min-h-[250px] flex flex-col justify-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Walking Trails</h3>
              <p className="text-gray-600">Miles of scenic walking trails perfect for morning jogs or evening strolls.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center min-h-[250px] flex flex-col justify-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellent Schools</h3>
              <p className="text-gray-600">Access to top-rated schools in the Merced City School District.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center min-h-[250px] flex flex-col justify-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Shopping & Dining</h3>
              <p className="text-gray-600">Convenient access to shopping centers, restaurants, and entertainment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Merced, California, with easy access to everything you need.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Visit Our Sales Center</h3>
              <p className="text-lg text-gray-700">154 Montage Drive, Merced, CA 95348</p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Sales Hours</h4>
                  <div className="text-gray-700 space-y-1">
                    <p>Monday – Closed</p>
                    <p>Tuesday – Saturday: 10am – 5pm</p>
                    <p>Sunday: 11am – 4pm</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <div className="text-gray-700 space-y-1">
                    <p>Stephanie Stine</p>
                    <p>Community Sales Manager</p>
                    <p>209-308-9000</p>
                    <p>DRE# 02189834</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
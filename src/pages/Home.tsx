const homeModels = [
  {
    name: 'Oceanside',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  },
  {
    name: 'Skyview',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  },
  {
    name: 'Windridge',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  },
  {
    name: 'Mountain Top',
    image: '/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg'
  }
]

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/lovable-uploads/dfb35a0a-c396-4426-971d-988a0e40e8fa.png')`
        }}
      >
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-bold tracking-wider">
              CHOICE VALLEY <span className="block">HOMES</span>
            </h1>
            <p className="text-2xl lg:text-4xl font-script italic">
              Presents
            </p>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-widest">
              PASEO
            </h2>
          </div>
        </div>
      </section>

      {/* Home Models Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {homeModels.map((home, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={home.image}
                    alt={home.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{home.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Get Started Today
                </h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      How can we help you?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-orange-400 text-white py-3 px-6 rounded-md hover:bg-orange-500 transition-colors font-medium"
                  >
                    Submit
                  </button>
                </form>
              </div>
              
              <div className="bg-gray-200 p-8 flex items-center justify-center">
                <img
                  src="/wp-content/uploads/2022/11/AdobeStock_275971688-1024x1024.jpeg"
                  alt="Beautiful home"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
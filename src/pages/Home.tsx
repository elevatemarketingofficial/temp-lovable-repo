export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section 
        className="relative min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.91) 0%, rgba(0,0,0,0.57) 100%), url('/wp-content/uploads/2022/11/Neighborhood_Map_Render-scaled.jpg')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6">
              PASEO
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed">
              Discover your dream home in the heart of Merced's newest community. 
              Modern designs, quality craftsmanship, and thoughtful amenities await.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      required
                      className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      By pressing the Submit button, I agree to Choice Valley contacting me by email and/or phone to share home availability information or related opportunities. I also understand that any information I've shared in this form is subject to Choice Valley Homes' Privacy Policy.
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-medium"
                  >
                    Submit
                  </button>
                </form>
              </div>
              
              <div className="bg-gray-100 p-8 flex items-center justify-center">
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
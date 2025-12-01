export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-400">Iqra Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for fiber optic solutions and reliable internet connectivity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4 text-blue-600">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide reliable fiber optic infrastructure and internet connectivity solutions 
                for our local community. We are committed to delivering quality service, dependable 
                connections, and personalized support to every customer.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4 text-purple-600">👁️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted provider of fiber optic solutions in our community, 
                known for our personal service, competitive pricing, and reliable connections. 
                We believe everyone deserves access to fast, dependable internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-blue-100">Skilled Workers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Customer Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-blue-100">Network Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-blue-600">⚡</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service delivery, 
                from installation to ongoing support.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-green-600">🤝</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honesty and transparency in all our interactions, building trust 
                with our customers and partners.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-purple-600">💡</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously evolving our technology and services to meet the 
                changing needs of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expert Team
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our dedicated team is committed to providing quality 
              fiber optic solutions and personalized customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-4xl mb-4">👨‍💼</div>
                <h3 className="text-xl font-bold mb-2">Engineering Excellence</h3>
                <p className="text-blue-800">
                  Skilled fiber optic technicians with expertise 
                  in network design and implementation.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-4xl mb-4">👩‍💻</div>
                <h3 className="text-xl font-bold mb-2">Technical Support</h3>
                <p className="text-blue-800">
                  Responsive technical support team ready to assist with 
                  connectivity issues and answer your questions.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold mb-2">Installation Experts</h3>
                <p className="text-blue-800">
                  Professional installation technicians ensuring seamless setup 
                  and optimal performance of your fiber optic connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Iqra Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-lg p-6 mb-4">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-semibold">Quality Service</h4>
              </div>
              <p className="text-gray-600 text-sm">Focused expertise in fiber optic technology</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-lg p-6 mb-4">
                <div className="text-3xl mb-2">⏱️</div>
                <h4 className="font-semibold">Quick Installation</h4>
              </div>
              <p className="text-gray-600 text-sm">Fast and professional setup services</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-lg p-6 mb-4">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold">Competitive Pricing</h4>
              </div>
              <p className="text-gray-600 text-sm">Affordable plans for every budget</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-lg p-6 mb-4">
                <div className="text-3xl mb-2">🎧</div>
                <h4 className="font-semibold">24/7 Support</h4>
              </div>
              <p className="text-gray-600 text-sm">Round-the-clock customer assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
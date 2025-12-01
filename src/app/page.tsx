import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ultra-Fast <span className="text-blue-400">Fiber Optic</span> Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Experience lightning-speed internet with our cutting-edge FTTH networks and 
                fiber optic infrastructure. Connecting your world with unlimited possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-xl p-8 shadow-2xl">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-2">99.9% Uptime</h3>
                <p className="text-blue-100">Reliable connectivity you can trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Iqra Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in fiber optic technology and internet connectivity solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-blue-600">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Ultra-High Speed</h3>
              <p className="text-gray-600">
                Experience blazing-fast internet speeds up to 1 Gbps with our advanced fiber optic network infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-green-600">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Secure & Reliable</h3>
              <p className="text-gray-600">
                Our fiber optic cables provide enhanced security and reliability compared to traditional copper networks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-purple-600">📡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">FTTH Networks</h3>
              <p className="text-gray-600">
                Fiber-to-the-Home connectivity bringing high-speed internet directly to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive connectivity solutions for residential and commercial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="text-2xl text-blue-600">🌐</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Unlimited Internet</h3>
                    <p className="text-gray-600">High-speed, unlimited internet plans with no data caps or throttling.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <div className="text-2xl text-green-600">📺</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Set-Top Boxes</h3>
                    <p className="text-gray-600">Modern digital set-top boxes with HD/4K streaming capabilities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <div className="text-2xl text-purple-600">🔧</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Network Solutions</h3>
                    <p className="text-gray-600">Custom network infrastructure design and implementation services.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of satisfied customers enjoying ultra-fast, reliable internet connectivity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full w-2 h-2"></div>
                  <span>Free installation & setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full w-2 h-2"></div>
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 rounded-full w-2 h-2"></div>
                  <span>Competitive pricing</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white relative">
        <Image
          src="/images/fiber-opticz.jpg"
          alt="Fiber Optic Background"
          fill
          className="absolute inset-0 object-cover"
          priority={false}
        />
        <div className="absolute inset-0 z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            Experience the Future of Connectivity
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Upgrade to fiber optic internet today and enjoy unparalleled speed, reliability, and performance.
          </p>
          <Link
            href="/services"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
}

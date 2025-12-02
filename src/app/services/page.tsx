'use client';
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../components/CartContext";
import { useState } from "react";

export default function Services() {
  const { addItem } = useCart();
  const [addedItems, setAddedItems] = useState<{ [key: number]: boolean }>({});

  const handleAddToCart = (item: { id: number; name: string; price: number; image: string }) => {
    addItem(item);
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 2000);
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive fiber optic and connectivity solutions tailored to meet your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Fiber Optic Installation */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-lg p-3 mr-4">
                  <div className="text-2xl">🔗</div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Fiber Optic Cable Installation</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional installation of high-quality fiber optic cables for residential and commercial properties. 
                Our certified technicians ensure optimal performance and reliability.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Single-mode and multi-mode fiber options
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Underground and aerial installations
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Testing and certification included
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Maintenance and repair services
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* FTTH Networks */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 text-white rounded-lg p-3 mr-4">
                  <div className="text-2xl">🏠</div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">FTTH Network Solutions</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fiber-to-the-Home network design and implementation bringing ultra-high-speed internet 
                directly to your doorstep with unmatched reliability.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Network planning and design
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  PON (Passive Optical Network) systems
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Splicing and termination services
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Network monitoring and management
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Internet Plans Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              High-Speed Internet Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your connectivity needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">50 Mbps</div>
              <div className="text-2xl font-bold text-gray-800 mb-4">₹1,500<span className="text-sm font-normal text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Perfect for browsing, email, and light streaming</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Unlimited data usage
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Free modem/router
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  24/7 customer support
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  No long-term contracts
                </li>
              </ul>
              <div className="space-y-3">
                <button
                  onClick={() => handleAddToCart({ id: 1, name: "Basic Plan - 50 Mbps", price: 1500, image: "/images/internet-basic.jpg" })}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    addedItems[1] 
                      ? 'bg-green-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {addedItems[1] ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
                <Link
                  href="/contact"
                  className="block bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">200 Mbps</div>
              <div className="text-2xl font-bold text-gray-800 mb-4">₹2,500<span className="text-sm font-normal text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Ideal for families and multiple devices</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Unlimited data usage
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Free advanced modem/router
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Priority customer support
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Free security suite
                </li>
              </ul>
              <div className="space-y-3">
                <button
                  onClick={() => handleAddToCart({ id: 2, name: "Premium Plan - 200 Mbps", price: 2500, image: "/images/internet-premium.jpg" })}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    addedItems[2] 
                      ? 'bg-green-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {addedItems[2] ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
                <Link
                  href="/contact"
                  className="block bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2">1 Gbps</div>
              <div className="text-2xl font-bold text-gray-800 mb-4">₹5,000<span className="text-sm font-normal text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Maximum speed for businesses and power users</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Unlimited data usage
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Enterprise-grade equipment
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  Dedicated account manager
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-500 rounded-full w-2 h-2 mr-3"></div>
                  SLA guarantee
                </li>
              </ul>
              <div className="space-y-3">
                <button
                  onClick={() => handleAddToCart({ id: 3, name: "Enterprise Plan - 1 Gbps", price: 5000, image: "/images/internet-enterprise.jpg" })}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    addedItems[3] 
                      ? 'bg-green-600 text-white' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {addedItems[3] ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
                <Link
                  href="/contact"
                  className="block bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete connectivity solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Set-Top Boxes */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-blue-600">📺</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Set-Top Box HD</h3>
              <div className="text-lg font-bold text-gray-800 mb-2">₹3,500</div>
              <p className="text-gray-600 mb-4">
                Modern digital set-top boxes with HD/4K streaming, recording capabilities, and smart TV features.
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => handleAddToCart({ id: 4, name: "Set-Top Box HD", price: 3500, image: "/images/set-top-box.jpg" })}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    addedItems[4] 
                      ? 'bg-green-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {addedItems[4] ? '✓ Added' : 'Add to Cart'}
                </button>
                <Link
                  href="/contact"
                  className="block text-blue-600 hover:text-blue-800 font-semibold text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Fiber Installation */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-green-600">🔗</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fiber Installation</h3>
              <div className="text-lg font-bold text-gray-800 mb-2">₹15,000</div>
              <p className="text-gray-600 mb-4">
                Professional fiber optic cable installation for residential properties with testing and certification.
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => handleAddToCart({ id: 5, name: "Fiber Optic Installation - Residential", price: 15000, image: "/images/fiber-installation.jpg" })}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    addedItems[5] 
                      ? 'bg-green-600 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {addedItems[5] ? '✓ Added' : 'Add to Cart'}
                </button>
                <Link
                  href="/contact"
                  className="block text-green-600 hover:text-green-800 font-semibold text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Technical Support */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-purple-600">🛠️</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tech Support Plan</h3>
              <div className="text-lg font-bold text-gray-800 mb-2">₹1,200<span className="text-sm font-normal text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-4">
                24/7 technical support and maintenance services to keep your connection running smoothly.
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => handleAddToCart({ id: 6, name: "Technical Support Plan", price: 1200, image: "/images/tech-support.jpg" })}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    addedItems[6] 
                      ? 'bg-green-600 text-white' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {addedItems[6] ? '✓ Added' : 'Add to Cart'}
                </button>
                <Link
                  href="/contact"
                  className="block text-purple-600 hover:text-purple-800 font-semibold text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Consultation */}
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-orange-600">💼</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Network Consultation</h3>
              <div className="text-lg font-bold text-gray-800 mb-2">₹5,000</div>
              <p className="text-gray-600 mb-4">
                Expert consultation services to help you choose the right connectivity solutions for your needs.
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => handleAddToCart({ id: 7, name: "Network Consultation", price: 5000, image: "/images/consultation.jpg" })}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    addedItems[7] 
                      ? 'bg-green-600 text-white' 
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}
                >
                  {addedItems[7] ? '✓ Added' : 'Add to Cart'}
                </button>
                <Link
                  href="/contact"
                  className="block text-orange-600 hover:text-orange-800 font-semibold text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Enterprise & Business Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Scalable fiber optic solutions designed specifically for businesses, 
                from small offices to large enterprises. We understand that your business 
                depends on reliable, high-speed connectivity.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-500 rounded-full w-2 h-2 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Dedicated Fiber Lines</h4>
                    <p className="text-gray-600">Exclusive fiber connections with guaranteed bandwidth</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-500 rounded-full w-2 h-2 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Redundant Connections</h4>
                    <p className="text-gray-600">Backup connections to ensure zero downtime</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-purple-500 rounded-full w-2 h-2 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Custom Solutions</h4>
                    <p className="text-gray-600">Tailored connectivity solutions for your specific needs</p>
                  </div>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Request Business Quote
              </Link>
            </div>
            <div className="bg-linear-to-br from-blue-100 to-purple-100 rounded-xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Trusted by Businesses</h3>
                <p className="text-gray-600 mb-6">
                  Join hundreds of businesses that rely on our fiber optic infrastructure 
                  for their critical operations.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <p className="text-sm text-gray-600">Uptime SLA</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">4 hrs</div>
                    <p className="text-sm text-gray-600">Response Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white relative">
        <Image
          src="/images/fiber-op2.jpg"
          alt="Fiber Optic Background"
          fill
          className="absolute inset-0 object-cover"
          priority={false}
        />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Ready to Upgrade Your Connectivity?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7)' }}>
            Contact us today to learn more about our services and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:+1234567890"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
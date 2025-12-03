export default function Contact() {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience ultra-fast fiber optic internet? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get a Free Quote
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours 
                with a customized solution for your connectivity needs.
              </p>
              
              <form action="https://getform.io/f/aqoegxda" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="fiber-installation">Fiber Optic Installation</option>
                      <option value="ftth">FTTH Network</option>
                      <option value="internet-basic">Basic Internet (50 Mbps)</option>
                      <option value="internet-premium">Premium Internet (200 Mbps)</option>
                      <option value="internet-enterprise">Enterprise Internet (1 Gbps)</option>
                      <option value="set-top-box">Set-Top Boxes</option>
                      <option value="business-solutions">Business Solutions</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us about your connectivity needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our services? Our expert team is here to help you 
                find the perfect connectivity solution.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="text-xl text-blue-600">📞</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 90671 19270</p>
                    <p className="text-sm text-gray-500">Mon-Fri 8AM-8PM, Sat 9AM-5PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <div className="text-xl text-green-600">✉️</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@iqrasolutions.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <div className="text-xl text-purple-600">📍</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office</h3>
                    <p className="text-gray-600">123 Technology Drive<br />Innovation City, IC 12345</p>
                    <p className="text-sm text-gray-500">Visit by appointment</p>
                  </div>
                </div>

                {/* Emergency Support */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <div className="text-xl text-red-600">🚨</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Emergency Support</h3>
                    <p className="text-gray-600">+91 90671 19270</p>
                    <p className="text-sm text-gray-500">24/7 technical emergency line</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                How long does installation take?
              </h3>
              <p className="text-gray-600">
                Typical residential installations take 2-4 hours. Business installations 
                may take longer depending on complexity. We&apos;ll provide a detailed timeline 
                during consultation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Is there a contract requirement?
              </h3>
              <p className="text-gray-600">
                We offer both contract and month-to-month options. Contract plans 
                typically offer better pricing, while month-to-month provides flexibility.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                What equipment is included?
              </h3>
              <p className="text-gray-600">
                All plans include a high-quality modem/router. Premium and Enterprise 
                plans include advanced networking equipment and additional features.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Do you offer technical support?
              </h3>
              <p className="text-gray-600">
                Yes! We provide 24/7 technical support via phone, email, and live chat. 
                Premium customers get priority support with faster response times.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                What makes fiber optic better?
              </h3>
              <p className="text-gray-600">
                Fiber optic provides faster speeds, lower latency, better reliability, 
                and is less susceptible to weather and interference compared to traditional cables.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade your plan at any time. Downgrades may have 
                restrictions depending on your current contract terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Connected?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying ultra-fast, reliable fiber optic internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919067119270"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call Now: +91 90671 19270
            </a>
            <a
              href="mailto:info@iqrasolutions.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
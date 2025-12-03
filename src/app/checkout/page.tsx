'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '../../components/CartContext';

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  handler: (response: RazorpayResponse) => void;
  modal: {
    ondismiss: () => void;
  };
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

export default function Checkout() {
  const { items: cartItems, updateQuantity: updateCartQuantity, removeItem: removeCartItem, isLoaded } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });
  const [loading, setLoading] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Reset loading state if component unmounts or errors occur
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const handleProceedToPayment = () => {
    // Prepare order data for payment page
    const orderParams = new URLSearchParams({
      total: total.toString(),
      customer: encodeURIComponent(JSON.stringify(customerInfo)),
      items: cartItems.length.toString()
    });
    
    // Navigate to payment methods page
    window.location.href = `/payment?${orderParams.toString()}`;
  };

  const isFormValid = customerInfo.name && customerInfo.email && customerInfo.phone && 
                     customerInfo.address && customerInfo.city && customerInfo.pincode;

  // Show loading state while cart is being loaded from localStorage
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <h1 className="text-2xl font-semibold text-gray-900">Loading your cart...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shopping Cart</h1>
          <p className="text-gray-600">{cartItems.length > 0 ? 'Review your items and complete your order' : 'Your cart is empty. Add some services to get started!'}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some services to get started</p>
              </div>
            ) : (
              <>
                <div className="space-y-6 mb-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 border-b border-gray-200 pb-6">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📡</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">₹{item.price.toLocaleString('en-IN')}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button 
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeCartItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>GST (18%)</span>
                    <span>₹{tax.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 border-t border-gray-200 pt-3">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Customer Information & Payment */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {cartItems.length > 0 ? 'Customer Information' : 'Add Items to Continue'}
            </h2>
            
            {cartItems.length === 0 && (
              <div className="text-center py-8 mb-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-4">Browse our services and add items to your cart to proceed with checkout.</p>
                <Link 
                  href="/services" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Browse Services
                </Link>
              </div>
            )}
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    disabled={cartItems.length === 0}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      cartItems.length === 0 ? 'bg-gray-100 cursor-not-allowed' : ''
                    }`}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    disabled={cartItems.length === 0}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      cartItems.length === 0 ? 'bg-gray-100 cursor-not-allowed' : ''
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  disabled={cartItems.length === 0}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    cartItems.length === 0 ? 'bg-gray-100 cursor-not-allowed' : ''
                  }`}
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  disabled={cartItems.length === 0}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    cartItems.length === 0 ? 'bg-gray-100 cursor-not-allowed' : ''
                  }`}
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    disabled={cartItems.length === 0}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      cartItems.length === 0 ? 'bg-gray-100 cursor-not-allowed' : ''
                    }`}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={customerInfo.pincode}
                    onChange={handleInputChange}
                    disabled={cartItems.length === 0}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      cartItems.length === 0 ? 'bg-gray-100 cursor-not-allowed' : ''
                    }`}
                    required
                  />
                </div>
              </div>
            </form>

            {/* Payment Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment</h3>

              <div className="space-y-3">
                <button
                  onClick={handleProceedToPayment}
                  disabled={!isFormValid || cartItems.length === 0 || loading}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    isFormValid && cartItems.length > 0 && !loading
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {cartItems.length === 0 ? (
                    'Add Items to Cart'
                  ) : (
                    `Proceed to Payment ₹${total.toLocaleString('en-IN')}`
                  )}
                </button>
                
                {loading && (
                  <button
                    onClick={() => {
                      setLoading(false);
                      console.log('Payment process manually cancelled by user');
                    }}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm"
                  >
                    Cancel Payment
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
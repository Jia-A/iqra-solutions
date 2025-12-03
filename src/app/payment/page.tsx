'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  type: 'card' | 'upi' | 'netbanking' | 'wallet' | 'cod';
  description: string;
  offer?: string;
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

interface OrderInfo {
  total: number;
  itemCount: number;
}

const paymentMethods: PaymentMethod[] = [
  // UPI - Most preferred
  { id: 'upi', name: 'UPI', icon: '📱', type: 'upi', description: 'Pay by any UPI app', offer: 'Get 1% cashback upto ₹100' },
  
  // Wallets
  { id: 'paytm', name: 'Paytm', icon: '📱', type: 'wallet', description: 'Paytm Wallet/UPI/Postpaid', offer: 'Get ₹50 cashback' },
  { id: 'phonepe', name: 'PhonePe', icon: '📱', type: 'wallet', description: 'PhonePe Wallet/UPI' },
  { id: 'amazonpay', name: 'Amazon Pay', icon: '📱', type: 'wallet', description: 'Amazon Pay Balance/UPI' },
  { id: 'gpay', name: 'Google Pay', icon: '📱', type: 'wallet', description: 'Google Pay' },
  
  // Cards
  { id: 'cards', name: 'Credit/Debit/ATM Card', icon: '💳', type: 'card', description: 'Visa, Mastercard, RuPay & more', offer: 'Get 5% back with Amazon Pay ICICI card' },
  
  // Net Banking
  { id: 'netbanking', name: 'Net Banking', icon: '🏦', type: 'netbanking', description: 'All major banks supported' },
  
  // Cash on Delivery
  { id: 'cod', name: 'Cash on Delivery', icon: '💵', type: 'cod', description: 'Pay when service is delivered' }
];

function PaymentMethodsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [processing, setProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardholderName: ''
  });

  // Initialize from URL params
  useEffect(() => {
    const initializeOrderData = async () => {
      const total = searchParams.get('total');
      const customer = searchParams.get('customer');
      const items = searchParams.get('items');
      
      if (total && customer && items) {
        try {
          const parsedCustomer = JSON.parse(decodeURIComponent(customer));
          const orderData = {
            total: parseFloat(total),
            itemCount: parseInt(items)
          };
          
          setCustomerInfo(parsedCustomer);
          setOrderInfo(orderData);
        } catch (error) {
          console.error('Error parsing order data:', error);
          router.push('/checkout');
        }
      } else {
        router.push('/checkout');
      }
    };
    
    initializeOrderData();
  }, [searchParams, router]);

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
      if (formatted.length <= 19) { // Max 16 digits + 3 spaces
        setCardDetails(prev => ({ ...prev, [name]: formatted }));
      }
    }
    // Format CVV (max 4 digits)
    else if (name === 'cvv') {
      if (value.length <= 4 && /^\d*$/.test(value)) {
        setCardDetails(prev => ({ ...prev, [name]: value }));
      }
    }
    // Format cardholder name (letters and spaces only)
    else if (name === 'cardholderName') {
      if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 50) {
        setCardDetails(prev => ({ ...prev, [name]: value.toUpperCase() }));
      }
    }
    else {
      setCardDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const isCardFormValid = () => {
    if (selectedMethod !== 'cards') return true;
    return cardDetails.cardNumber.replace(/\s/g, '').length === 16 &&
           cardDetails.expiryMonth &&
           cardDetails.expiryYear &&
           cardDetails.cvv.length >= 3 &&
           cardDetails.cardholderName.trim().length >= 2;
  };

  const processPayment = () => {
    if (!selectedMethod) {
      alert('Please select a payment method');
      return;
    }

    setProcessing(true);
    const method = paymentMethods.find(m => m.id === selectedMethod);

    // Simulate payment processing
    setTimeout(() => {
      const isSuccess = Math.random() > 0.05; // 95% success rate
      
      if (isSuccess) {
        // Success - show confirmation and redirect
        let successMessage = `✅ Payment Successful!\n\n` +
          `Method: ${method?.name}\n` +
          `Amount: ₹${orderInfo?.total.toLocaleString('en-IN')}\n` +
          `Customer: ${customerInfo?.name}\n` +
          `Transaction ID: ${method?.id.toUpperCase()}_${Date.now()}\n`;
        
        // Add card details if card payment
        if (selectedMethod === 'cards') {
          successMessage += `Card: **** **** **** ${cardDetails.cardNumber.slice(-4)}\n`;
        }
        
        successMessage += `\n🎉 Thank you for choosing Iqra Solutions!\n\n`
        
        alert(successMessage);
        
        // Redirect to success page or back to home
        setTimeout(() => {
          router.push('/?payment=success');
        }, 1000);
      } else {
        // Failure - allow retry
        alert(
          `❌ Payment Failed!\n\n` +
          `Method: ${method?.name}\n` +
          `Reason: ${getRandomFailureReason()}\n\n` +
          `Please try again with a different payment method.`
        );
        setProcessing(false);
        setSelectedMethod('');
      }
    }, 2500);
  };

  const getRandomFailureReason = () => {
    const reasons = [
      'Insufficient balance',
      'Transaction limit exceeded',
      'Server temporarily unavailable',
      'Invalid card details',
      'Network timeout'
    ];
    return reasons[Math.floor(Math.random() * reasons.length)];
  };



  if (!orderInfo || !customerInfo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment options...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/checkout" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Checkout
            </Link>
            <span className="text-gray-400">|</span>
            <h1 className="text-xl font-semibold text-gray-900">Select a payment method</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Side - Payment Methods */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Payment Options List */}
              <div className="divide-y divide-gray-200">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <button
                      onClick={() => handlePaymentMethodSelect(method.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedMethod === method.id 
                              ? 'border-orange-500 bg-orange-500' 
                              : 'border-gray-300'
                          }`}>
                            {selectedMethod === method.id && (
                              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                              </div>
                            )}
                          </div>
                          <span className="text-2xl">{method.icon}</span>
                          <div>
                            <div className="font-medium text-gray-900">{method.name}</div>
                            <div className="text-sm text-gray-600">{method.description}</div>
                            {method.offer && (
                              <div className="text-xs text-green-600 font-medium mt-1">{method.offer}</div>
                            )}
                          </div>
                        </div>
                        {method.type === 'upi' && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Instant</span>
                        )}
                        
                      </div>
                    </button>
                    
                    {/* Card Details Form */}
                    {selectedMethod === method.id && method.type === 'card' && (
                      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-4">Enter Card Details</h3>
                        
                        <div className="grid grid-cols-1 gap-4">
                          {/* Card Number */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Card Number *
                            </label>
                            <input
                              type="text"
                              name="cardNumber"
                              value={cardDetails.cardNumber}
                              onChange={handleCardInputChange}
                              placeholder="1234 5678 9012 3456"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          
                          {/* Cardholder Name */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Cardholder Name *
                            </label>
                            <input
                              type="text"
                              name="cardholderName"
                              value={cardDetails.cardholderName}
                              onChange={handleCardInputChange}
                              placeholder="JOHN DOE"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          
                          {/* Expiry and CVV */}
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Month *
                              </label>
                              <select
                                name="expiryMonth"
                                value={cardDetails.expiryMonth}
                                onChange={handleCardInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
                                <option value="">MM</option>
                                {Array.from({ length: 12 }, (_, i) => {
                                  const month = String(i + 1).padStart(2, '0');
                                  return (
                                    <option key={month} value={month}>
                                      {month}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Year *
                              </label>
                              <select
                                name="expiryYear"
                                value={cardDetails.expiryYear}
                                onChange={handleCardInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
                                <option value="">YYYY</option>
                                {Array.from({ length: 20 }, (_, i) => {
                                  const year = new Date().getFullYear() + i;
                                  return (
                                    <option key={year} value={year}>
                                      {year}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                CVV *
                              </label>
                              <input
                                type="text"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleCardInputChange}
                                placeholder="123"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex items-center space-x-2 text-xs text-gray-500">
                          <span className="text-green-600">🔒</span>
                          <span>Your card details are encrypted and secure</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Continue Button */}
              <div className="p-4 border-t bg-gray-50">
                <button
                  onClick={processPayment}
                  disabled={!selectedMethod || processing || (selectedMethod === 'cards' && !isCardFormValid())}
                  className={`w-full py-3 px-4 rounded font-medium transition-all ${
                    selectedMethod && !processing && (selectedMethod !== 'cards' || isCardFormValid())
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {processing ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : selectedMethod ? (
                    `Continue`
                  ) : (
                    'Select a payment method'
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Side - Order Summary */}
          <div className="w-80">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Items ({orderInfo.itemCount})</span>
                  <span className="font-medium">₹{(orderInfo.total / 1.18).toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total before tax</span>
                  <span className="font-medium">₹{(orderInfo.total / 1.18).toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Estimated tax</span>
                  <span className="font-medium">₹{(orderInfo.total - orderInfo.total / 1.18).toFixed(0)}</span>
                </div>
              </div>

              <div className="border-t pt-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-gray-900">Order Total</span>
                  <span className="font-bold text-lg text-orange-600">₹{orderInfo.total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="text-xs text-gray-500 space-y-1">
                <p>By placing your order, you agree to Iqra Solutions&apos; privacy notice and conditions of use.</p>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 p-3 bg-gray-50 rounded">
                <h3 className="font-medium text-sm text-gray-900 mb-2">Deliver to:</h3>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{customerInfo.name}</p>
                  <p>{customerInfo.address}</p>
                  <p>{customerInfo.city}, {customerInfo.pincode}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function PaymentLoading() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading payment options...</p>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function PaymentMethods() {
  return (
    <Suspense fallback={<PaymentLoading />}>
      <PaymentMethodsContent />
    </Suspense>
  );
}
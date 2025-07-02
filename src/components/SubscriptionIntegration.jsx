import React, { useState, useEffect } from 'react';
import { Check, X, Star, Crown, Zap, Shield, Loader } from 'lucide-react';
import ApiClient from '../../server/utils/apiClient.js';

const SubscriptionIntegration = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [subscribing, setSubscribing] = useState(false);

  useEffect(() => {
    fetchSubscriptionPlans();
  }, []);

  const fetchSubscriptionPlans = async () => {
    try {
      setLoading(true);
      const response = await ApiClient.getSubscriptionPlans();
      setPlans(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async (planId) => {
    try {
      setSubscribing(true);
      const subscriptionData = {
        technicianId: 'demo-technician-id', // Replace with actual technician ID
        planId: planId,
        paymentMethod: 'online'
      };

      const response = await ApiClient.subscribeToplan(subscriptionData);
      
      alert('Subscription successful! ' + response.message);
      setSelectedPlan(planId);
    } catch (err) {
      alert('Subscription failed: ' + err.message);
    } finally {
      setSubscribing(false);
    }
  };

  const getIconComponent = (planName) => {
    switch (planName.toLowerCase()) {
      case 'free plan':
        return Shield;
      case 'economy plan':
        return Zap;
      case 'gold plan':
        return Star;
      case 'platinum plan':
        return Crown;
      default:
        return Shield;
    }
  };

  const getColorClasses = (planName) => {
    switch (planName.toLowerCase()) {
      case 'free plan':
        return {
          gradient: 'from-gray-500 to-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
      case 'economy plan':
        return {
          gradient: 'from-blue-500 to-blue-600',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'gold plan':
        return {
          gradient: 'from-yellow-500 to-yellow-600',
          button: 'bg-yellow-600 hover:bg-yellow-700'
        };
      case 'platinum plan':
        return {
          gradient: 'from-purple-500 to-purple-600',
          button: 'bg-purple-600 hover:bg-purple-700'
        };
      default:
        return {
          gradient: 'from-gray-500 to-gray-600',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin mx-auto mb-4 text-blue-600" size={48} />
          <p className="text-gray-600">Loading subscription plans...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading plans: {error}</p>
          <button 
            onClick={fetchSubscriptionPlans}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Technician Subscription Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan to grow your technical service business and connect with more customers
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {plans.map((plan) => {
            const IconComponent = getIconComponent(plan.name);
            const colors = getColorClasses(plan.name);
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border ${
                  plan.isPopular ? 'border-yellow-400 ring-2 ring-yellow-400' : 'border-gray-200'
                } ${selectedPlan === plan.id ? 'ring-2 ring-blue-500' : ''}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Discount Badge */}
                {plan.discount && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {plan.discount}% OFF
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-gray-800">₹{plan.totalPrice}</div>
                      {plan.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">₹{plan.originalPrice + plan.gst}</div>
                      )}
                      <div className="text-sm text-gray-600 mt-1">INCL 18% GST: ₹{plan.totalPrice}</div>
                    </div>
                    
                    <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                      Valid for {plan.validity} {plan.validityUnit}
                      {plan.maxLeads && ` or till ${plan.maxLeads} leads`}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          feature.included ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          {feature.included ? (
                            <Check className="text-green-600" size={12} />
                          ) : (
                            <X className="text-red-600" size={12} />
                          )}
                        </div>
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleSubscribe(plan.id)}
                      disabled={subscribing}
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${colors.button} text-white shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {subscribing ? (
                        <div className="flex items-center justify-center gap-2">
                          <Loader className="animate-spin" size={16} />
                          SUBSCRIBING...
                        </div>
                      ) : (
                        'CHOOSE PLAN'
                      )}
                    </button>
                    <button className="w-full py-2 px-4 text-gray-600 hover:text-red-600 font-medium transition-colors duration-300">
                      Full Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team is here to help you select the perfect plan for your business needs. 
              Contact us for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionIntegration;
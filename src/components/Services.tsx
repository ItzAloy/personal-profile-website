import React from 'react';
import { Check, Clock, AlertTriangle, CreditCard, Image, Users, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'SIMPLE MV',
      price: '200k',
      features: [
        'Vocals for solo/duet (maximum 2 people)',
        'Maximum video duration is 4-5 minutes',
        'Simple camera movement',
        '1080p 24fps video resolution',
        'Basic motion graphics'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'COMPLEX MV',
      price: '300k',
      features: [
        'Vocals for solo/duet (maximum 2 people)',
        'Maximum video duration is 4-5 minutes',
        'Advanced camera movements',
        'Complex visual effects',
        'Professional motion graphics',
        '1080p 24fps video resolution'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'LYRIC VIDEO',
      price: '100k Per Song',
      features: [
        'Text-based or Animated text lyric animation',
        'Sync to beat perfectly',
        'No Background included',
        'Custom typography options',
        'Multiple animation styles'
      ],
      popular: false,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const rules = [
    {
      icon: Image,
      title: 'Provide Materials',
      description: 'Must provide Character Illustrations, Backgrounds (HD recommended)',
      type: 'requirement'
    },
    {
      icon: Users,
      title: 'Credits & References',
      description: 'Must provide Credits, Parting lyric, and MV references (if you have)',
      type: 'requirement'
    },
    {
      icon: Clock,
      title: 'Processing Time',
      description: 'Video processing might takes 7 days',
      type: 'timeline'
    },
    {
      icon: CreditCard,
      title: 'Payment Policy',
      description: 'Payment must be done before I send the revised/final video',
      type: 'payment'
    },
    {
      icon: AlertTriangle,
      title: 'Credit Required',
      description: 'Please credit me as "ItzAloy" tag me on YouTube or add Instagram link',
      type: 'requirement'
    },
    {
      icon: Zap,
      title: 'Rush Orders',
      description: 'Rush MV 1-3 days (2x price)',
      type: 'addon'
    }
  ];

  const addOns = [
    {
      title: 'Additional Background Assets',
      description: 'If your image is only a png/doesn\'t have a background',
      price: '+20k'
    },
    {
      title: 'Extra Pictures',
      description: 'Max MV is 10 pictures',
      price: '+50k/10 pictures'
    },
    {
      title: 'Rush Delivery',
      description: '1-3 days delivery time',
      price: '2x price'
    }
  ];

  const getRuleIcon = (type: string) => {
    const iconClass = "w-6 h-6";
    switch (type) {
      case 'requirement':
        return <Check className={`${iconClass} text-blue-500`} />;
      case 'timeline':
        return <Clock className={`${iconClass} text-yellow-500`} />;
      case 'payment':
        return <CreditCard className={`${iconClass} text-green-500`} />;
      case 'addon':
        return <Zap className={`${iconClass} text-purple-500`} />;
      default:
        return <AlertTriangle className={`${iconClass} text-gray-500`} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Provide <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional video editing services with transparent pricing and clear requirements
          </p>
          
          {/* Status Badge */}
          <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold mt-6 animate-pulse">
            <div className="w-3 h-3 bg-white rounded-full mr-3 animate-ping"></div>
            STATUS: CLOSE!
          </div>
        </div>

        {/* Service Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Rules Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Rules & Requirements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {getRuleIcon(rule.type)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{rule.title}</h4>
                    <p className="text-gray-600">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{addon.title}</h4>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-purple-600">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-2xl text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/90 mb-6">
              Contact me to discuss your video editing needs and get a custom quote for your project.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

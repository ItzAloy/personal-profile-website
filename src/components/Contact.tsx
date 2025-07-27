import React, { useState } from 'react';
import { Mail, MessageSquare, Send, User, MapPin, Instagram, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: 'simple-mv'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '', projectType: 'simple-mv' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'aloyberkarya@gmail.com',
      link: 'mailto:aloyberkarya@gmail.com'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@aloykucing1',
      link: 'https://instagram.com/aloykucing1'
    },
    {
      icon: Youtube,
      title: 'YouTube',
      value: 'ItzAloy',
      link: 'https://youtube.com/@aloymalang'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Indonesia',
      link: '#'
    }
  ];

  const projectTypes = [
    { value: 'simple-mv', label: 'Simple MV (200k)' },
    { value: 'complex-mv', label: 'Complex MV (300k)' },
    { value: 'lyric-video', label: 'Lyric Video (100k)' },
    { value: 'custom', label: 'Custom Project' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Want to collaborate with me? 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600"> Contact Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your video project to life? Let's discuss your ideas and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with creative individuals. 
                Whether you need a music video, lyric animation, or custom video editing, I'm here to help 
                bring your vision to life.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-primary-500 transition-colors group"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.title}</div>
                    <div className="font-medium text-white">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Status and Availability */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2 flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-3 animate-ping"></div>
                Current Status: CLOSE
              </h4>
              <p className="text-white/90">
                I'm currently not accepting new projects, but feel free to reach out for future collaborations 
                or to join the waiting list!
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Follow My Work</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/aloykucing1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-red-500 p-3 rounded-lg text-white hover:scale-110 transition-transform"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://youtube.com/@aloymalang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-lg text-white hover:scale-110 transition-transform"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-400">
              <p>Usually responds within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

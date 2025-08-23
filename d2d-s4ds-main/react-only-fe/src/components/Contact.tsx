import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subscribed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log newsletter signup to console
    console.log('Newsletter signup:', { email: formData.email, timestamp: new Date().toISOString() });
    
    // Reset form
    setFormData({ email: '', subscribed: true });
    
    // Show success message
    alert('Successfully subscribed to newsletter! Check the console to see the signup data.');
    
    // Reset subscribed status after 2 seconds
    setTimeout(() => {
      setFormData(prev => ({ ...prev, subscribed: false }));
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light text-blue-900 mb-4 animate-pulse-hover">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 font-light opacity-0 animate-fade-in-up stagger-1">
            Stay updated with my latest projects and insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="opacity-0 animate-slide-in-left stagger-2">
            <h3 className="text-xl font-medium text-blue-800 mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8 hover:text-gray-800 transition-colors duration-300">
              I regularly share insights about web development, new technologies, and project updates. 
              Subscribe to stay in the loop with my latest work and thoughts.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-blue-800 mb-2">Email</h4>
                <a 
                  href="mailto:john.doe@email.com" 
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  john.doe@email.com
                </a>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">LinkedIn</h4>
                <a 
                  href="https://linkedin.com/in/johndoe" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  linkedin.com/in/johndoe
                </a>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 mb-2">GitHub</h4>
                <a 
                  href="https://github.com/johndoe" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  github.com/johndoe
                </a>
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-slide-in-right stagger-3">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100">
              <h3 className="text-xl font-medium text-blue-800 mb-4">
                Newsletter Signup
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get notified about new projects, blog posts, and insights into modern web development.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-300 bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formData.subscribed}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    formData.subscribed 
                      ? 'bg-green-600 text-white cursor-not-allowed' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {formData.subscribed ? '✓ Subscribed!' : 'Subscribe to Newsletter'}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                No spam, unsubscribe at any time. I respect your privacy.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Prefer direct contact?
              </p>
              <a
                href="mailto:john.doe@email.com"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium transform hover:scale-105"
              >
                Send me an email
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
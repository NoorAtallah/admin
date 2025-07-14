import React, { useState } from 'react';
import { Edit3, Save, Eye, Settings, FileText, Image, Palette } from 'lucide-react';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [content, setContent] = useState({
    hero: {
      title: 'Welcome to Our Amazing Website',
      subtitle: 'Discover the future of digital innovation',
      buttonText: 'Get Started',
      backgroundImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop'
    },
    about: {
      title: 'About Our Company',
      description: 'We are a leading technology company focused on creating innovative solutions that transform businesses and improve lives.',
      stats: {
        clients: '500+',
        projects: '1000+',
        years: '10+'
      }
    },
    features: {
      title: 'Our Features',
      items: [
        { title: 'Fast Performance', description: 'Lightning-fast loading speeds' },
        { title: 'Secure Platform', description: 'Bank-level security measures' },
        { title: '24/7 Support', description: 'Round-the-clock customer service' }
      ]
    },
    contact: {
      title: 'Contact Us',
      email: 'hello@company.com',
      phone: '+1 (555) 123-4567',
      address: '123 Business Street, City, State 12345'
    }
  });

  const [tempContent, setTempContent] = useState(content);

  const handleInputChange = (section, field, value, index = null) => {
    setTempContent(prev => {
      const newContent = { ...prev };
      if (index !== null) {
        newContent[section][field][index] = value;
      } else if (field.includes('.')) {
        const [parent, child] = field.split('.');
        newContent[section][parent][child] = value;
      } else {
        newContent[section][field] = value;
      }
      return newContent;
    });
  };

  const handleArrayChange = (section, field, index, subfield, value) => {
    setTempContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) => 
          i === index ? { ...item, [subfield]: value } : item
        )
      }
    }));
  };

  const saveChanges = () => {
    setContent(tempContent);
  };

  const renderEditForm = () => {
    const currentContent = tempContent[activeSection];
    
    switch (activeSection) {
      case 'hero':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Hero Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={currentContent.title}
                onChange={(e) => handleInputChange('hero', 'title', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
              <textarea
                value={currentContent.subtitle}
                onChange={(e) => handleInputChange('hero', 'subtitle', e.target.value)}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
              <input
                type="text"
                value={currentContent.buttonText}
                onChange={(e) => handleInputChange('hero', 'buttonText', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Background Image URL</label>
              <input
                type="url"
                value={currentContent.backgroundImage}
                onChange={(e) => handleInputChange('hero', 'backgroundImage', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );
        
      case 'about':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit About Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={currentContent.title}
                onChange={(e) => handleInputChange('about', 'title', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={currentContent.description}
                onChange={(e) => handleInputChange('about', 'description', e.target.value)}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Clients</label>
                <input
                  type="text"
                  value={currentContent.stats.clients}
                  onChange={(e) => handleInputChange('about', 'stats.clients', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Projects</label>
                <input
                  type="text"
                  value={currentContent.stats.projects}
                  onChange={(e) => handleInputChange('about', 'stats.projects', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years</label>
                <input
                  type="text"
                  value={currentContent.stats.years}
                  onChange={(e) => handleInputChange('about', 'stats.years', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );
        
      case 'features':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Features Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
              <input
                type="text"
                value={currentContent.title}
                onChange={(e) => handleInputChange('features', 'title', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Features</label>
              {currentContent.items.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-600 mb-1">Feature Title</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleArrayChange('features', 'items', index, 'title', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                    <textarea
                      value={item.description}
                      onChange={(e) => handleArrayChange('features', 'items', index, 'description', e.target.value)}
                      rows="2"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Edit Contact Section</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={currentContent.title}
                onChange={(e) => handleInputChange('contact', 'title', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={currentContent.email}
                onChange={(e) => handleInputChange('contact', 'email', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={currentContent.phone}
                onChange={(e) => handleInputChange('contact', 'phone', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                value={currentContent.address}
                onChange={(e) => handleInputChange('contact', 'address', e.target.value)}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  const renderPreview = () => {
    const currentContent = content;
    
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <div 
          className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${currentContent.hero.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{currentContent.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{currentContent.hero.subtitle}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              {currentContent.hero.buttonText}
            </button>
          </div>
        </div>
        
        {/* About Section */}
        <div className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">{currentContent.about.title}</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">{currentContent.about.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{currentContent.about.stats.clients}</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{currentContent.about.stats.projects}</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{currentContent.about.stats.years}</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{currentContent.features.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentContent.features.items.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">{currentContent.contact.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-blue-400 mb-2">Email</div>
                <div className="text-lg">{currentContent.contact.email}</div>
              </div>
              <div>
                <div className="text-blue-400 mb-2">Phone</div>
                <div className="text-lg">{currentContent.contact.phone}</div>
              </div>
              <div>
                <div className="text-blue-400 mb-2">Address</div>
                <div className="text-lg">{currentContent.contact.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <button
              onClick={saveChanges}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Left Sidebar - Edit Panel */}
        <div className="w-1/2 bg-white shadow-lg overflow-y-auto">
          <div className="p-6">
            {/* Section Navigation */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Content</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'hero', label: 'Hero', icon: Image },
                  { id: 'about', label: 'About', icon: FileText },
                  { id: 'features', label: 'Features', icon: Settings },
                  { id: 'contact', label: 'Contact', icon: Edit3 }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      activeSection === id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Edit Form */}
            {renderEditForm()}
          </div>
        </div>

        {/* Right Panel - Live Preview */}
        <div className="w-1/2 bg-gray-50 overflow-y-auto">
          <div className="sticky top-0 bg-white shadow-sm p-4 border-b">
            <div className="flex items-center gap-2 text-gray-700">
              <Eye className="w-5 h-5" />
              <span className="font-semibold">Live Preview</span>
            </div>
          </div>
          
          <div className="h-full">
            {renderPreview()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
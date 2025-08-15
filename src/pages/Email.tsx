import React, { useState } from 'react';
import { Send, Paperclip, Bold, Italic, Underline, Link, List, Save, Users, Mail } from 'lucide-react';

interface Email {
  id: string;
  to: string[];
  subject: string;
  body: string;
  timestamp: Date;
  status: 'sent' | 'draft';
}

const Email: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compose' | 'sent' | 'drafts'>('compose');
  const [formData, setFormData] = useState({
    to: '',
    cc: '',
    bcc: '',
    subject: '',
    body: ''
  });

  const [isSending, setIsSending] = useState(false);

  const sentEmails: Email[] = [
    {
      id: '1',
      to: ['sarah.johnson@university.edu'],
      subject: 'Database Assignment Discussion',
      body: 'Hi Sarah, I wanted to discuss the database normalization assignment...',
      timestamp: new Date(2024, 2, 15, 14, 30),
      status: 'sent'
    },
    {
      id: '2',
      to: ['prof.smith@university.edu'],
      subject: 'Office Hours Request',
      body: 'Dear Professor Smith, I would like to schedule a meeting during your office hours...',
      timestamp: new Date(2024, 2, 14, 10, 15),
      status: 'sent'
    }
  ];

  const draftEmails: Email[] = [
    {
      id: '3',
      to: ['study.group@university.edu'],
      subject: 'Study Session - AI Midterm',
      body: 'Hey everyone, I was thinking we should organize a study session...',
      timestamp: new Date(2024, 2, 16, 16, 45),
      status: 'draft'
    }
  ];

  const quickContacts = [
    'sarah.johnson@university.edu',
    'prof.smith@university.edu',
    'mike.chen@university.edu',
    'study.group@university.edu',
    'admin@university.edu'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSend = async () => {
    if (!formData.to || !formData.subject || !formData.body) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSending(true);
    
    // Simulate email sending
    setTimeout(() => {
      alert('Email sent successfully!');
      setFormData({
        to: '',
        cc: '',
        bcc: '',
        subject: '',
        body: ''
      });
      setIsSending(false);
    }, 2000);
  };

  const handleSaveDraft = () => {
    alert('Draft saved successfully!');
  };

  const addQuickContact = (email: string) => {
    const currentEmails = formData.to ? formData.to.split(',').map(e => e.trim()) : [];
    if (!currentEmails.includes(email)) {
      const newEmails = [...currentEmails, email].join(', ');
      setFormData(prev => ({
        ...prev,
        to: newEmails
      }));
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Campus Email</h1>
          <p className="text-lg text-gray-600">Communicate with faculty and students</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex">
              {[
                { key: 'compose', label: 'Compose', icon: Mail },
                { key: 'sent', label: `Sent (${sentEmails.length})`, icon: Send },
                { key: 'drafts', label: `Drafts (${draftEmails.length})`, icon: Save }
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-medium transition-colors ${
                    activeTab === key
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Compose Email */}
            {activeTab === 'compose' && (
              <div className="space-y-6">
                {/* Quick Contacts */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Add Recipients</h3>
                  <div className="flex flex-wrap gap-2">
                    {quickContacts.map((email, index) => (
                      <button
                        key={index}
                        onClick={() => addQuickContact(email)}
                        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full text-sm transition-colors"
                      >
                        <Users className="h-3 w-3" />
                        <span>{email}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      To <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="to"
                      value={formData.to}
                      onChange={handleInputChange}
                      required
                      multiple
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="recipient@university.edu (separate multiple emails with commas)"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CC</label>
                      <input
                        type="email"
                        name="cc"
                        value={formData.cc}
                        onChange={handleInputChange}
                        multiple
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="cc@university.edu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">BCC</label>
                      <input
                        type="email"
                        name="bcc"
                        value={formData.bcc}
                        onChange={handleInputChange}
                        multiple
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="bcc@university.edu"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter email subject"
                    />
                  </div>

                  {/* Formatting Toolbar */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2 p-2 border border-gray-300 rounded-t-xl bg-gray-50">
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors">
                        <Bold className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors">
                        <Italic className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors">
                        <Underline className="h-4 w-4" />
                      </button>
                      <div className="w-px h-6 bg-gray-300"></div>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors">
                        <Link className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors">
                        <List className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors">
                        <Paperclip className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <textarea
                      name="body"
                      value={formData.body}
                      onChange={handleInputChange}
                      required
                      rows={12}
                      className="w-full px-4 py-3 border border-gray-300 rounded-b-xl border-t-0 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Compose your email..."
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button
                      onClick={handleSend}
                      disabled={isSending}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {isSending ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      <span>{isSending ? 'Sending...' : 'Send'}</span>
                    </button>
                    
                    <button
                      onClick={handleSaveDraft}
                      className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save Draft</span>
                    </button>
                  </div>

                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Paperclip className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Sent Emails */}
            {activeTab === 'sent' && (
              <div className="space-y-4">
                {sentEmails.map((email) => (
                  <div key={email.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{email.subject}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          To: {email.to.join(', ')}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {email.timestamp.toLocaleDateString()} {email.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{email.body.substring(0, 150)}...</p>
                  </div>
                ))}
                
                {sentEmails.length === 0 && (
                  <div className="text-center py-12">
                    <Send className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No sent emails</h3>
                    <p className="text-gray-600">Your sent emails will appear here</p>
                  </div>
                )}
              </div>
            )}

            {/* Draft Emails */}
            {activeTab === 'drafts' && (
              <div className="space-y-4">
                {draftEmails.map((email) => (
                  <div key={email.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{email.subject}</h3>
                        <p className="text-sm text-gray-600 mb-2">
                          To: {email.to.join(', ')}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                          Draft
                        </span>
                        <span className="text-xs text-gray-500">
                          {email.timestamp.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{email.body.substring(0, 150)}...</p>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Continue editing
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                
                {draftEmails.length === 0 && (
                  <div className="text-center py-12">
                    <Save className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No draft emails</h3>
                    <p className="text-gray-600">Your draft emails will appear here</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
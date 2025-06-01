import React, { useState } from 'react';
import Button from '../common/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (    <div className="w-full max-w-md">
      <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-6">Get in Touch</h3>
      
      {isSubmitted ? (
        <div className="bg-green-500/20 dark:bg-green-600/20 backdrop-blur-sm border border-green-500/30 dark:border-green-400/30 rounded-lg p-4 text-white dark:text-gray-100">
          <p className="text-lg font-medium">Thank you for your message!</p>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>            <label htmlFor="name" className="block text-white dark:text-gray-200 mb-1">
              Name
            </label>            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-gray-800/50 border border-white/20 dark:border-gray-600/50 text-white dark:text-gray-100 placeholder-white/50 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white dark:text-gray-200 mb-1">
              Email
            </label>            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-gray-800/50 border border-white/20 dark:border-gray-600/50 text-white dark:text-gray-100 placeholder-white/50 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-white dark:text-gray-200 mb-1">
              Message
            </label>            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/10 dark:bg-gray-800/50 border border-white/20 dark:border-gray-600/50 text-white dark:text-gray-100 placeholder-white/50 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:focus:ring-cyan-400/50 resize-none"
              placeholder="Your message"
            ></textarea>
          </div>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
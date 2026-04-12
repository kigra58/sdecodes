import React, { useState } from 'react';
import { FORM_FIELDS } from '../utils/constant';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveToLocalStorage = (data: FormData) => {
    try {
      const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...data,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'new'
      };
      existingSubmissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const saved = saveToLocalStorage(formData);
    
    if (saved) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-surface-container-lowest p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        {FORM_FIELDS.map((field) => (
          <div key={field.name}>
            <label 
              htmlFor={field.name}
              className="block text-xs font-black uppercase tracking-widest text-on-surface-variant mb-2"
            >
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea 
                id={field.name}
                name={field.name}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full bg-surface-container-low border rounded-md px-4 py-3 text-on-surface placeholder:text-outline transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:border-primary/40 resize-y ${
                  errors[field.name as keyof FormErrors] 
                    ? 'border-error focus:ring-error/40 focus:border-error/40' 
                    : 'border-transparent'
                }`}
                placeholder={field.placeholder}
                rows={field.rows}
              />
            ) : (
              <input 
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof FormData]}
                onChange={handleInputChange}
                className={`w-full bg-surface-container-low border rounded-md px-4 py-3 text-on-surface placeholder:text-outline transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:border-primary/40 ${
                  errors[field.name as keyof FormErrors] 
                    ? 'border-error focus:ring-error/40 focus:border-error/40' 
                    : 'border-transparent'
                }`}
                placeholder={field.placeholder}
                type={field.type}
              />
            )}
            {errors[field.name as keyof FormErrors] && (
              <p className="mt-1 text-xs text-error font-medium">
                {errors[field.name as keyof FormErrors]}
              </p>
            )}
          </div>
        ))}
        
        {submitStatus === 'success' && (
          <div className="p-4 bg-primary-container/20 border border-primary/30 rounded-md">
            <p className="text-sm text-primary font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              Thank you! Your message has been sent successfully.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="p-4 bg-error-container/20 border border-error/30 rounded-md">
            <p className="text-sm text-error font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">error</span>
              Oops! Something went wrong. Please try again.
            </p>
          </div>
        )}

        <button 
          className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-md font-bold text-sm tracking-widest uppercase shadow-md hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:shadow-none" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin">refresh</span>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

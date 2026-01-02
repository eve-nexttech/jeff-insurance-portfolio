'use client';

import Image from 'next/image';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { plans } from './InsurancePlans';
import { urlFor } from '@/lib/sanity';


interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  insurancePlan: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  insurancePlan?: string;
};

interface EmailConfig {
  service_id: string | undefined;
  template_id: string | undefined;
  publicKey: string | undefined;
}

interface ContactProps {
  contact: {
    address: string;
    email: string;
    phone: string;
    profileImage: string;
    profileName: string;
    profileTagline: string;
    cta: { title: string; }
  };
  plans: {
    id: number;
    label: string;
    title: string;
    description: string;
    image: string;
  }[];
}


export default function ContactSection({ contact, plans }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    insurancePlan: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    try {
      const newErrors: FormErrors = {};

      // Name validation
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      } else if (formData.name.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }

      // Phone validation (optional but if provided, must be valid)
      if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }

      // Message validation
      if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
      } else if (formData.message.trim().length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
      };

      // Insurance plan validation
      if (!formData.insurancePlan.trim()) {
        newErrors.insurancePlan = 'Insurance plan is required';
      } else if (!plans.map(plan => plan.title).includes(formData.insurancePlan)) {
        newErrors.insurancePlan = 'Invalid insurance plan';
      }

      setErrors(newErrors);
      console.log('Form validation errors:', newErrors);
      return Object.keys(newErrors).length === 0;
    } catch (error) {
      console.error('Form validation error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      validateForm();
      const config: EmailConfig = {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      };
      const templateParams = {
        to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        reply_to: formData.email,
        insurance_plan: formData.insurancePlan,
      };
      if (!config.service_id || !config.template_id || !config.publicKey) {
        console.error('EmailJS configuration is missing');
        return;
      }
      await emailjs.send(config.service_id, config.template_id, templateParams, { publicKey: config.publicKey }).then(
        function (response) {
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            insurancePlan: plans[0].label,
          });
          setSubmitSuccess(true);

          console.log('SUCCESS!', response.status, response.text);
        },
        function (err) {
          setIsSubmitting(false);
          console.log('FAILED...', err);
        },
      );
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);

    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="py-20 relative overflow-hidden px-4 lg:px-0">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-1/2 h-full" viewBox="0 0 500 800">
          <path d="M250,800 Q100,600 250,400 T250,0" stroke="currentColor" fill="none" strokeWidth="2" className="text-primary-light" />
        </svg>
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Call to Action */}
          <div className="space-y-6">
            <div className="inline-block bg-primary-light/20 px-4 py-2 rounded-full text-sm">
              *Get in touch
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold">
              Let&apos;s secure your
              <br />
              future <span className="gradient-text">together!</span>
            </h2>

            <p className="text-gray-300 text-lg ">
              Reach out <Image width={100} height={100} src="/svg/now.svg" alt="Cursor icon" className="w-32 h-32 inline-block align-middle" /> for free consultations and find the insurance plan that fits your life and goals.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-primary-light/20">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-xs lg:text-lg font-semibold hover:text-primary-light transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-primary-light/20">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href={`tel:${contact.phone}`} className="text-sm lg:text-lg font-semibold hover:text-primary-light transition-colors"> {contact.phone} </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-primary-light/20">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-sm lg:text-lg font-semibold">{contact.address}</p>
                </div>
              </div>
            </div>

            {/* Advisor Info */}
            <div className="flex items-center space-x-4 mt-8 bg-primary-light/10 p-4 rounded-2xl">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <Image width={100} height={100} src={urlFor(contact.profileImage).url()} alt="Financial Advisor" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-lg">{contact.profileName}</p>
                <p className="text-sm text-gray-400">{contact.profileTagline}</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-primary-light/20">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-300 animate-fade-in">
                ✓ Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Insurance Plan */}
              <div>
                <label htmlFor="insurancePlan" className="block text-sm font-medium mb-2">
                  Insurance Plan *
                </label>
                <select
                  id="insurancePlan"
                  name="insurancePlan"
                  value={formData.insurancePlan}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-primary-light/30 rounded-xl focus:ring-primary-light focus:border-primary-light"
                >
                  {plans && plans?.map((plan, index) => (
                    <option key={index} value={plan.title} className="text-black">
                      {plan.title}
                    </option>
                  ))}
                </select>
                {errors.insurancePlan && (
                  <p className="text-red-500 text-sm mt-1">{errors.insurancePlan}</p>
                )}
              </div>
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-500' : 'border-primary-light/30'
                    } rounded-xl focus:outline-none focus:border-primary-light transition text-white placeholder-gray-400`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-500' : 'border-primary-light/30'
                    } rounded-xl focus:outline-none focus:border-primary-light transition text-white placeholder-gray-400`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-primary-light/30'
                    } rounded-xl focus:outline-none focus:border-primary-light transition text-white placeholder-gray-400`}
                  placeholder="+254 700 000000"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.message ? 'border-red-500' : 'border-primary-light/30'
                    } rounded-xl focus:outline-none focus:border-primary-light transition text-white placeholder-gray-400 resize-none`}
                  placeholder="Tell me about your insurance needs..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold transition transform ${isSubmitting
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-primary-light text-primary-green hover:bg-white hover:scale-105 cursor-pointer'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message 📨'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

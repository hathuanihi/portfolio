import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; 

import { styles } from './styles';
import { EarthCanvas } from './canvas'; 
import { SectionWrapper } from '../hoc';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Get environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Validate environment variables
        if (!serviceId || !templateId || !publicKey) {
            setLoading(false);
            console.error('EmailJS environment variables are not configured properly');
            alert('Email service is not configured. Please contact me directly at hathu20905@gmail.com');
            return;
        }

        emailjs.send(
            serviceId,
            templateId,
            {
                from_name: form.name,
                from_email: form.email,
                message: form.message
            },
            publicKey
        )
        .then(() => {
            setLoading(false);
            alert('Thank you for your message! I will get back to you soon.');
            setForm({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            setLoading(false);
            console.error('EmailJS Error:', error);
            
            if (error.status === 422) {
                alert('Email configuration error. Please check the template settings.');
            } else if (error.status === 400) {
                alert('Bad request. Please check your input.');
            } else {
                alert('Failed to send message. Please try again or contact me directly.');
            }
        });
    };

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className={`${styles.sectionSubText}`}>Get in touch</p>
                <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
            </motion.div>

            <div className='mt-12 flex xl:flex-row flex-col-reverse gap-10 items-center'>
                <motion.div 
                    className='flex-1 bg-gray-800 p-8 rounded-2xl max-w-md'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <form 
                        ref = {formRef}
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-6'
                    >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='bg-gray-700 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none font-medium'
                            required
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email address?"
                            className='bg-gray-700 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none font-medium'
                            required
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className='bg-gray-700 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outline-none font-medium resize-none'
                            required
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-purple-600 hover:bg-purple-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md transition-all duration-300'
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div 
                className='flex-1 h-[500px] w-full'
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <EarthCanvas />
            </motion.div>
        </div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");
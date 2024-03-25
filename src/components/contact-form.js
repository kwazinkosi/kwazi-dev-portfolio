import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Used for validation
import Button from './button';
import { useState } from 'react';
import "../styles/contact.css";
import React from 'react';


export default function ContactForm() { 
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Function to encode the form data in the format required by Netlify
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }
    // Validation schema for the form
    const validationSchema = Yup.object({
        name: Yup.string()
        .matches(/^[a-zA-Z ]*$/, 'Please enter valid name'),
        email: Yup.string().matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, 'Please enter valid email').required('Email is required.'),
        message: Yup.string().min(5, 'Message must be at least 5 characters.').required('Message is required.'),
    });
    // Function to handle form submission
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Name:', values.name);
        console.log('Email:', values.email);
        console.log('Message:', values.message);
        
        // Netlify form submission through fetch API
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...values }) // Encode the form data
        })
        .then(() => {
            // Set the form as submitted and reset the form so the user can submit another message
            setIsSubmitted(true);
            resetForm();
        })
        .catch(error => alert(error))
        .finally(() => setSubmitting(false));

        //Hide the form after submission
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <Formik 
            initialValues={{ name: '', email: '', message: '' }} 
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}>
           
            {({ isSubmitting, isValid }) => (    
                // <Form name="contact" method="POST" netlify data-netlify="true" className="form flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-lg">
                <Form name="contact" className="form flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-lg">
                    <input type="hidden" name="form-name" value="contact" />
                    <label htmlFor="name">
                        Name:
                        <Field id="name" type="text" name="name" placeholder="Enter your name" autoComplete="name" />
                        <ErrorMessage name="name" component="div" className='error-message' />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <Field id="email" type="email" name="email" placeholder="Enter your email" autoComplete="email" />
                        <ErrorMessage name="email" component="div" className='error-message' />
                    </label>
                    <label htmlFor="message">
                        Message:
                        <Field id="message" as="textarea" name="message" placeholder="Enter your message" autoComplete="off" />
                        <ErrorMessage name="message" component="div" className='error-message' />
                    </label>
                    <Button type="submit" text="Submit" disabled={isSubmitting || !isValid} />
                    {isSubmitted && <div className=' text-green-500 text-center bg-tertiary2 rounded-lg p-2 lg:p-4'>Message sent successfully!</div>}
                </Form>
            )}
        </Formik> 
    );
}
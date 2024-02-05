import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // for everything
import Button from './button';
import { useState } from 'react';
import "../styles/contact.css";


export default function ContactForm() { 
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string()
        .matches(/^[a-zA-Z ]*$/, 'Please enter valid name'),
        email: Yup.string().email('Email is invalid.').required('Email is required.'),
        message: Yup.string().min(5, 'Message must be at least 5 characters.').required('Message is required.'),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log('Name:', values.name);
        console.log('Email:', values.email);
        console.log('Message:', values.message);
        
        setIsSubmitted(true);
        //Hide the form after submission
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
        // Clear the form
        resetForm();
        setSubmitting(false);
    };

    return (
        <Formik initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ isSubmitting, isValid }) => (    
                <Form name="contact" method="POST" data-netlify="true" className="form flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-lg">
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
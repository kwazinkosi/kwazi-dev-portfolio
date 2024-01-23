import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // for everything
import Button from './button';
import { useState } from 'react';
import "../styles/contact.css";


export default function ContactForm() {
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required.'),
        email: Yup.string().email('Email is invalid.').required('Email is required.'),
        message: Yup.string().required('Message is required.'),
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
                <Form className="form flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-lg">
                    <label>
                        Name:
                        <Field type="text" name="name" placeholder="Enter your name" />
                        <ErrorMessage name="name" component="div" className='error-message' />
                    </label>
                    <label>
                        Email:
                        <Field type="email" name="email" placeholder="Enter your email" />
                        <ErrorMessage name="email" component="div" className='error-message' />
                    </label>
                    <label>
                        Message:
                        <Field as="textarea" name="message" placeholder="Enter your message" />
                        <ErrorMessage name="message" component="div" className='error-message' />
                    </label>
                    <Button type="submit" text="Submit" disabled={isSubmitting || !isValid} />
                    {isSubmitted && <p>Form submitted successfully!</p>}
                </Form>
            )}
        </Formik>
    );
}
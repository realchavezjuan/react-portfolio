import React, {useState} from "react";
import { validateEmail } from '../../assets/utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
            setErrorMessage('Your email is invalid.');
            } else {
            setErrorMessage('');
            }
              
        } else {
            if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
            } else {
            setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact content" id="contact">
            <h1>Contact Me</h1>
            {/* form */}
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {/* if errorMessage true, render the following */}
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            <br></br>
            {/* personal contact info */}
            <h2 className="left-title">
                My Personal Contact Info
            </h2>
            <div className="contact-content">
                <email id="email"><b>Email </b><a href="email@email.com">email@email.com</a></email>
                <p><b>Phone </b><a href="tel:+18888888888">888.888.8888</a></p>
                <p><b>Address </b>Salem, OR</p>
            </div>
        </section>
    )
}

export default Contact;
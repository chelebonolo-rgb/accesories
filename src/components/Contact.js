import { useEffect, useState } from 'react';
import { validateContactForm } from '../utils/formValidation';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Chele Accessories Department | Contact';
    return () => {
      document.title = 'Chele Accessories Department';
    };
  }, []);

  useEffect(() => {
    if (!submitted) {
      return undefined;
    }

    const timer = setTimeout(() => setSubmitted(false), 4000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const textFields = ['fullName', 'subject'];

    let nextValue = value;
    let nextError = '';

    if (textFields.includes(name)) {
      const digitsRemoved = value.replace(/\d/g, '');

      if (value !== digitsRemoved) {
        nextError = name === 'fullName'
          ? 'Full Name cannot contain numbers.'
          : 'Subject cannot contain numbers.';
      }

      nextValue = digitsRemoved;

      if (nextValue.length > 30) {
        nextValue = nextValue.slice(0, 30);
        nextError = name === 'fullName'
          ? 'Full Name cannot exceed 30 characters.'
          : 'Subject cannot exceed 30 characters.';
      }
    }

    setFormData((prev) => ({ ...prev, [name]: nextValue }));
    setErrors((prev) => ({ ...prev, [name]: nextError }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateContactForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section className="contact-section">
      <div className="section-header center">
        <p className="eyebrow">Get in touch</p>
        <h2>Contact our team</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Let's create your signature look.</h3>
          <p>
            Whether you want fashion guidance, product information, or a custom recommendation, our
            team is ready to assist you.
          </p>
          <ul>
            <li>Contact Number: 62693871</li>
            <li>E-mail: chelebonolo@gmail.com</li>
            <li>Office Hours: Mon - Fri, 8:00 AM - 5:00 PM</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              maxLength={30}
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              maxLength={30}
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is your enquiry about?"
            />
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>

          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="primary-btn submit-btn">
            Submit
          </button>

          {submitted && (
            <p className="success-message" aria-live="polite">
              Your message has been sent successfully. Our team will contact you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

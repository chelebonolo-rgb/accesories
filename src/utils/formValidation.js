export const validateContactForm = ({ fullName, email, phone, subject, message }) => {
  const errors = {};

  if (!fullName.trim()) {
    errors.fullName = 'Full Name is required.';
  } else if (/\d/.test(fullName)) {
    errors.fullName = 'Full Name cannot contain numbers.';
  } else if (fullName.trim().length > 30) {
    errors.fullName = 'Full Name cannot exceed 30 characters.';
  }

  if (!email.trim()) {
    errors.email = 'Email Address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!phone.trim()) {
    errors.phone = 'Phone Number is required.';
  } else if (!/^\+?[0-9\s-]{10,}$/.test(phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!subject.trim()) {
    errors.subject = 'Subject is required.';
  } else if (/\d/.test(subject)) {
    errors.subject = 'Subject cannot contain numbers.';
  } else if (subject.trim().length > 30) {
    errors.subject = 'Subject cannot exceed 30 characters.';
  }

  if (!message.trim()) {
    errors.message = 'Message is required.';
  } else if (message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters long.';
  }

  return errors;
};

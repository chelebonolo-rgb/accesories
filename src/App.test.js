import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page without assignment details', () => {
  render(<App />);

  expect(screen.getByText(/Chele Accessories Department/i)).toBeInTheDocument();
  expect(screen.getByText(/Your everyday style, elevated/i)).toBeInTheDocument();
  expect(screen.queryByText(/Faculty of Information Communication Technology/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Diploma in Software Engineering and Multimedia/i)).not.toBeInTheDocument();
});

test('blocks numbers in text fields and keeps names within 30 characters', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /contact/i }));

  const fullNameInput = screen.getByLabelText(/full name/i);
  const subjectInput = screen.getByLabelText(/subject/i);

  fireEvent.change(fullNameInput, { target: { value: 'Bonolo123' } });
  fireEvent.change(subjectInput, { target: { value: 'Order123' } });

  expect(fullNameInput.value).toBe('Bonolo');
  expect(subjectInput.value).toBe('Order');

  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: 'chelebonolo@gmail.com' },
  });
  fireEvent.change(screen.getByLabelText(/phone number/i), {
    target: { value: '62693871' },
  });
  fireEvent.change(screen.getByLabelText(/message/i), {
    target: { value: 'I would like to know more about your store.' },
  });

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText(/your message has been sent successfully/i)).toBeInTheDocument();
});

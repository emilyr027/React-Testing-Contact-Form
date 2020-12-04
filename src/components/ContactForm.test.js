import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders without errors', () => {
    render(<ContactForm/>);
})

test('display Edd Burke as placeholder on page load', () => {
    render(<ContactForm/>)

    const edd = screen.findByPlaceholderText(/edd/i);

    waitFor(() => {
        expect(edd.toBeInTheDocument());
    })
})

test('can input information and submit in ContactForm', () => {
    render(<ContactForm/>);

    const firstNameInput = screen.getByLabelText(/First Name*/i);
    const lastNameInput = screen.getByLabelText(/Last Name*/i);
    const emailInput = screen.getByLabelText(/Email*/i);
    const messageInput = screen.getByLabelText(/Message/i);

    fireEvent.change(firstNameInput, { target: { value: 'Jonathan'} });
    fireEvent.change(lastNameInput, { target: { value: 'David'} });
    fireEvent.change(emailInput, { target: { value: 'jd@gmail.com'} });
    fireEvent.change(messageInput, { target: { value: 'Hey there'} });

    const submitBtn = screen.getByRole('button', {name: /submit/i });
    
    fireEvent.click(submitBtn);

})
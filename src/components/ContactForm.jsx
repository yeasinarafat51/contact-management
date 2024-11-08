/* eslint-disable react/prop-types */
// src/components/ContactForm.js
import { useState, useEffect } from 'react';

const ContactForm = ({ onSubmit, contactToEdit }) => {
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
    setContact({ name: '', phone: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full p-2 border rounded-md"
      />
      <input
        type="email"
        name="email"
        value={contact.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
        {contactToEdit ? 'Update Contact' : 'Add Contact'}
      </button>
    </form>
  );
};

export default ContactForm;

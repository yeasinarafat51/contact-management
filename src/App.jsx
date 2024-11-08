// src/App.js
import  { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addOrUpdateContact = (contact) => {
    if (contact.id) {
      setContacts((prev) =>
        prev.map((c) => (c.id === contact.id ? contact : c))
      );
    } else {
      setContacts((prev) => [
        ...prev,
        { ...contact, id: Date.now().toString() },
      ]);
    }
    setContactToEdit(null);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleEdit = (contact) => {
    setContactToEdit(contact);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-cyan-500 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Contact Management App</h1>
      <input
        type="text"
        placeholder="Search Contacts"
        className="w-full p-2 mb-4 border rounded-md"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ContactForm onSubmit={addOrUpdateContact} contactToEdit={contactToEdit} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} onEdit={handleEdit} />
    </div>
  );
}

/* eslint-disable react/prop-types */
// src/components/ContactList.js


const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="mt-4 space-y-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="p-4 border rounded-md flex justify-between items-center">
          <div>
            <p className="font-semibold">{contact.name}</p>
            <p className="text-sm text-gray-600">{contact.phone}</p>
            <p className="text-sm text-gray-600">{contact.email}</p>
          </div>
          <div className="space-x-2">
            <button onClick={() => onEdit(contact)} className="bg-yellow-400 text-white p-1 rounded-md">
              Edit
            </button>
            <button onClick={() => onDelete(contact.id)} className="bg-red-500 text-white p-1 rounded-md">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

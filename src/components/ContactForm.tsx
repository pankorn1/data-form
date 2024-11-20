import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { Contact, useContact } from "../context/ContactContext";

interface ContactFormProps {
  dataToEdit?: Contact;
}

const ContactForm: React.FC<ContactFormProps> = ({ dataToEdit }) => {
  const { dispatch } = useContact();
  const [contact, setContact] = useState<Contact>({
    id: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    if (dataToEdit) {
      setContact(dataToEdit);
    }
  }, [dataToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact.id) {
      dispatch({ type: 'EDIT_CONTACT', payload: contact });
    } else {
      dispatch({ type: 'ADD_CONTACT', payload: contact });
    }
    setContact({
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      phone: '',
      address: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        value={contact.firstName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={contact.lastName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Age"
        name="age"
        value={contact.age}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Gender"
        name="gender"
        value={contact.gender}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Phone"
        name="phone"
        value={contact.phone}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        label="Address"
        name="address"
        value={contact.address}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        {contact.id ? 'Edit Contact' : 'Add Contact'}
      </Button>
    </form>
  );
};

export default ContactForm;

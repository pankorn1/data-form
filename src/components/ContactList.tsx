import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Contact } from '../context/ContactContext';

interface ContactListProps {
  contacts: Contact[];
  handleEdit: (id: string) => void;
  dispatch: React.Dispatch<any>;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, handleEdit, dispatch }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.age}</TableCell>
              <TableCell>{contact.gender}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.address}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleEdit(contact.id)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;

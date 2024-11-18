import { FC } from 'react'
import { Action, Contact } from '../reducer/contactsReducer'
import ContactItem from './ContactItem'

interface ContactListProps{
    contacts: Contact[];
    handleEdit:(id: number) => void;
    dispatch: React.Dispatch<Action>;
}

const ContactList: FC<ContactListProps> = ({ contacts, dispatch }) => {
  return (
    <div className='contacts-list'>
        <h3 className='contacts-list-litle'>List of Contacts</h3>
        <div className="contacts-list-table-container">
            <table className="contacts-list-tale">
                <thead className="contacts-list-table-header">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>id</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((props) => (
                       <ContactItem  key={props}  {...props}  dispatch={dispatch} />
                       
                    ))}
                </tbody>
            </table>   
        </div>
    </div>
  )
}

export default ContactList

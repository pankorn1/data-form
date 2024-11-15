import { FC } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import{ Action, Contact } from '../reducer/contactsReducer'

interface ExtraProps {
    handleEdit: (id: number) => void;
    dispatch: React.Dispatch<Action>
}

const ContactItem: FC<Contact & ExtraProps> = ({ firstName, lastName, id, age, gender, phone, address, handleEdit,dispatch}) => {
  return (
    <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{id}</td>
        <td>{age}</td>
        <td>{gender}</td>
        <td>{phone}</td>
        <td>{address}</td>
        
        <td><AiFillDelete size={20} className='icon' onClick={() =>{
            const confrimDelete = window.confirm('Are you sure you want to delete contact for user ')
            if (confrimDelete) {
                // dispatch Action
            }
        }}/></td>

    </tr>
  )
}

export default ContactItem

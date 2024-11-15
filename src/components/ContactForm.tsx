import { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Action, Contact } from '..reducer/contactsReducer'

interface ContactFormProps {
    dispatch: React.Dispatch<Action>;
    dataToEdit: Contact | undefined;
    toggleModal: () => void;
}

const ContactForm: FC<ContactFormProps> = ({ dispatch, dataToEdit }) => {

    const [contact, setContact] = useState({
        firstName:'',
        lastName:'',
        id:'',
        age:'',
        gender:'',
        phone:'',
        address:'',
    })

    console.log(contact.firstName)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target
        setContact((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch({
            type:"ADD_CONTACT",
            paylond: contact
        })
    }

  return (
    <Form className='contact-form' onSubmit={handleOnSubmit}>
        <Form.Group controlId='firstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control 
                className='firstName'
                name='firstName'
                value={contact.firstName}
                type='text'
                onChange={handleOnChange}
            />
        </Form.Group>

        <Form.Group controlId='lastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
                className='lastName'
                name='lastName'
                value={contact.lastName}
                type='text'
                onChange={handleOnChange}
            />
        </Form.Group>

        <Form.Group controlId='id'>
            <Form.Label>ID</Form.Label>
            <Form.Control 
                className='id'
                name='id'
                value={contact.id}
                type='text'
                onChange={handleOnChange}
            />
        </Form.Group>

        <Form.Group controlId='age'>
            <Form.Label>Age</Form.Label>
            <Form.Control 
                className='age'
                name='age'
                value={contact.age}
                type='text'
                onChange={handleOnChange}
            />
        </Form.Group>

        <Form.Group controlId='gender'>
            <Form.Label>Gender</Form.Label>
            <Form.Control 
                className='gender'
                name='gender'
                value={contact.gender}
                type='text'
                onChange={handleOnChange}
            />
        </Form.Group>

        <Form.Group controlId='phone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control 
                className='phone'
                name='phone'
                value={contact.phone}
                type='text'
                onChange={handleOnChange}
            />
        </Form.Group>


        <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control 
                className='address'
                name='address'
                value={contact.address}
                type='text'
                onChange={handleOnChange}
            />
        </Form.Group>

        <Form.Group controlId='submit' className='mt-4'>
            <Button variant='primary' 
            type='submit'
            className='submit'>
                Add Contact
            </Button>
        </Form.Group>
    
    </Form>
  )
}

export default ContactForm

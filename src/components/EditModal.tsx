import { FC } from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import { Action, Contact } from '../reducer/contactsReducer'
import ContactForm from './ContactForm'

interface EditModalProp  {
    showModal: boolean;
    dataToEdit: Contact | undefined;
    toggleModal: () => void;
    dispatch: React.Dispatch<Action>
}

const EditModal: FC<EditModalProp> = ({toggleModal, dataToEdit, showModal, dispatch}) => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
            <Modal.Title>Updata Contact</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
          <ContactForm 
              dispatch={dispatch}  
              dataToEdit={dataToEdit}
              toggleModal={toggleModal}
          />
        </Modal.Body>
    </Modal>
  )
}

export default EditModal

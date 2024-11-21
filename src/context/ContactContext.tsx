
import React, { createContext, useContext, useReducer } from 'react';


export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  phone: string;
  address: string;
}


type Action =
  | { type: 'ADD_CONTACT'; payload: Contact }
  | { type: 'EDIT_CONTACT'; payload: Contact }
  | { type: 'DELETE_CONTACT'; payload: string };


interface State {
  contacts: Contact[];
}


const initialState: State = {
  contacts: [],
};


const contactsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};


const ContactContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);


export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};


export const ContactProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

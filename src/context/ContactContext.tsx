// context/ContactContext.tsx
import React, { createContext, useContext, useReducer } from 'react';

// Type Definition for Contact
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  phone: string;
  address: string;
}

// Reducer Actions
type Action =
  | { type: 'ADD_CONTACT'; payload: Contact }
  | { type: 'EDIT_CONTACT'; payload: Contact }
  | { type: 'DELETE_CONTACT'; payload: string };

// State Shape
interface State {
  contacts: Contact[];
}

// Initial State
const initialState: State = {
  contacts: [],
};

// Reducer Function
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

// Context Creation
const ContactContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Custom Hook to Access Context
export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

// Context Provider Component
export const ContactProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

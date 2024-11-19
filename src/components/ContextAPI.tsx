import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface Contact {
    firstName: string;
    lastName: string;
    id: string;
    age: string;
    gender: string;
    phone: string;
    address: string;
}

interface Action {
    type: 'ADD_CONTACT' | 'EDIT_CONTACT' | 'DELETE_CONTACT';
    payload: Contact;
}

type Dispatch = (action: Action) => void;

interface ContactProviderProps {
    children: ReactNode;
}

const ContactContext = createContext<{ contacts: Contact[]; dispatch: Dispatch } | undefined>(
    undefined
);

const contactReducer = (state: Contact[], action: Action): Contact[] => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.payload];
        case 'EDIT_CONTACT':
            return state.map((contact) =>
                contact.id === action.payload.id ? action.payload : contact
            );
        case 'DELETE_CONTACT':
            return state.filter((contact) => contact.id !== action.payload.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const ContactProvider: React.FC<ContactProviderProps> = ({ children }) => {
    const [contacts, dispatch] = useReducer(contactReducer, []);

    return (
        <ContactContext.Provider value={{ contacts, dispatch }}>
            {children}
        </ContactContext.Provider>
    );
};

const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
};

export { ContactProvider, useContact };

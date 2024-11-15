export interface Contact {
    firstName: string;
    lastName: string;
    id: string;
    age: string;
    gender: string;
    phone: string;
    address: string;
}

export interface Action {
    type: "ADD_CONTACT";
    paylond: Contact
}

export interface State {
    contacts: Contact[];
}

export const contactsReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.paylond]
            }
        default:
            return state;
    }
}
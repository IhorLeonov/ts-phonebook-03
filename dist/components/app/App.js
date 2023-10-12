import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { MainTitle, Phonebook, SecondTitle } from 'components/app/App.styled';
import { Notification } from 'components/notification/Notification';
const LS_KEY = 'contacts-from-state';
const getInitialContacts = () => {
    const savedContacts = localStorage.getItem(LS_KEY);
    if (savedContacts !== null) {
        return JSON.parse(savedContacts);
    }
    return [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
};
export const App = () => {
    const [contacts, setContacts] = useState(getInitialContacts);
    const [filter, setFilter] = useState('');
    useEffect(() => {
        localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }, [contacts]);
    const addContact = (name, number) => {
        const newContact = {
            id: nanoid(),
            name,
            number,
        };
        if (contacts.some(current => current.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts.`);
        }
        else {
            setContacts(prevState => [...prevState, newContact]);
        }
    };
    const deleteContact = (deleteId) => {
        setContacts(prevState => prevState.filter(contact => contact.id !== deleteId));
    };
    const changeFilter = (e) => {
        setFilter(e.currentTarget.value);
    };
    const getFiltredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    };
    const filtredContacts = getFiltredContacts();
    return (_jsx(Layout, { children: _jsxs(Phonebook, { children: [_jsx(MainTitle, { children: "Phonebook" }), _jsx(ContactForm, { onSubmitForm: addContact }), _jsx(SecondTitle, { children: "Contacts" }), _jsx(Filter, { value: filter, onChange: changeFilter }), contacts.length <= 0 ? (_jsx(Notification, { message: 'Phonebook is empty!' })) : (_jsx(ContactList, { contacts: filtredContacts, onDelete: deleteContact })), _jsx(GlobalStyle, {})] }) }));
};
//# sourceMappingURL=App.js.map
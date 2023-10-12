import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { MainTitle, Phonebook, SecondTitle } from 'components/app/App.styled';
import { Notification } from 'components/notification/Notification';

export interface IContact {
  id: string;
  name: string;
  number: string;
}

const LS_KEY = 'contacts-from-state';

const getInitialContacts = (): IContact[] => {
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
  const [contacts, setContacts] = useState<IContact[]>(getInitialContacts);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name: string, number: string) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        current => current.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
    }
  };

  const deleteContact = (deleteId: string) => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== deleteId)
    );
  };

  const changeFilter = (e: React.FormEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  const getFiltredContacts = (): IContact[] => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = getFiltredContacts();

  return (
    <Layout>
      <Phonebook>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmitForm={addContact}></ContactForm>
        <SecondTitle>Contacts</SecondTitle>
        <Filter value={filter} onChange={changeFilter} />
        {contacts.length <= 0 ? (
          <Notification message={'Phonebook is empty!'} />
        ) : (
          <ContactList contacts={filtredContacts} onDelete={deleteContact} />
        )}

        <GlobalStyle />
      </Phonebook>
    </Layout>
  );
};

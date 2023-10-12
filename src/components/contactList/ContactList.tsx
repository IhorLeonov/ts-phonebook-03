import { ContactItem } from 'components/contactItem/ContactItem';
import { List } from './ContactList.styled';
import { FC } from 'react';
import { IContact } from 'components/app/App';

interface IListProps {
  contacts: IContact[];
  onDelete: (deleteId: string) => void;
}

export const ContactList: FC<IListProps> = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          contact={{ id, name, number }}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

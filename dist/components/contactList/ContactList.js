import { jsx as _jsx } from "react/jsx-runtime";
import { ContactItem } from 'components/contactItem/ContactItem';
import { List } from './ContactList.styled';
export const ContactList = ({ contacts, onDelete }) => {
    return (_jsx(List, { children: contacts.map(({ id, name, number }) => (_jsx(ContactItem, { contact: { id, name, number }, onDelete: onDelete }, id))) }));
};
//# sourceMappingURL=ContactList.js.map
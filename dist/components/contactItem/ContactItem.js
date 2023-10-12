import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ButtonDelete, Item } from './ContactItem.styled';
export const ContactItem = ({ contact, onDelete }) => {
    const { name, number, id } = contact;
    return (_jsxs(Item, { children: [name, ": ", number, _jsx(ButtonDelete, { type: "button", onClick: () => {
                    onDelete(id);
                }, children: "Delete" })] }));
};
//# sourceMappingURL=ContactItem.js.map
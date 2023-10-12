import { ButtonDelete, Item } from './ContactItem.styled';
import { FC } from 'react';
import { IContact } from 'components/app/App';

interface IItemProps {
  contact: IContact;
  onDelete: (deleteId: string) => void;
}

export const ContactItem: FC<IItemProps> = ({ contact, onDelete }) => {
  const { name, number, id } = contact;
  return (
    <Item>
      {name}: {number}
      <ButtonDelete
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </ButtonDelete>
    </Item>
  );
};

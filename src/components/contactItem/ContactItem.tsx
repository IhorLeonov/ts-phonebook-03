import { ButtonDelete, Item } from './ContactItem.styled';
import { FC } from 'react';
import { ItemProps } from 'constants/types';

export const ContactItem: FC<ItemProps> = ({ contact, onDelete }) => {
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

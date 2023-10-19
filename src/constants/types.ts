import { ChangeEvent, JSX } from 'react';

export interface ContactProps {
  id: string;
  name: string;
  number: string;
}

export interface ListProps {
  contacts: ContactProps[];
  onDelete: (deleteId: string) => void;
}

export interface ItemProps {
  contact: ContactProps;
  onDelete: (deleteId: string) => void;
}

export interface ContactFormProps {
  onSubmit: (name: string, number: string) => void;
}

export interface FilterProps {
  filterValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export interface NotificationProps {
  message: string;
}

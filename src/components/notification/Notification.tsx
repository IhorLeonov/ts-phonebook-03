import { Notify } from 'components/notification/Notfication.styled';
import { FC } from 'react';
import { NotificationProps } from 'constants/types';

export const Notification: FC<NotificationProps> = ({ message }) => {
  return <Notify>{message}</Notify>;
};

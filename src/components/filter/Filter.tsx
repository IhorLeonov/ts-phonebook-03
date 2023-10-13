import { Label, Input } from './Filter.styled';
import { FC } from 'react';
import { FilterProps } from 'constants/types';

export const Filter: FC<FilterProps> = ({ filterValue, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={filterValue} onChange={onChange}></Input>
  </Label>
);

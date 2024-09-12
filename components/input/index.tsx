import React, { ChangeEvent } from 'react';
import { FieldError } from 'react-hook-form';
import { Input as InputUi } from '@nextui-org/input';

type Props = {
  value: string;
  placeholder: string;
  error?: FieldError;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input = ({ value, placeholder, onChange, error, className }: Props) => {
  return (
    <InputUi
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      isInvalid={!!error}
      errorMessage={!!error && error.message}
      className={className}
    />
  );
};

export default Input;

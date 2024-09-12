import Input from '@/components/input';
import { InputProps } from '@nextui-org/input';
import { Controller, useFormContext } from 'react-hook-form';

type Props = InputProps & {
  name: string;
  placeholder: string;
  className?: string;
};

const TextField = ({ name, type, placeholder, ...other }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          onChange={(event) => {
            field.onChange(event.target.value);
          }}
          value={field.value}
          placeholder={placeholder}
          error={error}
          {...other}
        />
      )}
    />
  );
};

export default TextField;

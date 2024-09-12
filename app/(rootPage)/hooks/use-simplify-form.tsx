import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema, FormValues, defaultValues } from '../form/schema';

const useSimplifyForm = () => {
  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmitHandler = handleSubmit(async (values) => {
    console.log(values);

    const res = await fetch('https://api.rebrandly.com/v1/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // apikey: process.env.API_KEY as string,
        apikey: '104fbb409abd4772a8dd3b24a1248554',
      },
      body: JSON.stringify({ destination: values.url }),
    });

    console.log(res);
  });

  return {
    methods,
    onSubmitHandler,
    isDisabled: !isValid,
    isLoading: isSubmitting,
  };
};

export default useSimplifyForm;

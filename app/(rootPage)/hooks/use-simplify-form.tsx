import { API } from '@/api/api';
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
    formState: { isSubmitting, isValid, isSubmitSuccessful },
  } = methods;

  const onSubmitHandler = handleSubmit(async (formData) => {
    try {
      const res = await API.createShortLink({ long_url: formData.destination });

      if (res.short_url) {
        navigator.clipboard.writeText(res.short_url);
      }
    } catch {
      //  Logic to handle error
    } finally {
      // Emulate to handle notification
      setTimeout(() => {
        methods.reset();
      }, 3000);
    }
  });

  return {
    methods,
    onSubmitHandler,
    isDisabled: !isValid,
    isLoading: isSubmitting,
    isSubmitSuccessful: isSubmitSuccessful,
  };
};

export default useSimplifyForm;

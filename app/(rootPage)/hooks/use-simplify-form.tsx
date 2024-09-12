import { API } from '@/api/api';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useShortenerContext } from '@/context/store';

import { schema, FormValues, defaultValues } from '../form/schema';

const useSimplifyForm = () => {
  const { setValue, setError, reset } = useShortenerContext();
  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const onSubmitHandler = handleSubmit(async (formData) => {
    reset();

    try {
      const res = await API.createShortLink({ long_url: formData.destination });

      if (res.short_url) {
        setValue(res.short_url);
      }
    } catch (error: any) {
      /*TODO No type for error find the problem. Should be as AxiosError*/
      setError(error.response.data.message as string);
    }
  });

  const onCopyHandler = () => {
    setTimeout(() => {
      methods.reset();
      reset();
    }, 2000);
  };

  return {
    methods,
    onSubmitHandler,
    onCopyHandler,
    isDisabled: !isValid,
    isLoading: isSubmitting,
  };
};

export default useSimplifyForm;

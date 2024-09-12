'use client';

import Button from '@/components/button';
import TextField from '@/components/hook-form/text-field';
import FormProvider from '@/components/hook-form/form-provider';

import useSimplifyForm from '../hooks/use-simplify-form';

const SimplifyForm = () => {
  const { methods, onSubmitHandler, isDisabled, isLoading } = useSimplifyForm();

  return (
    <FormProvider methods={methods} onSubmit={onSubmitHandler}>
      <div className="flex w-full max-w-2xl justify-center gap-4">
        <TextField name="url" placeholder="Paste your huge URL link" />
        <Button
          type="submit"
          text="shortify"
          className="uppercase"
          color="primary"
          isDisabled={isDisabled}
          isLoading={isLoading}
        />
      </div>
    </FormProvider>
  );
};

export default SimplifyForm;

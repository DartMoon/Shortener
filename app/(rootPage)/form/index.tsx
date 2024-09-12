'use client';

import Button from '@/components/button';
import TextField from '@/components/hook-form/text-field';
import FormProvider from '@/components/hook-form/form-provider';

import useSimplifyForm from '../hooks/use-simplify-form';

const SimplifyForm = () => {
  const { methods, onSubmitHandler, isDisabled, isLoading, isSubmitSuccessful } = useSimplifyForm();

  return (
    <div className="w-full">
      <FormProvider methods={methods} onSubmit={onSubmitHandler}>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <TextField
            name="destination"
            placeholder="Paste your huge URL link"
            className="w-full sm:w-8/12"
          />
          <Button
            type="submit"
            text="shortify"
            className="w-full uppercase sm:w-4/12"
            color="primary"
            isDisabled={isDisabled}
            isLoading={isLoading}
          />
        </div>
      </FormProvider>
      {isSubmitSuccessful && (
        <p className="mt-4 text-center text-green-500">
          The link has been generated and copied! :)
        </p>
      )}
    </div>
  );
};

export default SimplifyForm;

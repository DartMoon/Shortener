'use client';

import Button from '@/components/button';
import Snippet from '@/components/snippet';
import { useShortenerContext } from '@/context/store';
import TextField from '@/components/hook-form/text-field';
import FormProvider from '@/components/hook-form/form-provider';

import useSimplifyForm from '../hooks/use-simplify-form';

const SimplifyForm = () => {
  const { onCopyHandler, methods, onSubmitHandler, isDisabled, isLoading } = useSimplifyForm();
  const { value, errorMsg } = useShortenerContext();

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
      {errorMsg && <p className="mt-4 text-center text-red-600">{errorMsg}</p>}
      {value && (
        <Snippet
          onCopy={onCopyHandler}
          className="mt-4 w-full"
          value={value}
          tooltipProps={{
            content: 'After copying, the form will be updated!',
          }}
        />
      )}
    </div>
  );
};

export default SimplifyForm;

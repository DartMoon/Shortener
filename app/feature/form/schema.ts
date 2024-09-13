import * as yup from 'yup';

export type FormValues = {
  destination: string;
};

export const defaultValues = {
  destination: '',
};

export const schema = yup.object().shape({
  destination: yup.string().url('Should be URL link').required('URL field is required'),
});

import * as yup from 'yup';

export type FormValues = {
  url: string;
};

export const defaultValues = {
  url: '',
};

export const schema = yup.object().shape({
  url: yup.string().url('Should be URL link').required('URL field is required'),
});

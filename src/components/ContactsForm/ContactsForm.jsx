import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import toast from 'react-hot-toast';
import { addContact, getFiltredContactsList } from 'redux/contacts';
import {
  FormContainer,
  Button,
  Label,
  ValidationMessage,
} from 'components/ContactsForm/ContactsForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().phone('+38', true, 'Valid number type +380*********'),
});

function ContactsForm() {
  const contacts = useSelector(getFiltredContactsList);
  const dispatch = useDispatch();

  const handleOnSubmit = newContact => {
    if (contacts.some(({ name }) => name === newContact.name)) {
      toast.error(`Contact ${newContact.name} already exists`);
      return;
    }
    dispatch(addContact(newContact));
    toast.success(`Contact ${newContact.name} created`);
  };

  let nameInputId = nanoid(3);
  let phoneInputId = nanoid(3);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const { name, number } = values;
        handleOnSubmit({ name, number });
        resetForm();
      }}
    >
      <FormContainer>
        <Label htmlFor={`id-${nameInputId}`}>Name</Label>
        <Field
          name="name"
          type="text"
          id={`id-${nameInputId}`}
          placeholder="Name"
        />
        <ErrorMessage name="name" component={ValidationMessage} />

        <Label htmlFor={`id-${phoneInputId}`}>Number</Label>
        <Field
          name="number"
          type="tel"
          id={`id-${phoneInputId}`}
          placeholder="+380*********"
        />
        <ErrorMessage name="number" component={ValidationMessage} />

        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
}

export default ContactsForm;

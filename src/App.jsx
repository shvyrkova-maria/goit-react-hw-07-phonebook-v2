import Section from 'components/Section/Section';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Container from 'components/Container/Container';
import Toast from 'components/Toast/Toast.jsx';
import { useSelector } from 'react-redux';
import { getError } from 'redux/contacts';

function App() {
  const isError = useSelector(getError);

  return (
    <>
      {!isError ? (
        <Container>
          <Section title="Phonebook">
            <ContactsForm />
          </Section>
          <Section title="Contacts">
            <Filter />
            <ContactsList />
          </Section>
          <Toast />
        </Container>
      ) : (
        <div>{isError}</div>
      )}
    </>
  );
}

export default App;

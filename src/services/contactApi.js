import axios from 'axios';

axios.defaults.baseURL = `https://611634c28f38520017a3876c.mockapi.io/`;

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContact(newContact) {
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

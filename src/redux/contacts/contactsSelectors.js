export const getFilterValue = state => state.filter;

export const getContactsList = state => state.contacts.items;

export const getFiltredContactsList = state => {
  const filter = getFilterValue(state);
  const contacts = getContactsList(state);

  const normalizeFilter = filter.toLowerCase();
  return contacts
    .filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizeFilter) ||
        number.includes(normalizeFilter),
    )
    .sort((a, b) => a.name.localeCompare(b.name));
};

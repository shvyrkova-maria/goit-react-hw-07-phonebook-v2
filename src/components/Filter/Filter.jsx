import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { DebounceInput } from 'react-debounce-input';
import { getFilterValue } from 'redux/contacts';
import { setFilterValue } from 'redux/contacts/contactsSlices';

function Filter() {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <DebounceInput
      id={`id-${nanoid(3)}`}
      type="text"
      name="name"
      value={filter}
      debounceTimeout={700}
      onChange={event => dispatch(setFilterValue(event.target.value))}
      placeholder="Search"
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;

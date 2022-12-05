import PropTypes from 'prop-types';
import { List } from './ContactsList.styled';
import { ContactsItem } from '../ContactsItem/ContactsItem';

export const Contacts = ({ options, handleClick }) =>
  options.length !== 0 && (
    <List>
      <ContactsItem options={options} handleClick={handleClick} />
    </List>
  );

Contacts.propTypes = {
  options: PropTypes.array.isRequired,
};

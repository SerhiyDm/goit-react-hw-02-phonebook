import PropTypes from 'prop-types';
import { ButtonStyled } from './ContactsItem.styled';

export const ContactsItem = ({ options, handleClick }) =>
  options.map(({ id, name, number }) => (
    <li key={id} style={{ lineHeight: '45px' }}>
      {name}: {number}{' '}
      <ButtonStyled onClick={() => handleClick(id)}>Delete</ButtonStyled>
    </li>
  ));

ContactsItem.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

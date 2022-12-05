import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from './Input.styled';

export const Input = ({
  handleChange,
  text = '',
  type,
  name,
  value,
  pattern,
  title,
}) => (
  <LabelStyled>
    {text}
    <InputStyled
      onBlur={handleChange}
      type={type}
      name={name}
      defaultValue={value}
      pattern={pattern}
      title={title}
    />
  </LabelStyled>
);

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

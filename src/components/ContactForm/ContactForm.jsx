import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Button } from 'components/ContactForm/Button/Button';
import { Input } from 'components/ContactForm/Input/Input';
import { FormStyled } from './ContactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    isInContacts: PropTypes.func.isRequired,
    setContactData: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({
      id: nanoid(),
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    if (!this.props.isInContacts(elements.name.name, this.state.name)) {
      this.props.setContactData(this.state);
      elements.name.value = '';
      elements.number.value = '';
      this.setState({
        name: '',
        number: '',
        id: '',
      });
      return;
    }

    alert(`${this.state.name} is already in contacts`);
  };

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          text="Name"
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <Input
          handleChange={this.handleChange}
          text="Number"
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button>Add Contact</Button>
      </FormStyled>
    );
  }
}

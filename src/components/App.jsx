import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Contacts } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  setContactData = contact =>
    this.setState(prs => ({
      contacts: [...prs.contacts, contact],
    }));
  getFilterInputValue = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getDataForRenderList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const dataByFilter = contacts.filter(e =>
      e.name.toLowerCase().includes(normalizedFilter)
    );

    return filter ? dataByFilter : contacts;
  };

  isInContacts = (name, value) => {
    return this.state.contacts.find(e => e[name] === value);
  };

  onDelete = itemId =>
    this.setState(prst => ({
      contacts: prst.contacts.filter(e => e.id !== itemId),
    }));

  render() {
    return (
      <div
        style={{
          height: '50vh',
          width: '100vw',
          padding: '15px 10px',
          display: 'flex',
          gap: '30px',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          setContactData={this.setContactData}
          isInContacts={this.isInContacts}
        />
        <h2>Contacts</h2>
        <Filter
          handleChange={this.getFilterInputValue}
          text="Find contacts by name"
          value={this.state.filter}
        />
        <Contacts
          options={this.getDataForRenderList()}
          handleClick={this.onDelete}
        />
        <GlobalStyles />
      </div>
    );
  }
}

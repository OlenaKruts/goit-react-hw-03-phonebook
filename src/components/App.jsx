import React, { Component } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formCreateUser = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const sameName = this.state.contacts
      .map(user => user.name.toLowerCase())
      .includes(name.toLowerCase());

    if (sameName) {
      alert(`${name} is alredy in contacts`);
    } else
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteUser = userID => {
    // const { id } = this.state.contacts;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== userID),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const { formCreateUser, changeFilter, filteredName } = this;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formCreateUser} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={changeFilter} />
        <ContactList contacts={filteredName()} onDeleteUser={this.deleteUser} />
      </div>
    );
  }
}

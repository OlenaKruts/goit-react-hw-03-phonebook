import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { name, number } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit} classname={css.form__container}>
        <label className={css.label__form}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            onChange={handleChange}
            className={css.input__form}
          />
        </label>
        <label className={css.label__form}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number"
            onChange={handleChange}
            className={css.input__form}
          />
        </label>
        <button type="submit" className={css.btn__submit}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

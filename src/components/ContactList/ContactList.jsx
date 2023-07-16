import PropTypes from 'prop-types';

import css from './ContactList.module.css';
export const ContactList = ({ contacts, onDeleteUser }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.contact__item}>
            <p>
              <span className={css.contact__name}>{name}</span>: {number}
            </p>
            <button
              type="button"
              onClick={() => onDeleteUser(id)}
              className={css.btn__submit}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};

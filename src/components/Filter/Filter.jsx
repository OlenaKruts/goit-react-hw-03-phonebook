import React from 'react';
import PropTypes from 'prop-types';

import css from './Filter.module.css';
export const Filter = ({ filter, onChange }) => (
  <label className={css.label__filter}>
    Find contacts by name
    <input
      className={css.input__filter}
      type="text"
      name={filter}
      onChange={onChange}
    />
  </label>
);
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

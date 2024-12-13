//import React from 'react'
import PropTypes from 'prop-types';
import '../App.css';

export default function Input({ name, placeholder, handleInput}) {
    
  return (
    <div>
        <input name = { name }
            onChange={ handleInput }
            className="input-field" placeholder = { placeholder} />
    </div>
  )
}


Input.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
  };
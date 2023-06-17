'use client';
import React from 'react';

export default function InputBox({ type, name, id, placeholder, required }) {
    const [inputValue, setInputValue] = React.useState('');

    function handleChange(event) {
        const newValue = event.target.value;
        setInputValue(newValue);
        console.log(newValue);
      }

    return (
        <input type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className='text-black px-3 placeholder:text-center bg-gray-200 focus:bg-white'
            style={{ border: 'none', width: '300px', height: '45px' }}
            value={inputValue}
            onChange={handleChange}
            required={required}
        />
    )
}
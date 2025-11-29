import "../../assets/css/elements/inputs.scss";
import React from 'react';

export function TextInput({ placeholder, value, onChange, className }) {
    return (
        <input
            type="text"
            className={`text-input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export function PasswordInput({ placeholder, value, onChange, className }) {
    return (
        <input
            type="password"
            className={`password-input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export function EmailInput({ placeholder, value, onChange, className }) {
    return (
        <input
            type="email"
            className={`email-input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export function NumberInput({ placeholder, value, onChange, className }) {
    return (
        <input
            type="number"
            className={`number-input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export function DateInput({ placeholder, value, onChange, className }) {
    return (
        <input
            type="date"
            className={`date-input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export function TimeInput({ placeholder, value, onChange, className }) {
    return (
        <input
            type="time"
            className={`time-input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export function CheckboxInput({ checked, onChange, className }) {
    return (
        <input
            type="checkbox"
            className={`checkbox-input ${className}`}
            checked={checked}
            onChange={onChange}
        />
    );
}

export function RadioInput({ name, checked, onChange, className }) {
    return (
        <input
            type="radio"
            name={name}
            className={`radio-input ${className}`}
            checked={checked}
            onChange={onChange}
        />
    );
}

export function FileInput({ onChange, className }) {
    return (
        <input
            type="file"
            className={`file-input ${className}`}
            onChange={onChange}
        />
    );
}

export function TextAreaInput({ placeholder, value, onChange, className }) {
    return (
        <textarea
            className={`textarea-input ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export function SelectInput({ options, value, onChange, className }) {
    return (
        <select
            className={`select-input ${className}`}
            value={value}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export function RangeInput({ min, max, value, onChange, className }) {
    return (
        <input
            type="range"
            className={`range-input ${className}`}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
        />
    );
}
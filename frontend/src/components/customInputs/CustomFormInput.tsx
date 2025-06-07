import React from 'react'

interface CustomFormInputProps {
    value: string | number,
    name: string,
    id: string,
    type: 'text' | 'email' | 'password' | 'number' | 'checkbox' | 'radio' | 'file',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error: string,
    label: string,
    required: boolean,
    minLength?: number,
    maxLength?: number
}

const CustomFormInput: React.FC<CustomFormInputProps> = ({ value, name, id, type, onChange, error, label, required, minLength, maxLength }) => {
    return (
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                required={required}
                maxLength={maxLength}
                minLength={minLength}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    )
}

export default CustomFormInput
import { useEffect, useState } from 'react';
import CustomFormInput from '../customInputs/CustomFormInput';
import { createUser } from '../../utils/api';

export function CreateUserForm({ closeForm }: { closeForm: () => void }): React.ReactElement {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (Object.keys(errors).values()) {
            setTimeout(() => {
                setErrors({})
            }, 4000);
        }
    }, [errors])

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name) newErrors.name = 'Please provide username.';
        if (!formData.email) {
            newErrors.email = 'Please provide email.';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Invalid email provided.';
        }
        if (!formData.password) newErrors.password = 'Please provide password.';
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please provide confirmPassword.';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords don't match.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);
            createUser(formData).then(() => {
                closeForm()
            }).catch(err => setErrors({ apiError: err.message || "Some thing went wrong please try again later" }))
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <CustomFormInput label='Username' id='name' name='name' type='text' value={formData.name} onChange={handleChange} error={errors.name} required />
            <CustomFormInput label='Email' id='email' name='email' type='email' value={formData.email} onChange={handleChange} error={errors.email} required />
            <CustomFormInput label='Password' id='password' name='password' type='password' value={formData.password} onChange={handleChange} error={errors.password} required minLength={6} />
            <CustomFormInput label='Confirm Password' id='confirmPassword' name='confirmPassword' type='password' value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} required minLength={6} />
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Create User
            </button>
            {
                errors.apiError ? <p className="mt-1 text-sm text-red-600">{errors.apiError}</p>
                    : <></>
            }
        </form>
    );
}
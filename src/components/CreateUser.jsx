import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import bgImage from './bg-img.jpeg';


const CreateUser = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            alert('Please fill in all fields.');
            return;
        }

        // Validate username length
        if (name.length >= 15) {
            setError('Username should be below 15 characters');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format');
            return;
        }

        // Validate phone number length
        if (phone.length !== 10 || !(/^\d+$/.test(phone))) {
            setError('Phone number should be a 10-digit number');
            return;
        }
        
        axios.post("http://localhost:3001/createUser", {name, email, phone})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch((err) => console.log(err))

        setError('');
    }

    return (
        <div className='flex h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 justify-center items-center' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
            <div className="w-full max-w-xs">
                <form className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={Submit}>
                    
                    <h2 className="text-3xl font-bold mb-4">Enter Details</h2>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=''>Username</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=''>Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=''>Phone</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Phone" required
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm mb-4">{error}</div>
                    )}

                    <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 border border-blue-700 rounded">
                            Submit
                        </button>
                    </div>

                </form>
                <p className="text-center text-black-500 font-semibold text-xs">
                    &copy;2023 Debasish Vishal. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default CreateUser
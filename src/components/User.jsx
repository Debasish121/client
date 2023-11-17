import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReportModal from './ReportModal';
import bgImage from './bg-img.jpeg';

const User = () => {

    const currentDate = new Date().toLocaleDateString('en-GB');

    const [user, setUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showReportModal, setShowReportModal] = useState(false);
    const [search, setSearch] = useState('');
    console.log(search)

    useEffect(() => {
        axios.get("http://localhost:3001/")
        .then(result => setUser(result.data))
        .catch(err => console.log(err))

    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
        .then(res => {
            console.log(res)
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    const openReport = (userId) => {
        // Find the selected user from userData based on userId
        const userData = user.find(u => u._id === userId._id || u._id === userId);
        if (userData) {
          setSelectedUser(userData);
          setShowReportModal(true);
        }
      }

    const closeReport = () => {
        setSelectedUser(null);
        setShowReportModal(false);
    };


    return (
        <div className='flex h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 justify-center items-center' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
            <div className='w-4/5 ml-64'>
                <div className='bg-white rounded-lg p-6 shadow-lg backdrop-filter backdrop-blur-md bg-opacity-40'>
                    <div className="mb-4 text-center">
                        <h2 className="text-4xl font-semibold text-gray-800">User Details</h2>
                    </div>
                    <div className="mb-4 text-center">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Search User"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-400">
                                    <th className="border p-2">Username</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">Phone</th>
                                    <th className="border p-2">Creation Date</th>
                                    <th className="border p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.filter((user) => {
                                        const searchLower = search.toLowerCase();
                                        return searchLower === '' ||
                                        user.name.toLowerCase().includes(searchLower) ||
                                        user.email.toLowerCase().includes(searchLower) ||
                                        user.phone.toLowerCase().includes(searchLower);
                                    }).map((user) => (
                                        <tr key={user.id}>
                                            <td className="border p-1 text-center">{user.name}</td>
                                            <td className="border p-1 text-center">{user.email}</td>
                                            <td className="border p-1 text-center">{user.phone}</td>
                                            <td className="border p-1 text-center">{currentDate}</td>   
                                            <td className="border p-1 flex items-center justify-center space-x-2">
                                                <Link to={`/update/${user._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Edit</Link>
                                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded" onClick={(e) => handleDelete(user._id)}>Delete</button>
                                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded" onClick={() => openReport(user)}>Report</button>
                                            </td>
                                        </tr>
                                    ))
                                } 
                            </tbody>
                        </table>

                        {selectedUser && showReportModal && (
                            <ReportModal user={selectedUser} closeModal={closeReport} />
                        )}

                        <p className="text-center text-black-500 text-xs">
                            &copy;2023 Debasish Vishal. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
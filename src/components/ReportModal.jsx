import React from 'react';

const ReportModal = ({ user, closeModal }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
<div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
  <div className="bg-white p-8 rounded-lg relative w-96">
    <button
      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
      onClick={closeModal}
    >
      Close
    </button>
    <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">User Report</h2>
    <hr className="border-t border-gray-300 mb-4" />
    <div className="text-gray-700">
      <p className="mb-2">
        <span className="font-semibold">Username:</span> {user.name}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Creation Date:</span> {currentDate}
      </p>
    </div>
  </div>
</div>

  );
};

export default ReportModal;

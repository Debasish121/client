// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-black bg-opacity-50 py-4 fixed w-full top-0 z-10">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <div className="text-xl font-semibold text-white font-open-sans">
//             <Link to='/' className="text-white">User Management Dashboard</Link>
//           </div>
//           <div className="flex space-x-6">
//             <Link to="/" className="text-white hover:text-gray-300 transition duration-300">User Details</Link>
//             <Link to="/create" className="text-white hover:text-gray-300 transition duration-300">Account Creation</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.jsx
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-black bg-opacity-80 fixed left-0 h-full flex flex-col justify-between z-10">
//       <div>
//       <div className="bg-gray-500 text-white text-xl font-open-sans mb-4 py-6 pl-5">
//         <Link to='/' className="text-white">User Dashboard</Link>
//       </div>
//         <div className="flex flex-col space-y-4">
//           <Link to="/" className="text-white hover:text-gray-400 transition duration-300 pt-1.5 pl-6">User Details</Link>
//           <Link to="/create" className="text-white hover:text-gray-400 transition duration-300 pt-1.5 pl-6">Account Creation</Link>
//         </div>
//       </div>
//       <p className="text-white text-xs">
//         &copy;2023 Debasish Vishal. All rights reserved.
//       </p>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-80 fixed left-0 h-full flex flex-col justify-between z-10 pb-4">
      <div>
        <div className="bg-gray-500 text-white text-xl font-open-sans mb-4 py-6 pl-5">
          <Link to='/' className="text-white">User Dashboard</Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link to="/" className="text-white hover:text-gray-400 transition duration-300 pt-1.5 pl-6">User Details</Link>
          <Link to="/create" className="text-white hover:text-gray-400 transition duration-300 pt-1.5 pl-6">Account Creation</Link>
        </div>
      </div>
      <p className="text-white text-xs px-6">
        &copy;2023 Debasish Vishal. All rights reserved.
      </p>
    </nav>
  );
};

export default Navbar;

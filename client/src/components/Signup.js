// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const Signup = () => {
// //   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSignup = async (e) => {
// //   e.preventDefault();

// //   const { email, password } = formData;

// //   const { data, error } = await supabase.auth.signUp({
// //     email,
// //     password,
// //   });

// //   if (error) {
// //     console.error("Signup error:", error.message);
// //     alert("Signup failed: " + error.message);
// //   } else {
// //     alert("Account created successfully!");
// //     navigate("/login");
// //   }
// // };


// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
// //         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Name"
// //           className="w-full mb-4 p-2 border rounded"
// //           value={formData.name}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           className="w-full mb-4 p-2 border rounded"
// //           value={formData.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           className="w-full mb-4 p-2 border rounded"
// //           value={formData.password}
// //           onChange={handleChange}
// //           required
// //         />

// //         <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
// //           Sign Up
// //         </button>

// //         <p className="mt-4 text-sm text-center text-gray-600">
// //           Already have an account?{" "}
// //           <Link to="/login" className="text-green-600 hover:underline font-medium">
// //             Login
// //           </Link>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Signup;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import supabase from "../supabaseClient"; // Make sure this file exists

// const Signup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { email, password } = formData;

//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (error) {
//       setErrorMsg(error.message);
//     } else {
//       alert("Account created successfully!");
//       navigate("/login");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             className="w-full mb-4 p-2 border rounded"
//             value={formData.name}
//             onChange={handleChange}
//             required
//          />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-md"
//           />
//           {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm">
//           Already have an account?{" "}
//           <a href="/login" className="text-indigo-600 hover:underline">
//             Log In
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabaseClient";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    // 1. Create user with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }, // stores name in user metadata
      },
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      alert("Account created successfully! Please check your email to confirm your address.");
      navigate("/"); // ⬅️ Redirect to home page
    }

    const user = data.user;

    // 2. Insert user profile info into your custom users table
  //   const { error: insertError } = await supabase.from("users").insert([
  //     {
  //       id: user.id,
  //       name,
  //       email,
  //     },
  //   ]);

  //   if (insertError) {
  //     setErrorMsg("Account alreadt exist");
  //     return;
  //   }

  //   alert("Account created successfully!");
  //   navigate("/");
   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

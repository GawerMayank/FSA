import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = localStorage.getItem("token"); // Adjust the key as needed
    return token !== null; // Check if token exists
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/allUsers",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token in headers if needed
          },
        }
      );
      if (Array.isArray(response.data.users)) {
        setUsers(response.data.users);
      } else {
        setUsers([]);
        console.error("Users data is not an array");
      }
    } catch (error) {
      console.log(error);
      setError("Failed to fetch users.");
    }
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login"); // Redirect to login page
    } else {
      getUsers();
    }
  }, [navigate]);

  return (
    <div className="m-10">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue">Users</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {users.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Username</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Created At</th>
              <th className="border border-gray-300 p-2">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border border-gray-300 p-2">{user.username}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.phone}</td>
                <td className="border border-gray-300 p-2">
                  {new Date(user.createdAt).toLocaleString()}
                </td>
                <td className="border border-gray-300 p-2">
                  {new Date(user.updatedAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default Users;

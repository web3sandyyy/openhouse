import React, { useState } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("adminAuthenticated") === "true"
  );
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "walletx") {
      localStorage.setItem("adminAuthenticated", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    setIsAuthenticated(false);
    setPassword("");
  };

  if (isAuthenticated) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-semibold">Welcome, Admin!</h1>
        <div className="flex flex-col gap-4 mt-4 max-w-[300px] ">

        <Link
          to="/admin/create-quiz"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create quiz
        </Link>
        <Link
          to="/admin/create-voting"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create Voting
        </Link>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 border rounded mb-4"
      />
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Admin;

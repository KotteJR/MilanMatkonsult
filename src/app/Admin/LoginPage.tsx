"use client";

import { useState } from "react";
import { useAuth } from "./AuthContext";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (login(password)) {
      // Login successful, redirect will happen automatically
    } else {
      setError("Felaktigt lösenord");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Inloggning
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ange lösenord för att komma åt administrationspanelen
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Lösenord
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#E88026] focus:border-[#E88026] sm:text-sm"
                  placeholder="Ange lösenord"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E88026] hover:bg-[#d46f1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E88026]"
              >
                Logga in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderAuth from "../components/HeaderAuth";
import Footer from "../components/Footer";

const Connexion = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion :", formData);
   
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      <HeaderAuth />

      <div className=" mt-30 flex items-center justify-center px-4 py-12">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Se connecter
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9BFF]"
                placeholder="Votre email"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-600">Mot de passe</label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9BFF]"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8A9BFF] text-white py-3 rounded-lg font-semibold hover:bg-[#7588ff] transition"
            >
              Connexion

            </button>
          </form>

          <p className="text-center text-gray-200 mt-6">
            Pas encore de compte ?{" "}
            <Link
              to="/inscription"
              className="text-white font-semibold hover:underline"
            >
              S'inscrire
            </Link>
          </p>
        </div>
      </div>


      <Footer className="bg-[#8A9BFF] text-white" />
    </div>
  );
};

export default Connexion;
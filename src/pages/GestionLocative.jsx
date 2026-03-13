import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import HeaderGestionLocataires from "../components/HeaderGestionLocataires";
import Footer from "../components/Footer";
import { FaHome, FaUsers, FaMoneyBill, FaChartLine } from "react-icons/fa";

const GestionLocative = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Biens enregistrés", value: "12", icon: <FaHome className="text-3xl text-[#8A9BFF]" /> },
    { title: "Locataires actifs", value: "34", icon: <FaUsers className="text-3xl text-[#FFB347]" /> },
    { title: "Paiements reçus", value: "26 400 €", icon: <FaMoneyBill className="text-3xl text-[#4CAF50]" /> },
    { title: "Rentabilité moyenne", value: "8.5%", icon: <FaChartLine className="text-3xl text-[#FF6B6B]" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HeaderGestionLocataires />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestion locative</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center hover:shadow-xl transition">
              <div className="mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-gray-500">{stat.title}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/ajouter-bien")}
              className="px-4 py-2 bg-[#8A9BFF] text-white rounded-lg hover:bg-[#6F8BFF] transition"
            >
              Ajouter un bien
            </button>
            <button
              onClick={() => navigate("/ajouter-locataire")}
              className="px-4 py-2 bg-[#FFB347] text-white rounded-lg hover:bg-[#e6a230] transition"
            >
              Ajouter un locataire
            </button>
            <button
              onClick={() => navigate("/paiements-finances")}
              className="px-4 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#3e8e41] transition"
            >
              Suivi des paiements
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Derniers locataires</h2>
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 text-left text-gray-600">Nom</th>
                <th className="py-2 px-4 text-left text-gray-600">Bien loué</th>
                <th className="py-2 px-4 text-left text-gray-600">Date début</th>
                <th className="py-2 px-4 text-left text-gray-600">Loyer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4">Jean Dupont</td>
                <td className="py-2 px-4">Appartement Centre-ville</td>
                <td className="py-2 px-4">01/01/2025</td>
                <td className="py-2 px-4">1200 €</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">Marie Durant</td>
                <td className="py-2 px-4">Studio Gare</td>
                <td className="py-2 px-4">15/02/2025</td>
                <td className="py-2 px-4">800 €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GestionLocative;
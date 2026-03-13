import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiPieChart,
  FiCalendar,
  FiArrowLeft,
  FiEdit,
  FiPlus,
} from "react-icons/fi";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";


const COLORS = ["#8A9BFF", "#FFB347", "#4CAF50", "#FF6B6B"];

const SuiviFinancier = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bienNom, setBienNom] = useState("");
  const [loading, setLoading] = useState(true);
  const [financialData, setFinancialData] = useState(null);
  const [incomeHistory, setIncomeHistory] = useState([]);
  const [expensesBreakdown, setExpensesBreakdown] = useState([]);
  const [period, setPeriod] = useState("year"); // month, year

  // Simuler le chargement des données (remplacer par appel API)
  useEffect(() => {
    // Données fictives pour la démonstration
    const mockBien = {
      id,
      nom: "Appartement Centre-ville",
      loyer: 1200,
      charges: 150,
      taxes: 80,
      assurance: 30,
      travaux: 200,
    };

    const mockIncomeHistory = [
      { mois: "Jan", revenu: 1150 },
      { mois: "Fév", revenu: 1200 },
      { mois: "Mar", revenu: 1200 },
      { mois: "Avr", revenu: 1250 },
      { mois: "Mai", revenu: 1200 },
      { mois: "Juin", revenu: 1300 },
      { mois: "Juil", revenu: 1350 },
      { mois: "Août", revenu: 1350 },
      { mois: "Sep", revenu: 1300 },
      { mois: "Oct", revenu: 1250 },
      { mois: "Nov", revenu: 1200 },
      { mois: "Déc", revenu: 1200 },
    ];

    const mockExpensesBreakdown = [
      { name: "Charges", value: 150 },
      { name: "Taxes", value: 80 },
      { name: "Assurance", value: 30 },
      { name: "Travaux", value: 200 },
    ];

    setBienNom(mockBien.nom);
    setFinancialData(mockBien);
    setIncomeHistory(mockIncomeHistory);
    setExpensesBreakdown(mockExpensesBreakdown);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header1 />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-xl text-gray-600">Chargement...</div>
        </main>
        <Footer />
      </div>
    );
  }

  
  const totalAnnualIncome = incomeHistory.reduce((sum, item) => sum + item.revenu, 0);
  const totalAnnualExpenses = expensesBreakdown.reduce((sum, item) => sum + item.value, 0) * 12; // approximation mensuelle
  const netAnnualIncome = totalAnnualIncome - totalAnnualExpenses;
  const profitability = ((netAnnualIncome / totalAnnualIncome) * 100).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header1 />

      <main className="flex-grow container mx-auto px-4 py-8">
      
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(`/bien/${id}`)}
            className="flex items-center text-gray-600 hover:text-amber-600 transition mr-4"
          >
            <FiArrowLeft className="mr-1" /> Retour
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Suivi financier : {bienNom}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <FiDollarSign className="text-3xl text-amber-600" />
              <span className="text-xs font-semibold text-gray-400 uppercase">Loyer mensuel</span>
            </div>
            <div className="text-3xl font-bold text-gray-800">{financialData.loyer} €</div>
            <div className="text-sm text-gray-500">Charges: {financialData.charges} €</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <FiTrendingUp className="text-3xl text-green-500" />
              <span className="text-xs font-semibold text-gray-400 uppercase">Revenus annuels</span>
            </div>
            <div className="text-3xl font-bold text-gray-800">{totalAnnualIncome} €</div>
            <div className="text-sm text-green-500">+5% vs année précédente</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <FiTrendingDown className="text-3xl text-red-500" />
              <span className="text-xs font-semibold text-gray-400 uppercase">Dépenses annuelles</span>
            </div>
            <div className="text-3xl font-bold text-gray-800">{totalAnnualExpenses} €</div>
            <div className="text-sm text-gray-500">dont {financialData.travaux} € de travaux</div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <FiPieChart className="text-3xl text-blue-500" />
              <span className="text-xs font-semibold text-gray-400 uppercase">Rentabilité nette</span>
            </div>
            <div className="text-3xl font-bold text-gray-800">{profitability}%</div>
            <div className="text-sm text-gray-500">{netAnnualIncome} € nets</div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Évolution des loyers</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setPeriod("month")}
                  className={`px-3 py-1 text-sm rounded ${
                    period === "month"
                      ? "bg-amber-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Mois
                </button>
                <button
                  onClick={() => setPeriod("year")}
                  className={`px-3 py-1 text-sm rounded ${
                    period === "year"
                      ? "bg-amber-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Année
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={incomeHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mois" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenu"
                  stroke="#8A9BFF"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Répartition des charges</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expensesBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {expensesBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Derniers paiements</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Mars 2025</span>
                <span className="text-green-600 font-semibold">+1 200 €</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Février 2025</span>
                <span className="text-green-600 font-semibold">+1 200 €</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Janvier 2025</span>
                <span className="text-green-600 font-semibold">+1 250 €</span>
              </div>
              <button className="mt-4 text-amber-600 hover:text-amber-700 flex items-center">
                <FiPlus className="mr-1" /> Ajouter un paiement
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Dernières charges</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Charges copro - Mars 2025</span>
                <span className="text-red-600 font-semibold">-150 €</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Taxe foncière 2024</span>
                <span className="text-red-600 font-semibold">-960 €</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Assurance - Annuelle</span>
                <span className="text-red-600 font-semibold">-360 €</span>
              </div>
              <button className="mt-4 text-amber-600 hover:text-amber-700 flex items-center">
                <FiPlus className="mr-1" /> Ajouter une charge
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            onClick={() => navigate(`/bien/${id}/financier/editer`)}
            className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition flex items-center"
          >
            <FiEdit className="mr-2" /> Modifier les données financières
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SuiviFinancier;
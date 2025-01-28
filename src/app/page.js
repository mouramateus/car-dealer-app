'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const currentYear = new Date().getFullYear();
  const modelYears = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => 2015 + i);

  useEffect(() => {
    const fetchVehicleMakes = async () => {
      try {
        const response = await fetch(
          'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
        );
        const data = await response.json();
        setVehicleMakes(data.Results || []);
      } catch (error) {
        console.error('Erro ao buscar as marcas de veículos:', error);
      }
    };

    fetchVehicleMakes();
  }, []);

  useEffect(() => {
    setIsButtonEnabled(selectedMake !== '' && selectedYear !== '');
  }, [selectedMake, selectedYear]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-700 to-black p-6">
      <div className="flex flex-col space-y-5 bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold m-auto text-center text-gray-800">Car Dealer Filter</h1>
        <div className="m-4">
          <select
            id="make"
            className="block w-full rounded-md shadow-md font-medium text-gray-700 p-2 focus:outline-slate-500"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option
            className="text-center"
            value="">Vehicle Makes</option>
            {vehicleMakes.map((make) => (
              <option 
                key={make.MakeId} 
                value={make.MakeId}
              >
                {make.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className="m-4">
          <select
            id="year"
            className="block w-full rounded-md shadow-md font-medium text-gray-700 p-2 focus:outline-slate-500"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option 
              className="text-center"
              value="">Model Year
            </option>
            {modelYears.map((year) => (
              <option 
                key={year} 
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center m-10">
          <Link href={`/result/${selectedMake}/${selectedYear}`}>
            <button
              className={`w-full py-2 px-4 rounded-md text-white ${
                isButtonEnabled ? 'bg-gray-500 hover:bg-gray-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!isButtonEnabled}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

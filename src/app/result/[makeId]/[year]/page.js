import { Suspense } from 'react';

async function fetchVehicleModels(makeId, year) {
  try {
    const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const data = await response.json();
    return data.Results || [];
  } catch (error) {
    console.error('Erro ao buscar os modelos de veículos:', error);
    return [];
  }
}

export default async function ResultPage({ params }) {
  const { makeId, year } = await params;

  const vehicleModels = await fetchVehicleModels(makeId, year);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-700 to-black p-6">
      <div className="flex flex-col space-y-5 bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Vehicle Models - {year}
        </h1>
        <h2 className="text-lg font-medium text-center text-gray-600">
          Make ID: {makeId}
        </h2>

        <Suspense fallback={<p className="text-center">Loading...</p>}>
          {vehicleModels.length > 0 ? (
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-6">
              {vehicleModels.map((model) => (
                <li
                  key={model.Model_ID}
                  className="bg-gray-100 shadow-md rounded-lg p-4 hover:bg-gray-200 transition self-center"
                >
                  <p className="text-md font-medium text-gray-800 text-center">
                    {model.Model_Name}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">
              No models found for the selected make and year.
            </p>
          )}
        </Suspense>


        <div className="text-center mt-10">
          <a
            href="/"
            className="inline-block py-2 px-4 rounded-md text-white bg-gray-500 hover:bg-gray-700"
          >
            Back to Filter
          </a>
        </div>
      </div>
    </main>
  );
}

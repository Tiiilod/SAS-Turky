import fototurky  from"./assets/foto.jpg"


export default function App() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Project SAS-Turky</h1>
        <p>Ini Project SAS-Turky</p>
        <img
          src={fototurky}
          alt="Foto Besar"
          className="w-full max-w-4xl rounded-2xl shadow-lg"
        />

      </div>

    );
  }


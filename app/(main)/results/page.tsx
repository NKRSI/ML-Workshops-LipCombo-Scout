'use client';

export default function ResultsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">Your Perfect Lip Combo</h1>
        <h2 className="text-2xl text-pink-700 mb-4">Soft Romantic Glow ✨</h2>
        <p className="text-pink-800 max-w-lg mx-auto">
          A delicate balance of pink tones with a satin finish, perfect for your date night look.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Lip Liner Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center mr-4">
              <span className="text-pink-600 text-xl">💋</span>
            </div>
            <h3 className="text-xl font-semibold text-pink-700">Lip Liner</h3>
          </div>
          <p className="text-pink-900 mb-2">
            <span className="font-medium">NYX Professional Makeup</span> - Slim Lip Pencil
          </p>
          <p className="text-pink-900 mb-4">
            <span className="font-medium">Color:</span> Natural
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-pink-600">25 PLN</span>
            <a href="#" className="text-pink-500 hover:text-pink-700 font-medium">
              View at Sephora
            </a>
          </div>
        </div>

        {/* Lipstick Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center mr-4">
              <span className="text-pink-600 text-xl">💄</span>
            </div>
            <h3 className="text-xl font-semibold text-pink-700">Lipstick</h3>
          </div>
          <p className="text-pink-900 mb-2">
            <span className="font-medium">Maybelline</span> - SuperStay Matte Ink
          </p>
          <p className="text-pink-900 mb-4">
            <span className="font-medium">Color:</span> Romantic Rose
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-pink-600">45 PLN</span>
            <a href="#" className="text-pink-500 hover:text-pink-700 font-medium">
              View at Rossmann
            </a>
          </div>
        </div>

        {/* Gloss Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center mr-4">
              <span className="text-pink-600 text-xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold text-pink-700">Lip Gloss</h3>
          </div>
          <p className="text-pink-900 mb-2">
            <span className="font-medium">Essence</span> - Shine Shine Shine
          </p>
          <p className="text-pink-900 mb-4">
            <span className="font-medium">Color:</span> Pink Happiness
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-pink-600">15 PLN</span>
            <a href="#" className="text-pink-500 hover:text-pink-700 font-medium">
              View at Douglas
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-pink-700">Total Price</h3>
          <span className="text-2xl font-bold text-pink-600">85 PLN</span>
        </div>
        <div className="flex justify-between">
          <button className="bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium py-2 px-4 rounded-lg transition">
            Find Cheaper Dupes
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition">
            Save This Combo
          </button>
        </div>
      </div>

      <div className="text-center">
        <button className="text-pink-600 hover:text-pink-800 font-medium">
          ← Back to Generator
        </button>
      </div>
    </div>
  );
}
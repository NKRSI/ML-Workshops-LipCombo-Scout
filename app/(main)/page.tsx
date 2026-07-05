export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">LipScout AI</h1>
        <p className="text-xl text-pink-800">Find your perfect lip combo with AI ✨</p>
      </div>
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-pink-700 mb-4">Create Your Look</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-pink-700 mb-1">Occasion</label>
            <select className="w-full p-2 border border-pink-300 rounded-lg focus:ring-pink-500 focus:border-pink-500">
              <option>School</option>
              <option>Date</option>
              <option>Wedding</option>
              <option>Party</option>
              <option>Everyday</option>
            </select>
          </div>
          
          <div>
            <label className="block text-pink-700 mb-1">Finish</label>
            <select className="w-full p-2 border border-pink-300 rounded-lg focus:ring-pink-500 focus:border-pink-500">
              <option>Matte</option>
              <option>Satin</option>
              <option>Glossy</option>
              <option>Shimmer</option>
            </select>
          </div>
          
          <div>
            <label className="block text-pink-700 mb-1">Style</label>
            <select className="w-full p-2 border border-pink-300 rounded-lg focus:ring-pink-500 focus:border-pink-500">
              <option>Clean Girl</option>
              <option>Soft Girl</option>
              <option>Glam</option>
              <option>Natural</option>
            </select>
          </div>
          
          <div>
            <label className="block text-pink-700 mb-1">Color</label>
            <select className="w-full p-2 border border-pink-300 rounded-lg focus:ring-pink-500 focus:border-pink-500">
              <option>Nude</option>
              <option>Pink</option>
              <option>Brown</option>
              <option>Red</option>
              <option>Berry</option>
            </select>
          </div>
          
          <div>
            <label className="block text-pink-700 mb-1">Budget (20-150 PLN)</label>
            <input 
              type="range" 
              min="20" 
              max="150" 
              defaultValue="50"
              className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-pink-600">
              <span>20 PLN</span>
              <span>150 PLN</span>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-xl transition duration-200"
          >
            Generate Combo 💄
          </button>
        </form>
      </div>
    </div>
  );
}
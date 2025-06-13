// import scrapData from "../data/scrapData";

// export default function ScrapRates() {
//   return (
//     <div className="py-10 px-5 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold text-green-800 mb-6">Current Scrap Rates</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//         {scrapData.map((item, idx) => (
//           <div key={idx} className="bg-white shadow-lg rounded-xl p-5 border border-green-200 hover:shadow-xl transition">
//             <h2 className="text-xl font-semibold text-green-700">{item.item}</h2>
//             <p className="text-lg font-bold text-gray-800">{item.price}</p>
//             {item.note && <p className="text-sm text-gray-500 mt-1">{item.note}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// src/pages/ScrapRates.jsx
import React from "react";
// Import both scrapData and the getIconComponent from your data file
import { scrapData, getIconComponent } from "../data/scrapData";

export default function ScrapRates() {
  return (
    <div className="py-10 px-5 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Current Scrap Rates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {scrapData.map((item, idx) => {
          // Get the actual React icon component based on the icon string name
          const IconComponent = getIconComponent(item.icon);
          return (
            <div key={idx} className="bg-white shadow-lg rounded-xl p-5 border border-green-200 hover:shadow-xl transition flex items-center space-x-4">
              {/* Render the icon if it exists */}
              {IconComponent && <IconComponent className="text-green-600 text-3xl flex-shrink-0" />}
              <div>
                <h2 className="text-xl font-semibold text-green-700">{item.item}</h2>
                <p className="text-lg font-bold text-gray-800">{item.price}</p>
                {item.note && <p className="text-sm text-gray-500 mt-1">{item.note}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

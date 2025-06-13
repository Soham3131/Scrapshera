
export const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'newspaper': return '📰';
    case 'clothes': return '👕';
    case 'glassBottle': return '�';
    case 'officePaper': return '📄';
    case 'copiesBooks': return '📚';
    case 'cardboard': return '📦';
    case 'plasticBottle': return '🧴';
    case 'iron': return '🔩';
    case 'steelUtensils': return '🍴';
    case 'aluminum': return '🥫'; // Using can for aluminum
    case 'brass': return '📯'; // Using horn for brass
    case 'copper': return '🔌';
    case 'ac': return '❄️';
    case 'washingMachine': return '🧺';
    case 'geyser': return '🚿';
    case 'fridge': return '🧊';
    case 'cooler': return '💨'; // Using puff of smoke for cooler
    case 'printer': return '🖨️';
    case 'eWasteMetal': return '⚙️';
    case 'eWastePlastic': return '♻️';
    case 'crtTv': return '📺';
    case 'ceilingFan': return '🌀';
    case 'motor': return ' موتور'; // Placeholder, could use inline SVG if complex
    case 'microwave': return '♨️';
    case 'ups': return '🔋';
    case 'inverterStabilizer': return '⚡';
    case 'battery': return '🔋';
    case 'laptop': return '💻';
    case 'crtMonitor': return '🖥️';
    case 'lcdMonitor': return '💻';
    case 'cpu': return '🧠';
    case 'bike': return '🏍️';
    case 'car': return '🚗';
    case 'boxOpen': return '📦';
    case 'calendarAlt': return '🗓️';
    case 'wallet': return '💰';
    case 'tint': return '💧';
    case 'tree': return '🌳';
    case 'bolt': return '⚡';
    case 'oilCan': return '🛢️';
    default: return '✨'; // Default icon
  }
};

export const scrapData = [
  { item: "Newspaper", price: "₹14/kg", note: "Market Rates Dropped Recently", icon: "newspaper" },
  { item: "Clothes", price: "₹2/kg", note: "Accepted only when given with other scrap items (We don't accept undergarments)", icon: "clothes" },
  { item: "Glass Bottles", price: "₹2/kg", note: "Accepted only when given with other scrap items", icon: "glassBottle" },
  { item: "Office Paper", price: "₹14/kg", icon: "officePaper" },
  { item: "Books", price: "₹12/kg", icon: "copiesBooks" },
  { item: "Cardboard", price: "₹8/kg", note: "Call +91-8595358613 for bulk", icon: "cardboard" },
  { item: "Plastic Bottles", price: "₹8/kg", icon: "plasticBottle" },
  { item: "Iron", price: "₹26/kg", note: "Call +91-8595358613 for bulk", icon: "iron" },
  { item: "Steel Utensils", price: "₹40/kg", icon: "steelUtensils" },
  { item: "Aluminium", price: "₹105/kg", icon: "aluminum" },
  { item: "Brass", price: "₹305/kg", icon: "brass" },
  { item: "Copper", price: "₹425/kg", icon: "copper" },
  { item: "Split AC (Copper Coil) 1.5 Ton", price: "₹4150/piece", icon: "ac" },
  { item: "Window AC 1.5 Ton", price: "₹4050/piece", icon: "ac" },
  { item: "Split/Window AC 1 Ton (Copper Coil)", price: "₹1350/piece", icon: "ac" },
  { item: "Window/Split AC 2 Ton (Copper Coil)", price: "₹1000/piece", icon: "ac" },
  { item: "Front Load Fully Automatic Washing Machine", price: "₹5600/piece", icon: "washingMachine" },
  { item: "Top Load Fully Automatic Washing Machine", price: "₹750/piece", icon: "washingMachine" },
  { item: "Semi Automatic Washing Machine (Double Drum)", price: "₹20/kg", icon: "washingMachine" },
  { item: "Geyser", price: "₹1200/piece", icon: "geyser" },
  { item: "Single Door Fridge", price: "₹1350/piece", icon: "fridge" },
  { item: "Double Door Fridge", price: "₹20/kg", icon: "fridge" },
  { item: "Iron Cooler", price: "₹30/kg", icon: "cooler" },
  { item: "Plastic Cooler", price: "₹15/kg", icon: "cooler" },
  { item: "Printer/Scanner/Fax Machine", price: "₹200/piece", icon: "printer" },
  { item: "Metal E-waste", price: "₹28/kg", icon: "eWasteMetal" },
  { item: "Plastic E-waste", price: "₹15/kg", icon: "eWastePlastic" },
  { item: "CRT TV", price: "₹200/piece", icon: "crtTv" },
  { item: "Ceiling Fan", price: "₹35/kg", icon: "ceilingFan" },
  { item: "Motors (Copper wiring)", price: "₹35/kg", icon: "motor" },
  { item: "Microwave", price: "₹350/piece", icon: "microwave" },
  { item: "UPS", price: "₹180/piece", icon: "ups" },
  { item: "Inverter/Stabilizer (Copper Coil)", price: "₹40/kg", icon: "inverterStabilizer" },
  { item: "Battery (used with inverters)", price: "₹81/kg", icon: "battery" },
  { item: "Scrap Laptop", price: "₹300/piece", icon: "laptop" },
  { item: "CRT Monitor", price: "₹150/piece", icon: "crtMonitor" },
  { item: "LCD Monitor", price: "₹20/kg", icon: "lcdMonitor" },
  { item: "Computer CPU", price: "₹225/piece", icon: "cpu" },
  { item: "Bike", price: "₹2100/piece", icon: "bike" },
  { item: "Car", price: "₹20000/piece", icon: "car" },
];


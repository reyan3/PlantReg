import  { useState, useMemo } from "react";
import "./DiseaseLib.css";
import {
  FiChevronRight,
  FiChevronDown,
  FiXCircle,
  FiCheckCircle,
  FiSearch,
} from "react-icons/fi";

const diseaseData = {
  "tomato bacterial spot": {
    description: "A bacterial infection caused by Xanthomonas species.",

    symptoms: "Small dark water-soaked spots, yellow halos, leaf drop.",

    prevention: "Use certified seeds, avoid overhead watering.",

    treatment: "Weekly copper-based sprays.",

    fertilizer: "Balanced NPK; avoid excessive nitrogen.",

    soil: "Well-drained loam, pH 6.0–6.8.",
  },

  "tomato early blight": {
    description: "A fungal disease caused by Alternaria solani.",

    symptoms: "Concentric brown rings on leaves, yellowing, stem lesions.",

    prevention: "Mulch soil, prune lower leaves, avoid wet leaves.",

    treatment: "Apply chlorothalonil or copper fungicides.",

    fertilizer: "Nitrogen-rich organic compost.",

    soil: "Loamy soil with pH 6.0–7.0.",
  },

  "tomato late blight": {
    description: "A destructive disease caused by Phytophthora infestans.",

    symptoms: "Large dark patches, white underside mold, rapid decay.",

    prevention: "Avoid moisture, remove infected plants immediately.",

    treatment: "Use Mancozeb or Chlorothalonil fungicides.",

    fertilizer: "Increase potassium for stronger resistance.",

    soil: "Cool, moist soil increases risk.",
  },

  "tomato leaf mold": {
    description: "A fungal disease caused by Passalora fulva.",

    symptoms: "Olive green mold under leaves, yellow patches.",

    prevention: "Reduce humidity, improve ventilation.",

    treatment: "Use potassium bicarbonate or copper fungicides.",

    fertilizer: "Potassium-rich fertilizer.",

    soil: "Rich organic soil.",
  },

  "tomato septoria leaf spot": {
    description: "Caused by Septoria lycopersici fungus.",

    symptoms: "Tiny brown spots with dark borders, leaf yellowing.",

    prevention: "Water soil, not leaves.",

    treatment: "Spray copper or chlorothalonil.",

    fertilizer: "Balanced NPK for immunity support.",

    soil: "Organic, well-drained soil.",
  },

  "tomato target spot": {
    description: "A fungal disease caused by Corynespora cassiicola.",

    symptoms: "Concentric ring spots on leaves.",

    prevention: "Avoid overcrowding and wet leaves.",

    treatment: "Apply Mancozeb or copper fungicides.",

    fertilizer: "Increase phosphorus and potassium.",

    soil: "Well-aerated fertile soil.",
  },

  "tomato yellow leaf curl virus": {
    description: "A virus transmitted by whiteflies.",

    symptoms: "Leaf curling, yellowing, stunted growth.",

    prevention: "Use insect netting, remove infected plants.",

    treatment: "No cure; manage insects.",

    fertilizer: "Use potassium to strengthen plants.",

    soil: "Loose fertile soil.",
  },

  "tomato mosaic virus": {
    description: "A highly infectious viral disease.",

    symptoms: "Leaf mosaic patterns, distortion, small fruits.",

    prevention: "Sanitize tools, remove infected plants.",

    treatment: "No cure; support plant health.",

    fertilizer: "Nitrogen and micros for growth.",

    soil: "Neutral pH with compost.",
  },

  "healthy tomato": {
    description: "Tomato plant shows no disease.",

    symptoms: "Healthy green foliage.",

    prevention: "Maintain regular watering and pruning.",

    treatment: "None required.",

    fertilizer: "Weekly balanced fertilizer.",

    soil: "Rich, well-drained loam.",
  },

  // ========================= POTATO =========================

  "potato early blight": {
    description: "Fungal disease by Alternaria solani.",

    symptoms: "Dark rings on leaves forming 'target spots'.",

    prevention: "Crop rotation, remove infected debris.",

    treatment: "Copper fungicide sprays.",

    fertilizer: "High nitrogen and potassium.",

    soil: "Light loamy soil.",
  },

  "potato late blight": {
    description: "Highly destructive disease caused by Phytophthora infestans.",

    symptoms: "Dark blotches, white mold on leaf underside.",

    prevention: "Keep foliage dry, avoid overcrowding.",

    treatment: "Metalaxyl or Mancozeb sprays.",

    fertilizer: "Increase potassium.",

    soil: "Moist but well-drained soil.",
  },

  "healthy potato": {
    description: "Healthy potato plant.",

    symptoms: "Green firm leaves.",

    prevention: "Regular irrigation and weed control.",

    treatment: "None.",

    fertilizer: "Balanced 10-10-10.",

    soil: "Sandy loam.",
  },

  // ========================= APPLE =========================

  "apple scab": {
    description: "Fungal disease caused by Venturia inaequalis.",

    symptoms: "Black velvety spots on leaves and fruits.",

    prevention: "Prune trees to allow airflow.",

    treatment: "Apply sulfur or copper sprays.",

    fertilizer: "Increase potassium levels.",

    soil: "Loamy soil, pH 6–7.",
  },

  "apple black rot": {
    description: "Rot disease caused by Botryosphaeria obtusa.",

    symptoms: "Leaf spots, fruit rot, branch cankers.",

    prevention: "Remove fallen fruits.",

    treatment: "Copper fungicide.",

    fertilizer: "Organic compost.",

    soil: "Moist, rich soil.",
  },

  "cedar apple rust": {
    description: "Fungal disease requiring junipers as alternate hosts.",

    symptoms: "Orange leaf spots, rust pustules.",

    prevention: "Remove nearby junipers.",

    treatment: "Myclobutanil sprays.",

    fertilizer: "Nitrogen-rich soil.",

    soil: "Loamy soil with drainage.",
  },

  "healthy apple": {
    description: "Healthy apple foliage.",

    symptoms: "Green, fresh leaves.",

    prevention: "Proper pruning and spacing.",

    treatment: "None.",

    fertilizer: "Fruit fertilizer.",

    soil: "Rich loamy soil.",
  },

  // ========================= GRAPE =========================

  "grape black rot": {
    description: "Vine fungal disease caused by Guignardia bidwellii.",

    symptoms: "Brown lesions, mummified berries.",

    prevention: "Increase airflow.",

    treatment: "Mancozeb or copper sprays.",

    fertilizer: "Phosphorus for fruit health.",

    soil: "Sandy loam.",
  },

  "grape black measles": {
    description: "Trunk disease affecting grape vines.",

    symptoms: "Tiger-striped leaves, berry spotting.",

    prevention: "Avoid heavy pruning in wet seasons.",

    treatment: "No cure; remove infected vines.",

    fertilizer: "High organic matter.",

    soil: "Warm, dry soil.",
  },

  "grape leaf blight": {
    description: "Fungal leaf spot disease.",

    symptoms: "Angular brown leaf spots.",

    prevention: "Avoid overhead watering.",

    treatment: "Copper fungicides.",

    fertilizer: "Nitrogen to support leaf growth.",

    soil: "Draining loam.",
  },

  "healthy grape": {
    description: "Healthy grape leaf.",

    symptoms: "Bright green leaves.",

    prevention: "Good vineyard management.",

    treatment: "None.",

    fertilizer: "Organic compost.",

    soil: "Fertile soil with good drainage.",
  },

  // ========================= PEPPER =========================

  "bell pepper bacterial spot": {
    description: "Bacterial spot caused by Xanthomonas.",

    symptoms: "Brown scabs on leaves and fruits.",

    prevention: "Avoid wetting leaves.",

    treatment: "Copper bactericides.",

    fertilizer: "Nitrogen-rich blends.",

    soil: "Warm, fertile loam.",
  },

  "healthy bell pepper": {
    description: "Healthy pepper plant.",

    symptoms: "Shiny green leaves.",

    prevention: "Regular watering.",

    treatment: "None.",

    fertilizer: "N-rich fertilizer.",

    soil: "Warm, well-drained soil.",
  },

  // ========================= CORN =========================

  "corn gray leaf spot": {
    description: "Fungal disease caused by Cercospora zeae-maydis.",

    symptoms: "Long rectangular gray lesions.",

    prevention: "Crop rotation.",

    treatment: "Strobilurin fungicides.",

    fertilizer: "Nitrogen and potassium.",

    soil: "Loamy soil.",
  },

  "corn common rust": {
    description: "Rust caused by Puccinia sorghi.",

    symptoms: "Reddish-brown pustules.",

    prevention: "Plant resistant hybrids.",

    treatment: "Triazole fungicides.",

    fertilizer: "Phosphorus-rich fertilizer.",

    soil: "Well-drained soil.",
  },

  "corn northern leaf blight": {
    description: "Caused by Exserohilum turcicum.",

    symptoms: "Cigar-shaped gray lesions.",

    prevention: "Resistant varieties.",

    treatment: "Fungicide sprays.",

    fertilizer: "Nitrogen for leaf strength.",

    soil: "Fertile loam.",
  },

  "healthy corn": {
    description: "Healthy corn leaf.",

    symptoms: "Green, clean leaves.",

    prevention: "Proper spacing.",

    treatment: "None.",

    fertilizer: "Balanced NPK.",

    soil: "Nutrient-rich soil.",
  },

  // ========================= STRAWBERRY =========================

  "strawberry leaf scorch": {
    description: "Fungal leaf disease.",

    symptoms: "Red-purple spots, burnt edges.",

    prevention: "Reduce humidity.",

    treatment: "Captan fungicide.",

    fertilizer: "Compost-rich feed.",

    soil: "Sandy loam.",
  },

  "healthy strawberry": {
    description: "Healthy strawberry foliage.",

    symptoms: "Bright green leaves.",

    prevention: "Avoid overwatering.",

    treatment: "None.",

    fertilizer: "Potassium-rich fertilizer.",

    soil: "Acidic, well-drained soil.",
  },

  // ========================= PEACH =========================

  "peach bacterial spot": {
    description: "Bacterial leaf & fruit spot.",

    symptoms: "Water-soaked lesions, cracked fruit.",

    prevention: "Use resistant varieties.",

    treatment: "Copper sprays.",

    fertilizer: "Phosphorus for fruit health.",

    soil: "Fertile soil.",
  },

  "healthy peach plant": {
    description: "Healthy peach leaf.",

    symptoms: "Green, clean leaves.",

    prevention: "Good orchard care.",

    treatment: "None.",

    fertilizer: "10-10-10 fruit fertilizer.",

    soil: "Loamy and fertile.",
  },

  // ========================= CITRUS =========================

  "citrus greening": {
    description: "Deadly bacterial disease spread by psyllids.",

    symptoms: "Yellow blotchy leaves, lopsided fruits.",

    prevention: "Control psyllids, remove infected trees.",

    treatment: "No cure; only nutrient support.",

    fertilizer: "Micronutrients and foliar sprays.",

    soil: "Slightly acidic sandy loam.",
  },

  // ========================= SOYBEAN =========================

  "healthy soybean": {
    description: "Healthy soybean leaf.",

    symptoms: "Green uniform leaves.",

    prevention: "Proper spacing and watering.",

    treatment: "None.",

    fertilizer: "Nitrogen-fixing soil microbes.",

    soil: "Sandy loam.",
  },
};

// Helper function to capitalize
const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

const DiseaseLib = () => {
  const [openDisease, setOpenDisease] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Toggle function
  const toggleDisease = (name) => {
    setOpenDisease(openDisease === name ? null : name);
  };

  // 1. Filter and Group Data dynamically based on search
  const filteredGroupedDiseases = useMemo(() => {
    // First, filter the raw data
    const filteredEntries = Object.entries(diseaseData).filter(
      // Object.entries(diseaseData) use to covert the data into array to use filter,map etc
      ([key, value]) => {
        // [key,value] - use to destructure array into object 
        const lowerSearch = searchTerm.toLowerCase();
        // Search in Title, Description, or Symptoms
        return (
          key.toLowerCase().includes(lowerSearch) ||
          value.description.toLowerCase().includes(lowerSearch) ||
          value.symptoms.toLowerCase().includes(lowerSearch)
        );
      }
    );

    // Then, group the filtered results by Crop
    return filteredEntries.reduce((acc, [key, value]) => {
      const crop = key.split(" ")[0];
      acc[crop] = acc[crop] || {};
      acc[crop][key] = value;
      return acc;
    }, {});
  }, [searchTerm]); // Re-run this only when searchTerm changes

  return (
    <div className="disease-library">
      <h1>Crop Disease Library</h1>

      {/* --- New Search Bar Section --- */}
      <div className="search-container">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for diseases, symptoms, or crops..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* --- Check if results exist --- */}
      {Object.keys(filteredGroupedDiseases).length === 0 ? (
        <div className="no-results">
          <p>No diseases found matching "{searchTerm}"</p>
        </div>
      ) : (
        Object.entries(filteredGroupedDiseases).map(([crop, diseases]) => (
            // Object.entries(groupedDiseases) converts into array
          <div key={crop} className="crop-section">
            {/* Here crop is tomato,etc */}
            {/* diseases are tomato blight disease,etc */}
            <h2>{capitalizeWords(crop)} Diseases</h2>
            <div className="disease-list-accordion">
              {Object.entries(diseases).map(([name, details]) => {
                // Here name are tomato bacterial spot,etc
                // details are description,symtomps,etc
                const isHealthy = name.startsWith("healthy");
                const isOpen = openDisease === name;
                const Icon = isOpen ? FiChevronDown : FiChevronRight;
                const StatusIcon = isHealthy ? FiCheckCircle : FiXCircle;

                return (
                  <div
                    key={name}
                    className={`disease-item ${isOpen ? "open" : ""} ${
                      isHealthy ? "healthy-item" : "infected-item"
                    }`}
                  >
                    <div
                      className="disease-header"
                      onClick={() => toggleDisease(name)}
                    >
                      <div className="disease-title">
                        <Icon className="toggle-icon" />
                        <StatusIcon
                          className={`status-icon ${
                            isHealthy ? "success" : "danger"
                          }`}
                        />
                        <h3>{capitalizeWords(name)}</h3>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="disease-content">
                        <p>
                          <strong>Description:</strong> {details.description}
                        </p>
                        <p>
                          <strong>Symptoms:</strong> {details.symptoms}
                        </p>
                        <div className="detail-row">
                          <div className="detail-column">
                            <h4>Treatment & Prevention</h4>
                            <p>
                              <strong>Prevention:</strong> {details.prevention}
                            </p>
                            <p>
                              <strong>Treatment:</strong> {details.treatment}
                            </p>
                          </div>
                          <div className="detail-column">
                            <h4>Soil & Nutrition</h4>
                            <p>
                              <strong>Fertilizer:</strong> {details.fertilizer}
                            </p>
                            <p>
                              <strong>Recommended Soil:</strong> {details.soil}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DiseaseLib;

# NASA SMART FARMER – Intelligent Farming Assistant
> **Tagline:** *"From Space to Soil – Smarter Decisions for Every Farmer."*  
> *"Bringing Space Technology to Every Farm."*

---

## 🛰️ Project Overview
**NASA SMART FARMER** is a full-stack, modern agricultural intelligence platform designed to empower farmers and agricultural managers with Earth Observation satellite data from **NASA**. 

By transforming high-dimensional spaceborne observations—including **NASA SMAP** soil moisture, **NASA MODIS/VIIRS** vegetation health (NDVI), **NASA GPM** precipitation measurements, and **NASA POWER** agro-meteorological reanalysis—into real-time, actionable advisories, NASA SMART FARMER helps farmers conserve water, mitigate crop stress, predict rainfall events, and optimize irrigation schedules.

The platform is designed with a high-tech NASA aerospace aesthetic, featuring dark green, light green, white, and emerald accents, interactive GIS maps, dynamic hydrological graphs, and an AI conversational assistant.

---

## 🌟 Key Features & Website Pages

### 1. Home / Space-to-Soil Story (`/home`)
- Introduction to NASA Earth Science Applied Sciences for Agriculture.
- Live mission breakdown (SMAP, MODIS, VIIRS, GPM, POWER).
- One-click launch into the interactive agricultural control center.

### 2. Main Dashboard (`/dashboard`)
- **Personalized Header:** Farmer greeting, active farm selector, crop type, growth stage, and soil type.
- **Top Metric Cards:**
  - Total Farm Area (Acres / Hectares with GPS bounded status)
  - Current Weather (Temp, feels like, humidity, conditions)
  - Soil Moisture Level (NASA SMAP Root-Zone & Surface % vol)
  - Rainfall Forecast (NASA GPM 48-hour accumulation and probability)
- **High-Impact Alerts Banner:** Contextual notifications for impending rain delays, heat stress advisories, or moisture deficits.
- **Visual Dual-Depth Soil Gauge:** Plant Available Water (PAW) dial with Field Capacity (FC) and Permanent Wilting Point (PWP) thresholds.
- **Satellite Health Preview Card:** Interactive NDVI score and multi-zone distribution.
- **Irrigation Guidance Card:** Status indicator (`REQUIRED`, `NOT_NEEDED`, `POSTPONE_RAIN`, `CRITICAL`), target water rate, optimal time window, and one-click cycle logging.

### 3. Satellite-Based Crop Health Monitoring (`/satellite`)
- **Interactive Geospatial Map (Leaflet):**
  - **Layer Switcher:** High-Resolution Optical Satellite, NASA MODIS Terra True Color (GIBS), NASA VIIRS True Color (GIBS), NASA SMAP Surface Soil Moisture (GIBS), and ESA Sentinel-2 (clearly credited as ESA partner data).
  - **Dynamic NDVI Overlays:** Color-coded zones (Green: >0.70 Healthy, Yellow: 0.45-0.65 Moderate, Red: <0.40 Stressed).
  - **Point Surface Inspector:** Click anywhere on the field to sample estimated micro-spatial NDVI reflectance.
- **NDVI Vegetation Scale Legend:** Formula display `(NIR - Red) / (NIR + Red)` and agronomic band descriptions.
- **Field Sector Diagnostics:** Individual breakdown of monitored sectors with acreages, observed issues, and concrete mitigation actions.
- **Historical NDVI Multi-Temporal Trajectory:** Recharts curve tracking MODIS and VIIRS NDVI throughout the seasonal crop phenology (Sowing → Emergence → Vegetative → Flowering → Ripening).

### 4. Weather Monitoring (`/weather`)
- **NASA POWER Agroclimatology Integration:**
  - Air temperature (T2M), apparent temperature, relative humidity (RH2M), surface pressure, and wind vector.
  - Solar insolation on horizontal surfaces (`ALLSKY_SFC_SW_DWN` in MJ/m²).
  - UV index and barometric trend.
- **Diurnal Microclimate Cycle (24 Hours):** Hourly fluctuation of temperature vs humidity.
- **7-Day Agro-Meteorological Forecast:** Min/max temperatures, precipitation volume, rain probability, and daily reference evapotranspiration ($ET_0$).

### 5. Soil Moisture Dynamics & SMAP (`/soil`)
- **Dual-Depth Soil Hydrology Profiling:**
  - Surface topsoil moisture ($0 - 10\text{ cm}$) from NASA SMAP L3 radiometer.
  - Root-zone soil moisture ($10 - 100\text{ cm}$) from SMAP L4 assimilated hydrology.
- **Plant Available Water (PAW) Reservoir Dial:** Gauging available moisture between permanent wilting point and field capacity.
- **14-Day Soil Water Depletion Trend:** Drying rate trajectory ($~1.2\%\text{ vol/day}$) and projected days until wilting point.
- **Field Soil Characteristics Matrix:** Infiltration rate ($\text{mm/hr}$), bulk density, and texture properties for Loam, Sandy Loam, Clay Loam, Silty Clay, and Black Soil (Vertisol).
- **Scientific Integrity & Limitations:** Transparent disclosure of SMAP's 9 km downscaled / 36 km raw microwave resolution and calibration methodology.

### 6. Rainfall Prediction & Drought Monitoring (`/rainfall`)
- **NASA GPM (Global Precipitation Measurement) IMERG 0.1° Data:**
  - 24-hour observed precipitation.
  - 7-day upcoming rain accumulation.
  - 30-day historical deficit/surplus relative to 10-year seasonal baselines.
- **Precipitation Timeline Bar Chart:** Past 7 days historical radar + next 7 days forecast.
- **Drought Vulnerability Index (SPI):** Standardized Precipitation Index gauge categorized from Severe Drought ($-2.0$) to Normal ($0.0$) to Excess Moisture ($+2.0$).
- **Storm Runoff & Flood Risk Advisories:** Drainage management for heavy precipitation events.

### 7. Smart Irrigation Recommendation Engine (`/irrigation`)
- **Dual Agronomic Decision Algorithm:**
  - Crop Evapotranspiration: $ET_c = K_c \times ET_0$ based on crop growth stage (Germination, Vegetative, Flowering, Yield Formation, Ripening).
  - Soil moisture deficit below Management Allowed Depletion (MAD 50%).
  - 24–48 hour upcoming rainfall check: Postpones irrigation if significant rain ($\ge 8\text{ mm}$) is imminent, preventing waterlogging and fertilizer leaching.
- **Quantitative Guidance:** Application depth ($\text{mm}$), volumetric rate ($\text{Liters/Acre}$), and optimal low-evaporation timing windows (e.g. 05:30 AM – 09:00 AM).
- **Interactive Water Budget & Electricity Cost Calculator:**
  - Custom depth slider, system application efficiency ($50\% - 98\%$), and electricity tariff ($\$/\text{kWh}$).
  - Computes total groundwater volume ($\text{kL}$ / Gallons), pumping energy ($\text{kWh}$), and operational cost.

### 8. AI Farming Assistant (`/ai-assistant`)
- **"NASA Smart Farmer AI Assistant" Chatbot:**
  - Automatically injected with active farm real-time context (Crop, Stage, Soil, NDVI, SMAP moisture, Weather, Rain outlook).
  - Responds with structured agronomic explanations and NASA data citations.
  - Dual-Engine: Connects to live **Google Gemini API** if an API key is provided, or uses an advanced built-in agricultural reasoning engine.
  - Interactive clickable suggested inquiry chips.
  - Speech synthesis (Text-to-Speech) for accessibility.

### 9. Farm Management & Multi-Plot Switcher (`/settings`)
- **Multi-Farm Registration:** Switch between multiple agricultural plots or create new fields anywhere in the world.
- **Interactive GPS Location Picker:** Embedded Leaflet map with drag-and-drop marker and automatic coordinate capture.
- **Export Farm Dossier:** Instant JSON export containing complete telemetry and recommendation logs.
- **Authentication & Profiles:** 1-click Demo Profiles (Rajesh Sharma / Robert Vance) or custom farmer registration.
- **Measurement Preferences:** One-click toggle between Metric ($^\circ\text{C}$, $\text{mm}$, $\text{ha}$) and Imperial ($^\circ\text{F}$, $\text{in}$, $\text{ac}$).

---

## 🛠️ Technology Stack
- **Frontend Framework:** React 18 with TypeScript & Vite
- **Geospatial & Satellite Mapping:** Leaflet 1.9 with NASA GIBS WMTS endpoints & ESRI World Imagery
- **Data Visualization & Analytics:** Recharts 2.15
- **Styling & HUD Design:** Tailwind CSS with custom emerald forest palette and neon glow effects
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

---

## 🛰️ NASA Data Sources & Open APIs
| Mission / Sensor | Source / Format | Agronomic Application |
| :--- | :--- | :--- |
| **NASA SMAP** | L3/L4 Passive Radiometry | Topsoil ($0-10\text{ cm}$) and Root-Zone ($10-100\text{ cm}$) volumetric moisture |
| **NASA MODIS** | Terra/Aqua Surface Reflectance | Normalized Difference Vegetation Index (NDVI) at 250m resolution |
| **NASA/NOAA VIIRS** | Suomi NPP Multispectral | 375m high-fidelity vegetative vigor and canopy thermal monitoring |
| **NASA GPM** | IMERG Multi-Satellite | Precipitation rates ($\text{mm/hr}$), 30-minute to daily accumulations |
| **NASA POWER** | Agroclimatology API | Temperature at 2m, relative humidity, solar insolation, reference $ET_0$ |
| **NASA GIBS** | WMTS / WMS Tile Services | Global Near-Real-Time satellite basemap imagery |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Launch

1. Clone or navigate to the project directory:
   ```bash
   cd c:\Users\bijog\Downloads\agrocycle
   ```

2. Install dependencies (already pre-installed):
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the displayed local address:
   ```
   http://localhost:5173
   ```

5. To build for production deployment:
   ```bash
   npm run build
   ```

---

## 📄 License & Attribution
- NASA satellite data provided through **NASA EOSDIS**, **NASA Earthdata**, **NASA GIBS**, and **NASA POWER**.
- Developed as a high-fidelity agricultural intelligence platform for exhibition and demonstration.

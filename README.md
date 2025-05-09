# DoulaConnect Lite

**DoulaConnect Lite** is a responsive, full-stack doula marketplace prototype built with **Next.js**, **FastAPI**, and **Tailwind CSS**. It enables users to explore trusted doulas, view profile information, and access a demo booking experience. This project demonstrates the technical design of a scalable, geo-aware care-matching platform for birth and postpartum support.

---
## Screenshots
<img width="1422" alt="doula-homepage" src="https://github.com/user-attachments/assets/c4b77c26-8fb7-43e7-8a9a-e2eeff657025" />
<img width="1371" alt="doula-find" src="https://github.com/user-attachments/assets/96f682e7-4c55-4e8c-87e6-0ec0b9af01c1" />
<img width="1434" alt="doula-book" src="https://github.com/user-attachments/assets/6dbc344b-9f90-497f-84a3-f4489d24caa0" />

## Features

- **Doula Directory UI**: Responsive card layout showcasing doulas and their specialties
- **Geolocation Messaging**: Explains platform’s location-based matching concept
- **Modern UI**: Beautiful, mobile-first gradient design using Tailwind CSS
- **Booking Form (Demo)**: Users can select a doula and submit a request with name, email, and notes
- **Modular Architecture**:
  - **Frontend**: React + Next.js App Router
  - **Backend**: FastAPI with CSV-based mock data (no DB required)
  - **Live styling** with custom fonts (Poppins + Montserrat via `next/font`)
- **Instant development setup** via local APIs and monorepo structure

---

## Tech Stack

- **Frontend**: Next.js 13+, React, Tailwind CSS, TypeScript
- **Backend**: FastAPI (Python), Pydantic, CSV for data mocking
- **Design**: Tailwind utility-first design system with gradient theming and responsive layouts
- **Deployment-ready** with Docker and optional microservice separation

---

## Getting Started (Local Setup)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/doula-connect-lite.git
cd doula-connect-lite
```

### 2. Set up the backend (FastAPI)
```bash
cd doula-connect-backend
python3 -m venv doulaenv
source doulaenv/bin/activate        # or doulaenv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 3. Run the frontend (Next.js + React)
```bash
cd doula-connect-frontend
npm install
npm run dev
```

The app will be live at http://localhost:3000
It will query http://localhost:8000/doulas/ to populate the directory and booking dropdown.

**Future Deployment**

To deploy this project in production:

***Frontend***
- Host on Vercel, Netlify, or Render
- Use NEXT_PUBLIC_API_URL env variable to point to backend

***Backend***
- Deploy FastAPI via Railway, Fly.io, or Render
- Add a real database (PostgreSQL) instead of CSV for scalability
- Optionally add authentication and doula availability scheduling

***Stretch Ideas***
- Add Stripe or payment gateway for booking
- Filter doulas by specialty or location
- Integrate Mapbox/Leaflet for visual doula discovery

## Credits
Developed by Gaurab Acharya as a demo for a pre-seed doula marketplace concept using modern full-stack tooling.

# Wild Oasis – Hotel Management Dashboard

Wild Oasis is a full-featured hotel and resort management dashboard designed to handle internal operations such as bookings, cabins, guests, and business analytics. The application focuses on clean architecture, real-world data handling, and production-ready patterns using modern React tooling.

Live dashboard: https://the-wild-oasis-496c.vercel.app/dashboard

---

## Overview

Wild Oasis is built as an internal admin dashboard for a boutique hotel or resort. It allows authenticated staff to manage day-to-day operations while providing a clear overview of performance through charts and statistics. The project emphasizes server-state management, URL-driven UI state, and scalable component design.

---

## Features

### Authentication & Authorization

Secure login system for staff members. Only authenticated users can access the dashboard and manage hotel data.

### Booking Management

View, filter, sort, and paginate bookings. Supports booking lifecycle actions such as check-in and check-out, and displays booking status clearly.

### Cabin Management

Create, edit, and delete cabins with details such as capacity, price, discounts, and images. Helps manage room inventory efficiently.

### Guest Management

Track guest information including personal details, nationality, ID, and booking history.

### Dashboard & Analytics

The dashboard provides key performance indicators such as:

- Recent bookings
- Occupancy rates
- Sales and revenue
- Stay duration statistics

Data is visualized using charts for quick insights.

### Settings

Global application settings such as breakfast pricing, minimum nights, and maximum guests can be configured from the dashboard.

### Dark Mode

Supports light and dark themes for improved usability.

---

## Tech Stack

- React
- React Router
- React Query (TanStack Query)
- Supabase (Database, Auth, Storage)
- Styled Components
- Recharts
- React Hook Form
- Vercel (Deployment)

## Usage

After logging in, users can:
• Monitor hotel performance from the dashboard
• Manage cabins and pricing
• Handle bookings and guest information
• Adjust application-wide settings

Pagination, filtering, and sorting are URL-driven, allowing state persistence across refreshes and shareable links.

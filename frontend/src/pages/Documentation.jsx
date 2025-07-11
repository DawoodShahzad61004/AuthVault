import React from "react";
import { Link } from "react-router-dom";
import websiteLogo from "../assets/authvault_icon.png";

const Documentation = () => {
  return (
    <div className="text-gray-800 bg-gradient-to-b from-white to-blue-50 min-h-screen overflow-y-auto">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src={websiteLogo} alt="AuthVault Logo" className="h-6 w-6" />
          <span className="font-bold text-lg text-gray-900">AuthVault</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm text-gray-700 hover:text-blue-600">Sign In</Link>
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center px-4 shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A transparent, user-first authentication platform—designed to secure your digital identity with confidence and care.
        </p>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <section className="bg-white shadow-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Mission</h2>
          <p>
            We aim to provide <strong>secure</strong>, <strong>transparent</strong>, and <strong>user-centric</strong> access management for individuals and businesses.
            AuthVault simplifies authentication while keeping your data private and protected at all times.
          </p>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white shadow-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Platform Overview</h2>
          <p className="mb-2">
            AuthVault is a scalable identity platform built with real-world authentication challenges in mind.
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Secure user registration and login flow</li>
            <li>JWT-based session management</li>
            <li>Role-based access control (User/Admin)</li>
            <li>Protected routes for authenticated experiences</li>
            <li>Editable user profile and account data</li>
          </ul>
        </section>

        <section className="bg-white shadow-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Privacy & Security</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>Zero Tolerance for Data Abuse:</strong> We never sell or monetize your personal data.</li>
            <li><strong>Encrypted Communication:</strong> All traffic is secured with HTTPS and encrypted end-to-end.</li>
            <li><strong>Hashed Passwords:</strong> Passwords are stored using salted bcrypt hashes—never as plain text.</li>
            <li><strong>Session Tokens:</strong> We use time-sensitive JWT tokens to ensure secure, stateless sessions.</li>
            <li><strong>Compliance:</strong> AuthVault adheres to GDPR, CCPA, and other major privacy laws.</li>
          </ul>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white shadow-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Access Control</h2>
          <table className="w-full mt-4 text-left border">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-4 py-2">Role</th>
                <th className="border px-4 py-2">Permissions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Guest</td>
                <td className="border px-4 py-2">Register, login, and browse public content</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">User</td>
                <td className="border px-4 py-2">Access dashboard, manage profile, view protected content</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Admin</td>
                <td className="border px-4 py-2">All user rights + elevated privileges on protected admin routes</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="bg-white shadow-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Platform Integrity</h2>
          <p>
            To protect our users and ensure long-term reliability, implementation details such as source code,
            backend architecture, database schemas, and proprietary logic are considered <strong>confidential</strong>.
            We believe transparency lies in how we handle your rights—not in exposing internal mechanics.
          </p>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white shadow-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Support</h2>
          <p>
            Our platform is built to be intuitive and self-explanatory. However, if you ever need assistance:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Use the built-in contact form or help widget</li>
            <li>Email our support team (24–48 hr response)</li>
            <li>We’re always improving—your feedback matters</li>
          </ul>
        </section>

        <section className="bg-white shadow-sm p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Final Note</h2>
          <p>
            AuthVault was created to help users feel secure, informed, and in control of their digital presence.
            Your privacy is a promise—not a feature.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0E1525] text-center text-sm text-gray-400 py-6">
        © 2025 <span className="text-white font-medium">AuthVault</span>. All rights reserved.
      </footer>
    </div>
  );
};

export default Documentation;

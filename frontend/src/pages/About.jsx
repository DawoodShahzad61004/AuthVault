import React, { useState } from "react";
import { Link } from "react-router-dom";
import websiteLogo from "../assets/authvault_icon.png";
import securityImage from "../assets/security-illustration.png";
import jamesImage from "../assets/james.png";
import sarahImage from "../assets/sarah.jpg";
import michaelImage from "../assets/michael.jpg";
import Documentation from "./Documentation"; // Assuming you have a Documentation components

const About = () => {
  const faqs = [
    {
      question: "How does AuthVault ensure password security?",
      answer:
        "AuthVault uses bcrypt hashing with configurable salt rounds to store passwords securely. This protects against brute force and rainbow table attacks.",
    },
    {
      question: "What authentication methods does AuthVault support?",
      answer:
        "AuthVault supports JWT tokens, refresh tokens, two-factor authentication (TOTP, SMS, email), and session-based login.",
    },
    {
      question: "How does session management work?",
      answer:
        "We provide advanced session monitoring, multi-device support, automatic logout, and concurrent session limits to enhance security.",
    },
    {
      question: "Is AuthVault compliant with data privacy regulations?",
      answer:
        "Yes. AuthVault is fully compliant with GDPR, CCPA, and other major privacy frameworks, offering users data portability and deletion rights.",
    },
    {
      question: "How quickly can I integrate AuthVault into my application?",
      answer:
        "You can get started in minutes using our SDKs, RESTful API, and developer-friendly documentation. Most users complete integration within an hour.",
    },
    {
      question: "What support options are available?",
      answer:
        "We offer 24/7 email and chat support, detailed docs, community forums, and dedicated onboarding help for enterprise customers.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="text-gray-800 bg-gradient-to-b from-white to-blue-50 min-h-screen overflow-y-auto">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src={websiteLogo} alt="AuthVault Logo" className="h-6 w-6" />
          <span className="font-bold text-lg text-gray-900">AuthVault</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#security" className="hover:text-blue-600">
            Security
          </a>
          <a href="#testimonials" className="hover:text-blue-600">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-blue-600">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm text-gray-700 hover:text-blue-600"
          >
            Sign In
          </Link>
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center px-4 shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Complete Authentication <br /> Made Simple
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          AuthVault provides enterprise-grade authentication solutions with JWT
          tokens, bcrypt security, and comprehensive session management. Build
          trust with your users through our battle-tested authentication
          platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/documentation">
            <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-blue-100">
              View Documentation
            </button>
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Join thousands of developers and businesses who rely on AuthVault for
          secure authentication solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-12 text-blue-600 font-semibold text-xl">
          <div>
            99.9%<p className="text-sm text-gray-500">Uptime SLA</p>
          </div>
          <div>
            50K+<p className="text-sm text-gray-500">Active Users</p>
          </div>
          <div>
            SOC 2<p className="text-sm text-gray-500">Compliant</p>
          </div>
          <div>
            24/7<p className="text-sm text-gray-500">Support</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Everything You Need for Authentication
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          AuthVault provides a complete authentication suite with advanced
          security features, seamless integration, and enterprise-grade
          reliability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "JWT Token Security",
              details: [
                "Configurable token expiration",
                "Automatic token refresh",
                "Secure token storage",
                "Cross-platform compatibility",
              ],
            },
            {
              title: "Bcrypt Password Hashing",
              details: [
                "Configurable salt rounds",
                "Rainbow table protection",
                "Brute force resistance",
                "OWASP compliance",
              ],
            },
            {
              title: "Profile Management",
              details: [
                "Customizable user fields",
                "Privacy controls",
                "Data synchronization",
                "Profile picture uploads",
              ],
            },
            {
              title: "Session Management",
              details: [
                "Multi-device sessions",
                "Automatic logout",
                "Session monitoring",
                "Concurrent session limits",
              ],
            },
            {
              title: "Two-Factor Authentication",
              details: [
                "TOTP authenticator support",
                "SMS verification",
                "Email verification",
                "Backup codes",
              ],
            },
            {
              title: "API Integration",
              details: [
                "RESTful API design",
                "Multiple SDK support",
                "Webhook notifications",
                "Rate limiting",
              ],
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-4">{feature.title}</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                {feature.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Enterprise-Grade Security
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          AuthVault meets the highest security standards with compliance
          certifications and advanced protection mechanisms.
        </p>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img
            src={securityImage}
            alt="Secure payment"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <ul className="space-y-4 text-gray-700 text-base">
            <li>
              ✅ <strong>GDPR & CCPA Compliant:</strong> Full compliance with
              global privacy regulations including data portability and right to
              deletion.
            </li>
            <li>
              ✅ <strong>SOC 2 Type II Certified:</strong> Independently audited
              security controls and operational effectiveness.
            </li>
            <li>
              ✅ <strong>256-bit AES Encryption:</strong> Data encrypted at rest
              and in transit using military-grade standards.
            </li>
            <li>
              ✅ <strong>Regular Security Audits:</strong> Quarterly penetration
              testing and continuous monitoring.
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="testimonials" className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          See how AuthVault has helped businesses streamline their
          authentication processes while maintaining the highest security
          standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote:
                "AuthVault transformed our user authentication process. The JWT implementation is seamless and the security features give us complete peace of mind. Setup took less than an hour.",
              name: "Michael Chen",
              title: "CTO, TechFlow",
              image: michaelImage,
            },
            {
              quote:
                "The bcrypt password hashing and 2FA features provided the security level our enterprise clients demanded. AuthVault's API documentation is exceptional and made integration effortless.",
              name: "Sarah Rodriguez",
              title: "Lead Developer, DataSecure",
              image: sarahImage,
            },
            {
              quote:
                "AuthVault's session management capabilities are outstanding. The multi-device support and automatic logout features have significantly improved our user experience and security posture.",
              name: "James Wilson",
              title: "Product Manager, CloudBase",
              image: jamesImage,
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Common questions about AuthVault's authentication solutions
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 bg-white text-sm text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#0E1525] text-center text-sm text-gray-400 py-6">
        © 2025 <span className="text-white font-medium">AuthVault</span>. All
        rights reserved.
      </footer>
    </div>
  );
};

export default About;

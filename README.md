# 🔐 AuthVault – Secure Access Management Platform

> **“Secure user access and identity management built with modern MERN practices.”**

AuthVault is a full-stack authentication and authorization system designed to simulate real-world SaaS and dashboard-level authentication flows. It provides a secure and scalable user management solution built using the **MERN stack** (MongoDB, Express, React, Node.js) and includes features like JWT authentication, role-based access control, and profile management.

---

## 🚀 Features for Users

AuthVault provides a complete suite of features for **registered users**, ensuring a smooth and secure experience:

### ✅ Authentication & Account Management

- **User Registration**
  - Secure sign-up with form validation
  - Password hashing using **bcrypt**
  - Duplicate email checks and error feedback

- **User Login**
  - Login with email and password
  - Instant toast notifications for success or errors (e.g., invalid credentials)
  - Token-based authentication using **JWT**

- **Session Management**
  - Secure session handling using JWT tokens
  - Optional "Remember Me" feature for persistent login (bonus)

- **Logout**
  - Clears session/token and redirects user securely

---

### 👤 Profile Management

- **View & Edit Profile**
  - Authenticated users can view their profile data
  - Editable fields: name, email, etc.
  - Feedback on update success or errors

- **Password Update (Planned)**
  - Secure password change flow (bonus feature)

---

### 🔐 Protected Routes

- **/dashboard**
  - Personalized welcome page for logged-in users
  - Accessible only to authenticated users

- **/profile**
  - Allows users to view/edit their account info

- **/admin**
  - Only accessible by users with the `Admin` role
  - Prevents unauthorized access via role-checking middleware

---

### 🛡️ Security Features

- **JWT-Based Authentication**
  - Access tokens stored securely in memory/local storage
  - Middleware-protected routes

- **Role-Based Access Control (RBAC)**
  - Admin/User roles defined in the database
  - Middleware verifies user role before granting access

- **Password Hashing & Salting**
  - All passwords are hashed using `bcrypt` for enhanced security

- **Authorization Middleware**
  - Protects sensitive backend routes from unauthorized access

---

### 🎨 Frontend Experience

- **React + Tailwind UI**
  - Clean, responsive forms and layouts
  - Mobile-first design
  - Centered and elegant form components

- **Toast Notifications**
  - Success/error feedback via toasts (e.g., login success, email already exists)

- **Role Badges**
  - UI display of whether the user is a standard User or Admin

- **Loading States & Error Handling**
  - User-friendly feedback during async actions

---

### 🗂️ Project Structure

#### Frontend: `/client`

- Built with **React + Tailwind CSS**
- Pages:
  - `/register`
  - `/login`
  - `/dashboard`
  - `/profile`
  - `/admin`
  - `/logout`
  - `/about` (optional)
- `AuthContext.js` handles global authentication state

#### Backend: `/server`

- **Node.js + Express + MongoDB**
- Controllers:
  - `authController.js`
  - `userController.js`
- Middleware:
  - `authMiddleware.js` – for token verification
  - `roleMiddleware.js` – for role-based access
- Models:
  - `User.js`
- Routes:
  - `authRoutes.js`
  - `userRoutes.js`
- `.env` – for managing secrets like JWT keys and DB URIs

---

## 🧪 Bonus Features (Planned / Optional)

| Feature                  | Benefit                              |
|--------------------------|--------------------------------------|
| 🔁 Refresh token flow     | Enterprise-grade session management  |
| 📧 Email Verification     | Trust building & spam prevention     |
| 🔄 Password Reset         | Standard recovery workflow           |
| ✅ Remember Me Option     | Better UX during login               |
| 📱 2FA (Two-Factor Auth)  | Strong security for admin access     |

---

## 🌐 Deployment

- **Frontend:** Vercel or Netlify
- **Backend:** Railway or Render
- **Database:** MongoDB Atlas

---

## 📣 Tech Stack

- **Frontend:** React, TailwindCSS, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JWT, bcrypt
- **Dev Tools:** Postman, GitHub, Vite

---

## 📄 License

This project is open-source and free to use under the MIT License.

---

## 🙌 Acknowledgements

Built as a real-world authentication solution to showcase secure access control, full-stack integration, and role-based features in a MERN environment.

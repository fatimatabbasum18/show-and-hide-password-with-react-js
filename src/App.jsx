import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">

      <div className="password-card">

        <h1>🔐 Password</h1>
        <p className="subtitle">
          Enter your password securely
        </p>

        <div className="input-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />

          <button
            className="show-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>

        </div>

        <p className="status">
          {showPassword
            ? "👁 Password is visible"
            : "🔒 Password is hidden"}
        </p>

      </div>

    </div>
  );
}

export default App;
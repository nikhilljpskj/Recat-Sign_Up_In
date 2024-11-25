import React, { useState } from "react";
import "./Authentication.css";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", password: "", confirmPassword: "" };
    let valid = true;

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = "Name is required";
        valid = false;
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Proceed with the form submission logic
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="auth-container">
      {/* Left Section */}
      <div className="left-section">
        <h1>Move Fast. <br /> Break Nothing.</h1>
        <div className="info-item">
          <div className="icon-placeholder">||</div>
          <div>
            <h3>Remove Bottlenecks</h3>
            <p>Release testing and approvals are the most common bottlenecks for tech. With HipHops, you can remove them.</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon-placeholder">[]</div>
          <div>
            <h3>Access Risk Analysis</h3>
            <p>We use machine learning and static analysis to assess risks and automate release management tasks.</p>
          </div>
        </div>
        <div className="brand-logo">HipHops</div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="form-container">
          {isLogin ? (
            <>
              <h2>Welcome Back</h2>
              <p>
                Don't have an account?{" "}
                <span className="link" onClick={toggleAuth}>
                  Sign Up
                </span>
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <button className="btn" type="submit">
                  Login
                </button>
              </form>
              <div className="or-section">or login with</div>
              <div className="social-login">
                <button className="google-btn">
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="me-2"
                  />
                  Sign in with Google
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>Create an Account</h2>
              <p>
                Already have an account?{" "}
                <span className="link" onClick={toggleAuth}>
                  Sign In
                </span>
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
                <button className="btn" type="submit">
                  Sign Up
                </button>
              </form>
              <div className="or-section">or sign up with</div>
              <div className="social-login">
                <button className="google-btn">
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="me-2"
                  />
                  Sign up with Google
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authentication;

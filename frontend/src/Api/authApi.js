// src/api/authApi.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const authApi = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signin`, credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data?.detail || 'Sign in failed';
    }
  },

  signUp: async (name, email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.detail || 'Sign up failed';
    }
  },

  // ✅ OTP Verification
  verifyOtp: async ({ email, otp_code }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/verify-email`, {
        email,
        otp_code,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.detail || 'OTP verification failed';
    }
  },

  // 🔁 Resend OTP
  resendOtp: async (email) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/resend-otp`, {
        email,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.detail || 'Resend OTP failed';
    }
  },
};

export default authApi;

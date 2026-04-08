// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  THEME_PREFERENCE: 'theme_preference',
  SAVED_ROUTES: 'saved_routes',
};

// API endpoints (for future use)
export const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  PROFILE: '/api/user/profile',
  ROUTES: '/api/routes',
  RIDE_STATS: '/api/rides/stats',
};

// Common error messages
export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  PASSWORD_TOO_SHORT: 'Password must be at least 8 characters',
  PASSWORDS_DONT_MATCH: 'Passwords do not match',
  REQUIRED_FIELD: 'This field is required',
  NETWORK_ERROR: 'Network error. Please try again.',
  UNKNOWN_ERROR: 'An unknown error occurred.',
};

// Success messages
export const SUCCESS_MESSAGES = {
  REGISTRATION_COMPLETE: 'Registration successful! Welcome to SeeCar.',
  LOGIN_SUCCESSFUL: 'Welcome back!',
  PROFILE_UPDATED: 'Profile updated successfully.',
};

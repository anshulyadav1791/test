// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

// Format distance
export const formatDistance = (km: number): string => {
  if (km >= 1) {
    return `${km.toFixed(1)} km`;
  }
  return `${Math.round(km * 1000)} m`;
};

// Format duration
export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

// Calculate difficulty color
export const getDifficultyColor = (level: string): string => {
  switch (level.toLowerCase()) {
    case 'easy':
      return '#22c55e';
    case 'moderate':
      return '#ff8a1c';
    case 'hard':
      return '#ef4444';
    default:
      return '#999';
  }
};

// Mock authentication
export const mockLogin = async (email: string, password: string): Promise<boolean> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(email.includes('@') && password.length >= 8);
    }, 1000);
  });
};

// Mock registration
export const mockRegister = async (name: string, email: string, password: string): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name.length > 0 && email.includes('@') && password.length >= 8);
    }, 1000);
  });
};

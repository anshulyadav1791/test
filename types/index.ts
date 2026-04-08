export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface RouteItem {
  id: string;
  name: string;
  distance: string;
  level: 'Easy' | 'Moderate' | 'Hard';
  icon: string;
  duration?: string;
  elevation?: string;
}

export interface MaintenanceTask {
  id: string;
  task: string;
  due: string;
  icon: string;
  priority?: 'low' | 'medium' | 'high';
}

export interface RideStats {
  label: string;
  value: string;
  icon: string;
}

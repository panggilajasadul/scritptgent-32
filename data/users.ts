import { User } from '../types';

export const DEFAULT_USERS: User[] = [
  {
    id: '1',
    username: 'admin',
// FIX: Removed the 'password' property as it does not exist on the User type.
    role: 'admin',
    status: 'active',
    expiresAt: null, // Lifetime
    durationDays: null,
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    scriptsGenerated: 5,
    loginHistory: [],
    isSuspicious: false,
    uniqueDeviceCountLast30Days: 0,
    directMessage: null,
  },
  {
    id: '2',
    username: 'user',
// FIX: Removed the 'password' property as it does not exist on the User type.
    role: 'user',
    status: 'active',
    expiresAt: null, // Will be set on first login
    durationDays: 30, // 30 days duration
    createdAt: new Date().toISOString(),
    lastLogin: null,
    scriptsGenerated: 12,
    loginHistory: [],
    isSuspicious: false,
    uniqueDeviceCountLast30Days: 0,
    directMessage: null,
  },
];

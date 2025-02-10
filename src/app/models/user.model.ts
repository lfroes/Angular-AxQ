export interface User {
  name: string;
  email: string;
  role: string;
  lastSeen: string | Date | null;
  online: boolean;
  image: string;
}

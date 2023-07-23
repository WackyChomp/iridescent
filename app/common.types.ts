import { User, Session } from 'next-auth';


// Adds more properties to session
export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  description: string | null;
  githubUrl: string | null;
  linkedinUrl: string | null;
}
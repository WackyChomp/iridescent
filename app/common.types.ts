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
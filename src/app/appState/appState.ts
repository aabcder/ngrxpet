import { User } from '../models/user';

export interface AppState {
  user: User,
  sidebarOpenState: boolean
}


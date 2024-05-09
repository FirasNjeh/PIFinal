/* tslint:disable */
/* eslint-disable */
import { ReponseRc } from '../models/reponse-rc';
import { User } from '../models/user';
export interface Reclamation {
  dateRC?: string;
  description?: string;
  id?: number;
  objet?: string;
  priorityLevel?: 'LOW' | 'HIGH' | 'MEDIUM' | 'URGENT';
  reponseRC?: ReponseRc;
  statusRC?: 'TRAITEE' | 'EN_ATTENTE';
  typeRC?: 'NEW' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  userReclamation?: User;
}

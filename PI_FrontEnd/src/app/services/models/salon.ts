/* tslint:disable */
/* eslint-disable */
import { Question } from '../models/question';
export interface Salon {
  date_creation?: string;
  id?: number;
  nbr_place?: number;
  nom?: string;
  questions?: Array<Question>;
  status_salon?: 'OUVERT' | 'FERME' | 'COMPLET' | 'DISPONIBLE';
  theme?: string;
}

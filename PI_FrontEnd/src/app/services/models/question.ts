/* tslint:disable */
/* eslint-disable */
import { ReponseQ } from '../models/reponse-q';
import { Salon } from '../models/salon';
export interface Question {
  auteur?: string;
  description?: string;
  id?: number;
  prioriteQ?: 'URGENT' | 'NON_URGENT';
  rating?: number;
  reponseQS?: Array<ReponseQ>;
  salonQ?: Salon;
  statusQ?: 'RESOLU' | 'NON_RESOLU';
  theme?: string;
}

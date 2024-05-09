/* tslint:disable */
/* eslint-disable */
import { Portefeuille } from '../models/portefeuille';
export interface CreditCard {
  cvv?: number;
  date_valide?: string;
  id_number?: number;
  num_card?: number;
  portefeuilleCreditCard?: Portefeuille;
}

/* tslint:disable */
/* eslint-disable */
import { Portefeuille } from '../models/portefeuille';
export interface TransactionCredit {
  date?: string;
  id?: number;
  montant?: number;
  portefeuilleTransaction?: Portefeuille;
  rib_destination?: number;
  rib_source?: number;
  typeTransaction?: 'VIREMENT' | 'VERSEMENT';
}

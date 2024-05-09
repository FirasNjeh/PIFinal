/* tslint:disable */
/* eslint-disable */
import { AcheteurFactoring } from '../models/acheteur-factoring';
import { User } from '../models/user';
export interface ContratFactoring {
  acheteurFactorings?: Array<AcheteurFactoring>;
  adherant?: string;
  date?: string;
  delaiPaiement?: 'COURT' | 'LONG' | 'VARIABLE';
  historique?: 'FIABLE' | 'VARIABLE' | 'DOUTEUX';
  id?: number;
  plafond?: number;
  ref?: number;
  solvabilite?: 'SOLVABLE' | 'NON_SOLVABLE' | 'NE_SAIS_PAS';
  taux_avance?: number;
  taux_comm?: number;
  user?: User;
}

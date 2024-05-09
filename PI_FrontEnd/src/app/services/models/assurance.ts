/* tslint:disable */
/* eslint-disable */
import { PackAssur } from '../models/pack-assur';
import { Sinistre } from '../models/sinistre';
import { User } from '../models/user';
export interface Assurance {
  date_payement?: string;
  date_remboursement?: string;
  franchise?: number;
  id?: number;
  montant_prime?: number;
  packAssur?: PackAssur;
  packAssurance?: 'AGRICOLE' | 'SANTE' | 'ENTREPRENEUR' | 'PERTE_EMPLOI' | 'VIE';
  remboursement?: number;
  sinistres?: Array<Sinistre>;
  userAssurance?: User;
}

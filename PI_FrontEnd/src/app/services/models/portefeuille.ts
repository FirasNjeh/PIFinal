/* tslint:disable */
/* eslint-disable */
import { CreditCard } from '../models/credit-card';
import { TransactionCredit } from '../models/transaction-credit';
import { User } from '../models/user';
export interface Portefeuille {
  creditCards?: Array<CreditCard>;
  date_creation?: string;
  id?: number;
  montant?: number;
  rib?: number;
  statuspf?: 'ACTIVE' | 'INACTIVE' | 'BLOQUER';
  transactions?: Array<TransactionCredit>;
  user?: User;
}

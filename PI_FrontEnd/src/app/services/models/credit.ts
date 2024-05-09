/* tslint:disable */
/* eslint-disable */
import { Garant } from '../models/garant';
import { PackCr } from '../models/pack-cr';
import { User } from '../models/user';
export interface Credit {
  dateDeb?: string;
  dateFin?: string;
  duree?: number;
  garant?: Garant;
  id?: number;
  montant?: number;
  packCR?: PackCr;
  packCredit?: 'ENTREPREUNARIAT' | 'AGRICULTURE' | 'ELEVAGE' | 'EDUCATION' | 'URGENCE_FINANCIERE' | 'FORMATION' | 'PROFESSIONNEL';
  paiementMensuel?: number;
  realtionGarant?: 'PARENT' | 'AMI' | 'CONJOINT';
  statusCredit?: 'EN_ATTENTE' | 'APPROUVE' | 'REFUSE';
  tauxInteret?: number;
  userCR?: User;
}

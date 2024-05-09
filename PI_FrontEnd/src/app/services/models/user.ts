/* tslint:disable */
/* eslint-disable */
import { Assurance } from '../models/assurance';
import { ContratFactoring } from '../models/contrat-factoring';
import { Credit } from '../models/credit';
import { GrantedAuthority } from '../models/granted-authority';
import { NewsBaha } from '../models/news-baha';
import { Portefeuille } from '../models/portefeuille';
import { Reclamation } from '../models/reclamation';
import { Salon } from '../models/salon';
import { Token } from '../models/token';
export class User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  adresse?: string;
  age?: number;
  assurances?: Array<Assurance>;
  authorities?: Array<GrantedAuthority>;
  banni?: boolean;
  cin?: number;
  contratFactorings?: Array<ContratFactoring>;
  credentialsNonExpired?: boolean;
  credits?: Array<Credit>;
  dateNaissance?: string;
  email?: string;
  enabled?: boolean;
  genre?: 'HOMME' | 'FEMME';
  id?: number;
  image?: string;
  matriculeFiscale?: number;
  mdp?: string;
  newsBaha?: Array<NewsBaha>;
  nom?: string;
  numtel?: number;
  password?: string;
  portefeuilleUser?: Portefeuille;
  prenom?: string;
  profession?: string;
  reclamations?: Array<Reclamation>;
  role?: 'ADMIN' | 'CLIENT';
  salaire?: number;
  salons?: Array<Salon>;
  tokens?: Array<Token>;
  username?: string;
}

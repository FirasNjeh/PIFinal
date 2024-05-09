/* tslint:disable */
/* eslint-disable */
import { Credit } from "./Credit";
export class User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  adresse?: string;
  age?: number;
  banni?: boolean;
  cin?: number;
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
  nom?: string;
  numtel?: number;
  password?: string;
//   portefeuilleUser?: Portefeuille;
  prenom?: string;
  profession?: string;
  role?: 'ADMIN' | 'CLIENT';
  salaire?: number;
  username?: string;
  nbr_credit?:number;
}
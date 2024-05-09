/* tslint:disable */
/* eslint-disable */
export interface RegisterRequest {
  adresse?: string;
  age?: number;
  banni?: boolean;
  cin?: number;
  dateNaissance?: string;
  email?: string;
  genre?: 'HOMME' | 'FEMME';
  mdp?: string;
  nom?: string;
  numtel?: number;
  prenom?: string;
  profession?: string;
  role?: 'ADMIN' | 'CLIENT';
  salaire?: number;
  mfEnabled?: string;
}

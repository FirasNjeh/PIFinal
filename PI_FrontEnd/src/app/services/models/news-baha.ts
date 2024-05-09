/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface NewsBaha {
  categorie?: 'PROMOTION' | 'TENDANCE_ET_ACTUALITE';
  dateCreation?: string;
  description?: string;
  id?: number;
  image?: string;
  nbr_dislike?: number;
  nbr_like?: number;
  titre?: string;
  userNews?: Array<User>;
}

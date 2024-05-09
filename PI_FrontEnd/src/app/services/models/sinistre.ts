/* tslint:disable */
/* eslint-disable */
import { Assurance } from '../models/assurance';
export interface Sinistre {
  assuranceSinistre?: Array<Assurance>;
  dateSinistre?: string;
  description?: string;
  estimation_expert?: number;
  id?: number;
  image?: string;
  lieu?: string;
}

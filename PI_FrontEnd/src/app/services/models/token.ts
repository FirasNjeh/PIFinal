/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Token {
  expired?: boolean;
  id?: number;
  revoked?: boolean;
  token?: string;
  tokenType?: 'BEARER';
  userToken?: User;
}

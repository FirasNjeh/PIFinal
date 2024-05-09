import { Credit, PackCredit } from "./Credit";

export interface PackCR{
    id:number;
    nom:String;
    description:String;
    montantMin:number;
    montantMax:number;
    image:String;
    nomImage:String;
    packCredit:PackCredit;

    //Les relations
    CreditP:Credit[];
}
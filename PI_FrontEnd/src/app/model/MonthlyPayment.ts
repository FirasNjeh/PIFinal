import { Credit } from "./Credit";

export enum StatusMonthlyPayment{

    RESOLVED='RESOLVED', FAILED='FAILED'
}

export interface MonthlyPayment {
    id:number;
    SupposedDate:Date;
    paymentDate:Date;
    lateDays:number;
    montant:number;
    status:StatusMonthlyPayment;

    //Les relations
    creditM:Credit;
}
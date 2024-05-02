import { Garant } from "./Garant";
import { MonthlyPayment } from "./MonthlyPayment";
import { PackCR } from "./PackCR";
import { User } from "./User";

export enum CreditHistory{
    NONE_PAYED_YET='NONE_PAYED_YET',
    ALL_PAID_IN_TIME='ALL_PAID_IN_TIME',
    RESPONSIBLY_PAID='RESPONSIBLY_PAID',
    DELAY='DELAY',
    CRITICAL='CRITICAL',
    NONE_TAKEN='NONE_TAKEN'

}

export enum PackCredit{ 
    AGRICULTURE='AGRICULTURE',
    ENTREPRENARIAT='ENTREPREUNARIAT',
    ELEVAGE='ELEVAGE',
    EDUCATION='EDUCATION',
    URGENCE_FINANCIERE='URGENCE_FINANCIERE',
    FORMATION='FORMATION',
    PROFESSIONNEL='PROFESSIONNEL'

}

export enum StatusCredit{
    EN_ATTENTE='EN_ATTENTE',
    APPROUVE='APPROUVE',
    REFUSE='REFUSE',
    CLOTURE='CLOTURE'

}

export enum RelationGarant{
    PARENT='Parent',AMI='AMI',CONJOINT='CONJOINT'

}

export enum TypeCredit{
    ANNUITE_CONSTANTE='ANNUITE_CONSTANTE'

}


export interface Credit {
    id: number;
    montant:number;
    montantRestant:number;
    dateDeb:Date;
    datepp:Date;
    paiementMensuel:number;
    amortissement:number;
    annuite:number;
    lateTimes:number;
    creditHistory:CreditHistory;
    packCredit:PackCredit;
    tauxInteret:number;
    duree:number;
    statusCredit:StatusCredit;
    realtionGarant:RelationGarant;
    typeCredit:TypeCredit;

    //Les relations 
    packCR:PackCR;
    user:User;
    garant:Garant;
    monthlyPayment:MonthlyPayment[];


}
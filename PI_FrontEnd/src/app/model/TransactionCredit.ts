export enum TypeTransaction{
    REMBOURSEMENT='REMBOURSEMENT',
    VERSEMENT='VERSEMENT'

}

export interface TransactionCredit{
    id:number;
    date:Date;
    rib_source:number;
    rib_destination:number;
    montant:number;
    typeTransaction:TypeTransaction;

    //Les relations
    //portefeuilleTransaction:Portefeuille;

}
package esprit.pi.demo.Services.Nermine;


import esprit.pi.demo.entities.Nermine.TransactionCredit;

import java.util.List;

public interface ITransactionCService {
    TransactionCredit saveTransactionC(TransactionCredit transactionCredit,int id);
    List<TransactionCredit> getTransactionsC();
    TransactionCredit getTransactionCById(int id);
    String deleteTransactionC (int id);
    TransactionCredit updateTransactionC(int id, TransactionCredit transactionCredit);
}

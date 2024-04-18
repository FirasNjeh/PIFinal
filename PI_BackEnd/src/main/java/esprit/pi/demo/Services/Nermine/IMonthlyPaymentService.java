package esprit.pi.demo.Services.Nermine;

import esprit.pi.demo.entities.Nermine.MonthlyPayment;

import java.util.List;

public interface IMonthlyPaymentService {
    MonthlyPayment add(int id,MonthlyPayment mp,float montant);
    MonthlyPayment edit(int id,MonthlyPayment mp);
    List<MonthlyPayment> selectAll();
    MonthlyPayment selectById(int numPayment);
    void deleteById(int numPayment);
    List<MonthlyPayment> addAll(List<MonthlyPayment> list);
    int calculateLateDays(int idc,int id);
    List<MonthlyPayment> getCreditMonthlyPayment(int idCredit);

}

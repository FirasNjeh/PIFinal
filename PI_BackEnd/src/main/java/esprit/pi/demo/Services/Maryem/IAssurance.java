package esprit.pi.demo.Services.Maryem;
import esprit.pi.demo.DTO.Maryem.AgricoleAssuranceDTO;
import esprit.pi.demo.DTO.Maryem.EntrepreneurAssuranceDTO;
import esprit.pi.demo.DTO.Maryem.SanteAssuranceDTO;
import esprit.pi.demo.DTO.Maryem.ScolaireAssuranceDTO;

import esprit.pi.demo.entities.Enumeration.*;
import esprit.pi.demo.entities.Maryem.Assurance;

import java.util.List;
import java.util.Set;

public interface IAssurance {


    Assurance saveAssurance(Assurance assurance);
    List<Assurance> getAssurance();
    Assurance getAssuranceById(int id);
    void deleteAssurance(int id);

    // @Override
    //role : adminn+agent
    //    public Assurance updateAssurance(int id , Assurance assurance ){
    //        Assurance existingAssurance=repository.findById(assurance.getId()).orElse(null);
    //        existingAssurance.setDate_payement(assurance.getDate_payement());
    //        existingAssurance.setDate_remboursement(assurance.getDate_remboursement());
    //        existingAssurance.setMontant_prime(assurance.getMontant_prime());
    //        existingAssurance.setRemboursement(assurance.getRemboursement());
    //        return repository.save(existingAssurance);
    //
    //
    //    }
    Set<Assurance> getListAssurancesByPackAssur(int idpack);

    Set<Assurance> getListAssurancesByUser(int iduser);
    Long countAssurancesByUser(int userId);

    Long countAssurancesByUserLastNYear(Integer userId, Integer n);

    Long countSinistresByUser(int userId);

    Long countSinistresByPackAssurId(int idpack);

    Long countSinistresByUserLastNYear(int userId, int n);


    Assurance createScolaireAssurance(int iduser, int packId, ScolaireAssuranceDTO scolaireAssuranceDTO);

    Assurance createEntrepreneurAssurance(int iduser, int packId, EntrepreneurAssuranceDTO entrepreneurAssuranceDTO);

    Assurance createSanteAssurance(int iduser, int packId, SanteAssuranceDTO santeAssuranceDTO);

    Assurance createAgricoleAssurance(int iduser, int packId, AgricoleAssuranceDTO agricoleAssuranceDTO);

    float CalculScolairePrime(float capitalescolaire_assuré);


    float CalculENTREPRENEURPrime(TypeAssuranceEntrep typeAssuranceEntrep, BienAssuré bienAssuré);

    float CalculSANTEPrime(TypeAssuranceSante typeAssuranceSante, int age, Gender gender);

    float CalculAgriculturePrime(float capitalAgricole_assuré, TypeAgriculture typeAgriculture);


    // Assurance updateAssurance(int id , Assurance assurance);


}

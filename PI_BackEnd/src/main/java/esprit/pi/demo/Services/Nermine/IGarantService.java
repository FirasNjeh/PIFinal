package esprit.pi.demo.Services.Nermine;

import esprit.pi.demo.entities.Nermine.Garant;

import java.util.List;

public interface IGarantService {
    Garant saveGarant(Garant garant);
    List<Garant> getGarants();
    Garant getById(int id);
    List<Garant> getGarantByLastName(String Nom);
    String deleteGarant (int id);
    Garant updateGarant(int id,Garant garant);
}

package esprit.pi.demo.Services.Firas;

import esprit.pi.demo.entities.Firas.Portefeuille;

import java.util.List;

public interface IPortefeuilleService {
    Portefeuille creer(Portefeuille portefeuille);
    List<Portefeuille> lire();
    Portefeuille getPortefeuilleById (int id);
    Portefeuille modifier(int id, Portefeuille portefeuille);
    String supprimer(int id);
}

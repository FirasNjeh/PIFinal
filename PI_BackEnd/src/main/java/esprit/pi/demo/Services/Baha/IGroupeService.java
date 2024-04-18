package esprit.pi.demo.Services.Baha;

import esprit.pi.demo.entities.Baha.Groupe;

public interface IGroupeService {
    Groupe addGroupe (Groupe g);

    void  removeGroupe (long idGroupe);

}

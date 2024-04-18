package esprit.pi.demo.Services.Baha;

import esprit.pi.demo.entities.Baha.Groupe;
import esprit.pi.demo.Repository.Baha.GroupeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class GroupeService implements IGroupeService{


    GroupeRepository groupeRepository;

    @Override
    public Groupe addGroupe(Groupe g) {
        return groupeRepository.save(g);
    }


    @Override
    public void removeGroupe(long idGroupe) {
        groupeRepository.deleteById(idGroupe);

    }
}

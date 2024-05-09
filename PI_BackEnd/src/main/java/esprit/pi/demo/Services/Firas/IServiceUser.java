package esprit.pi.demo.Services.Firas;

import esprit.pi.demo.DTO.Firas.AgeGroupStatisticsDTO;
import esprit.pi.demo.DTO.Firas.ChangePasswordRequest;
import esprit.pi.demo.DTO.Firas.UpdateUserRequest;
import esprit.pi.demo.entities.Firas.User;
import esprit.pi.demo.DTO.Firas.GenderStatisticsDTO;

import java.security.Principal;
import java.util.List;

public interface IServiceUser {
    User creer(User user);
    List<User> lire();
    User getUserById (int id);
    void supprimer(int id);
    User modifier(int id, User user);
    List <User> trierUtilisateurParNom();
    List <User> trierUtilisateurParPrenom();
    List <User> trierUtilisateurParSalaireCroissant();
    List <User> trierUtilisateurParSalaireDecroissant();
    List <User> trierUtilisateurParAge();
    List <User> trierUtilisateurParRole();

    List<User> findByNom(String nom);
    List<User> findByPrenom(String prenom);
    List<User> findByPrenomAndNom(String prenom,String nom);
    User findByCinLike(int cin);
    User findByMatricule_fiscale(int matriculeFiscale);
    double calculerAgeMoyenUsers();
     GenderStatisticsDTO obtenirStatistiquesGenre();
    AgeGroupStatisticsDTO obtenirStatistiquesTranchesAge();
    void changePassword(ChangePasswordRequest request, Principal connectedUser);
    void banUser(int userId);
    void debanUser(int userId);

    User getCurrentUser(Principal connectedUser) ;
    void updateCurrentUser(Principal connectedUser, UpdateUserRequest updatedUser);
    int nbreTotalUtilisateurs();
    double calculerSalaireMoyen();


}

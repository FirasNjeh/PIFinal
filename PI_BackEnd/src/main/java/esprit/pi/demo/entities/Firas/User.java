package esprit.pi.demo.entities.Firas;

import com.fasterxml.jackson.annotation.JsonIgnore;
import esprit.pi.demo.entities.Baha.*;
import esprit.pi.demo.entities.Enumeration.Genre;
import esprit.pi.demo.entities.Enumeration.Role;
import esprit.pi.demo.entities.Maryem.Assurance;
import esprit.pi.demo.entities.Nermine.Credit;
import esprit.pi.demo.entities.Soumaya.Reclamation;
import esprit.pi.demo.entities.Baha.Salon;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Builder
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private String prenom;
    private int cin;
    private LocalDate dateNaissance;
    private int age;
    private int numtel;
    @Column(unique = true)
    private String email;
    private String adresse;
    private String mdp;
    private String profession;
    @Enumerated(EnumType.STRING)
    private Genre genre;
    @Enumerated(EnumType.STRING)
    private Role role;
    private int nbr_credit;
    private int AncienneteEmploi;
    private boolean etat;
    private String image;
    private float salaire;
    private int matriculeFiscale;
    @Getter
    private boolean banni;
    //double authentification
    private boolean mfEnabled;
    private String secret;
    @JsonIgnore
    @ToString.Exclude
    @OneToOne(cascade = CascadeType.ALL)
    private Portefeuille portefeuilleUser;
    @JsonIgnore
    @ToString.Exclude
    @ManyToMany(mappedBy = "userNews",cascade = CascadeType.ALL)
    private List<NewsBaha> newsBaha;
    @JsonIgnore
    @ToString.Exclude
    @OneToMany(mappedBy = "userAssurance",cascade = CascadeType.ALL)
    private List <Assurance> assurances;
    @JsonIgnore
    @ToString.Exclude
    @OneToMany (mappedBy = "userCR",cascade = CascadeType.ALL)
    private List<Credit> credits;
    @JsonIgnore
    @ToString.Exclude
   @OneToMany(mappedBy = "userReclamation",cascade = CascadeType.ALL)
    private List<Reclamation> reclamations;
    @JsonIgnore
    @ToString.Exclude
   @ManyToMany(mappedBy = "usersSalon",cascade = CascadeType.ALL)
    private List <Salon> salons;
    @JsonIgnore
    @ToString.Exclude
    @OneToMany(mappedBy = "userToken",cascade = CascadeType.ALL)
    private List<Token> tokens;
    @JsonIgnore
    @ToString.Exclude
    @OneToOne(mappedBy = "sender",cascade = CascadeType.ALL)
    private MessageChat messageSender;
    @JsonIgnore
    @OneToOne(mappedBy = "receiver",cascade = CascadeType.ALL)
    private MessageChat messageReceiver;

    @JsonIgnore
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<Post> posts;
    @JsonIgnore
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<Comment> comments;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Groupe groupe;
    @JsonIgnore
    @OneToMany (mappedBy = "userNotif",cascade = CascadeType.ALL)
    private List<Notification> notifications;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthorities();
    }


    @Override
    public String getPassword() {
        return this.mdp;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

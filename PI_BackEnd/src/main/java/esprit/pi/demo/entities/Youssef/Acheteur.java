package esprit.pi.demo.entities.Youssef;

import com.fasterxml.jackson.annotation.JsonIgnore;
import esprit.pi.demo.entities.Enumeration.FormeJuridique;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Acheteur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long matriculeFiscale;
    private String raisonSociale;
    private LocalDate dateCreation;
    private long numTel;
    private String email;
    private String adresse;
    private String nomRepresentantLegal;
    private String prenomRepresentantLegal;
    private long cinRepresentantLegal;
    @Enumerated(EnumType.STRING)
    private FormeJuridique formeJuridique;
    @OneToMany(mappedBy = "acheteur")
    @JsonIgnore
    private Set<FactureFC> factureFCS;
    @OneToMany(mappedBy = "acheteur")
    @JsonIgnore
    private Set<Contrat> contrats;
}

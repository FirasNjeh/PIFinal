package esprit.pi.demo.entities.Maryem;

import com.fasterxml.jackson.annotation.JsonIgnore;
import esprit.pi.demo.entities.Enumeration.EtatSinistre;
import esprit.pi.demo.entities.Maryem.File;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Sinistre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Temporal (TemporalType.DATE)
    private Date dateSinistre;
    private float estimation_expert;
    private float remboursement;
    private String lieu;
    private String description;
    @Enumerated(EnumType.STRING)
    private EtatSinistre etatSinistre;
    @ToString.Exclude
    @OneToMany(cascade = CascadeType.ALL, mappedBy="sinistre")
    private Set<File> images;
    @ToString.Exclude
    @ManyToOne
    private esprit.pi.demo.entities.Maryem.Assurance assurance;
}

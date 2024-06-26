package esprit.pi.demo.entities.Maryem;

import com.fasterxml.jackson.annotation.JsonIgnore;
import esprit.pi.demo.entities.Enumeration.PackAssurance;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class PackAssur implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom;
    private String description;
    private float primeMin;
    private float primeMax;

    @Enumerated(EnumType.STRING)
    private PackAssurance packAssurance;
    @ToString.Exclude
    @OneToMany(cascade = CascadeType.ALL, mappedBy="packAssur")
    private Set<File> images;
    @JsonIgnore
    @ToString.Exclude
    @OneToMany(cascade = CascadeType.ALL, mappedBy="packAssur")
    private Set<Assurance> assurances;
}

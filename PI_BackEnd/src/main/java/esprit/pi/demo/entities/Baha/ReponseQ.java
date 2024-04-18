package esprit.pi.demo.entities.Baha;

import esprit.pi.demo.entities.Baha.Question;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class ReponseQ implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String description;
    private String rating;
    private String auteur;
    @ToString.Exclude
    @ManyToOne
    private Question question;
}

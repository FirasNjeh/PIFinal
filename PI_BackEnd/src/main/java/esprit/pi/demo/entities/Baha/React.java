package esprit.pi.demo.entities.Baha;

import com.fasterxml.jackson.annotation.JsonIgnore;
import esprit.pi.demo.entities.Enumeration.TypeReact;
import esprit.pi.demo.entities.Firas.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class React {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    Long idReact;
    TypeReact typeReact;

    @JsonIgnore
    @ManyToOne
    private Post post;

    @JsonIgnore
    @ManyToOne
    private User user;


}
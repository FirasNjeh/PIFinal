package esprit.pi.demo.entities.Baha;

import com.fasterxml.jackson.annotation.JsonIgnore;
import esprit.pi.demo.entities.Firas.User;
import jakarta.persistence.*;

import lombok.*;

import java.io.Serializable;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Conversation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int conversation_id;

    @OneToOne
    private User user1;

    @OneToOne
    private User user2;

   @JsonIgnore
    @ToString.Exclude
    @OneToMany(mappedBy = "conversation", cascade = CascadeType.ALL)
    private List<MessageChat> messages;

}

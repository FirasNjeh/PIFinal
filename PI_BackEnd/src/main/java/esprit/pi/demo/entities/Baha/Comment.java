package esprit.pi.demo.entities.Baha;

import com.fasterxml.jackson.annotation.JsonIgnore;
import esprit.pi.demo.entities.Firas.User;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

    @Entity
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor

    public class Comment implements Serializable {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)

        private Long idCmnt;
        private String descCmnt;
        private Date dateCmnt;

        @JsonIgnore
        @ManyToOne
        private User user;
        @JsonIgnore
        @ManyToOne
        private Post post;
        @ManyToOne
        private Forum forum;
    }
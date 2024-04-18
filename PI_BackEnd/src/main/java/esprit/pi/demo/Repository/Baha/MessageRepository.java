package esprit.pi.demo.Repository.Baha;

import esprit.pi.demo.entities.Enumeration.EtatMessage;
import esprit.pi.demo.entities.Baha.MessageChat;
import esprit.pi.demo.entities.Firas.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<MessageChat, Long> {
    long countByEtatAndReceiver(EtatMessage etat, User receiver);
}



package esprit.pi.demo.Repository.Baha;

import esprit.pi.demo.entities.Baha.Conversation;
import esprit.pi.demo.entities.Firas.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConversationRepository extends JpaRepository<Conversation,Integer> {
    Optional<Conversation> findByUser1AndUser2(User user1, User user2);
}


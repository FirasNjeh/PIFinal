package esprit.pi.demo.Repository.Firas;

import esprit.pi.demo.entities.Firas.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditCardRepository extends JpaRepository<CreditCard,Integer> {
}

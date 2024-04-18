package esprit.pi.demo.Repository.Soumaya;

import esprit.pi.demo.entities.Enumeration.PriorityLevel;
import esprit.pi.demo.entities.Soumaya.Reclamation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReclamationRepository extends JpaRepository<Reclamation,Integer> {
    List<Reclamation> findByPriorityLevel(PriorityLevel priorityLevel);
}

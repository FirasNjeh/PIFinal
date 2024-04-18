package esprit.pi.demo.Repository.Maryem;

import esprit.pi.demo.entities.Maryem.TransactionAssurance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionAssuranceRepository extends JpaRepository<TransactionAssurance,Integer> {
}

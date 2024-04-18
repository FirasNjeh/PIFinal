package esprit.pi.demo.Repository.Nermine;
import esprit.pi.demo.entities.Nermine.PackCR;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackCRRepository extends JpaRepository<PackCR,Integer> {
}

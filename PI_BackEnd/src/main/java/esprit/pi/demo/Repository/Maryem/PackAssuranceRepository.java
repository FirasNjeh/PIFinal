package esprit.pi.demo.Repository.Maryem;
import esprit.pi.demo.entities.Maryem.PackAssur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackAssuranceRepository extends JpaRepository<PackAssur,Integer> {

}

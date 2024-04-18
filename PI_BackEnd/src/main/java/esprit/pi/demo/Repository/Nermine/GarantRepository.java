package esprit.pi.demo.Repository.Nermine;

import esprit.pi.demo.entities.Nermine.Garant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GarantRepository extends JpaRepository<Garant,Integer> {
    List<Garant> findByName(String name);
}

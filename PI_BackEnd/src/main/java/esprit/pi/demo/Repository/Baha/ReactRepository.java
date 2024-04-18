package esprit.pi.demo.Repository.Baha;

import esprit.pi.demo.entities.Baha.React;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReactRepository extends JpaRepository<React,Long> {
}

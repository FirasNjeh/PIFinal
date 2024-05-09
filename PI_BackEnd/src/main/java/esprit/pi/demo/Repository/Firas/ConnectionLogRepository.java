package esprit.pi.demo.Repository.Firas;

import esprit.pi.demo.entities.Firas.ConnectionLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ConnectionLogRepository extends JpaRepository<ConnectionLog,Long> {
    @Query("select count (*) from ConnectionLog c where c.connectionDate=CURRENT_DATE")
    int nbreConnexionJournaliere();
}

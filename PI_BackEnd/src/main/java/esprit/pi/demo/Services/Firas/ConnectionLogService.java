package esprit.pi.demo.Services.Firas;

import esprit.pi.demo.Repository.Firas.ConnectionLogRepository;
import esprit.pi.demo.entities.Firas.ConnectionLog;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
@AllArgsConstructor
public class ConnectionLogService {
    private ConnectionLogRepository connectionLogRepository;
    public void logConnection(int userId) {
        ConnectionLog connectionLog = new ConnectionLog();
        connectionLog.setUserId(userId);
        connectionLog.setConnectionDate(LocalDate.now());
        connectionLogRepository.save(connectionLog);
    }
    public int nbreConnexionJournaliere(){
        return  connectionLogRepository.nbreConnexionJournaliere();
    }
}

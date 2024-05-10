package esprit.pi.demo.Services.Nermine;

import esprit.pi.demo.entities.Nermine.PackCR;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface IPackCRService {
    PackCR savePackCR(PackCR packCR);
    List<PackCR> getPacksCR();
    PackCR getPackCRById(int id);
    String deletePackCR (int id);
    PackCR updatePackCR(int id,PackCR packCR);

    void uploadImage(MultipartFile file, int id) throws IOException;

    Map<String, Integer> getPackCreditCounts();
}

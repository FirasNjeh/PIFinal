package esprit.pi.demo.Services.Nermine;

import esprit.pi.demo.Repository.Nermine.PackCRRepository;
import esprit.pi.demo.entities.Nermine.PackCR;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PackCRService implements IPackCRService {

    private PackCRRepository repository;
    //private CreditService cs;
    //Agent
    @Override
    public PackCR savePackCR(PackCR packCR){
//        Credit c;
//        c=cs.getCreditById(id);
//        packCR.setCreditP((List<Credit>) c);
        repository.save(packCR);
        int id= packCR.getId();


        return repository.save(packCR);
    }

    //agent + client
    @Override
    public List<PackCR> getPacksCR(){
        return repository.findAll();
    }
    //agent
    @Override
    public PackCR getPackCRById(int id){
        return repository.findById(id).orElse(null);
    }
    //agent
    @Override
    public String deletePackCR (int id){
        repository.deleteById(id);
        return "Pack Crédit supprimé !!" +id;
    }
    //agent
    @Override
    public PackCR updatePackCR(int id,PackCR packCR){
        PackCR existingPackCR=repository.findById(id).orElse(null);
        existingPackCR.setPackCredit(packCR.getPackCredit());
        existingPackCR.setDescription(packCR.getDescription());
        existingPackCR.setNom(packCR.getNom());
        existingPackCR.setImage(packCR.getImage());
        existingPackCR.setMontantMin(packCR.getMontantMin());
        existingPackCR.setMontantMax(packCR.getMontantMax());

        return repository.save(existingPackCR);

    }
@Override
    public void uploadImage(final MultipartFile file, int id) throws IOException {
        PackCR p;
        p=repository.findById(id).orElse(null);
        UUID imgGeneratedId = UUID.nameUUIDFromBytes(file.getBytes());
    String originalFileName = file.getOriginalFilename();
    p.setNomImage(originalFileName);

    File convertFile = new File("C:/Users/" + imgGeneratedId + file.getOriginalFilename());
        p.setImage("./Assets/images/" + imgGeneratedId + file.getOriginalFilename());
        convertFile.createNewFile();
        FileOutputStream fout = new FileOutputStream(convertFile);
        fout.write(file.getBytes());
        fout.close();
        repository.save(p);
    }
    @Override
    public Map<String, Integer> getPackCreditCounts() {
        List<PackCR> packs = repository.findAll();

        return packs.stream()
                .collect(Collectors.toMap(
                        PackCR::getNom,
                        pack -> pack.getCreditP().size(),
                        (count1, count2) -> count1,
                        HashMap::new
                ));
    }
}

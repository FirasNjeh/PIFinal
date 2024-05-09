package esprit.pi.demo.Services.Soumaya;

import esprit.pi.demo.Services.Firas.EmailService;
import esprit.pi.demo.entities.Enumeration.PriorityLevel;
import esprit.pi.demo.entities.Soumaya.Reclamation;
import esprit.pi.demo.entities.Enumeration.StatusRC;
import esprit.pi.demo.Repository.Soumaya.ReclamationRepository;
import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Properties;

@AllArgsConstructor
@Service
public class ReclamationService {
    @Autowired
    private ReclamationRepository recRepository;
    private EmailService emailService;


    public void saveReclamationWithImage(String object, String description, StatusRC statusRC, Date dateRC, PriorityLevel priorityLevel, String typeRC, MultipartFile file) throws IOException {
        Reclamation reclamation = new Reclamation();
        reclamation.setObject(object);
        reclamation.setDescription(description);
        reclamation.setStatusRC(statusRC);
        reclamation.setDateRC(dateRC);
        reclamation.setPriorityLevel(priorityLevel);
        reclamation.setTypeRC(typeRC);
        reclamation.setImage(file.getBytes());
        recRepository.save(reclamation);
    }

    public Reclamation saveReclamation(Reclamation reclamation){
        recRepository.save(reclamation);
        //sending email
        String to = "soumaya.nabli7@gmail.com";
        String subject = "Successful Addition of Your Claim";
        String text = "We're pleased to inform you that your claim has been successfully added to our system. We've received your request and are committed to processing it promptly.";

        emailService.sendEmail(to,subject,text);
        return reclamation;
    }
    public List<Reclamation> saveReclamations(List<Reclamation> reclamations){
        return recRepository.saveAll(reclamations);
    }
    public List<Reclamation> getReclamations(){
        return recRepository.findAll();
    }
    public Reclamation getReclamationById(int id){
        return recRepository.findById(id).orElse(null);
    }
    public List<Reclamation> getReclamationByPriorityLevel(PriorityLevel priorityLevel){
        return recRepository.findByPriorityLevel(priorityLevel);
    }

    public String deleteReclamation(int id){
        recRepository.deleteById(id);
        return "reclamation supprimée : "+id;
    }
    public Reclamation updateReclamation(Reclamation reclamation){
        Reclamation newReclamation=recRepository.findById(reclamation.getId()).orElse(null);
        newReclamation.setDescription(reclamation.getDescription());
        newReclamation.setObject(reclamation.getObject());
        newReclamation.setDateRC(reclamation.getDateRC());
        newReclamation.setReponseRC(reclamation.getReponseRC());
        newReclamation.setTypeRC(reclamation.getTypeRC());
        newReclamation.setStatusRC(reclamation.getStatusRC());
        newReclamation.setPriorityLevel(reclamation.getPriorityLevel());
        return recRepository.save(newReclamation);
    }


    }

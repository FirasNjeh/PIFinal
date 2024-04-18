package esprit.pi.demo.Services.Youssef;

import esprit.pi.demo.entities.Enumeration.StatutFC;
import esprit.pi.demo.entities.Youssef.FactureFC;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import esprit.pi.demo.Repository.Youssef.FactureFCRepository;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Properties;

@Service
@AllArgsConstructor
public class FactureFCService implements IFactureFCService {
    FactureFCRepository factureFCRepository;
    @Override
    public List<FactureFC> retrieveAllFactures() {
        return factureFCRepository.findAll();
    }

    @Override
    public FactureFC retrieveFacture(Long factureId) {
        return factureFCRepository.findById(factureId).get();
    }

    @Override
    public FactureFC addFacture(FactureFC factureFC) {
        return factureFCRepository.save(factureFC);
    }

    @Override
    public void removeFacture(Long factureId) {
        factureFCRepository.deleteById(factureId);
    }

    @Override
    public FactureFC modifyFacture(FactureFC factureFC) {
        if(factureFC.getStatut()== StatutFC.PAYE) {
            String to = "youssef.rouissi@esprit.tn"; // replace with the actual recipient email
            String subject = "FactureFC payée";
            String body = "La factureFC \"+ factureFC.getNumeroFacture()+\" a été payée";
            try {
                sendEmail(to, subject, body);
            } catch (MessagingException e) {
                e.printStackTrace(); // handle the exception according to your application's needs
            }
        }
        if(factureFC.getStatut()== StatutFC.PAYE_EN_RETARD) {
            String to = "youssef.rouissi@esprit.tn"; // replace with the actual recipient email
            String subject = "FactureFC payée";
            String body = "La factureFC \"+ factureFC.getNumeroFacture()+\" a été payée en retard";
            try {
                sendEmail(to, subject, body);
            } catch (MessagingException e) {
                e.printStackTrace(); // handle the exception according to your application's needs
            }
        }
        return factureFCRepository.save(factureFC);
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByNumeroFactureAsc() {
        return factureFCRepository.findAllByOrderByNumeroFactureAsc();
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByNumeroFactureDesc() {
        return factureFCRepository.findAllByOrderByNumeroFactureDesc();
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByDateEmissionAsc() {
        return factureFCRepository.findAllByOrderByDateEmissionAsc();
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByDateEmissionDesc() {
        return factureFCRepository.findAllByOrderByDateEmissionDesc();
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByDateEcheanceAsc() {
        return factureFCRepository.findAllByOrderByDateEcheanceAsc();
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByDateEcheanceDesc() {
        return factureFCRepository.findAllByOrderByDateEcheanceDesc();
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByMontantAsc() {
        return factureFCRepository.findAllByOrderByMontantAsc();
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByMontantDesc() {
        return factureFCRepository.findAllByOrderByMontantDesc();
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByAcheteurAsc() {
        return factureFCRepository.findAllByOrderByAcheteurAsc();
    }

    @Override
    public List<FactureFC> retrieveAllFacturesSortedByAcheteurDesc() {
        return factureFCRepository.findAllByOrderByAcheteurDesc();
    }
    private void sendEmail(String to, String subject, String body) throws MessagingException {
        // Send an email
        // ...
        String from = "techwork414@gmail.com";
        String password = "pacrvzlvscatwwkb";

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(from, password);
            }
        });

        Message message = new MimeMessage(session);
        message.setFrom(new InternetAddress(from));
        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
        message.setSubject(subject);
        //   message.setText(body);
        message.setContent(body, "text/html");

        Transport.send(message);
    }
}

package esprit.pi.demo.Controller.Youssef;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import esprit.pi.demo.Services.Youssef.RisqueVenteService;

import java.io.IOException;

@RestController
@RequestMapping("/user/riqueVente")
public class RisqueVenteController {
    @Autowired
    private RisqueVenteService risqueVenteService;

    @GetMapping("/evaluerRisque/{qte}/{duree}/{prixUnitaire}/{coutVariable}/{coutFixe}")
    public ResponseEntity<byte[]> evaluerRisque(@PathVariable int qte,
                                                @PathVariable int duree,
                                                @PathVariable double prixUnitaire,
                                                @PathVariable double coutVariable,
                                                @PathVariable double coutFixe) throws IOException {

        //risqueVenteService.generateExcel(qte, duree, prixUnitaire, coutVariable, coutFixe, response);
        byte[] excelBytes = risqueVenteService.generateExcel(qte, duree, prixUnitaire, coutVariable, coutFixe);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDispositionFormData("filename", "EvaluationRisqueVente.xls");

        return new ResponseEntity<>(excelBytes, headers, HttpStatus.OK);
    }
}

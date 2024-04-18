package esprit.pi.demo.Controller.Youssef;

import esprit.pi.demo.Services.Youssef.PdfParsingService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user/pdf")
public class PdfParsingController {
    PdfParsingService pdfParsingService;

    public PdfParsingController(PdfParsingService pdfParsingService) {
        this.pdfParsingService = pdfParsingService;
    }
    @GetMapping("/pdfpar")
    public Object test(){
        return pdfParsingService.IfYouNeedSimplicity();
    }
}

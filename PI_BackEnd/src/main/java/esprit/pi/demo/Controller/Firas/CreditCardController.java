package esprit.pi.demo.Controller.Firas;

import esprit.pi.demo.Services.Firas.ICreditCardService;
import esprit.pi.demo.entities.Firas.CreditCard;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/creditcard")
@AllArgsConstructor
public class CreditCardController {
    private ICreditCardService iCreditCardService;

    @PostMapping("/create")
    public CreditCard create(@RequestBody CreditCard creditCard){
        return iCreditCardService.creer(creditCard);
    }
    @GetMapping("/all")
    public List<CreditCard> read(){
        return iCreditCardService.lire();
    }
    @GetMapping("/{id}")
    public CreditCard findById(@PathVariable int id) {
        return iCreditCardService.getCreditCardById(id);
    }
    @PutMapping("/update/{id}")
    public CreditCard update(@PathVariable int id,@RequestBody CreditCard creditCard){
        return iCreditCardService.modifier(id, creditCard);
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){

        return iCreditCardService.supprimer(id);
    }
}

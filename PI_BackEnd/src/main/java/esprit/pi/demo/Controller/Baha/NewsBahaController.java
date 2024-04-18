package esprit.pi.demo.Controller.Baha;

import esprit.pi.demo.Services.Baha.NewsBahaService;
import esprit.pi.demo.entities.Baha.NewsBaha;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/api/newsbaha")
public class NewsBahaController {

    @Autowired
    private NewsBahaService newsBahaService;

    @GetMapping("/all")
    public List<NewsBaha> getAllNews() {
        return newsBahaService.getAllNews();
    }

    @PostMapping("/create")
    public NewsBaha createOrUpdateNews(@RequestBody NewsBaha news) {
        return newsBahaService.saveOrUpdateNews(news);
    }

    @DeleteMapping("/{id}")
    public void deleteNews(@PathVariable int id) {
        newsBahaService.deleteNews(id);
    }

    @GetMapping("/search")
    public List<NewsBaha> searchNews(@RequestParam String keyword) {
        return newsBahaService.searchNews(keyword);
    }
}


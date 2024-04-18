package esprit.pi.demo.Services.Baha;


import esprit.pi.demo.Repository.Baha.ReactRepository;
import esprit.pi.demo.entities.Baha.React;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ReactService implements IReactService {

    ReactRepository reactRepository;
    @Override
    public React addReact(React r) {
        return reactRepository.save(r);
    }

    @Override
    public void removeReact(long idReact) {
        reactRepository.deleteById(idReact);

    }
}

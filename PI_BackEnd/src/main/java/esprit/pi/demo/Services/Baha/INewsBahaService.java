package esprit.pi.demo.Services.Baha;

import esprit.pi.demo.entities.Baha.NewsBaha;

import java.util.List;


public interface INewsBahaService {

        List<NewsBaha> getAllNews();
        NewsBaha saveOrUpdateNews(NewsBaha news);
        void deleteNews(int id);
        List<NewsBaha> searchNews(String keyword);

    }

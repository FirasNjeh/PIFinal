package esprit.pi.demo.Repository.Baha;


import esprit.pi.demo.entities.Baha.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Long> {


    List<Comment> findByPostIdPost(Long idPost);
}

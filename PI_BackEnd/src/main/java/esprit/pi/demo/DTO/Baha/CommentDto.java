package esprit.pi.demo.DTO.Baha;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {

    long idPost;
    String descCmnt;
     Date dateCmnt;
}

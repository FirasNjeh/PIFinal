package esprit.pi.demo.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringDocConfig {
    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI().info(infoAPI());
    }
    public Info infoAPI() {
        return new Info().title("SpringDoc-Demo")
                .description("Documentation de FUNDHUB").contact(contactAPI());
    }
    public Contact contactAPI() {
        return new Contact().name("Equipe TECH TITANS")
                .email("firas.njeh@esprit.tn")
                .url("https://www.linkedin.com/in/firas-njeh-626a91255/");
    }
    @Bean
    public GroupedOpenApi UserApi() {
        return GroupedOpenApi.builder()
                .group("Only User Management API")
                .pathsToMatch("/user/fn/**")
                .pathsToExclude("**")
                .build();}
    @Bean
    public GroupedOpenApi AdminApi() {
        return GroupedOpenApi.builder()
                .group("Only Admin Management API")
                .pathsToMatch("/api/v1/admin/**")
                .pathsToExclude("**")
                .build();
    }
    @Bean
    public GroupedOpenApi AutenticationAPI() {
        return GroupedOpenApi.builder()
                .group("Only Authentication Management API")
                .pathsToMatch("/api/v1/auth/**")
                .pathsToExclude("**")
                .build();
    }
    @Bean
    public GroupedOpenApi notificationApi() {
        return GroupedOpenApi.builder()
                .group("Only notification Management API")
                .pathsToMatch("/notification/**")
                .pathsToExclude("**")
                .build();
    }


}

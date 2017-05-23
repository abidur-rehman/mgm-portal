package uk.mgm.co.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import uk.mgm.co.service.DummyAuthenticatedUserService;

/**
 * Created by DWP on 26/04/2017.
 */
@Configuration
public class SecurityConfiguration {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DummyAuthenticatedUserService authenticatedUserService(@Value("${auth.users.file:users.json}") String usersFileName) {
        return new DummyAuthenticatedUserService(usersFileName);
    }
}

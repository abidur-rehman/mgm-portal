package uk.co.itsolutions.portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import uk.co.itsolutions.portal.dto.AuthenticatedUser;
import uk.co.itsolutions.portal.dto.AuthenticatedUserDetails;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;

/**
 * Created by DWP on 26/04/2017.
 */
@Service
public class UserServiceImpl implements UserDetailsService {
    private PasswordEncoder passwordEncoder;
    private Map<String, AuthenticatedUser> users;

    @Autowired
    public UserServiceImpl(DummyAuthenticatedUserService authenticatedUserService, PasswordEncoder passwordEncoder) throws IOException {
        this.users = authenticatedUserService.loadUsers();
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        if (userName != null && users.containsKey(userName)) {
            final AuthenticatedUser authenticatedUser = users.get(userName);
            final AuthenticatedUserDetails authenticatedUserWithEncodedPassword = new AuthenticatedUserDetails();
            authenticatedUserWithEncodedPassword.setId(authenticatedUser.getId());
            authenticatedUserWithEncodedPassword.setUsername(authenticatedUser.getUsername());
            authenticatedUserWithEncodedPassword.setPassword(passwordEncoder.encode(authenticatedUser.getPassword()));
            authenticatedUserWithEncodedPassword.setStaffNumber(authenticatedUser.getStaffNumber());
            authenticatedUserWithEncodedPassword.setAccountNonExpired(authenticatedUser.isAccountNonExpired());
            authenticatedUserWithEncodedPassword.setAccountNonLocked(authenticatedUser.isAccountNonLocked());
            authenticatedUserWithEncodedPassword.setCredentialsNonExpired(authenticatedUser.isCredentialsNonExpired());
            authenticatedUserWithEncodedPassword.setEnabled(authenticatedUser.isEnabled());
            authenticatedUserWithEncodedPassword.setAuthorities(authenticatedUser.getAuthorities() != null ? new ArrayList<>(authenticatedUser.getAuthorities()) : null);
            return authenticatedUserWithEncodedPassword;
        } else {
            throw new UsernameNotFoundException(String.format("Username %s has not been found.", userName));
        }
    }
}

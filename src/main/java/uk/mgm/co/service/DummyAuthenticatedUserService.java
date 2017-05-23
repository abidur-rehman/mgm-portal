package uk.mgm.co.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import uk.mgm.co.dto.AuthenticatedUser;
import uk.mgm.co.dto.AuthenticatedUserDetails;

import java.io.IOException;
import java.net.URL;
import java.util.Map;

/**
 * Created by DWP on 09/05/2017.
 */
public class DummyAuthenticatedUserService {

    private URL usersFileUrl;

    public DummyAuthenticatedUserService(String usersFileName) {
        this.usersFileUrl = Thread.currentThread().getContextClassLoader().getResource(usersFileName);
    }

    protected DummyAuthenticatedUserService(URL usersFileUrl) {
        this.usersFileUrl = usersFileUrl;
    }

    public Map<String, AuthenticatedUser> loadUsers() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(usersFileUrl.openStream(), new TypeReference<Map<String, AuthenticatedUserDetails>>() { } );
    }

}

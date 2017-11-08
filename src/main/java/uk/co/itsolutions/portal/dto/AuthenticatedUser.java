package uk.co.itsolutions.portal.dto;

import org.springframework.security.core.userdetails.UserDetails;

/**
 * Created by DWP on 09/05/2017.
 */
public interface AuthenticatedUser extends UserDetails {
    int getId();
    int getStaffNumber();
}

/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.auth.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.wellme.auth.repo.ApplicationUserRepo;
import com.wellme.auth.security.ApplicationUser;

/**
 * The Class UserDetailsServiceImpl.
 */

@Component
public class UserDetailsServiceImpl implements UserDetailsService{
	
	/** The application user repository. */
	private ApplicationUserRepo applicationUserRepository;
    
    /**
     * Instantiates a new user details service impl.
     *
     * @param applicationUserRepository the application user repository
     */
    public UserDetailsServiceImpl(ApplicationUserRepo applicationUserRepository) {
        this.applicationUserRepository = applicationUserRepository;
    }
    
    /* (non-Javadoc)
     * @see com.wellme.common.service.UserDetailsService#loadUserByUsername(java.lang.String)
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        ApplicationUser applicationUser = applicationUserRepository.findByUserName(username);
        if (applicationUser == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(applicationUser.getUserName(), applicationUser.getPassword(), applicationUser.getAuthorities());
    }
}

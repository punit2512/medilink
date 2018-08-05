package com.wellme.auth;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.auth.factory.ApplicationUserFactory;
import com.wellme.auth.repo.ApplicationUserRepo;
import com.wellme.auth.security.ApplicationUser;

@RestController
public class UserController {
	
	@Autowired
	ApplicationUserRepo applicationUserRepo;
	
	@Autowired
	ApplicationUserFactory applicationUserFactory;
	
	@Autowired
	PasswordEncoder userPasswordEncoder;
	
    @GetMapping("/user")
    public Principal user(Principal principal) {
        return principal;
    }
    
	@RequestMapping(value = "/signUpUser", method = RequestMethod.POST)
	public ApplicationUser createApplicationUser(@RequestBody ApplicationUser applicationUser) {
		String passwordEncoded = userPasswordEncoder.encode(applicationUser.getPassword());
		ApplicationUser appUser = applicationUserFactory.createApplicationUser(applicationUser.getUserName(), true, passwordEncoded, applicationUser.getAuthorities());
		applicationUserRepo.save(appUser);
		return appUser;
		
	}
	
}

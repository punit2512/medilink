package com.wellme.zuulag;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	@RequestMapping("/add")
	public void addPatient(){
//		patientRepo.save(patient);
	}
	
    @GetMapping("/user")
    public Principal user(Principal principal) {
        return principal;
    }
}

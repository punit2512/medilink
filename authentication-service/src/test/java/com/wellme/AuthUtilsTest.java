package com.wellme;

import com.wellme.auth.utils.AuthUtils;

public class AuthUtilsTest {

	public static void main(String[] args) {
		System.out.println("Password is " + AuthUtils.passwordEncoder("Password"));

	}

}

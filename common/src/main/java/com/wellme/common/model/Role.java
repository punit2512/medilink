package com.wellme.common.model;

public enum Role {
	
	CONSULTANT("CONSULTANT", "Consultant"),
	PATIENT("PATIENT", "Patient"),
	PRACTICE_ADMIN("PRACTICE_ADMIN", "Admin for the practice");
	
	private String roleName;
	private String roleDescription;
	
	Role(String roleName, String roleDescription){
		this.roleName = roleName;
		this.roleDescription = roleDescription;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleDescription() {
		return roleDescription;
	}

	public void setRoleDescription(String roleDescription) {
		this.roleDescription = roleDescription;
	}
	
	
}

package com.wellme.common.model;


import java.io.Serializable;


public class Authority implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    private String authority;
	
	public Authority() {
		
	}
	
	public Authority(String authority) {
		this.authority = authority;
	}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }
}
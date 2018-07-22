package com.wellme.auth.security;


import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;


@Entity
@Table(name = "authority")
public class Authority implements GrantedAuthority,Serializable {
    private static final long serialVersionUID = 1L;

    @Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "authority_id_generator")
	@SequenceGenerator(name="authority_id_generator", sequenceName = "AUTHORITY_ID_SEQ", initialValue=1000, allocationSize=50)
	@Column(name = "AUTHORITY_ID", updatable = false, nullable = false)
    private Long id;

	@Column(name = "AUTHORITY")
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

    @Override
    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }
}
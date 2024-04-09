package com.example.demo.dependencyInjection.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Studente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome,cognome,email;
	private Long numeroTelefonico;
	private Date dataAssunzione;
	
	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[]Cv;

	public Studente() {
		super();
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getCognome() {
		return cognome;
	}


	public void setCognome(String cognome) {
		this.cognome = cognome;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public Long getNumeroTelefonico() {
		return numeroTelefonico;
	}


	public void setNumeroTelefonico(Long numeroTelefonico) {
		this.numeroTelefonico = numeroTelefonico;
	}


	public Date getDataAssunzione() {
		return dataAssunzione;
	}


	public void setDataAssunzione(Date dataAssunzione) {
		this.dataAssunzione = dataAssunzione;
	}


	public byte[] getCv() {
		return Cv;
	}


	public void setCv(byte[] cv) {
		Cv = cv;
	}
	
	
}

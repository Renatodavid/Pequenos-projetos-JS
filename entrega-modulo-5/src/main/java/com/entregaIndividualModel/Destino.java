package com.entregaIndividualModel;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

@Entity
@Table (name ="destino")
public class Destino {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, length = 100)
	private String nome_destino;
	
	@Column(nullable = false, length = 50 )
	private Double valor;
	
	@Column(name = "data_chegada")
	@DateTimeFormat(iso = ISO.DATE)
	private Date data_chegada;
	
	@Column(name = "data_saida")
	@DateTimeFormat(iso = ISO.DATE)
	private Date data_saida;
	
	@Column(nullable = false, length = 50)
	private String hora_chegada;

	

	
	
	
	public Destino(Long id, String nome_destino, Double valor, Date data_chegada, Date data_saida,
			String hora_chegada) {
		super();
		this.id = id;
		this.nome_destino = nome_destino;
		this.valor = valor;
		this.data_chegada = data_chegada;
		this.data_saida = data_saida;
		this.hora_chegada = hora_chegada;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome_destino() {
		return nome_destino;
	}

	public void setNome_destino(String nome_destino) {
		this.nome_destino = nome_destino;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public Date getData_chegada() {
		return data_chegada;
	}

	public void setData_chegada(Date data_chegada) {
		this.data_chegada = data_chegada;
	}

	public Date getData_saida() {
		return data_saida;
	}

	public void setData_saida(Date data_saida) {
		this.data_saida = data_saida;
	}

	public String getHora_chegada() {
		return hora_chegada;
	}

	public void setHora_chegada(String hora_chegada) {
		this.hora_chegada = hora_chegada;
	}
	
	
	
}

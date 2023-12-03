package com.entregaindividualController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.entregaIndividualModel.Destino;
import com.entregaindividualServices.DestinoServices;
import com.entregaindividualServices.UsuarioServices;


@Controller
@RequestMapping("/destino")
public class DestinoController {

	@Autowired
	private DestinoServices destinoServices;
	
	@Autowired
	private UsuarioServices usuarioServices;
	
	
	//form cadastro destino
	
	@GetMapping("/cadastro/{idDestino}")
	public String formDestino(@PathVariable Long idDestino, Model model) {
		
		
		
		
		
		return "cadastroDestino";
		
	}
}

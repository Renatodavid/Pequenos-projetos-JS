package com.entregaindividualController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.entregaIndividualModel.Usuario;
import com.entregaindividualServices.UsuarioServices;

@Controller
@RequestMapping("/usuario")
public class UsuarioController {
	

	@Autowired
	private UsuarioServices usuarioServices;
	
	
	private UsuarioRepository usuarioRepository;
	
	//Home usuario
	@GetMapping("home/{id}")
	public String listaUsuario (@PathVariable Long id, Model model) {
		Usuario usuarioLocalizado = usuarioServices.getUsuarioById(id);
		model.addAttribute("usuario", usuarioLocalizado);
		return"homeusuario";
	}
	
	//Visualizar destino 
	@GetMapping("/visualiar/{id}")
	public String visualizarperfil(Model model) {
		List<Usuario>localizarUsuario = usuarioServices.GetAllUsuarios();
		model.addAttribute("usuario", localizarUsuario);
		return "visualizarPerfil";
	}
	
	//perfil do usuario
	@GetMapping("/profile/{id}")
	public String perfilUsuario(@PathVariable Long id, Model model) {
		
		Usuario usuario = usuarioServices.getUsuarioById(id);
		model.addAttribute("usuario", usuario);
		return "userprofile";
	}
	
	//formulario de cadastro
	
	public String formCadastroUsuario(Model model) {
		Usuario usuario = new Usuario();
		model.addAttribute("usuario", usuario);
		return "cadastro";
	}
	
	
}

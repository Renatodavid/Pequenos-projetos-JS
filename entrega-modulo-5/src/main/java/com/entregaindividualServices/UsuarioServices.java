package com.entregaindividualServices;

import java.util.List;

import com.entregaIndividualModel.Usuario;

public interface UsuarioServices {

	List<Usuario>GetAllUsuarios();
	
	Usuario getUsuarioById( Long id);
	
	Usuario saveUsuario(Usuario usuario);
	
	Usuario updateUsuario( Long id, Usuario usuarioAtt);
	
	void deleteUsuario(Long id);
}

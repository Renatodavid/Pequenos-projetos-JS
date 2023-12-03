package com.entregaindividualServices;

import java.util.List;

public interface DestinoServices {
	
	
	List<DestinoServices>GetAllDestino();
	
	DestinoServices getDestinoById();
	
	DestinoServices saveDestino(DestinoServices destino);
	
	DestinoServices updateDestino(Long id, DestinoServices empresaAtt);
	
	void deleteDestino(Long id);
	
}

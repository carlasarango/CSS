function calcular(){
	//recuperar los valores que necesitamos 
	var i=parseFloat(inicial.value);
	var v=parseFloat(velocidad.value);
	var t=parseFloat(tiempo.value);
	//realizar el cálculo
	var calculo=i+v*t;

	//mostrar el resultado
	resultado.innerHTML=calculo;
}


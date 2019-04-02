
		alert("hola");

		
		function calcular(){
			var teoria= parseFloat(inteoria.value);
			alert(teoria);
			var practica= parseFloat(inpractica.value);
			var nota=teoria*0.3+practica*0.7;

			if (inextra checked){
				nota++;
			}
			if (nota>10){
				nota=10;
			}
			outresultado.innerHTML=nota;
		}
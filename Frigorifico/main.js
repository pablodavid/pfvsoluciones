function goToForm(rut,nombre,empresa,area){
	var fecha = new Date();
	var mes = fecha.getMonth()+1;
	var dia = fecha.getDate();
	var ano = fecha.getFullYear();
	if(dia<10)
		dia='0'+dia;
	if(mes<10)
		mes='0'+mes;
	var hoy=ano+"-"+mes+"-"+dia;
	window.open("https://docs.google.com/forms/d/e/1FAIpQLSetjxEVk83c48NaEfPofCpg9cmyugli8FlrQrjzCiI0wUcwKQ/viewform?entry.663054490="+rut+"&entry.842812461="+hoy+"&entry.234679363="+nombre+"&entry.476383136="+empresa+"&entry.476407092="+area+"&entry.673783433=No&entry.1728399202=Ninguno&entry.497685889=Vehiculo+particular", '_blank')
}
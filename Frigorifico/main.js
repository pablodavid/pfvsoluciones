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
	var url="https://docs.google.com/forms/d/e/1FAIpQLSetjxEVk83c48NaEfPofCpg9cmyugli8FlrQrjzCiI0wUcwKQ/viewform?entry.663054490="+rut+"&entry.842812461="+hoy+"&entry.234679363="+nombre+"&entry.476383136="+empresa
	if(area === "Casino"||area ==="Tripería"||area ==="Jardinería"||area ==="Transporte"||area ==="Grasas"||area === "Operaciones"){
		url=url+"&entry.476407092.other_option_response="+area
		area="__other_option__"
	}
	url += "&entry.476407092="+area+"&entry.673783433=No&entry.1728399202=Ninguno&entry.497685889=Vehiculo+particular"
	window.open(url, '_blank')
}
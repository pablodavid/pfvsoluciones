const Funcionarios = [
	{nombre: 'Pablo+Figueroa', rut: '19478175-K', empresa: 'Frigorifico+Temuco', area: 'Prevencion'},
	{nombre: 'Diego+San+Martin', rut: '19075903-2', empresa: 'Frigorifico+Temuco', area: 'Prevencion'},
	{nombre: 'Louis+Maxilin', rut: '25966879-4', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Marco+Ignaipil', rut: '20106564-K', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Moisés+Gutiérrez', rut: '13114727-9', empresa: 'Larrain', area: 'Trafico+Varas'},
	{nombre: 'Michelet+Prevalus', rut: '26433099-8', empresa: 'Larrain', area: 'Desposte'},
	{nombre: 'Nelson+Gutiérrez', rut: '10431630-1', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Esteban+Cifuentes', rut: '19858608-0', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Sergio+Herrera', rut: '19480455-5', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Juan+Gallardo', rut: '9899266-9', empresa: 'Matilde+Contreras', area: 'Desposte'},
	{nombre: 'Sergio+Caniuqueo', rut: '11686509-2', empresa: 'Larrain', area: 'Elaborados'},
	{nombre: 'Jaime+Riquelme', rut: '18875071-0', empresa: 'Frigorifico+Temuco', area: 'Administracion'},
	{nombre: 'Kristofer+Soto', rut: '19058413-5', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Leandro+Catalan', rut: '20643951-3', empresa: 'Frigorifico+Temuco', area: 'Elaborados'},
	{nombre: 'Diego+Illanes', rut: '16948315-9', empresa: 'Frigorifico+Temuco', area: 'SPC'},
	{nombre: 'Luis+Olivero', rut: '13732695-7', empresa: 'Otro', area: 'Transporte'},
	{nombre: 'Diego+Nettle', rut: '19633696-6', empresa: 'Frigorifico+Temuco', area: 'Mantencion'},
	{nombre: 'Cristian+Campos', rut: '14035715-4', empresa: 'Frigorifico+Temuco', area: 'Mantencion'},
	{nombre: 'Jose+Alvarado', rut: '20367536-4', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Marisol+Castillo', rut: '12708709-1', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Angel+Paez', rut: '26602324-3', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Jose+Mendoza', rut: '9845971-5', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Patricio+Naipio', rut: '15240096-9', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Alan+Martinez', rut: '16948619-0', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Johana+Catrileo', rut: '20107233-6', empresa: 'Casino', area: 'Casino'},
	{nombre: 'Raul+Lopez+Flores', rut: '10881789-5', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Luis+Chanqueo', rut: '11908214-5', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Juan+Valdebenito', rut: '17766697-1', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Carlos+Arancibia', rut: '8954552-8', empresa: 'Frigorifico+Temuco', area: 'Seguridad'},
	{nombre: 'Dayro+Ulloa', rut: '19766280-8', empresa: 'Larrain', area: 'Desposte'},
	{nombre: 'Andrés+Saravia', rut: '19942663-K', empresa: 'Frigorifico+Temuco', area: 'Trafico+Varas'},
	{nombre: 'Jaime+Aguayo', rut: '14249690-9', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Manuel+Franco+Garrido', rut: '10469608-2', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Omar+Alvarez', rut: '12388257-4', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Michael+Petithomme', rut: '26431422-4', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Marcelo+Peña', rut: '20044994-0', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Hugo+Bello', rut: '10114415-1', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Juan+Sandoval', rut: '13318081-8', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Andres+Quintulen', rut: '12469904-5', empresa: 'Frigorifico+Temuco', area: 'Mantencion'},
	{nombre: 'Angela+Sandoval', rut: '19198300-9', empresa: 'Casino', area: 'Casino'},
	{nombre: 'Magdalena+Sandoval', rut: '18438390-K', empresa: 'Casino', area: 'Casino'},
	{nombre: 'Nibaldo+Cayun', rut: '11584611-6', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Edison+Paillan', rut: '18929972-9', empresa: 'Larrain', area: 'Trafico+Varas'},
	{nombre: 'Hector+Benavides', rut: '9635696-K', empresa: 'Frigorifico+Temuco', area: 'SPI'},
	{nombre: 'Sandress+Luidol', rut: '26333472-8', empresa: 'Larrain', area: 'Desposte'},
	{nombre: 'Alejandrino+Sandoval', rut: '8728009-8', empresa: 'Frigorifico+Temuco', area: 'SPI'},
	{nombre: 'Benjamin+Exile', rut: '26812530-2', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Victor+Benavides', rut: '11180236-K', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Benjamin+Castillo', rut: '18726891-5', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Juan+Beltrán', rut: '9685652-0', empresa: 'Total+Clean', area: 'Faena'},
	{nombre: 'Juan+Sáenz', rut: '17508516-5', empresa: 'Frigorifico+Temuco', area: 'Administracion'},
	{nombre: 'Margie+Gonzales', rut: '15240446-8', empresa: 'Frigorifico+Temuco', area: 'Administracion'},
	{nombre: 'Osvando+Alt', rut: '12752694-K', empresa: 'Frigorifico+Temuco', area: 'Mantencion'},
	{nombre: 'Nelson+Carriman', rut: '10218135-0', empresa: 'Otro', area: 'SPI'},
	{nombre: 'Miguel+Cárdenas', rut: '16111586-K', empresa: 'Frigorifico+Temuco', area: 'Administracion'},
	{nombre: 'Alejandro+Albarrón', rut: '21247952-7', empresa: 'Otro', area: 'Grasas'},
	{nombre: 'Maykol+Seguel', rut: '20356651-4', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Roberto+Birke', rut: '15654323-3', empresa: 'Frigorifico+Temuco', area: 'RRHH'},
	{nombre: 'Josías+Moraga', rut: '21283964-7', empresa: 'Otro', area: 'Mantencion'},
	{nombre: 'Voltaire+Chavre', rut: '26544538-1', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Alexis+Llanquin', rut: '15987685-3', empresa: 'Frigorifico+Temuco', area: 'Seguridad'},
	{nombre: 'Eduardo+Silva', rut: '12538035-2', empresa: 'Larrain', area: 'Trafico+Varas'},
	{nombre: 'Ítalo+Montecino', rut: '19942481-5', empresa: 'Total+Clean', area: 'Faena'},
	{nombre: 'Gabriel+Sandoval', rut: '17259594-4', empresa: 'Total+Clean', area: 'Aseo+/+Guardarropia'},
	{nombre: 'Jean+Maccenat', rut: '25947809-K', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Eduardo+Cayunao', rut: '13809346-8', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Carlos+Painevilo', rut: '9854102-0', empresa: 'Frigorifico+Temuco', area: 'Corrales'},
	{nombre: 'Jorge+Lincovilo', rut: '9935031-8', empresa: 'Frigorifico+Temuco', area: 'Mantecion'},
	{nombre: 'Carlos+Castro', rut: '16585709-7', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Raúl+Lopez+Muñoz', rut: '20354629-7', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Benjamín+Contreras', rut: '19304536-7', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Ruben+Andrade', rut: '9697522-8', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Florencio+Soto', rut: '7855054-6', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Rene+Pierre', rut: '26099674-6', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'María+José+Loyola', rut: '15258333-8', empresa: 'Frigorifico+Temuco', area: 'Operaciones'},
	{nombre: 'Nelson+Quezada', rut: '8798578-4', empresa: 'Otro', area: 'SPI'},
	{nombre: 'Estefania+Rivera', rut: '18686526-K', empresa: 'Frigorifico+Temuco', area: 'Calidad'},
	{nombre: 'Angela+Estrada', rut: '18149956-7', empresa: 'Frigorifico+Temuco', area: 'Calidad'},
	{nombre: 'Hernan+Pichulaf', rut: '16316807-3', empresa: 'Larrain', area: 'Trafico+Varas'},
	{nombre: 'Jose Millapan', rut: '15653007-7', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Juan+Cava', rut: '16824075-9', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Edgardo+Chávez', rut: '6648519-6', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Jose+Loncolí', rut: '8691146-9', empresa: 'Matilde+Contreras', area: 'Jardinería'},
	{nombre: 'Jean+Batiste', rut: '26448555-K', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Daniel+Fuentes', rut: '20104935-0', empresa: 'Larrain', area: 'SPC'},
	{nombre: 'Adolphe+Edine', rut: '26623026-5', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Juan+Lopez', rut: '9573742-0', empresa: 'Frigorifico+Temuco', area: 'SPI'},
	{nombre: 'Juan+Carlos+Leiva', rut: '10018774-4', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Cristian+Gómez', rut: '12867420-9', empresa: 'Larrain', area: 'Desposte'},
	{nombre: 'Gloria+Loncomilla', rut: '17694800-0', empresa: 'Total+Clean', area: 'Desposte'},
	{nombre: 'Leandro+Millar', rut: '21156612-4', empresa: 'Otro', area: 'Grasas'},
	{nombre: 'Claudio+Painevilo', rut: '19761748-9', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Pablo+Toro', rut: '16130837-4', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Juan+Riquelme', rut: '19075430-8', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Jose+Oyarso', rut: '9188965-7', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Hector+Millar', rut: '13964957-5', empresa: 'Otro', area: 'Grasas'},
	{nombre: 'Valeria+Poblete', rut: '13519146-9', empresa: 'Larrain', area: 'Elaborados'},
	{nombre: 'Cesar+Icef', rut: '26662656-8', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'David+Vega', rut: '20974795-2', empresa: 'Larrain', area: 'Trafico+Varas'},
	{nombre: 'Pablo+Cepeda', rut: '19519776-8', empresa: 'Frigorifico+Temuco', area: 'Prevencion'},
	{nombre: 'Roberto+Sepulveda', rut: '17444426-9', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Melisa+Esparza', rut: '21581580-3', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Pedro+Millan', rut: '8698559-4', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Leonardo+Vargas', rut: '11899099-4', empresa: 'Frigorifico+Temuco', area: 'Trafico+Cajas'},
	{nombre: 'Silean+Sayncrain', rut: '26775978-2', empresa: 'Frigorifico+Temuco', area: 'Trafico+Varas'},
	{nombre: 'Manuel+Benavente', rut: '7993540-9', empresa: 'Frigorifico+Temuco', area: 'Seguridad'},
	{nombre: 'Jaime+Recart', rut: '16204339-9', empresa: 'Frigorifico+Temuco', area: 'Comercial'},
	{nombre: 'Javier+Parada', rut: '10879382-1', empresa: 'Otro', area: 'Transporte'},
	{nombre: 'Edgardo+Fuentealba', rut: '8872765-7', empresa: 'Otro', area: 'Transporte'},
	{nombre: 'Julio+Cachaña', rut: '18323622-9', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Lissandro+Chandía', rut: '15247173-4', empresa: 'Otro', area: 'Mantencion'},
	{nombre: 'Jeyson+Caniumil', rut: '17378398-1', empresa: 'Otro', area: 'Mantencion'},
	{nombre: 'Marco+Pizarro', rut: '17033026-9', empresa: 'SAG', area: 'Faena'},
	{nombre: 'Belance+Oguenel', rut: '26579153-0', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Octavio+Alomias', rut: '24390615-6', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Tomas+Cifuentes', rut: '19858658-0', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Fernando+Salinas', rut: '10339739-1', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Matías+Soto', rut: '21478186-7', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Nirza+Leal', rut: '14077775-7', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Marco+Neira', rut: '11896227-3', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Hector+Benavente', rut: '9635969-K', empresa: 'Frigorifico+Temuco', area: 'SPI'},
	{nombre: 'Cristian+Mely', rut: '12249424-9', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Carlos+Muñoz', rut: '9947655-9', empresa: 'Frigorifico+Temuco', area: 'Mantencion'},
	{nombre: 'Juan+Guarda', rut: '17810085-8', empresa: 'Frigorifico+Temuco', area: 'Trafico+Varas'},
	{nombre: 'Diego+Vazquez', rut: '17450438-5', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Genel+Fortune', rut: '26238234-6', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Daniel+Oñate', rut: '18197846-5', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Oriana+Hernández', rut: '26999643-9', empresa: 'Frigorifico+Temuco', area: 'Aseo+/+Guardarropia'},
	{nombre: 'Wilson+Joseph', rut: '26060756-1', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Osvaldo+Breve', rut: '8804760-5', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Javier+Montecinos', rut: '18547128-4', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Victor+Pichingual', rut: '17637621-K', empresa: 'Frigorifico+Temuco', area: 'SPI'},
	{nombre: 'Cristian+Llancavil', rut: '18876249-2', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Juan+Llanquinao', rut: '17263993-3', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Stevenson+Petit+Frere', rut: '26236569-7', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Remy+Florvil', rut: '26088963-K', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Matias+Cifuentes', rut: '20198221-9', empresa: 'Frigorifico+Temuco', area: 'SPI'},
	{nombre: 'Hector+Larrain', rut: '7059463-3', empresa: 'Larrain', area: 'Administracion'},
	{nombre: 'Orlando+Carriman', rut: '18875771-5', empresa: 'Otro', area: 'SPI'},
	{nombre: 'Carlos+Nuñez', rut: '26754482-4', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Richard+de+Jesús+Perez', rut: '26567415-1', empresa: 'Galdames', area: 'Triperia'},
	{nombre: 'Sudelia+Cortez', rut: '15492942-8', empresa: 'Frigorifico+Temuco', area: 'Calidad'},//Corroborar Area
	{nombre: 'Sandra+Saavedra', rut: '11040129-9', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Elisabeth+Peña', rut: '14210281-1', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Hernan+Coliñir', rut: '15827247-4', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Leodan+Quintriqueo', rut: '18967944-0', empresa: 'Frigorifico+Temuco', area: 'SPC'},
	{nombre: 'Joel+Lienlaf', rut: '13397206-4', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Alejandro+Giusti', rut: '6988819-4', empresa: 'Total+Clean', area: 'Aseo+/+Guardarropia'},
	{nombre: 'Leonel+Beñaldo', rut: '9891261-4', empresa: 'Frigorifico+Temuco', area: 'Trafico+Varas'},
	{nombre: 'Juan+Alegre', rut: '8597839-K', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Cesar+Peña', rut: '18774473-3', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Cristian+Ortega', rut: '13317847-3', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Cristian+Quintulen', rut: '15239750-K', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Marisela+Villablanca', rut: '17638168-K', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Francisco+Ortiz', rut: '19305726-8', empresa: 'Otro', area: 'Mantencion'},
	{nombre: 'Juan+Mardones+Franco', rut: '8624548-K', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Rosamel+Barra', rut: '11114231-9', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Fernando+Salgado', rut: '20932895-K', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Sicto+Torres', rut: '9361968-4', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Ricardo+Castro', rut: '18435466-7', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Hernan+Montiel', rut: '13001773-8', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Miguel+Lagos', rut: '19926106-1', empresa: 'Frigorifico+Temuco', area: 'Mantencion'},
	{nombre: 'Victor+Lopez', rut: '11688628-6', empresa: 'Otro', area: 'Transporte'},
	{nombre: 'Sergio+Candia', rut: '7741615-3', empresa: 'Larrain', area: 'Faena'},
	{nombre: 'Yhon+Olivera', rut: '19286075-K', empresa: 'Frigorifico+Temuco', area: 'SPC'},
	{nombre: 'Sergio+Diaz', rut: '12927852-8', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Rodrigo+Reyes', rut: '17261523-6', empresa: 'Frigorifico+Temuco', area: 'Mantencion'},
	{nombre: 'Victor+Vargas', rut: '16316568-6', empresa: 'Frigorifico+Temuco', area: 'Faena'},
	{nombre: 'Jorge+Espinoza', rut: '12537525-1', empresa: 'Frigorifico+Temuco', area: 'Desposte'},
	{nombre: 'Enrique+Luca', rut: '7972206-5', empresa: 'Otro', area: 'Transporte'},
	{nombre: 'Joaquin+Rifo', rut: '14219659-K', empresa: 'SAG', area: 'Faena'},
	{nombre: 'Gedeon+Geraldson', rut: '26474746-5', empresa: 'Frigorifico+Temuco', area: 'Trafico+Cajas'},
]

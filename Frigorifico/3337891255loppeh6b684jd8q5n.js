const f="Frigorifico+Temuco";
const l="Larrain";
const g="Galdames"
const m="Matilde+Contreras"
const t="Triperia"
const o="Otro"
const c="Casino"
const to="Total+Clean"
const tc="Tecnocarne"
const p="Prevencion"
const fa="Faena"
const d="Desposte"
const v="Trafico+V"
const e="Elaborados"
const a="Administracion"
const tr="Transporte"
const ma="Mantencion"
const s="SPI"
const sc="SPC"
const se="Seguridad"
const tn="Total+Clean"
var Funcionarios = [
	{nombre: 'Pablo+Figueroa', rut: '19478175-K', empresa: f, area: p},
	{nombre: 'Diego+San+Martin', rut: '19075903-2', empresa: f, area: p},
	{nombre: 'Louis+Maxilin', rut: '25966879-4', empresa: l, area: fa},
	{nombre: 'Marco+Ignaipil', rut: '20106564-K', empresa: f, area: fa},
	{nombre: 'Moisés+Gutiérrez', rut: '13114727-9', empresa: l, area: v},
	{nombre: 'Michelet+Prevalus', rut: '26433099-8', empresa: l, area: d},
	{nombre: 'Nelson+Gutiérrez', rut: '10431630-1', empresa: g, area: t},
	{nombre: 'Esteban+Cifuentes', rut: '19858608-0', empresa: g, area: t},
	{nombre: 'Sergio+Herrera', rut: '19480455-5', empresa: f, area: d},
	{nombre: 'Juan+Gallardo', rut: '9899266-9', empresa: m, area: d},
	{nombre: 'Sergio+Caniuqueo', rut: '11686509-2', empresa: l, area: e},
	{nombre: 'Jaime+Riquelme', rut: '18875071-0', empresa: f, area: a},
	{nombre: 'Kristofer+Soto', rut: '19058413-5', empresa: f, area: fa},
	{nombre: 'Leandro+Catalan', rut: '20643951-3', empresa: f, area: e},
	{nombre: 'Diego+Illanes', rut: '16948315-9', empresa: f, area: sc},
	{nombre: 'Luis+Olivero', rut: '13732695-7', empresa: o, area: tr},
	{nombre: 'Diego+Nettle', rut: '19633696-6', empresa: f, area: ma},
	{nombre: 'Cristian+Campos', rut: '14035715-4', empresa: f, area: ma},
	{nombre: 'Jose+Alvarado', rut: '20367536-4', empresa: l, area: fa},
	{nombre: 'Marisol+Castillo', rut: '12708709-1', empresa: f, area: d},
	{nombre: 'Angel+Paez', rut: '26602324-3', empresa: f, area: fa},
	{nombre: 'Jose+Mendoza', rut: '9845971-5', empresa: f, area: d},
	{nombre: 'Patricio+Naipio', rut: '15240096-9', empresa: f, area: fa},
	{nombre: 'Alan+Martinez', rut: '16948619-0', empresa: f, area: d},
	{nombre: 'Johana+Catrileo', rut: '20107233-6', empresa: c, area: c},
	{nombre: 'Raul+Lopez+Flores', rut: '10881789-5', empresa: g, area: t},
	{nombre: 'Luis+Chanqueo', rut: '11908214-5', empresa: f, area: fa},
	{nombre: 'Juan+Valdebenito', rut: '17766697-1', empresa: f, area: fa},
	{nombre: 'Carlos+Arancibia', rut: '8954552-8', empresa: f, area: se},
	{nombre: 'Dayro+Ulloa', rut: '19766280-8', empresa: l, area: d},
	{nombre: 'Andrés+Saravia', rut: '19942663-K', empresa: f, area: v},
	{nombre: 'Jaime+Aguayo', rut: '14249690-9', empresa: f, area: fa},
	{nombre: 'Manuel+Franco+Garrido', rut: '10469608-2', empresa: f, area: fa},
	{nombre: 'Omar+Alvarez', rut: '12388257-4', empresa: f, area: d},
	{nombre: 'Michael+Petithomme', rut: '26431422-4', empresa: f, area: d},
	{nombre: 'Marcelo+Peña', rut: '20044994-0', empresa: g, area: t},
	{nombre: 'Hugo+Bello', rut: '10114415-1', empresa: f, area: d},
	{nombre: 'Juan+Sandoval', rut: '13318081-8', empresa: g, area: t},
	{nombre: 'Andres+Quintulen', rut: '12469904-5', empresa: f, area: ma},
	{nombre: 'Angela+Sandoval', rut: '19198300-9', empresa: c, area: c},
	{nombre: 'Magdalena+Sandoval', rut: '18438390-K', empresa: c, area: c},
	{nombre: 'Nibaldo+Cayun', rut: '11584611-6', empresa: f, area: fa},
	{nombre: 'Edison+Paillan', rut: '18929972-9', empresa: l, area: v},
	{nombre: 'Hector+Benavides', rut: '9635696-K', empresa: f, area: s},
	{nombre: 'Sandress+Luidol', rut: '26333472-8', empresa: l, area: d},
	{nombre: 'Alejandrino+Sandoval', rut: '8728009-8', empresa: f, area: s},
	{nombre: 'Benjamin+Exile', rut: '26812530-2', empresa: l, area: fa},
	{nombre: 'Victor+Benavides', rut: '11180236-K', empresa: f, area: d},
	{nombre: 'Benjamin+Castillo', rut: '18726891-5', empresa: l, area: fa},
	{nombre: 'Juan+Beltrán', rut: '9685652-0', empresa: tn, area: fa},
	{nombre: 'Juan+Sáenz', rut: '17508516-5', empresa: f, area: a},
	{nombre: 'Margie+Gonzales', rut: '15240446-8', empresa: f, area: a},
	{nombre: 'Osvando+Alt', rut: '12752694-K', empresa: f, area: ma},
	{nombre: 'Nelson+Carriman', rut: '10218135-0', empresa: o, area: s},
	{nombre: 'Miguel+Cárdenas', rut: '16111586-K', empresa: f, area: a},
	{nombre: 'Alejandro+Albarrón', rut: '21247952-7', empresa: o, area: 'Grasas'},
	{nombre: 'Maykol+Seguel', rut: '20356651-4', empresa: l, area: fa},
	{nombre: 'Roberto+Birke', rut: '15654323-3', empresa: f, area: 'RRHH'},
	{nombre: 'Josías+Moraga', rut: '21283964-7', empresa: o, area: ma},
	{nombre: 'Voltaire+Chavre', rut: '26544538-1', empresa: l, area: fa},
	{nombre: 'Alexis+Llanquin', rut: '15987685-3', empresa: f, area: se},
	{nombre: 'Eduardo+Silva', rut: '12538035-2', empresa: l, area: v},
	{nombre: 'Ítalo+Montecino', rut: '19942481-5', empresa: tn, area: fa},
	{nombre: 'Gabriel+Sandoval', rut: '17259594-4', empresa: tn, area: 'Aseo+/+Guardarropia'},
	{nombre: 'Jean+Maccenat', rut: '25947809-K', empresa: l, area: fa},
	{nombre: 'Eduardo+Cayunao', rut: '13809346-8', empresa: f, area: fa},
	{nombre: 'Carlos+Painevilo', rut: '9854102-0', empresa: f, area: 'Corrales'},
	{nombre: 'Jorge+Lincovilo', rut: '9935031-8', empresa: f, area: ma},
	{nombre: 'Carlos+Castro', rut: '16585709-7', empresa: f, area: fa},
	{nombre: 'Raúl+Lopez+Muñoz', rut: '20354629-7', empresa: g, area: t},
	{nombre: 'Benjamín+Contreras', rut: '19304536-7', empresa: g, area: t},
	{nombre: 'Ruben+Andrade', rut: '9697522-8', empresa: f, area: d},
	{nombre: 'Florencio+Soto', rut: '7855054-6', empresa: f, area: fa},
	{nombre: 'Rene+Pierre', rut: '26099674-6', empresa: l, area: fa},
	{nombre: 'María+José+Loyola', rut: '15258333-8', empresa: f, area: 'Operaciones'},
	{nombre: 'Nelson+Quezada', rut: '8798578-4', empresa: o, area: s},
	{nombre: 'Estefania+Rivera', rut: '18686526-K', empresa: f, area: 'Calidad'},
	{nombre: 'Angela+Estrada', rut: '18149956-7', empresa: f, area: 'Calidad'},
	{nombre: 'Hernan+Pichulaf', rut: '16316807-3', empresa: l, area: v},
	{nombre: 'Jose Millapan', rut: '15653007-7', empresa: g, area: t},
	{nombre: 'Juan+Cava', rut: '16824075-9', empresa: f, area: fa},
	{nombre: 'Edgardo+Chávez', rut: '6648519-6', empresa: l, area: fa},
	{nombre: 'Jose+Loncolí', rut: '8691146-9', empresa: m, area: 'Jardinería'},
	{nombre: 'Jean+Batiste', rut: '26448555-K', empresa: l, area: fa},
	{nombre: 'Daniel+Fuentes', rut: '20104935-0', empresa: l, area: sc},
	{nombre: 'Adolphe+Edine', rut: '26623026-5', empresa: l, area: fa},
	{nombre: 'Juan+Lopez', rut: '9573742-0', empresa: f, area: s},
	{nombre: 'Juan+Carlos+Leiva', rut: '10018774-4', empresa: l, area: fa},
	{nombre: 'Cristian+Gómez', rut: '12867420-9', empresa: l, area: d},
	{nombre: 'Gloria+Loncomilla', rut: '17694800-0', empresa: tn, area: d},
	{nombre: 'Leandro+Millar', rut: '21156612-4', empresa: o, area: 'Grasas'},
	{nombre: 'Claudio+Painevilo', rut: '19761748-9', empresa: f, area: fa},
	{nombre: 'Pablo+Toro', rut: '16130837-4', empresa: l, area: fa},
	{nombre: 'Juan+Riquelme', rut: '19075430-8', empresa: f, area: fa},
	{nombre: 'Jose+Oyarso', rut: '9188965-7', empresa: f, area: fa},
	{nombre: 'Hector+Millar', rut: '13964957-5', empresa: o, area: 'Grasas'},
	{nombre: 'Valeria+Poblete', rut: '13519146-9', empresa: l, area: e},
	{nombre: 'Cesar+Icef', rut: '26662656-8', empresa: g, area: t},
	{nombre: 'David+Vega', rut: '20974795-2', empresa: l, area: v},
	{nombre: 'Pablo+Cepeda', rut: '19519776-8', empresa: f, area: p},
	{nombre: 'Roberto+Sepulveda', rut: '17444426-9', empresa: f, area: d},
	{nombre: 'Melisa+Esparza', rut: '21581580-3', empresa: l, area: fa},
	{nombre: 'Pedro+Millan', rut: '8698559-4', empresa: l, area: fa},
	{nombre: 'Leonardo+Vargas', rut: '11899099-4', empresa: f, area: 'Trafico+Cajas'},
	{nombre: 'Silean+Sayncrain', rut: '26775978-2', empresa: f, area: v},
	{nombre: 'Manuel+Benavente', rut: '7993540-9', empresa: f, area: se},
	{nombre: 'Jaime+Recart', rut: '16204339-9', empresa: f, area: 'Comercial'},
	{nombre: 'Javier+Parada', rut: '10879382-1', empresa: o, area: tr},
	{nombre: 'Edgardo+Fuentealba', rut: '8872765-7', empresa: o, area: tr},
	{nombre: 'Julio+Cachaña', rut: '18323622-9', empresa: f, area: fa},
	{nombre: 'Lissandro+Chandía', rut: '15247173-4', empresa: o, area: ma},
	{nombre: 'Jeyson+Caniumil', rut: '17378398-1', empresa: o, area: ma},
	{nombre: 'Marco+Pizarro', rut: '17033026-9', empresa: 'SAG', area: fa},
	{nombre: 'Belance+Oguenel', rut: '26579153-0', empresa: g, area: t},
	{nombre: 'Octavio+Alomias', rut: '24390615-6', empresa: f, area: fa},
	{nombre: 'Tomas+Cifuentes', rut: '19858658-0', empresa: g, area: t},
	{nombre: 'Fernando+Salinas', rut: '10339739-1', empresa: f, area: fa},
	{nombre: 'Matías+Soto', rut: '21478186-7', empresa: l, area: fa},
	{nombre: 'Nirza+Leal', rut: '14077775-7', empresa: f, area: fa},
	{nombre: 'Marco+Neira', rut: '11896227-3', empresa: f, area: d},
	{nombre: 'Hector+Benavente', rut: '9635969-K', empresa: f, area: s},
	{nombre: 'Cristian+Mely', rut: '12249424-9', empresa: f, area: fa},
	{nombre: 'Carlos+Muñoz', rut: '9947655-9', empresa: f, area: ma},
	{nombre: 'Juan+Guarda', rut: '17810085-8', empresa: f, area: v},
	{nombre: 'Diego+Vazquez', rut: '17450438-5', empresa: f, area: d},
	{nombre: 'Genel+Fortune', rut: '26238234-6', empresa: l, area: fa},
	{nombre: 'Daniel+Oñate', rut: '18197846-5', empresa: f, area: d},
	{nombre: 'Oriana+Hernández', rut: '26999643-9', empresa: f, area: 'Aseo+/+Guardarropia'},
	{nombre: 'Wilson+Joseph', rut: '26060756-1', empresa: f, area: fa},
	{nombre: 'Osvaldo+Breve', rut: '8804760-5', empresa: f, area: fa},
	{nombre: 'Javier+Montecinos', rut: '18547128-4', empresa: g, area: t},
	{nombre: 'Victor+Pichingual', rut: '17637621-K', empresa: f, area: s},
	{nombre: 'Cristian+Llancavil', rut: '18876249-2', empresa: f, area: fa},
	{nombre: 'Juan+Llanquinao', rut: '17263993-3', empresa: l, area: fa},
	{nombre: 'Stevenson+Petit+Frere', rut: '26236569-7', empresa: f, area: fa},
	{nombre: 'Remy+Florvil', rut: '26088963-K', empresa: f, area: fa},
	{nombre: 'Matias+Cifuentes', rut: '20198221-9', empresa: f, area: s},
	{nombre: 'Hector+Larrain', rut: '7059463-3', empresa: l, area: a},
	{nombre: 'Orlando+Carriman', rut: '18875771-5', empresa: o, area: s},
	{nombre: 'Carlos+Nuñez', rut: '26754482-4', empresa: l, area: fa},
	{nombre: 'Richard+de+Jesús+Perez', rut: '26567415-1', empresa: g, area: t},
	{nombre: 'Sudelia+Cortez', rut: '15492942-8', empresa: f, area: 'Calidad'},
	{nombre: 'Sandra+Saavedra', rut: '11040129-9', empresa: f, area: d},
	{nombre: 'Elisabeth+Peña', rut: '14210281-1', empresa: l, area: fa},
	{nombre: 'Hernan+Coliñir', rut: '15827247-4', empresa: l, area: fa},
	{nombre: 'Leodan+Quintriqueo', rut: '18967944-0', empresa: f, area: sc},
	{nombre: 'Joel+Lienlaf', rut: '13397206-4', empresa: f, area: fa},
	{nombre: 'Alejandro+Giusti', rut: '6988819-4', empresa: tn, area: 'Aseo+/+Guardarropia'},
	{nombre: 'Leonel+Beñaldo', rut: '9891261-4', empresa: l, area: v},
	{nombre: 'Juan+Alegre', rut: '8597839-K', empresa: f, area: fa},
	{nombre: 'Cesar+Peña', rut: '18774473-3', empresa: l, area: fa},
	{nombre: 'Cristian+Ortega', rut: '13317847-3', empresa: f, area: fa},
	{nombre: 'Cristian+Quintulen', rut: '15239750-K', empresa: f, area: d},
	{nombre: 'Marisela+Villablanca', rut: '17638168-K', empresa: f, area: d},
	{nombre: 'Francisco+Ortiz', rut: '19305726-8', empresa: o, area: ma},
	{nombre: 'Juan+Mardones+Franco', rut: '8624548-K', empresa: f, area: fa},
	{nombre: 'Rosamel+Barra', rut: '11114231-9', empresa: f, area: d},
	{nombre: 'Fernando+Salgado', rut: '20932895-K', empresa: f, area: d},
	{nombre: 'Sicto+Torres', rut: '9361968-4', empresa: f, area: fa},
	{nombre: 'Ricardo+Castro', rut: '18435466-7', empresa: l, area: fa},
	{nombre: 'Hernan+Montiel', rut: '13001773-8', empresa: f, area: d},
	{nombre: 'Miguel+Lagos', rut: '19926106-1', empresa: f, area: ma},
	{nombre: 'Victor+Lopez', rut: '11688628-6', empresa: o, area: tr},
	{nombre: 'Sergio+Candia', rut: '7741615-3', empresa: l, area: fa},
	{nombre: 'Yhon+Olivera', rut: '19286075-K', empresa: f, area: sc},
	{nombre: 'Sergio+Diaz', rut: '12927852-8', empresa: f, area: fa},
	{nombre: 'Rodrigo+Reyes', rut: '17261523-6', empresa: f, area: ma},
	{nombre: 'Victor+Vargas', rut: '16316568-6', empresa: f, area: fa},
	{nombre: 'Jorge+Espinoza', rut: '12537525-1', empresa: f, area: d},
	{nombre: 'Enrique+Luca', rut: '7972206-5', empresa: o, area: tr},
	{nombre: 'Joaquin+Rifo', rut: '14219659-K', empresa: 'SAG', area: fa},
	{nombre: 'Gedeon+Geraldson', rut: '26474746-5', empresa: f, area: 'Trafico+Cajas'},
	{nombre: 'Luis+Aburto', rut: '19230653-1', empresa: tc, area: fa},
	{nombre: 'Jaime+Avarzúa', rut: '17982657-7', empresa: 'SAG', area: 'Inspector'},
	{nombre: 'Eduardo+Calfin', rut: '8019396-3', empresa: g, area: t},
	{nombre: 'Manuel+Maldonado', rut: '12754519-7', empresa: o, area: t},
	{nombre: 'Judner+Jean', rut: '26067138-3', empresa: f, area: fa},
	{nombre: 'Igor+Silva', rut: '18557493-8', empresa: f, area: fa},
	{nombre: 'Hector+Ruiz', rut: '8882046-0', empresa: o, area: ma},
	{nombre: 'Erick+Sepulveda', rut: '19704771-2', empresa: f, area: 'Corrales'},
	{nombre: 'Hector+Rocha', rut: '19075613-0', empresa: f, area: a},
	{nombre: 'Jocelyn+Cheuquelaf', rut: '18333388-7', empresa: l, area: fa},
	{nombre: 'Nicole+Duget', rut: '16049341-0', empresa: f, area: 'RRHH'},
	{nombre: 'Yvent+Benjamin', rut: '26186092-9', empresa: f, area: sc},
	{nombre: 'Lisbeth+Diaz', rut: '16178140-1', empresa: f, area: 'RRHH'},
	{nombre: 'Johnny+Coronado', rut: '20103922-3', empresa: l, area: d},
	{nombre: 'Andrea+Arroyo', rut: '15807763-9', empresa: f, area: p},
	{nombre: 'Francisco+Lagos', rut: '17582347-6', empresa: f, area: tr},
	{nombre: 'Ivan+Soto', rut: '15258755-4', empresa: f, area: d},
	{nombre: 'Carmen+Navarrete', rut: '6506027-2', empresa: l, area: d},
	{nombre: 'Jose+Alberto+Sibira', rut: '27072748-4', empresa: g, area: t},
	{nombre: 'Alexander+Velasquez', rut: '26445058-6', empresa: f, area: d},
	{nombre: 'Miguel Palma', rut: '11247974-0', empresa: g, area: t},
	{nombre: 'Leandro+Duran', rut: '9372203-5', empresa: f, area: fa},
	{nombre: 'John Tejo', rut: '17915095-6', empresa: f, area: d},
	{nombre: 'Marcelo+Cares', rut: '13581669-8', empresa: f, area: d},
	{nombre: 'Maximiliano+Mendez', rut: '11356410-5', empresa: l, area: v},
	{nombre: 'Joseph+Wilson+Jean', rut: '26202292-7', empresa: l, area: fa},
	{nombre: 'Ivan+Alvarado', rut: '18241988-5', empresa: l, area: fa},
	{nombre: 'Pedro+Sierra', rut: '20106096-6', empresa: l, area: d},
	{nombre: 'Eduardo+Benavides', rut: '18720031-8', empresa: l, area: 'Trafico+Cajas'},
	{nombre: 'Ercio+Sandoval', rut: '9947084-4', empresa: o, area: tr},
	{nombre: 'Alejandro+Mella', rut: '14221844-5', empresa: g, area: t},
	{nombre: 'Carlos+Painemal', rut: '16947963-1', empresa: f, area: d},
	//{nombre: '', rut: '', empresa: , area: },
]

const $ = (selector) => document.querySelector(selector);
const $sectionCaja = $("#sectionCaja");
const $resultado = $("#resultado");
const $input1 = $("#input1");
const $input2 = $("#input2");

const VALUES_OPERATOR = {
	SUMA: "#suma",
	RESTA: "#resta",
};

//Funciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const operacion = (callback) =>
	callback(Number($input1.value), Number($input2.value));
const MostrarCodigo = (resultado) => {
	resultado < 0
		? ($resultado.classList.add("text-danger"), ($resultado.textContent = 0))
		: ($resultado.classList.remove("text-danger"),
		  ($resultado.textContent = resultado));
};

//Evento
$sectionCaja.addEventListener("click", ({ target }) => {
	if (target.matches(VALUES_OPERATOR.SUMA)) {
		MostrarCodigo(operacion(suma));
	} else if (target.matches(VALUES_OPERATOR.RESTA)) {
		MostrarCodigo(operacion(resta));
	}
});

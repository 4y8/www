const select = document.getElementById("example");
const code = document.getElementById("code");

select.addEventListener("change", loadExample);

function loadExample (e) {
	let ex = "./examples/" + e.target.value + ".mle";
	var req = new XMLHttpRequest();
	req.open("GET", ex, false);
	req.send();
	if (req.status == 200) {
		code.value = req.responseText;
	}
}

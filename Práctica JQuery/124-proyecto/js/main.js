"use strict";
$(document).ready(function() {
	// Chequeo si está en el index
	if (window.location.href.indexOf("index") > -1) {
		// Slider
		$(".bxslider").bxSlider({
			mode: "fade",
			captions: true,
			slideWidth: 1000,
			responsive: true,
			auto: true,
			pager: false
		});

		// Posts
		var posts = [
			{
				title: "Prueba de título 1",
				date: "Publicado el día " + moment().format("LL"),
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				title: "Prueba de título 2",
				date: "Publicado el día " + moment().format("LL"),
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				title: "Prueba de título 3",
				date: "Publicado el día " + moment().format("LL"),
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				title: "Prueba de título 4",
				date: "Publicado el día " + moment().format("LL"),
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			},
			{
				title: "Prueba de título 5",
				date: "Publicado el día " + moment().format("LL"),
				content:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			}
		];
		var myPost = $("#posts");
		posts.forEach((item, index) => {
			/* Añado plantilla HTML */
			let post = `
			<article class="post">
				<h2>${item.title}</h2>
				<span class="date">${item.date}</span>
					<p>${item.content}</p>
				<a href="#" class="button-more">Leer más</a>
			</article>
		 `;
			myPost.append(post);
		});
	}
	// Cambiar tema
	var theme = $("#theme");
	$("#to-green").click(function() {
		theme.attr("href", "css/green.css");
	});
	$("#to-blue").click(function() {
		theme.attr("href", "css/blue.css");
	});
	$("#to-red").click(function() {
		theme.attr("href", "css/red.css");
	});

	/* Subir */
	$(".subir").click(function() {
		$("html, body").animate(
			{
				scrollTop: 0
			},
			500
		);
		return false;
	});

	// Login falso
	var form_name;
	$("#login form").submit(function() {
		form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});
	form_name = localStorage.getItem("form_name");
	var about = $("#about p");
	if (form_name != null && form_name != "undefined") {
		about.html("<br><strong>Bienvenido, " + form_name + " </strong>");
		about.append("<a href='#' id='unlogin'>Desconectarse.</a>");
		$("#login").hide();
		$("#unlogin").click(function() {
			localStorage.clear();
			location.reload();
		});
	}

	// Sobre mi
	if (window.location.href.indexOf("about") > -1) {
		$("#acordeon").accordion();
	}

	// Reloj
	if (window.location.href.indexOf("clock") > -1) {
		setInterval(function() {
			let valor = moment().format("LTS");
			$("#reloj").html("<h3>" + valor + "</h3>");
			document.title = "Hora actual: " + valor;
		}, 1000);
	}

	// Validar contacto
	// http://www.formvalidator.net/
	if (window.location.href.indexOf("contact") > -1) {
		$("form input[data-validation='date']").datepicker({
			dateFormat: "dd/mm/yy" /* Redundante */
		});
		$.validate({
			lang: "es",
			errorMessagePosition: "top",
			scrollToTopError: true
		});
	}
});

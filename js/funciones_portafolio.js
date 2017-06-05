/**
* Autor : Edwar Cruz
* Este es el archivo de mis funciones.
*/

/*
* Estas seran las variables que tengo que definir.
*/
var g_score = 0 ; 
var g_set = [] ;
var g_letf_image = [] ;
var g_min = 0;
var g_seg = 1;
var g_star = 0;
var g_r_correct = 0;
var g_r_ncorrect = 0;
var clock = "";
var set_moving = "";
	// Estableco el vector de conjunto con sus valores.
	/**
	* 0		Pregunta
	* 1 	posible respuesrta 1
	* 2 	posible respuesrta 2
	* 3		posible respuesrta 3
	* 4 	posible respuesrta 4
	* 5		left de la imagen 
	* 6 	Respuesta

	*/
	g_letf_image.push([0],[0],[0],[0],[0]);
	g_set.push( 
			[[ '¿El registro calificado será otorgado por?' ] , 

			    [  'Ministerio de Educación Nacional' ] ,	[ 'Policia nacional' ] ,	[ 'Dirección General SENA' ] ,
				[ 'Todos los anteriores' ], [ 0 ], [ 'Ministerio de Educación Nacional' ] ],
			


			[[ '¿Cuánto tiempo dura en vigencia el registro calificado?' ] ,

			    [ '5 años' ] ,	[ '18 meses' ] ,	[ '7 años' ] ,	[ '24 meses' ]  ,  [ 0 ]  ,  [ '7 años' ]] ,




			[[ '4 componentes del portafolio del aprendiz' ] ,	

			    [ 'Guías de aprendizaje, Planes de Mejoramiento Aplicados, Formato Seguimiento Y Evaluación Etapa Productiva.' ] ,	[ 'Fotocopia de la cedula, Formato Guía de Aprendizaje, Planes de Mejoramiento Aplicados, Formato de evaluación y seguimiento a la Etapa Productiva.' ] ,	[ 'Registro calificado, planeacion pedagójica,poryecto formativo, guías de aprendizaje' ]  ,	[ 'Plan de trabajo del aprendiz, Formato Guía de Aprendizaje, Planes de Mejoramiento Aplicados, hojas de trabajo.' ] ,	[ 'Plan de trabajo del aprendiz mensual, Formato Guía de Aprendizaje, Planes de Mejoramiento Aplicados, Formato de evaluación y seguimiento a la Etapa Productiva.' ], [ 0 ], [ 'Guías de aprendizaje, Planes de Mejoramiento Aplicados, Formato Seguimiento Y Evaluación Etapa Productiva.' ] ],



			[[ '¿Cuántas guías de aprendizaje hemos desarrollado?' ] ,	

			    [ '10' ] ,	[ '5' ] ,	[ '32' ]  ,  ['16']  ,  [ 0 ]  ,  [ '16' ] ]

				);


	window.onload = function()
	{
		var name_user = prompt("Ingresa tú nombre para iniciar");
		document.getElementById('count_question').innerHTML = g_set.length;
		document.getElementById('name_user').innerHTML = name_user;
		document.getElementById('container_points').innerHTML = g_score;
		var min = document.getElementById('min');
		var seg = document.getElementById('seg');
		min.value = 00;
		seg.value = 00;
		//star_clock();
	}

	/**
	* Esta funcion da inicio al juego se activa el cronometro.
	*/
	function play_star()
	{
		set_moving = setInterval( moving , 100);
		clock = setInterval(star_clock , 1000 )
		painting_elements();
		document.getElementById('container_fruit').style.display = 'block';
	}

	/**
	* Esta funcion me permitirá pintar los elementos
	*/
	function painting_elements()
	{
		console.log(g_star + " - star ");
		console.log((parseInt(g_set.length) - 2) + " - g.length ");
		if ( g_star >= (parseInt(g_set.length) ) ) {
			var count_question =  document.getElementById('count_question_modal');
			var r_correct =  document.getElementById('r_correct_modal');
			var r_ncorrect =  document.getElementById('r_ncorrect_modal');
			var points =  document.getElementById('container_points_modal');
			count_question.innerHTML = g_set.length;
			r_correct.innerHTML = g_r_correct;
			r_ncorrect.innerHTML = g_r_ncorrect;
			points.innerHTML = g_score;
			var total = "" ;
			if (g_score == (parseInt( g_set.length ) * 10) ) 
			{
				total = "<center><h2 style='color: green'> Excelente Resultado ahora eres un <b> SENIOR </b> </h2></center>";
			}else if (g_score < (parseInt( g_set.length ) * 10) && g_score >= ((parseInt( g_set.length ) * 10) / 2) ) {
				total = "<center><h2 style='color: black'> Has tenido buenos resultados pero puedes mejorar más <b> Junior </b> </h2></center>";
			}else {
				total = "<center><h2 style='color: red'> Pésimos resultados <b> Novato </b> </h2></center>";
			}
			document.getElementById('total').innerHTML = total;
			var time = "<h3><center><b>" + g_min + ":" + g_seg + " seg</b></center></h3> ";
			document.getElementById('time').innerHTML = time;
			clearInterval(set_moving);
			clearInterval(clock);
			$('#myModal').modal('show');
		}else{
			document.getElementById('container_fruit').innerHTML = paint_container_fruit();
			document.getElementById('button_next').style.display = 'none';
			//console.log(g_set[7][2]);
			document.getElementById('container_question').innerHTML = "<center><h3><b>" + g_set[g_star][0] + "</center></h3></b>" ;
			for (var i = 1 ; i < 5 ; i++ ) 
				{
					var left_image = Math.floor(Math.random() * (800 - 50)) + 50;		
					g_letf_image[i] = left_image			
					var rta = document.getElementById( 'rta_'+i );
					rta.innerHTML = g_set[g_star][i];
					rta.style.left = g_letf_image[i] + "px";
					console.log(g_letf_image[i]);
				}
		}
		
	}

	/**
	* Esta funcion se ejecuta una vez se de clic en las imagenes y suma o resta puntos al jugador
	* dependiendo de la cantidad de puntos que se tengan.
	*/
	function make_points( index )
	{
		//Suma o resta los puntos
		g_score = g_score + parseInt(g_set[index][g_select]);

		//Imprime en pantalla los puntos totales
		document.getElementById('container_points').innerHTML = g_score;
	}
	

	/**
	* Esta funcion genera dos números aleatrorios uno es el left y el otro sera el top
	* los cuales se le agregan a la imagenes y con un setinterval se reinicia.
	*/
	function moving()
	{
			
		for (var i = 1 ; i < 5 ; i++ ) 
			{
				g_letf_image[i] = parseInt(g_letf_image[i]) + 1;
				//var left_image = Math.floor(Math.random() * (890 - 100)) + 100;		
				//left_ri = left_image			
				var rta = document.getElementById( 'rta_'+i );
				//rta.innerHTML = g_set[g_star][i];
				rta.style.left = g_letf_image[i] + "px";
				console.log(g_letf_image[i]);
				if (g_letf_image[i] > 700 ) {
					g_letf_image[i] = 50;
				};
			}
			
			// document.getElementById( 'rta_'+i ).style.left = left_r+i +"px";
			// document.getElementById(g_set[i][0]).style.top = top+"px";
			// if (left_r1 > 400 ) {
			// 	left_r1 = 50;
			// }
		
	}

	/**
	* Esta funcion me permitira inicar el cronometro.
	*/
	function star_clock()
	{
		var min = document.getElementById('min');
		var seg = document.getElementById('seg');
		g_seg = parseInt(g_seg) + 1;
		console.log(g_seg);
		if (g_seg >= 59) 
		{
			g_seg = 0;
			g_min = parseInt(g_min) + 1;
		}
		min.value = g_min;
		seg.value = g_seg;

	}


	/**
	* Esta funcion es la encargada de verificar si la respuesta es corecta o falsa ademas 
	* activa la siguiente pregunta 
	*/
	function run( a )
	{
			console.log( g_star + " - " + (parseInt(g_set.length) - 1) );
			for (var i = 1 ; i <= 4 ; i++ ) document.getElementById( 'rta_'+i ).style.display = 'none';
			//for (var i = 1 ; i <= 4 ; i++ ) document.getElementById( 'numbers'+i ).style.display = 'none';
			var result = document.getElementById( a );
			var numbers = document.getElementById('numbers');
			document.getElementById('button_next').style.display = 'block';
			if ( result.innerHTML == g_set[g_star][6] ) 
				{	
					result.style.display = 'block';
					result.style.background = 'green' ;
					result.style.color = '#ffffff' ;

					g_star = parseInt( g_star ) + 1;
					g_r_correct = parseInt( g_r_correct ) + 1;
					g_score = parseInt( g_score ) + 10;
					document.getElementById( 'r_correct' ).innerHTML = g_r_correct;
					document.getElementById( 'container_points' ).innerHTML = g_score;

				}else{
					//numbers.style.display = 'none';
					result.style.display = 'block';
					result.style.background = 'red' ;

					g_star = parseInt( g_star ) + 1;
					g_r_ncorrect = parseInt( g_r_ncorrect ) + 1;
					g_score = parseInt( g_score ) - 5;
					document.getElementById( 'r_ncorrect' ).innerHTML = g_r_ncorrect;
					document.getElementById( 'container_points' ).innerHTML = g_score;
				}
			console.log( a );
	}

	/**
	* Esta funcion pinta las contenedores de las posibles respuestas
	* @return	text	retorna cuatro divs cada uno con una posibles respuesta (4)
	*/
	function paint_container_fruit()
	{
		var salida = "";
			salida += "	<div class='col-xs-5 well' id='rta_1' onclick='run( this.id );' style='position:absolute'>Respuesta 1</div>";
			salida += "	<div class='col-xs-5 well' id='rta_2' onclick='run( this.id );' style='position:absolute'>Respuesta 2</div>";
			salida += "	<div class='col-xs-5 well' id='rta_3' onclick='run( this.id );' style='position:absolute'>Respuesta 3</div>";
			salida += "	<div class='col-xs-5 well' id='rta_4' onclick='run( this.id );' style='position:absolute'>Respuesta 4</div>";
		return salida;
	}




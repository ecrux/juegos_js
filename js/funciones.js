/**
* Autor : Edwar Cruz
* Este es el archivo de mis funciones.
*/

/*
* Estas seran las variables que tengo que definir.
*/
var g_select = 1 ;
var g_score = 0 ; 
var g_set = [] ;

	// Estableco el vector de conjunto con sus valores.
	/**
	* 0		Nombre del producto
	* 1 	Frutas
	* 2 	Verduras
	* 3		Pasteles
	* 4 	imagen del producto
	* 5		top de la imagen
	* 6 	left de la imagen
	*/
	g_set.push( [ [ 'Fresa' ] , 		[  1 ] ,	[ -1 ] ,	[ -1 ] ,	[ 'img/fresa.png' ], 	 [ 0 ], [ 0 ]  ],
				[ [ 'Zanahoria' ] ,		[ -1 ] ,	[  1 ] ,	[ -1 ] ,	[ 'img/zanahoria.png' ], [ 40 ], [ 0 ]  ],
				[ [ 'Arracacha' ] ,		[ -3 ] ,	[  3 ] ,	[ -1 ] ,	[ 'img/arracacha.png' ], [ 80 ], [ 0 ]  ],
				[ [ 'banano' ] ,		[  3 ] ,	[ -3 ] ,	[ -1 ] ,	[ 'img/banano.png' ], 	 [ 120 ], [ 0 ]  ],
				[ [ 'repollo' ] ,		[ -4 ] ,	[  4 ] ,	[ -4 ] ,	[ 'img/repollo.png' ], 	 [ 160 ], [ 0 ]  ],
				[ [ 'pimenton' ] ,		[ -3 ] ,	[  3 ] ,	[ -1 ] ,	[ 'img/pimenton.png' ],  [ 200 ], [ 0 ]  ],
				[ [ 'kiwi' ] ,			[  2 ] ,	[ -2 ] ,	[ -2 ] ,	[ 'img/kiwi.png' ], 	 [ 240 ], [ 0 ]  ],
				[ [ 'mango' ] ,			[  4 ] ,	[ -4 ] ,	[ -4 ] ,	[ 'img/mango.png' ], 	 [ 280 ], [ 0 ]  ],
				[ [ 'pera' ] ,			[  3 ] ,	[ -3 ] ,	[ -3 ] ,	[ 'img/pera.png' ], 	 [ 320 ], [ 0 ]  ],
				[ [ 'piña' ] ,			[  5 ] ,	[ -5 ] ,	[ -5 ] ,	[ 'img/pina.png' ], 	 [ 360 ], [ 0 ]  ],
				[ [ 'manzana' ] ,		[  3 ] ,	[ -3 ] ,	[ -3 ] ,	[ 'img/manzana.png' ], 	 [ 400 ], [ 0 ]  ],
				[ [ 'Pastel' ] ,		[ -3 ] ,	[ -3 ] ,	[  3 ] ,	[ 'img/pastel.png' ] , 	 [ 440 ], [ 0 ]  ],
				[ [ 'Papaya' ] ,		[  2 ] ,	[ -2 ] ,	[ -1 ] ,	[ 'img/papaya.png' ], 	 [ 480 ], [ 0 ]  ]
			);


	window.onload = function()
	{
		document.getElementById('container_fruit').innerHTML = painting_elements();
		document.getElementById('container_points').innerHTML = g_score;
		setInterval( moving , 1);
	}


	/**
	* Esta funcion me permitirá pintar los elementos
	* return	img		Esta función me retorna una imagen según esten en el array;
	*/
	function painting_elements()
	{
		var salida = "";
		var top_image = 0
			console.log( g_set.length );
		for (var i = 0; i < g_set.length ; i++ ) 
		{
			var left_image = Math.floor(Math.random() * (1000 - 100)) + 100;
			salida += "<img width='60px' id='"+g_set[i][0] +"' src='" + g_set[i][4] + "' onclick='make_points("+ i +")' style='position:absolute'; >" ;
			//for (var i = 0 ; i < g_set.length ; i++ ) {
			// 	console.log()
			// 	g_set[i][5] = top_image + 5;
			 	g_set[i][6] = left_image;
			//}
		}
		return salida;
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
		for (var i = 0 ; i < g_set.length ; i++ ) {
			console.log( g_set[i][5] )
			// var left = Math.floor(Math.random() * (1000 - 100)) + 100;
			g_set[i][6] = parseInt( g_set[i][6] ) + 1;
			//console.log(top);
			// var top = Math.floor(Math.random() * (700 - 60)) + 60;
			document.getElementById(g_set[i][0]).style.left = g_set[i][6] +"px";
			document.getElementById(g_set[i][0]).style.top = g_set[i][5] +"px";
			// document.getElementById(g_set[i][0]).style.top = top+"px";
			if (g_set[i][6] > 1000 ) {
				g_set[i][6] = 0;
			}
		}
	}

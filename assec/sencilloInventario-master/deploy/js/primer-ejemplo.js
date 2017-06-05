
/**
 * Autor: Camilo Figueroa ( Crivera ).
 */

var g_inventario = [];

/**
 * Esta primera función se encarga de cargar las funcionalidades una vez ha 
 * cargado completamente la aplicación en el navegador.
 */
window.onload = function()
{
    console.log( "Esto está funcionando." );

    //Agregando elementos al istante de cargar la aplicación.
    g_inventario.push( [ [ "Computadores" ],    [ 20 ] ] );
    g_inventario.push( [ [ "Marcadores" ],      [ 3 ] ] );

    //El vector de inventario se puede imprimir en la consola
    //pero no saldrá al detalle..
    console.log( g_inventario );

    //Se puede imprimir un elemento en la consola variando los subíndices
    //del vector, o los numeritos que parecen dentro de [].
    console.log( g_inventario[ 0 ][ 0 ] );
}

/**
 * Esta función se encarga de colocar un elemento en el vector.
 */
function agregar_elemento()
{
    var dato = document.getElementById( "texto-entrada-nombre" );
    var numero = document.getElementById( "texto-entrada-numero" );
    var panel_impresion = document.getElementById( "contenedor-impresion" );
    var arreglo_temporal = []; //Se usa un vestor temporal para agrupar.

    //Al vector temporal se agregan los datos. 
    arreglo_temporal.push( dato.value ); 
    arreglo_temporal.push( numero.value );

    //Se inserta este vector temporal en el vector global o super vector.
    g_inventario.push( arreglo_temporal );

    //Se llama a la función imprimir para que cada vez que se agregue un 
    //elemento se pueda visualizar inmediatamente.
    panel_impresion.innerHTML = retornar_vector_imprimir();

    //Limpiamos los textos desde donde se digitaron los datos.
    dato.value = ""; 
    numero.value = "";
}

/**
 * Esta función se encarga de retirar el último elemento del vector 
 * a imprimir los resultados.
 */
function retirar_ultimo_elemento()
{
    var panel_impresion = document.getElementById( "contenedor-impresion" );

    g_inventario.pop();
    panel_impresion.innerHTML = retornar_vector_imprimir();
}

/**
 * Esta función se encarga de retornar una cadena de caracteres que representa
 * un html con todos los elementos del vector listos para ser impresos.
 * @return      texto       Un texto html que mostrará los elementos del vector.
 */
function retornar_vector_imprimir()
{
    var salida = "<br><br>Listado de art&iacute;culos<br>";

    //A continuación se procederá a recorrer el vector verticalmente.
    //Esta estructura casi no cambia. Su variación es mínima aun en otros lenguajes.
    for( var i = 0; i < g_inventario.length; i ++ )
    {
        //Como es un vector de dos columnas se necesita de dos llamados.
        salida += g_inventario[ i ][ 0 ] + " existencias: " + g_inventario[ i ][ 1 ] + colocar_enlace( i ) + "<br>"; 
    }

    return salida;
}

/**
 * Esta función se encarga de retirar un elemento dada una fila o sub-índice del vector.
 * @param       número      Fila o sub-índice del vector.
 */
function retirar_elemento( indice_vector )
{
    var panel_impresion = document.getElementById( "contenedor-impresion" );

    console.log( "Elemento a afectar " + indice_vector );

    if( g_inventario[ indice_vector ][ 1 ] > 0 )
    {
        //Hay que recordar que la segunda columna del vector es el número
        //de existencias de los artículos. 
        g_inventario[ indice_vector ][ 1 ] --;

    }else{
            //Cuando ya no hay más artículos se retirará el elemento por completo.
            g_inventario.splice( indice_vector, 1 );
        }

    panel_impresion.innerHTML = retornar_vector_imprimir();
}

/**
 * El propósito de esta función es colocar un enlace para que se puedan 
 * efectuar operaciones sobre el item determinado.
 * @param       número      La fila o sub-íncice del vector.
 * @return      texto       Una cadena que representa un html botón.
 */
function colocar_enlace( indice_vector )
{
    var salida = "";

    salida += "<button onclick='retirar_elemento(" + indice_vector + ");'>Retirar elemento.</button>";

    return salida;
}

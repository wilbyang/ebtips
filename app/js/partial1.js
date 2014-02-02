$( ".all" ).height( $( "#left" ).height() - $( "#filter" ).height() - $( "#header" ).height() - 26 );

$( window ).resize(function() {
	$( ".all" ).height( $( "#left" ).height() - $( "#filter" ).height() - $( "#header" ).height() - 26 );
})


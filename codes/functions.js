//$(function() {

function getPage(page){
	$.ajax({
		type: "POST",
		url: page,
		data: { c: "s" },
		dataType: "html",
		beforeSend: function( xhr ) {
			//
		}
	})
	.done(function( msg ) {
		alert(msg);
		$("body").html( msg );
	});
}
function openPageOnLoad(){
	getPage("http://www.tayangu.com/mobil/pages/index.html");
}
function changePage(page){
	getPage("http://www.tayangu.com/mobil/pages/"+page);
}


//});
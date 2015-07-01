$(function () {
	$('#regions').jstree(
		{
			"core":{
				"themes":{
					"icons":false
				}
			},
			"plugins" : [ "checkbox" ]
		}
	);
	$('#seller-type').select2({width:"100%", height: "5px"});
}); 
hideWidget = function(widgetClass){
	$('.select-widget.'+widgetClass).hide();
	$('.btn.'+widgetClass).show();
};
showWidget = function(widgetClass){
	$('.select-widget.'+widgetClass).show();
	$('.btn.'+widgetClass).hide();
};

var server="localhost:2002/api/"
$(document).ready (function(){
	getReport();
});

function getReport(){
	var webMethod = server+'getReport';
		var rootElementItem="";
		$.getJSON(webMethod, function ($data) {
			var len =$data.length;
			for(i=0;i<len;i++)
			{
				$("#tblReport tbody").append('<tr><td>'+$data[i].gender+'</td><td>'+$data[i].Nationality+'</td></td><td>'+$data[i].30+'</td></td><td>'+$data[i].50+'</td></td><td>'+$data[i].51+'</td></tr>');
			}
			
			 
			$("#tblReport").dataTable({
				aaSorting:[],
				"bPaginate": true,
				"bFilter": true,
				"bInfo": true,
				"sScrollY": 350,
				"sScrollX": "98%",
				"sScrollXInner": "98%"
			});
		});
}

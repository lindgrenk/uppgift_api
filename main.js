var getApi = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?";

//Load all current pictures default
$.getJSON(getApi, { tags : "nature" }, function(images, i) {
	var photos = "";
	$.each(images.items, function(i, item) {
		photos = "<a class=imageLink href='" + item.link +"'>" + "<img id=img" + i + " src='" + item.media.m + "'></a>";
	$("#result").append(photos);
	});
});

// Search function
$("#searchButton").click(function(){
	$.getJSON(getApi, { tags : searchInput.value }, function(search, i) {
		var photos = "";
		$.each(search.items, function(i, item){
			photos += "<a class=imageLink href='" + item.link +"'>" + "<img id=img" + i + " src='" + item.media.m + "'></a>";
		});
		$("#result").html(photos);
	});
	$('#searchInput').val("");
});

function time(){
var bd=document.getElementById("buttonID");
var count = 0
bd.addEventListener("click",incrementCount);

function incrementCount(){
	count+1;
}
if(count==1){
	return process();
}
else{
	document.getElementById("content").innerHTML = "";
	return process();
}
}
function process(){
	var search = document.getElementById("search").value;
	var searchResult = "https://www.googleapis.com/books/v1/volumes?q="+search+"&callback=handleResponse";
	var js = document.createElement("script");
	js.setAttribute("src",searchResult);
	document.body.appendChild(js);
	return false;
}
function handleResponse(response){
	if(response.totalItems == 0){
		document.getElementById("content").innerHTML +="<h3 class = 'right'> NO RESULTS FOUND....</h3>";
	}
	else{
		for(var i=0; i<response.items.length; i++){
			var item = response.items[i];
			var a = item.volumeInfo.title;
			var selfL = item.selfLink;
			var pic = item.volumeInfo.imageLinks.smallThumbnail;
			document.getElementById("content").innerHTML += "</br>"+"</br>"+"<br>"+"<br>"+"<img src ="+"'"+ pic + "'" +" class='im'/>"+"<br>";
			document.getElementById("content").innerHTML += "<h4 class='right'>"+"<a href = '#' class='link' onclick = 'get(this);' id="+"'"+selfL+"'"+">"+a+'</a></h4>';
			document.getElementById("content").innerHTML += "<h4 class='right'>"+"AUTHOR :"+ item.volumeInfo.authors; +"</h4>";
			document.getElementById("content").innerHTML += "<h5 class='right'>"+"PUBLISHER :"+ item.volumeInfo.publisher;	 +"</h5>";
			var rating = item.volumeInfo.averageRating;
			if(rating){
				for(var j=1;j<=rating;j++){
					document.getElementById("content").innerHTML += "<img src='Star-Full.png' id='rating'/>";
					}
					document.getElementById("content").innerHTML += "<span id='rating'>User Rating :</span>";
				}
					else{
						for(var j=1;j<=5;j++){
							document.getElementById("content").innerHTML += "<img src='star.png' id='rating'/>";
						}
						document.getElementById("content").innerHTML += "<span id='rating'>Not Rated Yet</span>";
					}
			}
		}
	}


function get(lnk){
	document.getElementById("content").innerHTML = "";
	var w = lnk.id;
	var dest = w+"?callback=bookInfo";
	var script = document.createElement("script");
	script.setAttribute("src", dest);
	document.body.appendChild(script);
}

function bookInfo(info){
	var readerlink=info.accessInfo.webReaderLink;
	var sbtitle = info.volumeInfo.subtitle;
	document.getElementById("content").innerHTML += "</br>"+"</br>"+"</br>"+"<img src ="+"'"+info.volumeInfo.imageLinks.smallThumbnail + "'" + " class='im'/>";
	document.getElementById("content").innerHTML += "<h3 class='right'>"+info.volumeInfo.title+"</h3>";
	if(sbtitle){
		document.getElementById("content").innerHTML += "<h5 class='right'>"+sbtitle+"</h5>";
	}
	document.getElementById("content").innerHTML += "<h4 class='right'>"+"AUTHOR :"+ info.volumeInfo.authors +"</h4>";
	document.getElementById("content").innerHTML += "<h4 class='right'>"+"PUBLISHER :"+ info.volumeInfo.publisher +"</h4>";
	document.getElementById("content").innerHTML += "<h4 class='right'>"+"LANGUAGE :"+ info.volumeInfo.language +"</h4>";
	document.getElementById("content").innerHTML += "</br>"+"<b>PAGECOUNT :</b>"+ info.volumeInfo.pageCount +"</br>";
	var cat = info.volumeInfo.categories;
	if(cat)
	{
		document.getElementById("content").innerHTML += "</br>"+"<b>CATEGORIES :</b></br>"+ cat +"</br>" +"</br>";
	}
	var userRating = info.volumeInfo.averageRating;
	if(userRating){
		for(var j=1;j<=userRating;j++){
			document.getElementById("content").innerHTML += "<img src='Star-Full.png' id='rating'/>";
		}
		document.getElementById("content").innerHTML += "<span id='rating'>User Rating : </span>";
		document.getElementById("content").innerHTML += "<b>USERS RATING COUNT:</b>"+info.volumeInfo.ratingsCount;
	}
	else
	{
		for(var j=1;j<=5;j++){
			document.getElementById("content").innerHTML += "<img src='Star.png' id='rating'/>";
		}
		document.getElementById("content").innerHTML += "<span id='rating'>Not Rated Yet </span>";
	}
	document.getElementById("content").innerHTML += "</br>"+"<b>PUBLISHED ON :</b>"+ info.volumeInfo.publishedDate +"</br>";
	document.getElementById("content").innerHTML += "</br>"+"<b>DESCRIPTION :</b>"+ info.volumeInfo.description +"</br>";
	document.getElementById("content").innerHTML += "</br>"+"<b>READER-LINK:</b>" + "<span class = 'link'>"+readerlink.link(readerlink)+"</span></br>";
	document.getElementById("content").innerHTML += "</br>"+"<b>SALE-INFO:</b>" + info.saleInfo.saleability+"</br>";
}

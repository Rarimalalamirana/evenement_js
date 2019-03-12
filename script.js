let click = 1;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
	 let nmb=click++
	console.log(`click numero ${nmb}`)
});
document.getElementsByClassName("navbar-toggler-icon")[0].addEventListener("click", function(){
	document.getElementById("navbarHeader").classList.toggle("collapse")
});
let card1=document.getElementsByClassName("col-md-4")[0];
document.getElementsByClassName("btn-outline-secondary")[0].addEventListener("click",function(){
	card1.style.color="red";
});
let card2=document.getElementsByClassName("col-md-4")[1];
document.getElementsByClassName("btn-outline-secondary")[1].addEventListener("click",function(){
	if (card2.style.color ==="green") {
		card2.style.color="black";
	
	}else{
		card2.style.color="green";
	}

});
let link=document.getElementsByTagName("link")[0]
document.getElementsByClassName("navbar")[0].addEventListener("dblclick",function(){
	if (link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
		link.href=""
	}else{
		link.href= "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	}

});
	function function_name() {
		let viewsButton = document.querySelectorAll("div.btn-group button.btn.btn-sm.btn-success");
		let cards = document.querySelectorAll('div.card-body');
		console.log(cards[0].textContent);
		for (var i = 0; i < viewsButton.length; i++) {
			let but = document.querySelectorAll("div.btn-group button.btn.btn-sm.btn-success")[i];
			console.log(i + " : " + but);
			but.addEventListener("click",function(){
				console.log(i);
				console.log(but);
			   document.getElementsByClassName("card-text")[i].textContent="";
			   document.getElementsByClassName("card-img-top")[i].style.width="20%";
			   document.getElementsByClassName("card-img-top")[i].style.height="20%";
			});
		}
	}
	function_name();


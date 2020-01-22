$(document).ready(function(){
	$("#menu-icon").click(function(){
		console.log("Clicked Menu Icon");
		$("#main-menu").css("left", "0px");
		$("#menu-icon").css("right", "-100px");
		function showMenu() {
			$("#main-menu").css("clip-path", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)");
		}
		setTimeout(showMenu, 100);
	});

	$("#close").click(function(){
		console.log("Clicked Close Icon");
		$("#main-menu").css("clip-path", "polygon(0% 0%, 0% 0%, 100% 100%, 0% 100%)");
		function closeMenu() {
			$("#main-menu").css("left", "-300px");
			$("#menu-icon").css("right", "50px");
		}
		setTimeout(closeMenu, 100);
		function resetLayout() {
			$("#main-menu").css("clip-path", "polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)");
		}
		setTimeout(resetLayout, 600);
	});
});
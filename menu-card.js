$(document).ready(function(){
	var count = 1;
	$("#add_btn").click(function(){
		count++;
		var cardHTML = '<article class="card"><section class="card-image"><!--img src="img/veg_exotica.jpg" alt="veg_exotica"--></section><section class="card-name"><h3>Veg Exotica</h3></section><section class="card-details"><p>The best veg pizza out there</p><div class="qty"><span class="qty-btn" id="minus'+count+'">-</span><span class="qty-num" id="qty'+count+'">1</span><span></span><span class="qty-btn" id="plus'+count+'">+</span></div></section></article>';
		$("main").append(cardHTML);
	});
	$(".qty").each(function(k){	
		var i = k + 1;
		$("#minus"+i).click(function(){
			console.log("#minus"+i);
			var qty = parseInt($("#qty"+i).text());
			if(qty >= 1)
				$("#qty"+i).text(qty-1);
		});
		$("#plus"+i).click(function(){
			console.log("#plus"+i);
			var qty = parseInt($("#qty"+i).text());
			if(qty <= 9)
				$("#qty"+i).text(qty+1);
		});
	});
});
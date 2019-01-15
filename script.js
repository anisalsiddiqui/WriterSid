var i = 0;
						var a = 0;
						function toglnav() {
							var sidebar = document.getElementById('sidebar');
							if (i == 0) {
								sidebar.style.right='0';
								sidebar.style.transition='0.5s';
								i++;
								}
								else {
									sidebar.style.right='-60%';
								sidebar.style.transition='0.5s';
								i = 0;
									}
							}
							function toglran() {
								var random = document.getElementById('random');
								var randomTxt = document.getElementById('randm-q');
								if (a == 0) {
									random.src='img/bgpurple.jpg';
									randomTxt.innerHTML='"Tu Safar Hi Nahi, Manzil Hai Mera"';
									a++;
									}
									else if (a == 1) {
										random.src='img/bgyellow.jpg';
										randomTxt.innerHTML='- Anis Al Siddiqui';
									a++;
										}
										else {
                                        random.src='img/bgpink.jpg';
                                        randomTxt.innerHTML='"Tu Chahat Hi Nahi, Maqsad Hai Mera"';
									a = 0;
									}
								}
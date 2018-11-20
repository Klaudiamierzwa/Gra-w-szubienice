var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length; 
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i) ==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function write_password()
{
	document.getElementById("board").innerHTML = haslo1;
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A"; 
letters[1] = "Ą"; 
letters[2] = "B"; 
letters[3] = "C"; 
letters[4] = "Ć"; 
letters[5] = "D"; 
letters[6] = "E"; 
letters[7] = "Ę"; 
letters[8] = "F"; 
letters[9] = "G"; 
letters[10] = "H"; 
letters[11] = "I"; 
letters[12] = "J"; 
letters[13] = "K"; 
letters[14] = "L"; 
letters[15] = "Ł"; 
letters[16] = "M"; 
letters[17] = "N"; 
letters[18] = "Ń"; 
letters[19] = "O"; 
letters[20] = "Ó"; 
letters[21] = "P"; 
letters[22] = "Q"; 
letters[23] = "R"; 
letters[24] = "S"; 
letters[25] = "Ś"; 
letters[26] = "T"; 
letters[27] = "U"; 
letters[28] = "V"; 
letters[29] = "W"; 
letters[30] = "X"; 
letters[31] = "Y"; 
letters[32] = "Z"; 
letters[33] = "Ź"; 
letters[34] = "Ż";  


function start()
{
	var tresc_diva ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+letters[i]+'</div>';
		if ((i +1) % 7==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
	} 
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	write_password();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr)
{
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == letters[nr])
		{
			haslo1 = haslo1.ustawZnak(i,letters[nr]); 
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00c000";
		document.getElementById(element).style.border = "3px solid #00c000";
		document.getElementById(element).style.cursor = "default";
		
		write_password();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#c00000";
		document.getElementById(element).style.border = "3px solid #c00000";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		
		//skucha
		ile_skuch++;
		var image = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+image+'"alt=""/>'	
		}
		
		//wygrana
		if (haslo == haslo1)
		document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
		//przegrana
		if (ile_skuch>=9)
		document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';	
}

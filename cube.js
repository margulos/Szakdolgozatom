//Grafikus felület
var canvas = document.getElementById("kanvasz");
//Háttér megrajzolása
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0,0,250,250)
//Mezők belerajzolása
var mezo=[];
for (var i=0;i<4;i++){
	for(var j=0; j<4; j++){
mezo[i] = canvas.getContext("2d");
mezo[i].fillStyle="#E6E6E6";
mezo[i].fillRect(10+(j*60),10+(i*60),50,50)
	}
}
//Színes mezők lepakolása
var szines=[];
var rm=true;
var szinesszam=[];
var kocka;
var billentyu_kiir_oszlop=[];
var billentyu_kiir_sor=[];
kocka = Math.floor(Math.random() * 7);
var h_tavolsag=[];


for(i=0;i<7;i++){ //Itt rakom le a random színes mezőket
        szinesszam[i]= Math.floor(Math.random() * 16);   //Az indexek segítségével pakolom le őket
        if(i>0){
            for(j=i-1;j>=0;j--){ //Összehasonlítom a random számokat az előzőekkel, hogy mindegyik különbözzön
                if (szinesszam[i]==szinesszam[j]){
                    i--;
                    rm=false;
                    break;
                    }
                else rm=true;
                }
            }
        if(rm==true){
			if(i==kocka){ //itt rakom le a kockát
				szines[kocka] = canvas.getContext("2d"); 
				szines[kocka].fillStyle="#2AAA00";
				szines[kocka].fillRect(10+((szinesszam[kocka]%4)*60),10+(Math.floor(szinesszam[kocka]/4)*60),50,50)	
			}
			else{
		szines[i] = canvas.getContext("2d"); 	
		szines[i].fillStyle="#2E2EFE";
		billentyu_kiir_oszlop[i]=szinesszam[i]%4;
		billentyu_kiir_sor[i]=Math.floor(szinesszam[i]/4);
		szines[i].fillRect(10+(billentyu_kiir_oszlop[i]*60),10+(billentyu_kiir_sor[i]*60),50,50)
			}
            }
        }

//Itt számolja ki a legrövidebb utat.		
var legjobb=0;


var hatodik=false;
var nem_hatodik=false;
var the_end=false;
var k=0;

function alap(kockaoszlop, kockasor, szines){ //reseteléshez
		
	//rácsok és miegymás
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,250,250)
	//Mezők belerajzolása
	var mezo=[];
	for (var i=0;i<4;i++){
		for(var j=0; j<4; j++){
	mezo[i] = canvas.getContext("2d");
	mezo[i].fillStyle="#E6E6E6";
	mezo[i].fillRect(10+(j*60),10+(i*60),50,50)
		}
	}
	
	//A kocka az utolsó elem vagy sem?
	j=0;
	tovabb=true;
	
	//egy fehér mező a kocka kezdője alatt
	for(i=0;i<7;i++){
		
		if(i==kocka){ //Azért rakom bele hogy fixen 6 színes mező legyen
				szines[kocka] = canvas.getContext("2d"); 
				szines[kocka].fillStyle="#E6E6E6";
				szines[kocka].fillRect(10+((szinesszam[kocka]%4)*60),10+(Math.floor(szinesszam[kocka]/4)*60),50,50)	
				//console.log("Kocka hanyadik?");
				//console.log(kocka);
			}
			//TÖBBI
		else{
			
		szines[i] = canvas.getContext("2d");
		//Egyezik e a színes mező a kocka pozíciójával
		if((billentyu_kiir_oszlop[i]==kockaoszlop) && (billentyu_kiir_sor[i]==kockasor)){
			if(padlo){
				
			}
			else{
			//Az alap függvénnyel szedem fel a mezőkets	
				padlo=true;
				tovabb=false;
				if((billentyu_kiir_oszlop[6]!=billentyu_kiir_oszlop[kocka]) && (billentyu_kiir_sor[6]!=billentyu_kiir_sor[kocka])){
					billentyu_kiir_oszlop[i]=-1;
					billentyu_kiir_sor[i]=-1;
					nem_hatodik=true;
				}
				else{
					billentyu_kiir_oszlop[i]=-1;
					billentyu_kiir_sor[i]=-1;
					hatodik=true;
				}
			}
		}
		else if((padlo && teto && also && felso && bal && jobb) || the_end)
			the_end=true;
		else if(padlo && (billentyu_kiir_oszlop[i]==-1 && billentyu_kiir_sor[i]==-1) && j==0 && tovabb){
			billentyu_kiir_oszlop[i]=kockaoszlop;
			billentyu_kiir_sor[i]=kockasor;
			j++;
			if(balra_mozgat || jobbra_mozgat || fel_mozgat || le_mozgat) padlo=false; 
			for(k=i-1;k>=0;k--)
				if(billentyu_kiir_oszlop[i]==billentyu_kiir_oszlop[k] && billentyu_kiir_sor[i]==billentyu_kiir_sor[k]){					
				billentyu_kiir_oszlop[i]=-1;
				billentyu_kiir_sor[i]=-1;
				j--;
				padlo=true;
				break;
				}
		} 
		else;
		
		
		//hogy érintkezik e színes mezoval a for ciklus lefutásakor
				
		//Ha nem, akkor ugyanúgy színes marad
		szines[i].fillStyle="#2E2EFE";
		//console.log("szinesszamtömb");
		//console.log(szinesszam[i]);
		
		szines[i].fillRect(10+(billentyu_kiir_oszlop[i]*60),10+(billentyu_kiir_sor[i]*60),50,50)
		//console.log("neutralizálás"); console.log(neutralize[i]);
		
		//console.log("sor, oszlop, kockasor, kockaoszlop tavolsag:");console.log(billentyu_kiir_sor[i]+1, billentyu_kiir_oszlop[i]+1, kockasor, kockaoszlop, h_tavolsag[i]);
	}}
	//console.log("padlo_ALAP"); console.log(padlo);
	//console.log("ALAP: bal, jobb, teto, padlo, also, felso, the_end:");console.log(bal, jobb, teto, padlo, also, felso, the_end);
	if(the_end)
	lepesszam--;	
	return szines;
}
			
var kockauj_oszlop=szinesszam[kocka]%4;
var kockauj_sor=Math.floor(szinesszam[kocka]/4);

function draw(p,q,drawszin) {
 // ctx.clearRect(0, 0, canvas.width, canvas.height);
 
//méretek 
  var sizeX = 50;
  var sizeY = 50;
  var sizeZ = 50; 

//nagyítás
  //ctx.scale(1, 1);
 
 //elhelyezkedés
  drawCube(p, q, sizeX, sizeY, sizeZ,drawszin);
  
}


function drawCube(x, y, wx, wy, h, color) {
    // középső
	
    ctx.beginPath();
    ctx.moveTo(x, y);	
	/*
	console.log("///////////////");
	console.log("rajzolaskor: padlo"); console.log(padlo);
	console.log("rajzolaskor: jobb"); console.log(jobb);
	*/
	/* // A kocka bal oldala
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
	*/
	ctx.lineTo(x-wx,y);
	ctx.lineTo(x-wx,y-wy);
	ctx.lineTo(x,y-wy);		
    ctx.closePath();
	
	if ((balra_mozgat && jobb) || (le_mozgat && felso) || (jobbra_mozgat && bal) || (fel_mozgat && also))
	ctx.fillStyle = color;
	else
    ctx.fillStyle = "#838357"
    ctx.stroke();
    ctx.fill();

    // jobb
	
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy * 0.3, y - wy * 0.3);
    ctx.lineTo(x + wy * 0.3, y - h - wy * 0.3);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
	
	if ((balra_mozgat && padlo) || (jobbra_mozgat && teto) || (fel_mozgat && jobb) || (le_mozgat && jobb))
	ctx.fillStyle = color;
	else
    ctx.fillStyle = "#909070";
  //  ctx.strokeStyle = "#676744";
    ctx.stroke();
    ctx.fill();

    // felso
	
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h );
    ctx.lineTo(x - wx + wy * 0.3, y - h - (wx * 0.5 + wy * 0.5)*0.3);
    ctx.lineTo(x + wy*0.3, y - h - wy * 0.3);
    ctx.closePath();
	
	if ((le_mozgat && padlo) || (fel_mozgat && teto) || (balra_mozgat && felso) || (jobbra_mozgat && felso))
	ctx.fillStyle = color;
	else
    ctx.fillStyle = "#989865";
 //   ctx.strokeStyle = "#8e8e5e";
    ctx.stroke();
    ctx.fill();
}

//Kocka lerakás mindenek után
draw(10+((szinesszam[kocka]%4)*60)+35,10+(Math.floor(szinesszam[kocka]/4)*60)+65);

//A kocka oldalaihoz különböző igazságértékek beállítása amivel meghatározom melyik oldala legyen színes
	var felso=false, also=false, jobb=false, bal=false, teto=false, padlo=false;
	var balra_mozgat=false, jobbra_mozgat=false, fel_mozgat=false, le_mozgat=false;
	var teliszin="#2E2EFE";
	//Egymást követi forgatások számolása
	var balszam=0;
	var felsoszam=0;
	var jobbszam=0;
	var alsoszam=0;
	var lepesszam = 0;
	
	//Megoldas gombhoz:
	
	function megold(){
		//document.getElementById("megoldas").innerHTML = legjobb;
		setInterval(vegsomegold, 2000);
		//vegsomegold();
	}
	
	var balgomb=new Event('keydown');
	var jobbgomb=new Event('keydown');
	var felgomb=new Event('keydown');
	var legomb=new Event('keydown');
	balgomb.keyCode=37;
	felgomb.keyCode=38;
	jobbgomb.keyCode=39;
	legomb.keyCode=40;
	
	//Megoldás függvénye:
	function vegsomegold(){
		//document.getElementById("megoldas").innerHTML = legjobb;
	//	console.log("Vegsomegold:");
	//	console.log("\n");
		var min=100;
		var poz;
		for(i=0;i<7;i++){
			if(h_tavolsag[i]<min && h_tavolsag[i]>0){
				min=h_tavolsag[i];
				poz=i;
			}
			//console.log("sor, oszlop, kockasor, kockaoszlop tavolsag min poz:");console.log(billentyu_kiir_sor[i], billentyu_kiir_oszlop[i], kockauj_sor, kockauj_oszlop, h_tavolsag[i],min,poz);
		}
		//1 lépésesek
		if(min==1){	
			if(kockauj_sor==billentyu_kiir_sor[poz]+1 && felso==false){
				document.dispatchEvent(felgomb);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-1 && also==false){
				document.dispatchEvent(legomb);
			}	
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && bal==false){
				document.dispatchEvent(balgomb);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && jobb==false){
				document.dispatchEvent(jobbgomb);
			}
			else {
				legjobb--;
				h_tavolsag[poz]=4.1;
				vegsomegold();
				}
			legjobb++;
			
		}
		//2 lépésesek
		else if(min==2){
			if(kockauj_sor==billentyu_kiir_sor[poz]+2 && teto==false){ // ha a kocka lejjebb van 2 sorral
			document.dispatchEvent(felgomb);
			setTimeout(function(){ document.dispatchEvent(felgomb); },200);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-2 && teto==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
			}	
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && teto==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && teto==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]+1 && (bal==false || felso==false)){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				}
				else if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]-1 && (bal==false || also==false)){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				}
				else if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]+1 && (jobb==false || felso==false)){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				}
				else if(felso==false){	
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]-1 && (jobb==false || also==false)){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				}
				else;
			}
			else {
				legjobb=legjobb-2;
				h_tavolsag[poz]=3.1;
				vegsomegold();
			}
			legjobb++;
			legjobb++;
			
		}
		
		//3 lépésesek
		else if(min==3){
			if(kockauj_sor==billentyu_kiir_sor[poz]+3 && also==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && felso==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
			}	
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+3 && jobb==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-3 && bal==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]+2 && (bal==false || teto==false || jobb==false)){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				}
				else if(jobb==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]+1 && (also==false || teto==false || felso==false)){
				if(also==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				}
				else if(teto==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				}
				else if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]-1 && (felso==false || teto==false || also==false)){
				if(felso==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				}
				else if(teto==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				}
				else if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]-2 && (bal==false || teto==false || jobb==false)){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				}
				else if(teto==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				}
				else if(jobb==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]+1 && (also==false || teto==false || felso==false)){
				if(also==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				}
				else if(teto==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				}
				else if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]+2 && (bal==false || teto==false || jobb==false)){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				}
				else if(bal==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]-2 && (felso==false || teto==false || also==false)){
				if(felso==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				}
				else if(teto==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]-1 && (bal==false || teto==false || jobb==false)){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				}
				else if(teto==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				}
				else if(bal==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				}
				else;
			}
			else {
				legjobb=legjobb-3;
				h_tavolsag[poz]=4.2;
				vegsomegold();
			}
			legjobb++;
			legjobb++;
			legjobb++;
			
		}
		
		//4 lépéses 2esek
		
		else if(min==3.1){
			if(kockauj_sor==billentyu_kiir_sor[poz]+2 && (bal==false || jobb==false || felso==false)){
				if(bal==false && kockauj_oszlop!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(jobb==false && kockauj_oszlop!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(felso==false && kockauj_oszlop!=3){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(felso==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else h_tavolsag[poz]=5.1;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-2 && (bal==false || jobb==false || also==false)){
				if(bal==false && kockauj_oszlop!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(jobb==false && kockauj_oszlop!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(also==false && kockauj_oszlop!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(also==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else h_tavolsag[poz]=5.1;
			}	
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && (bal==false || also==false || felso==false)){
				if(also==false && kockauj_sor!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(felso==false && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(bal==false && kockauj_sor!=3){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(bal==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else h_tavolsag[poz]=5.1; 
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && (also==false || jobb==false || felso==false)){
				if(also==false && kockauj_sor!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else if(felso==false && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else if(jobb==false && kockauj_sor!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(jobb==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else h_tavolsag[poz]=5.1;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]+1 && (jobb==false || also==false)){
				if(jobb==false && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(also==false && kockauj_oszlop!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else h_tavolsag[poz]=5.1;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]-1 && (jobb==false || felso==false)){
				if(jobb==false && kockauj_sor!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(felso==false && kockauj_oszlop!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else h_tavolsag[poz]=5.1;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]+1 && (bal==false || also==false)){
				if(bal==false && billentyu_kiir_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(also==false && billentyu_kiir_oszlop!=0){	
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else h_tavolsag[poz]=5.1;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]-1 && (bal==false || felso==false)){
				if(bal==false && kockauj_sor!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(felso==false && kockauj_oszlop!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else h_tavolsag[poz]=5.1;
			}
			else {
				legjobb=legjobb-4;
				h_tavolsag[poz]=5.1;
				vegsomegold();
			}
			legjobb++;legjobb++;
			legjobb++;legjobb++;
			
		}
		
		//4 lépésesek
		else if(min==4){
			if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+1  && (jobb==false || bal==false || also==false)){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(also==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+1 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3  && (jobb==false || felso==false || also==false)){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && (jobb==false || bal==false || felso==false)){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(felso==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else;
			}	
			else if(kockauj_sor==billentyu_kiir_sor[poz]-1 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3 && (jobb==false || felso==false || also==false)){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else;
			}				
			else if(kockauj_sor==billentyu_kiir_sor[poz]-1 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3 && (felso==false || bal==false || also==false)){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && (jobb==false || bal==false || felso==false)){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(felso==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+1 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3 && (felso==false || bal==false || also==false)){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && (jobb==false || bal==false || also==false)){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]+2 && (jobb==false || teto==false || also==false)){
				if(jobb==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(also==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]-2  && (jobb==false || felso==false || teto==false)){
				if(jobb==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(felso==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				}
				else if(teto==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]+2 && (teto==false || bal==false || also==false)){
				if(bal==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else if(also==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]-2 && (bal==false || felso==false || teto==false)){ 
				if(bal==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				}
				else if(felso==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else if(teto==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				}
				else;
			}
			else {
				legjobb=legjobb-4;
				h_tavolsag[poz]=5.2;
				vegsomegold();
			}
			legjobb++;
			legjobb++;
			legjobb++;
			legjobb++;
			
		}
		
		//5 lépéses 1esek
		
		if(min==4.1){	
			if(kockauj_sor==billentyu_kiir_sor[poz]-1){ //Ha a kocka alatt van a színes mező
				if(teto==false && kockauj_oszlop!=3 && kockauj_sor!=0){ //Ha a tetőlap még nem színes a kockán és a kocka nem a 3. oszlopban vagy 1. sorban van
				document.dispatchEvent(jobbgomb); //akkor ezeket a lépéseket kell megtenni
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(teto==false && kockauj_oszlop!=0 && kockauj_sor!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(jobb==false && ((kockauj_oszlop!=3 && kockauj_sor!=0) || (kockauj_oszlop!=3 && kockauj_sor!=3))){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(jobb==false && kockauj_oszlop!=0 && kockauj_sor!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(felso==false && ((kockauj_oszlop!=0 && kockauj_oszlop!=1 && kockauj_sor!=3) || (kockauj_oszlop!=0 && kockauj_sor!=0))){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(felso==false && ((kockauj_oszlop!=3 && kockauj_sor!=3) || (kockauj_oszlop!=3 && kockauj_sor!=0))){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(bal==false && kockauj_oszlop!=3 && kockauj_sor!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(bal==false && ((kockauj_oszlop!=0 && kockauj_sor!=3) || (kockauj_oszlop!=0 && kockauj_sor!=0))){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else h_tavolsag[poz]=6.1;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+1){
				if(teto==false && kockauj_oszlop!=0 && kockauj_sor!=3){ 
				document.dispatchEvent(balgomb); 
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(teto==false && kockauj_oszlop!=3 && kockauj_sor!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(bal==false && ((kockauj_oszlop!=0 && kockauj_sor!=3) || (kockauj_oszlop!=0 && kockauj_sor!=0))){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(bal==false && kockauj_oszlop!=3 && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(also==false && ((kockauj_oszlop!=3 && kockauj_sor!=0) || (kockauj_oszlop!=3 && kockauj_sor!=3))){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(also==false && ((kockauj_oszlop!=0 && kockauj_sor!=0) || (kockauj_oszlop!=0 && kockauj_sor!=3))){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(jobb==false && kockauj_oszlop!=0 && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(jobb==false && ((kockauj_oszlop!=3 && kockauj_sor!=0) || (kockauj_oszlop!=3 && kockauj_sor!=3))){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else h_tavolsag[poz]=6.1;
			}	
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1){ //90 fok minusz az előzőhöz képest
				if(teto==false && kockauj_oszlop!=3 && kockauj_sor!=3){ 
				document.dispatchEvent(legomb); 
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(teto==false && kockauj_oszlop!=3 && kockauj_sor!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(also==false && ((kockauj_oszlop!=0 && kockauj_sor!=3) || (kockauj_oszlop!=3 && kockauj_sor!=3))){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(also==false && ((kockauj_oszlop!=0 && kockauj_sor!=0) || (kockauj_oszlop!=3 && kockauj_sor!=0) || (kockauj_oszlop!=0 && kockauj_sor!=3))){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(bal==false && ((kockauj_oszlop!=3 && kockauj_sor!=0) || (kockauj_oszlop!=0 && kockauj_sor!=0))){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(bal==false && ((kockauj_oszlop!=0 && kockauj_sor!=3) || (kockauj_oszlop!=3 && kockauj_sor!=3))){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(felso==false && ((kockauj_oszlop!=3 && kockauj_sor!=3) || (kockauj_oszlop!=0 && kockauj_sor!=3))){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(felso==false && ((kockauj_oszlop!=3 && kockauj_sor!=0) || (kockauj_oszlop!=0 && kockauj_sor!=0))){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else h_tavolsag[poz]=6.1;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1){ //180 fok az előzőhöz képest
				if(teto==false && kockauj_oszlop!=0 && kockauj_sor!=0){ 
				document.dispatchEvent(felgomb); 
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(teto==false && kockauj_oszlop!=0 && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(felso==false && ((kockauj_oszlop!=3 && kockauj_sor!=0) || (kockauj_oszlop!=0 && kockauj_sor!=0))){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(also==false && ((kockauj_oszlop!=3 && kockauj_sor!=3) || (kockauj_oszlop!=0 && kockauj_sor!=3))){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(jobb==false && ((kockauj_oszlop!=0 && (kockauj_sor!=3 || kockauj_sor!=2)) || (kockauj_oszlop!=3 && kockauj_sor!=3))){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(jobb==false && ((kockauj_oszlop!=3 && kockauj_sor!=0) || (kockauj_oszlop!=0 && kockauj_sor!=0))){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(felso==false && ((kockauj_oszlop!=0 && kockauj_sor!=0) || (kockauj_oszlop!=3 && kockauj_sor!=0))){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(felso==false && ((kockauj_oszlop!=0 && kockauj_sor!=3) || (kockauj_oszlop!=3 && kockauj_sor!=3))){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else h_tavolsag[poz]=6.1;
			}
			else {
				legjobb=legjobb-5;
				h_tavolsag[poz]=6.1;
				vegsomegold();
			}
			legjobb=legjobb+5;
			
		}
		
		//5 lépéses 3asok
		else if(min==4.2){
			if(kockauj_sor==billentyu_kiir_sor[poz]+3){
				if(jobb==false && kockauj_oszlop!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(bal==false && kockauj_oszlop!=3){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(felso==false && kockauj_oszlop!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(felso==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(teto==false && kockauj_oszlop!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3){
				if(jobb==false && kockauj_oszlop!=0){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(bal==false && kockauj_oszlop!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(also==false && kockauj_oszlop!=0){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(also==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(teto==false && kockauj_oszlop!=0){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else;
			}	
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
				if(also==false && kockauj_sor!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(felso==false && kockauj_sor!=3){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(bal==false && kockauj_sor!=3){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(bal==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(teto==false && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
				if(also==false && kockauj_sor!=0){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(felso==false && kockauj_sor!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(jobb==false && kockauj_sor!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(jobb==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(teto==false && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]+2){
				if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(also==false && kockauj_oszlop!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]+1){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(jobb==false && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]-1){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(jobb==false && kockauj_sor!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]-2){
				if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(felso==false && kockauj_oszlop!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]+1){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(bal==false && kockauj_sor!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]+2){
				if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(also==false && kockauj_oszlop[poz]!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]-2){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(bal==false && kockauj_sor!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]-1){
				if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(felso==false && kockauj_oszlop!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else;
			}
			else 
			{
				legjobb=legjobb-5;
				h_tavolsag[poz]=6.2;
				vegsomegold();
			}
			legjobb++;legjobb++;
			legjobb++;legjobb++;
			legjobb++;
			
		}
		
		//5 lépésesek
		else if(min==5){
			if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+2){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(also==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(felso==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else h_tavolsag[poz]=6.3;;
			}
			if(kockauj_sor==billentyu_kiir_sor[poz]+2 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
				if(bal==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else h_tavolsag[poz]=6.3;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+2){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(also==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(felso==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else h_tavolsag[poz]=6.3;;
			}	
			else if(kockauj_sor==billentyu_kiir_sor[poz]-2 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(bal==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else h_tavolsag[poz]=6.3;;
			}				
			else if(kockauj_sor==billentyu_kiir_sor[poz]-2 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(jobb==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else h_tavolsag[poz]=6.3;;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-2){
				if(also==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else h_tavolsag[poz]=6.3;;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+2 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(jobb==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else h_tavolsag[poz]=6.3;;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-2){
				if(felso==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
				else if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				}
				else if(teto==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				}
			}
			else {
				legjobb=legjobb-5;
				h_tavolsag[poz]=6.3;
				vegsomegold();
			}
			legjobb++;
			legjobb++;
			legjobb++;
			legjobb++;
			legjobb++;
			
		}
		
		//6 lépéses 2esek
		else if(min==5.1){
			if(kockauj_sor==billentyu_kiir_sor[poz]+2){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(also==false && kockauj_oszlop!=3){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(also==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-2){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(felso==false && kockauj_oszlop!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else;
			}	
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2){
				if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(jobb==false && kockauj_sor!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(jobb==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2){
				if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(bal==false && kockauj_sor!=0){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]+1){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(teto==false && kockauj_oszlop!=3){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else; 
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]-1){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(teto==false && kockauj_sor!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]+1){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(also==false){	
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(teto==false && kockauj_sor!=3 && kockauj_oszlop!=0){	
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(teto==false && kockauj_sor!=3 && kockauj_oszlop!=3){	
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]-1){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(teto==false && kockauj_sor!=3 && kockauj_oszlop!=0){	
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(teto==false){	
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else;
			}
			else legjobb=legjobb-6;
			legjobb++;legjobb++; legjobb++;
			legjobb++;legjobb++; legjobb++;
			
		}
		
		//6 lépéses 4esek
		else if(min==5.2){
			if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+1){
				if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+1 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+1){
				if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else;
			}	
			else if(kockauj_sor==billentyu_kiir_sor[poz]-1 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else;
			}				
			else if(kockauj_sor==billentyu_kiir_sor[poz]-1 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-1){
				if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+1 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-1){
				if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(teto==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]+2){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]-2){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(also==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]-2){
				if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(also==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]+2){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else;
			}
			else legjobb=legjobb-6;
			legjobb++;legjobb++;
			legjobb++;legjobb++;
			legjobb++;
			legjobb++;
			
		}
		
		//6 lépésesek
		if(min==6){	
			if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
				if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(bal==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
				if(jobb!=true){
					document.dispatchEvent(legomb);
					setTimeout(function(){ document.dispatchEvent(legomb); },200);
					setTimeout(function(){ document.dispatchEvent(legomb); },400);
					setTimeout(function(){ document.dispatchEvent(balgomb); },600);
					setTimeout(function(){ document.dispatchEvent(balgomb); },800);
					setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				}
				else if(felso!=true){
					document.dispatchEvent(balgomb);
					setTimeout(function(){ document.dispatchEvent(balgomb); },200);
					setTimeout(function(){ document.dispatchEvent(balgomb); },400);
					setTimeout(function(){ document.dispatchEvent(legomb); },600);
					setTimeout(function(){ document.dispatchEvent(legomb); },800);
					setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(also==false){
					document.dispatchEvent(legomb);
					setTimeout(function(){ document.dispatchEvent(legomb); },200);
					setTimeout(function(){ document.dispatchEvent(balgomb); },400);
					setTimeout(function(){ document.dispatchEvent(legomb); },600);
					setTimeout(function(){ document.dispatchEvent(balgomb); },800);
					setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
					}
				else if(bal==false){
					document.dispatchEvent(balgomb);
					setTimeout(function(){ document.dispatchEvent(balgomb); },200);
					setTimeout(function(){ document.dispatchEvent(legomb); },400);
					setTimeout(function(){ document.dispatchEvent(balgomb); },600);
					setTimeout(function(){ document.dispatchEvent(legomb); },800);
					setTimeout(function(){ document.dispatchEvent(legomb); },1000);
					}
					else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
				if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
				if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				}
				else if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				}
				else h_tavolsag[poz]=7.2;;
			}
			else {
				legjobb=legjobb-6;
				h_tavolsag[poz]=7.2;
				vegsomegold();
			}
			legjobb++;
			legjobb++;
			legjobb++;
			legjobb++;
			legjobb++;
			legjobb++;
			
		}
		//több lépésesek
		
		//7 lépéses 1esek
		else if(min==6.1){
			if(kockauj_sor==billentyu_kiir_sor[poz]+1){
				if(teto==false && kockauj_sor!=0 && kockauj_oszlop!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				setTimeout(function(){ document.dispatchEvent(legomb); },1200);
				}
				if(teto==false && kockauj_sor!=0 && kockauj_oszlop!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				setTimeout(function(){ document.dispatchEvent(legomb); },1200);
				}
				else if(bal==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(legomb); },1200);
				}
				else if(jobb==false){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(legomb); },1200);
				}
				else;
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-1){ //ehhez igazítás
				if(teto==false && kockauj_sor!=3 && kockauj_oszlop!=0){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1200);
				}
				if(teto==false && kockauj_sor!=3 && kockauj_oszlop!=3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1200);
				}
				else if(jobb==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1200);
				}
				else if(bal==false){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1200);
				}
				else;
			}	
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1){ //90 fok minusz 
				if(teto==false && kockauj_sor!=3 && kockauj_oszlop!=3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
				}
				if(teto==false && kockauj_sor!=0 && kockauj_oszlop!=3){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
				}
				else if(felso==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
				}
				else if(also==false){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
				}
				else;
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1){
				if(teto==false && kockauj_sor!=0 && kockauj_oszlop!=0){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
				}
				if(teto==false && kockauj_sor!=3 && kockauj_oszlop!=0){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
				}
				else if(felso==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
				}
				else if(also==false){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
				}
				else;
			}
			else {
				legjobb=legjobb-7;
				h_tavolsag[poz]=7.1;
				vegsomegold();
			}
			legjobb=legjobb+7;
			
		}
		
		//7 lépéses 3asok
		else if(min==6.2){
			if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]+2){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1200);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]+1){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+2 && kockauj_sor==billentyu_kiir_sor[poz]-1){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]+1 && kockauj_sor==billentyu_kiir_sor[poz]-2){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(legomb); },1200);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]+1){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]+2){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1200);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]-2){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
			}
			else if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-2 && kockauj_sor==billentyu_kiir_sor[poz]-1){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				setTimeout(function(){ document.dispatchEvent(legomb); },1200);
			}
			else legjobb=legjobb-7;
			legjobb++;legjobb++;legjobb++;
			legjobb++;legjobb++;
			legjobb++;legjobb++;
			
		}
		
		//7 lépéses 5ösök
		else if(min==6.3){
			if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+2){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+2 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
				document.dispatchEvent(felgomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(balgomb); },600);
				setTimeout(function(){ document.dispatchEvent(felgomb); },800);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1200);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+2){
				document.dispatchEvent(balgomb);
				setTimeout(function(){ document.dispatchEvent(legomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
			}	
			else if(kockauj_sor==billentyu_kiir_sor[poz]-2 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(balgomb); },200);
				setTimeout(function(){ document.dispatchEvent(legomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				setTimeout(function(){ document.dispatchEvent(legomb); },1200);
			}				
			else if(kockauj_sor==billentyu_kiir_sor[poz]-2 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(legomb); },1200);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-2){
				document.dispatchEvent(legomb);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(legomb); },800);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+2 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
				setTimeout(function(){ document.dispatchEvent(legomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1200);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-2){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(balgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
				setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
			}
			else legjobb=legjobb-7;
			legjobb=legjobb+7;
			
		}
		
		//8 lépéses 2esek
		
		else if(min==7.1){
			if(kockauj_oszlop==billentyu_kiir_oszlop[poz]-1 && kockauj_sor==billentyu_kiir_sor[poz]+1){
				document.dispatchEvent(jobbgomb);
				setTimeout(function(){ document.dispatchEvent(felgomb); },200);
				setTimeout(function(){ document.dispatchEvent(felgomb); },400);
				setTimeout(function(){ document.dispatchEvent(felgomb); },600);
				setTimeout(function(){ document.dispatchEvent(balgomb); },800);
				setTimeout(function(){ document.dispatchEvent(legomb); },1000);
				setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
				setTimeout(function(){ document.dispatchEvent(legomb); },1400);
			}
			legjobb=legjobb+8;
			
		}
		//8 lépéses 6osok
		else if(min==7.2){	
			if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
					document.dispatchEvent(felgomb);
					setTimeout(function(){ document.dispatchEvent(felgomb); },200);
					setTimeout(function(){ document.dispatchEvent(balgomb); },400);
					setTimeout(function(){ document.dispatchEvent(legomb); },600);
					setTimeout(function(){ document.dispatchEvent(balgomb); },800);
					setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
					setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
					setTimeout(function(){ document.dispatchEvent(felgomb); },1400);	
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]+3){
					document.dispatchEvent(legomb);
					setTimeout(function(){ document.dispatchEvent(legomb); },200);
					setTimeout(function(){ document.dispatchEvent(balgomb); },400);
					setTimeout(function(){ document.dispatchEvent(felgomb); },600);
					setTimeout(function(){ document.dispatchEvent(balgomb); },800);
					setTimeout(function(){ document.dispatchEvent(legomb); },1000);
					setTimeout(function(){ document.dispatchEvent(balgomb); },1200);
					setTimeout(function(){ document.dispatchEvent(legomb); },1400);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]-3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
					document.dispatchEvent(legomb);
					setTimeout(function(){ document.dispatchEvent(legomb); },200);
					setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
					setTimeout(function(){ document.dispatchEvent(felgomb); },600);
					setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
					setTimeout(function(){ document.dispatchEvent(legomb); },1000);
					setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
					setTimeout(function(){ document.dispatchEvent(legomb); },1400);
			}
			else if(kockauj_sor==billentyu_kiir_sor[poz]+3 && kockauj_oszlop==billentyu_kiir_oszlop[poz]-3){
					document.dispatchEvent(felgomb);
					setTimeout(function(){ document.dispatchEvent(felgomb); },200);
					setTimeout(function(){ document.dispatchEvent(jobbgomb); },400);
					setTimeout(function(){ document.dispatchEvent(legomb); },600);
					setTimeout(function(){ document.dispatchEvent(jobbgomb); },800);
					setTimeout(function(){ document.dispatchEvent(felgomb); },1000);
					setTimeout(function(){ document.dispatchEvent(jobbgomb); },1200);
					setTimeout(function(){ document.dispatchEvent(felgomb); },1400);
					}
			else;
			legjobb=legjobb+8;
			
		}
	}
	
	for(i=0;i<7;i++){
			if(billentyu_kiir_oszlop[i]!=-1)
				h_tavolsag[i]=Math.abs(billentyu_kiir_oszlop[i]-kockauj_oszlop)+Math.abs(kockauj_sor-billentyu_kiir_sor[i]);
			else
				h_tavolsag[i]=0;
			//console.log("sor, oszlop, kockasor, kockaoszlop tavolsag:");console.log(billentyu_kiir_sor[i], billentyu_kiir_oszlop[i], kockauj_sor, kockauj_oszlop, h_tavolsag[i]);
		}
	
document.addEventListener("keydown", function(event) {
		
    if (event.keyCode == 37 && kockauj_oszlop!=0) {
			lepesszam++;
			felsoszam=0;
			jobbszam=0;
			alsoszam=0;
			balra_mozgat=true; jobbra_mozgat=false; fel_mozgat=false; le_mozgat=false;
		/*	szines[kocka] = canvas.getContext("2d"); 
			szines[kocka].fillStyle="#2AAA00";
			szines[kocka].fillRect(10+(kockauj_oszlop*60)-60,10+(kockauj_sor*60),50,50)*/
			szines=alap(kockauj_oszlop, kockauj_sor,szines);
			//alap(kockauj_oszlop, kockauj_sor,szines);				
			draw(10+(kockauj_oszlop*60)+35-60,10+(kockauj_sor*60)+65,teliszin);
			
			if(jobb && bal && teto && padlo)
			balszam=15;
			else if(padlo && jobb && teto){
			jobb=true;
			teto=true;
			bal=true;
			balszam=14;
			}
			else if(bal && padlo && jobb){
			padlo=true;
			jobb=true;
			teto=true;
			balszam=13;
			}
			else if(teto && bal && padlo){
			bal=true;
			padlo=true;
			jobb=true;
			balszam=12;
			}
			else if(bal && teto && jobb){
			padlo=true;
			bal=true;
			teto=true;
			balszam=11;
			}
			else if(teto && bal){
			bal=true;
			padlo=true;
			balszam=10;
			}
			else if(jobb && bal){
			padlo=true;
			teto=true;
			balszam=9;
			}
			else if(padlo && bal){
			padlo=true;
			jobb=true;
			balszam=8;
			}
			else if(jobb && teto){
			draw(10+(kockauj_oszlop*60)+35-60,10+(kockauj_sor*60)+65,teliszin);
			teto=true;
			bal=true;
			balszam=6;
			}
			else if(padlo && teto){
			draw(10+(kockauj_oszlop*60)+35-60,10+(kockauj_sor*60)+65,teliszin);
			jobb=true;
			bal=true;
			balszam=5;
			}
			else if(padlo==true && jobb==true){
			draw(10+(kockauj_oszlop*60)+35-60,10+(kockauj_sor*60)+65,teliszin);
			jobb=true;
			teto=true;
			balszam=4;
			}
			else if(teto){
			draw(10+(kockauj_oszlop*60)+35-60,10+(kockauj_sor*60)+65,teliszin);
			bal=true;
			balszam=3;
			}
			else if(jobb==true){
			draw(10+(kockauj_oszlop*60)+35-60,10+(kockauj_sor*60)+65,teliszin);
			teto=true;
			balszam=2;
			}
			else if(padlo==true){
			draw(10+(kockauj_oszlop*60)+35-60,10+(kockauj_sor*60)+65,teliszin);
			jobb=true;
			balszam=1;
			}
			else if (bal){
			draw(10+(kockauj_oszlop*60)+35-60,10+(kockauj_sor*60)+65,teliszin);
			padlo=true;
			balszam=7;
			}
			else;
			kockauj_oszlop--;
			if (balszam==1 || balszam==4 || balszam==5 || balszam==14)
			padlo=false;
			if (balszam==2 || balszam==6 || balszam==9 || balszam==11) 
			jobb=false;
			if (balszam==3 || balszam==5 || balszam==10 || balszam==12)
			teto=false;
			if (balszam==7 || balszam==8 || balszam==9 || balszam==13)
			bal=false;
			//padlo=false;
			//jobb=false;
			//kirajzolás
			//requestAnimationFrame(draw(100,200));
		}
	if (event.keyCode == 38 && kockauj_sor!=0) {
			lepesszam++;
			balszam=0;
			felsoszam=0;
			jobbszam=0;
			balra_mozgat=false; jobbra_mozgat=false; fel_mozgat=true; le_mozgat=false;
		/*	szines[kocka] = canvas.getContext("2d"); 
			szines[kocka].fillStyle="#2AAA00";
			szines[kocka].fillRect(10+(kockauj_oszlop*60),10+(kockauj_sor*60)-60,50,50)*/
			szines=alap(kockauj_oszlop, kockauj_sor,szines);
			//alap(kockauj_oszlop, kockauj_sor,szines);
			draw(10+(kockauj_oszlop*60)+35,10+(kockauj_sor*60)+65-60,teliszin);
			
			if(also && felso && teto && padlo)
			alsoszam=15;
			else if(felso && padlo && also){
			padlo=true;
			also=true;
			teto=true;
			alsoszam=14;
			}
			else if(teto && felso && padlo){
			felso=true;
			padlo=true;
			also=true;
			alsoszam=13;
			}
			else if(also && teto && felso){
			teto=true;
			felso=true;
			padlo=true;
			alsoszam=12;
			}
			else if(padlo && also && teto){
			also=true;
			teto=true;
			felso=true;
			alsoszam=11;
			}
			else if(felso && teto){
			padlo=true;
			felso=true;
			alsoszam=10;
			}
			else if(also && felso){
			padlo=true;
			teto=true;
			alsoszam=9;
			}
			else if(padlo && felso){
			padlo=true;
			also=true;
			alsoszam=8;
			}
			else if(also && teto){
			teto=true;
			felso=true;
			alsoszam=6;
			}
			else if(padlo && teto){
			felso=true;
			also=true;
			alsoszam=5;
			}
			else if(padlo==true && also==true){
			also=true;
			teto=true;
			alsoszam=4;
			}
			else if (teto){
			felso=true;
			alsoszam=3;
			}
			else if (also){
			teto=true;
			alsoszam=2;
			}
			else if (padlo){
			also=true;
			alsoszam=1;
			}
			else if (felso){
			padlo=true;
			alsoszam=7;
			}
			else;
			kockauj_sor--;
			if (alsoszam==1 || alsoszam==4 || alsoszam==5 || alsoszam==11)
			padlo=false;
			if (alsoszam==2 || alsoszam==6 || alsoszam==9 || alsoszam==12)
			also=false;
			if (alsoszam==3 || alsoszam==5 || alsoszam==10 || alsoszam==13)
			teto=false;
			if (alsoszam==7 || alsoszam==8 || alsoszam==9 || alsoszam==14)
			felso=false;
		}
	if (event.keyCode == 39 && kockauj_oszlop!=3) {
			lepesszam++;
			balszam=0;
			felsoszam=0;
			alsoszam=0;
			balra_mozgat=false; jobbra_mozgat=true; fel_mozgat=false; le_mozgat=false;
		/*	szines[kocka] = canvas.getContext("2d"); 
			szines[kocka].fillStyle="#2AAA00";
			szines[kocka].fillRect(10+(kockauj_oszlop*60)+60,10+(kockauj_sor*60),50,50)*/
			szines=alap(kockauj_oszlop, kockauj_sor,szines);
			//alap(kockauj_oszlop, kockauj_sor,szines);
			draw(10+(kockauj_oszlop*60)+35+60,10+(kockauj_sor*60)+65,teliszin);
			
			if(bal && jobb && padlo && teto)
			jobbszam=15;
			else if(bal && padlo && jobb){
			padlo=true;
			bal=true;
			teto=true;
			jobbszam=14;
			}
			else if(jobb && padlo && teto){
			padlo=true;
			bal=true;
			jobb=true;
			jobbszam=13;
			}
			else if(bal && teto && jobb){
			teto=true;
			jobb=true;
			padlo=true;
			jobbszam=12;
			}
			else if(padlo && bal && teto){
			bal=true;
			teto=true;
			jobb=true;
			jobbszam=11;
			}
			else if(teto && jobb){
			jobb=true;
			padlo=true;
			jobbszam=10;
			}
			else if(bal && jobb){
			teto=true;
			padlo=true;
			jobbszam=9;
			}
			else if(padlo && jobb){
			bal=true;
			padlo=true;
			jobbszam=8;
			}
			else if(bal && teto){
			teto=true;
			jobb=true;
			jobbszam=6;
			}
			else if(padlo && teto){
			jobb=true;
			bal=true;
			jobbszam=5;
			}
			else if(padlo==true && bal==true){
			bal=true;
			teto=true;
			jobbszam=4;
			}
			else if(teto){
			jobb=true;
			jobbszam=3;
			}
			else if(bal==true){
			teto=true;
			jobbszam=2;
			}
			else if(padlo==true){
			bal=true;
			jobbszam=1;
			}
			else if (jobb){
			padlo=true;
			jobbszam=7;
			}
			else;
			kockauj_oszlop++;
			if (jobbszam==1 || jobbszam==4 || jobbszam==5 || jobbszam==11)
			padlo=false;
			if (jobbszam==2 || jobbszam==6 || jobbszam==9 || jobbszam==12)
			bal=false;
			if (jobbszam==3 || jobbszam==5 || jobbszam==10 || jobbszam==13)
			teto=false;
			if (jobbszam==7 || jobbszam==9 || jobbszam==8 || jobbszam==14)
			jobb=false;
		}
	if (event.keyCode == 40 && kockauj_sor!=3) {
			lepesszam++;
			balszam=0;
			jobbszam=0;
			alsoszam=0;
			balra_mozgat=false; jobbra_mozgat=false; fel_mozgat=false; le_mozgat=true;
		/*	szines[kocka] = canvas.getContext("2d"); 
			szines[kocka].fillStyle="#2AAA00";
			szines[kocka].fillRect(10+(kockauj_oszlop*60),10+(kockauj_sor*60)+60,50,50)*/
			szines=alap(kockauj_oszlop, kockauj_sor,szines);
			//alap(kockauj_oszlop, kockauj_sor,szines);
			/*if(padlo==true){
			le_mozgat=true;
			felso=true;
			draw(10+(kockauj_oszlop*60)+35,10+(kockauj_sor*60)+65+60,teliszin);
			padlo=false;
			}
			else*/
			draw(10+(kockauj_oszlop*60)+35,10+(kockauj_sor*60)+65+60,teliszin);
			
			if(also && felso && padlo && teto)
			felsoszam=15;
			else if(also && padlo && felso){
			padlo=true;
			felso=true;
			teto=true;
			felsoszam=14;
			}
			else if(teto && also && padlo){
			also=true;
			padlo=true;
			felso=true;
			felsoszam=13;
			}
			else if(felso && teto && also){
			teto=true;
			also=true;
			padlo=true;
			felsoszam=12;
			}
			else if(padlo && felso && teto){
			felso=true;
			teto=true;
			also=true;
			felsoszam=11;
			}
			else if(teto && also){
			padlo=true;
			also=true;
			felsoszam=10;
			}
			else if(felso && also){
			padlo=true;
			teto=true;
			felsoszam=9;
			}
			else if(padlo && also){
			padlo=true;
			felso=true;
			felsoszam=8;
			}			
			else if(felso && teto){
			teto=true;
			also=true;
			felsoszam=6;
			}
			else if(padlo && teto){
			felso=true;
			also=true;
			felsoszam=5;
			}
			else if(padlo==true && felso==true){
			felso=true;
			teto=true;
			felsoszam=4;
			}
			else if (teto){
			also=true;
			felsoszam=3;
			}
			else if (felso){
			teto=true;
			felsoszam=2;
			}
			else if (padlo){
			felso=true;
			felsoszam=1;
			}
			else if(also){
			padlo=true;
			felsoszam=7;
			}
			else;
			kockauj_sor++;
			if (felsoszam==1 || felsoszam==4 || felsoszam==5 || felsoszam==11)
			padlo=false;
			if (felsoszam==2 || felsoszam==6 || felsoszam==9 || felsoszam==12)
			felso=false;
			if (felsoszam==3 || felsoszam==5 || felsoszam==10 || felsoszam==13)
			teto=false;
			if (felsoszam==7 || felsoszam==8 || felsoszam==9 || felsoszam==14)
			also=false;
		}			
		
		//heurusztika függvény (távolságok)
		for(i=0;i<7;i++){
			if(billentyu_kiir_oszlop[i]!=-1)
				h_tavolsag[i]=Math.abs(billentyu_kiir_oszlop[i]-kockauj_oszlop)+Math.abs(kockauj_sor-billentyu_kiir_sor[i]);
			else
				h_tavolsag[i]=0;
			//console.log("sor, oszlop, kockasor, kockaoszlop tavolsag:");console.log(billentyu_kiir_sor[i], billentyu_kiir_oszlop[i], kockauj_sor, kockauj_oszlop, h_tavolsag[i]);
		}
	
		console.log("bal, jobb, teto, padlo, also, felso:");console.log(bal, jobb, teto, padlo, also, felso);
		console.log("\n");
		//console.log(legjobb);
		/*
		console.log("balramozgat, jobbramozgat"); console.log(balra_mozgat);console.log(jobbra_mozgat);*/
		document.getElementById("lepes").innerHTML = lepesszam;
});

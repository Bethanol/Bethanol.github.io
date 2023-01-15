let jackverse=["Agurha", "Danos", "Klif", "Tokay", "Shaymus", "Kyan", "Alder", "Dirk", "Damien", "Ignis", "Luis",
"Roe (The Finger)", "Axel", "Billiam Bimberton", "Anisha", "Old Man McBumbersnazzle", "Adytum", "Val Coda", "Zoo",
"Monty (Jed)", "Pandora", "Maira", "Hux", "Baron", "Hazel", "Gretchen", "Ponten", "Lubba", "Makostra", "Cyprus",
"Dantean", "DarkNight GrimReaper", "Gonka", "Anya", "Kuruk", "Minerva", "The Chimp", "Helix", "R.Qi.M.", "Darius",
"Steelix", "Flammen", "Kei", "Void Bear", "Syd Domino", "Polari Ray", "Loxia Leto", "Brock Jaxter", "Gantu"];
let lucverse=["CC", "Dular", "Pitticus Lore", "Zichu", "Franklin", "Delilah", "Amethyst", "Dr. Prof. Harbin Wessen",
"Rad", "Delta Speckles", "Henry", "Luis", "Private Aye", "Chaves", "Cisco", "Luna", "DarkNight", "Evelyn", "Glim",
"Pierre", "Detective Bryan", "Miriella", "Abe Stone", "Lawrence", "Rob STUFF Northsward", "Ringo Starr", "Micky",
"Chef Mème", "May Tres Dee", "Ravenna McJagger", "Myles McJagger", "SIR", "Shaggy", "Carlisle", "Sherlock Gnomes",
"Madame Sigma", "Minecroft Holmes", "Maki-e (The Tempest)", "Uri Nary (Sydney Sleeper)",
"Garmr (The Phantom Protector Ghost)", "Luther", "Magnus", "Cornelius Beutfauq", "Dick Wolf", "Twitchy Squirrel",
"The Pissant", "Lavinia Henwick", "Father Caarvenis", "Sir Grunty", "Iver Adalfarus", "Hirye", "Bracket", 
"Feet Footfungus", "Erina Pentaghast", "Geoffrey Jackalope", "Declann Dahl", "Chopper D. Octering", "Mockinplier"];
let entire=["Agurha", "Danos", "Klif", "Tokay", "Shaymus", "Kyan", "Alder", "Dirk", "Damien", "Ignis", "Luis",
"Roe (The Finger)", "Axel", "Billiam Bimberton", "Anisha", "Old Man McBumbersnazzle", "Adytum", "Val Coda", "Zoo",
"Monty (Jed)", "Pandora", "Maira", "Hux", "Baron", "Hazel", "Gretchen", "Ponten", "Lubba", "Makostra", "Cyprus",
"Dantean", "DarkNight GrimReaper", "Gonka", "Anya", "Kuruk", "Minerva", "The Chimp", "Helix", "R.Qi.M.", "Darius",
"Steelix", "Flammen", "Kei", "Void Bear", "CC", "Dular", "Pitticus Lore", "Zichu", "Franklin", "Delilah", "Amethyst",
"Dr. Prof. Harbin Wessen", "Rad", "Delta Speckles", "Henry", "Luis", "Private Aye", "Chaves", "Cisco", "Luna",
"DarkNight", "Evelyn", "Glim", "Pierre", "Detective Bryan", "Miriella", "Abe Stone", "Lawrence", "Rob STUFF Northsward",
"Ringo Starr", "Micky", "Chef Mème", "May Tres Dee", "Ravenna McJagger", "Myles McJagger", "SIR", "Shaggy", "Carlisle",
"Sherlock Gnomes", "Madame Sigma", "Minecroft Holmes", "Maki-e (The Tempest)", "Uri Nary (Sydney Sleeper)",
"Garmr (The Phantom Protector Ghost)", "Luther", "Magnus", "Cornelius Beutfauq", "Dick Wolf", "Twitchy Squirrel",
"Syd Domino", "Polari Ray", "Loxia Leto", "The Pissant", "Lavinia Henwick", "Father Caarvenis", "Sir Grunty",
"Iver Adalfarus", "Hirye", "Brock Jaxter", "Bracket",  "Feet Footfungus", "Erina Pentaghast", "Geoffrey Jackalope", 
"Declann Dahl", "Gantu", "Chopper D. Octering", "Mockinplier"];
let shipText=document.getElementById('shippingText');
function generateShip(){
	let characterWorld=document.getElementsByClassName('characterWorld');
	if(characterWorld[0].value=="All"&&characterWorld[1].value=="All"){
		shipText.innerHTML= entire[Math.floor(Math.random()*(entire.length-1))] + ' X ' + entire[Math.floor(Math.random()*(entire.length-1))];
	}
	if(characterWorld[0].value=="Jackverse"&&characterWorld[1].value=="Jackverse"){
		shipText.innerHTML= jackverse[Math.floor(Math.random()*(jackverse.length-1))] + ' X ' + jackverse[Math.floor(Math.random()*(jackverse.length-1))];
	}
	if(characterWorld[0].value=="Lucverse"&&characterWorld[1].value=="Lucverse"){
		shipText.innerHTML= lucverse[Math.floor(Math.random()*(lucverse.length-1))] + ' X ' + lucverse[Math.floor(Math.random()*(lucverse.length-1))];
	}
	if(characterWorld[0].value=="All"&&characterWorld[1].value=="Jackverse"){
		shipText.innerHTML= entire[Math.floor(Math.random()*(entire.length-1))] + ' X ' + jackverse[Math.floor(Math.random()*(jackverse.length-1))];
	}
	if(characterWorld[1].value=="All"&&characterWorld[0].value=="Jackverse"){
		shipText.innerHTML= jackverse[Math.floor(Math.random()*(jackverse.length-1))] + ' X ' + entire[Math.floor(Math.random()*(entire.length-1))];
	}
	if(characterWorld[0].value=="All"&&characterWorld[1].value=="Lucverse"){
		shipText.innerHTML= entire[Math.floor(Math.random()*(entire.length-1))] + ' X ' + lucverse[Math.floor(Math.random()*(lucverse.length-1))];
	}
	if(characterWorld[1].value=="All"&&characterWorld[0].value=="Lucverse"){
		shipText.innerHTML= lucverse[Math.floor(Math.random()*(lucverse.length-1))] + ' X ' + entire[Math.floor(Math.random()*(entire.length-1))];
	}
	if(characterWorld[0].value=="Jackverse"&&characterWorld[1].value=="Lucverse"){
		shipText.innerHTML= jackverse[Math.floor(Math.random()*(jackverse.length-1))] + ' X ' + lucverse[Math.floor(Math.random()*(lucverse.length-1))];
	}
	if(characterWorld[1].value=="Jackverse"&&characterWorld[0].value=="Lucverse"){
		shipText.innerHTML= lucverse[Math.floor(Math.random()*(lucverse.length-1))] + ' X ' + jackverse[Math.floor(Math.random()*(jackverse.length-1))];
	}
}
let adnPrincipale;
let adnSecondaire;
let compteurBouclePrincipale = 0;
let testBouclePrincipale = true;
let compteurBoucleSecondaire = 0;
let testBoucleSecondaire = true;
let compteurBoucleFin = 0;
let compteurFin = 0;
let testFin = true;
const lettreAdn = ['A', 'T', 'G', 'C'];
adnPrincipale = prompt("Quelle est votre chaine principale ?"),
adnSecondaire = prompt("Quelle est votre seconde chaine à tester ?");


if (adnSecondaire < adnPrimaire)
{
	while ((compteurBouclePrincipale < adnPrincipale.length && (testBouclePrincipale == true))
	{
		if (lettreAdn.indexOf(adnPrincipale[compteurBouclePrincipale]) == -1)
		{
			testBouclePrincipale = false;
			console.log("Vous n'avez pas entré une chaine d'ADN correcte");
		}
	}
	while ((compteurBoucleSecondaire < adnSecondaire.length && (testBoucleSecondaire == true))
	{
		if (lettreAdn.indexOf(adnSecondaire[compteurBoucleSecondaire]) == -1)
		{
			testBoucleSecondaire = false;
			console.log("Vous n'avez pas entré une chaine d'ADN correcte");
		}
	}
}
else
{
	console.log("La chaine secondaire est plus grande que la chaine principale.");
}
while (compteurBoucleFin < adnPrincipale.length)
{
	if (adnPrincipale[compteurBoucleFin] == adnSecondaire[0])
	{
		while (compteurFin < adnSecondaire.length && testFin == true)
		{
			if ()
			{
				
			}
		}
	}
}

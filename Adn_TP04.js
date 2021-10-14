
let compteurBouclePrincipale = 0;
let testBouclePrincipale = true;
let compteurBoucleSecondaire = 0;
let testBoucleSecondaire = true;
let compteurBoucleFin = 0;
let compteurFin = 0;
let testFin = true;
let nbreChaineTrouvee = 0;
const lettreAdn = ['A', 'T', 'G', 'C'];
let adnPrincipale = prompt("Quelle est votre chaine principale ?");
let adnSecondaire = prompt("Quelle est votre seconde chaine à tester ?");

if (adnSecondaire < adnPrincipale)
{
    while ((compteurBouclePrincipale < adnPrincipale.length) && (testBouclePrincipale == true))
    {
        if (lettreAdn.indexOf(adnPrincipale[compteurBouclePrincipale]) == -1)
        {
            testBouclePrincipale = false;
            console.log("Vous n'avez pas entré une chaine d'ADN correcte");
        }
        compteurBouclePrincipale++;
    }
    while ((compteurBoucleSecondaire < adnSecondaire.length && (testBoucleSecondaire == true)))
    {
        if (lettreAdn.indexOf(adnSecondaire[compteurBoucleSecondaire]) == -1)
        {
            testBoucleSecondaire = false;
            console.log("Vous n'avez pas entré une chaine d'ADN correcte");
        }
        compteurBoucleSecondaire++;
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
        compteurFin = 0;
        testFin = true;
        while (compteurFin < adnSecondaire.length && testFin == true)
        {
            if (adnPrincipale[compteurBoucleFin + compteurFin] == adnSecondaire[compteurFin]) 
            {
                compteurFin++;
            }else 
            {
                testFin = false;
            }
        }
        if (compteurFin = adnSecondaire.length) 
        {
            nbreChaineTrouvee++;
        }
    }
}

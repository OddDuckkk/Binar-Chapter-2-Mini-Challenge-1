/* Ada sebuah baris array seperti di samping. */
const countries =["Albania", "Turkey", "Netherland", "Germany", "Spain", "England"];

/* Cari nama negara nama ‘Spain’ dan
‘England’ dengan kode JavaScript ya! */
let findCountry;
findCountry = "Indonesia"
if (countries.includes(findCountry) == true) {
    const index = countries.indexOf(findCountry);
    console.log("Negara " + findCountry + " ditemukan pada index " + index);
}
else {
    console.log("Negara " + findCountry +  " tidak ditemukan");
}

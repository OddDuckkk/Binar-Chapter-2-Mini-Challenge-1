const countries =["Albania", "Turkey", "Netherland", "Germany", "Spain", "England", "Albania", "Germany", "Spain"];
/* Ada sebuah baris array seperti di atas.
Coba cari nama negara mana yang duplikat dengan kode
JavaScript ya! */

function findDuplicates(arr) {
    const duplicates = arr.filter((country, index) => arr.indexOf(country) !== index);
    return [...new Set(duplicates)]; 
  }
  
  const duplicateCountries = findDuplicates(countries);
  console.log("Negara yang duplikat: ", duplicateCountries);
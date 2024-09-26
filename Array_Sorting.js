/* Ada sebuah baris array yang menyimpan
data angka seperti di samping. */
const scores =[10,8,7,5,6,3,2,4,1];
/* Urutkan data angka di dalam array tersebut
menggunakan kode JavaScript! */

scores.sort(function(a, b){return a - b});
console.log(scores);
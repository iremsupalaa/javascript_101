/*
1- İki öğrencinin aşağıdaki bilgilerini değişken içinde saklayınız.

öğrenci 1:
isim: ada bilgi
doğum tarihi: 2003
matematik notları: 70 , 70, 80


öğrenci 2:
isim: yiğit bilgi
doğum tarihi: 2001
matematik notları : 40, 40, 50

2- Öğrencilerin yaş bilgilerini değişken içinde tutunuz
3- Öğrencilerin ders ortalama notunu değişken içinde saklayınız
4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.

*/

let ogr1isim = "Ada Bilgi"
let ogr1dt = 2003
let matNot11 = 70
let matNot21 = 70
let matNot31= 50
console.log("Öğrenci 1 Bilgileri:" + ogr1isim +" " + ogr1dt + " " + "Matematik Notları: " + matNot11 + " " + matNot21 + " " + matNot31)  

let ogr2isim = "Yiğit Bilgi"
let ogr2dt = 2001
let matNot12 = 40 
let matNot22 = 40
let matNot32 = 50
console.log("Öğrenci 2 Bilgileri:" + ogr2isim +" " + ogr2dt + " " + "Matematik Notları: " + matNot12 + " " + matNot22 + " " + matNot32)  

let suAnkiYil = new Date().getFullYear();
let ogr1yas = suAnkiYil - parseInt(ogr1dt); //parseInt tam sayıya çevirir
let ogr2yas = suAnkiYil - parseInt(ogr2dt);
console.log("Öğrenci 1 yaş: "  + ogr1yas);
console.log("Öğrenci 2 yaş: " + ogr2yas);

let ortalama1 = (((matNot11) + (matNot12) + (matNot31)) / 3)
console.log("Öğrenci 1 Ortalaması: " + ortalama1)

let ortalama2 = (((matNot12) + (matNot22) + (matNot32)) / 3)
console.log("Öğrenci 2 Ortalaması: " + ortalama2)

let gectiMi1 = (ortalama1 >= 50)
let gectiMi2 = (ortalama2 >= 50)
console.log(gectiMi1)
console.log(gectiMi2)
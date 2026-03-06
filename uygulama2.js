// 1- Bir sayının 10-50 arasında olup olmadığını kontrol edin.
//2- Bir sayının pozitif tek sayı olup olmadığını kontrol edin.
//3 - x,y,z sayılarının büyüklük karşılaştırmasını yapın.
//4- 2 vize 1 final notuna göre hesaplanan ortalama için;
//a) eğer ortalama 50 üzerindeyse geçti değilse kaldı yazsın.
//b) geçmek için ortalaama 50 bile olsa final notu en az 50 olmalıdır.
//c) finalden 70 alındıgında ortalama 50 nin altında bile olsa geçsin.


//----------------------------1------------------------------------------
var sayi = 40;

if (sayi >=10 && sayi <=50) {
    console.log("Sayı 10 ile 50 arasında")
} else {
    console.log("Sayi 10 ile 50 arasında değil")
}

//----------------------------2------------------------------------------
var sayi1 = -2;

if (sayi > 0 && sayi%2 != 0) {
    console.log("sayı pozitif ve tektir")
} else {
    console.log("geçersiz sayı girdiniz")
}

//----------------------------3------------------------------------------
var vize1 = 40;
var vize2 = 70;
var final = 30;
var ortalama = ((vize1 + vize2 + final) / 3)

if (ortalama >= 50 && final >= 50) {
    console.log("dersi geçtiniz")
} else if (ortalama < 50 && final == 70) {
    console.log("dersi geçtiniz")
} else {
    console.log("dersten kaldınız")
}
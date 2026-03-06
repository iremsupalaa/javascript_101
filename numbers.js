let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6"); //int e cevir
sonuc = parseFloat("10.6"); // floata cevir
sonuc = parseInt("10a"); // girilen değer içindeki sadece int değerleri döndürür    
sonuc = parseInt("a10");

sonuc = isNaN("10"); //Not a Number --> sayısal bir değer değil mi fonksiyonu

let sayi = 15.12355467; 

sonuc = sayi.toPrecision(5); // bütün sayı üzerinden 5 basamaklı bir sayı döndürür
sonuc = sayi.toFixed(5); //ondalıklı kısımdan 5 basamak cevirir

sonuc = Math.round(2.4); //yuvarlama işlemi
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2); //yukarı yuvarlama
sonuc = Math.floor(2.6); //aşağı yuvarlama
sonuc = Math.sqrt(25); //kök alır
sonuc = Math.pow(2,3); //2 üzeri 3
sonuc = Math.abs(-10); //pozitife cevirir
sonuc = Math.min(4,6,8,3,9);
sonuc = Math.max(4,6,8,3,9);
sonuc = Math.floor(Math.random() * 100) + 50;

console.log(typeof sonuc);
console.log(sonuc);
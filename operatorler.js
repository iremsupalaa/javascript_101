let sonuc;
let a=10, b=20, c=32;

//1- Aritmetik Operatörler

sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a;
//sonuc a++; // önce ata sonra arttır
//sonuc ++a; //önce arttır sonra ata


//2- Atama Operatörleri
sonuc = a;
sonuc += sonuc;
sonuc -= a;
sonuc *= a;
sonuc /= a; 
sonuc %= a;

//3- Karşılaştırma Operatörleri
sonuc = (a == b)
sonuc = (a!= b) 
sonuc = (3 == "3") //sadece içerik kontrolü
sonuc = (3 === "3") //hem tip hem içerik kontrolü
sonuc = (a < b)
sonuc = (a > b)
sonuc = (a <= b)

console.log(sonuc)
//console.log(a);

//4- Mantıksal Operatörler

let isLoggedIn = false;
let username = "iremsupa"
let password = "1234"
if(isLoggedIn) {
    console.log("uygulamaya giriş yapıldı")
} else {
    console.log("merhaba")
}
//----------------------------------------------------------------------------------
if(isLoggedIn) {
    console.log("uygulamaya giriş yapıldı")
} 
if (!isLoggedIn) {
    console.log("merhaba")
} 
//----------------------------------------------------------------------------------
if(username != "iremsupala" || password != "1234") {
    console.log("uygulamaya giriş yapılamadı, lütfen kullanıcı adını veya şifreyi tekrar girin")

} else if(username == "iremsupala" && password == "1234") {
    console.log("merhaba, uygulamaya giriş yapıldı.")
}
 
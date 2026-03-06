let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase(); //her şey kücük harf
sonuc = kursAdi.toUpperCase(); //her sey büyük harf 
sonuc = kursAdi.length; //karakter sayısı
sonuc = kursAdi[1]; //girilen sayıdaki indisteki karakteri döndürür
sonuc = kursAdi.slice(0, 6); //0. indeksten 6. indekse kadar (6 dahil değil) olan karakterleri döndürür
sonuc = kursAdi.slice(10); //10.indeksten başlayıp sona kadar tüm karakterleri döndürür
sonuc = kursAdi.slice(-10); //son karakterden baslayıp 10. indise kadar olan karakterleri döndürür
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6); //0-6 arası karakterleri döndürür
sonuc = kursAdi.substring(10); //10 dan başlayıp sona kadar karakterleri döndürür

sonuc = kursAdi.replace("Eğitimi","Kursu"); //eğitimi kısmını kursu yapar.
sonuc = kursAdi.trim();//sağ ve soldaki tüm boşluk karakterleri siler
sonuc = kursAdi.trimEnd(); //sadece sondaki boşluğu siler
sonuc = kursAdi.trimStart(); //sadece baştaki boşluğu siler

sonuc = kursAdi.indexOf("Komple"); //girilen kelimenin başlangıç indexini getirir
sonuc = kursAdi.split(" "); //bütün kelimeleri ayırır hepsini yazar
sonuc = kursAdi.split(" ")[0]; //bütün kelimeleri ayırır 0. indistekini yazar
sonuc = kursAdi.split(" ")[3]; //bütün kelimeleri ayırır 3. indistekini yazar


console.log(sonuc);
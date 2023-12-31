# ECMAScript Genel Bakış

ECMAScript, JavaScript programlama dilinin standart spesifikasyonudur. Web tarayıcılarında ve diğer ortamlarda betikleme için temel işlevselliği sağlar.

## Ana Özellikler

- **Sözdizimi:** JavaScript'te kod yazma kurallarını tanımlar.
- **Veri Tipleri:** Number, String, Boolean, Object, Null ve Undefined gibi tipleri içerir.
- **Nesneler ve Fonksiyonlar:** Nesne tabanlı programlamayı destekler ve fonksiyonları birinci sınıf vatandaşlar olarak ele alır.
- **Prototipler:** Nesnelerin prototip yoluyla özellik ve metod miras almasını sağlar.
- **Standart Kütüphane:** Yaygın görevler için yerleşik nesne ve fonksiyonlar sunar.
- **Asenkron Programlama:** Asenkron işlemleri ele almak için Promises ve async/await gibi özellikleri içerir.
- **Modüller:** Kodun modülerleştirilmesi ve yeniden kullanılabilirliği için bir standart sunar.

ECMAScript, yıllar içinde birçok güncelleme almıştır. Özellikle ES5 ve ES6, JavaScript'in modern web geliştirmedeki yeteneklerini genişletmiştir.

# TypeScript Genel Bakış

TypeScript, Microsoft tarafından geliştirilen ve açık kaynaklı bir programlama dilidir. JavaScript'in bir üst kümesi olarak, dile statik tip denetimi ekler.

## Ana Özellikler

- **Statik Tip Denetimi:** Değişken ve fonksiyon tiplerini tanımlama yeteneği sunar.
- **Sınıf Tabanlı Nesne-Yönelimli Programlama:** Sınıflar ve arayüzler desteği ile kod yapısını ve bakımını geliştirir.
- **JavaScript ile Uyumluluk:** Tüm JavaScript kodları geçerli TypeScript kodlarıdır.
- **Gelişmiş Tip Özellikleri:** Enumlar, genel tipler (generics) ve birleşim/kesişim tiplerini içerir.
- **Araç Desteği:** Geliştirme sürecini kolaylaştıran güçlü araçlar sunar.

## Hata Türleri
- **Syntax Error:** Kodun yazım kurallarına uymaması durumunda oluşur. Derleyici veya yorumlayıcı tarafından tespit edilir.
- **Runtime Error:** Program çalıştırıldığında ortaya çıkan hatalar. Örneğin, tanımlanmamış bir değişkene erişim.
- **Compiler Time Error:** Derleme sırasında meydana gelen hatalar, genellikle kodun derlenmesini önler.

## Yazım Standartları
- **camelCase:** İlk kelimenin küçük harfle başladığı, sonraki kelimelerin büyük harfle başladığı yazım şekli. Örnek: `camelCaseYazim`.
- **PascalCase:** Her kelimenin büyük harfle başladığı yazım şekli. Örnek: `PascalCaseYazim`.

## Döngüler
- **for Döngüsü:** Belirli bir sayıda iterasyon yapmak için kullanılır.
- **while Döngüsü:** Koşul doğru olduğu sürece iterasyon yapar.
- **do while Döngüsü:** En az bir kez çalışır ve sonra koşula bakar.

## Debugger
- **Debugger:** Programın çalışma zamanında hata ayıklamak için kullanılan bir araçtır. Kodun adım adım çalıştırılmasını ve değişken değerlerinin izlenmesini sağlar.

## Monad
- **Monad:** Fonksiyonel programlamada, değerleri kapsüllenmiş konteynerler ve bu değerleri dönüştüren işlemler zinciri oluşturmak için kullanılan bir tasarım desenidir.

## SOLID Prensipleri
- **SOLID:** Nesne yönelimli programlamada beş temel prensip: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.

## Nesne Yönelimli Programlama (OOP)
- **OOP:** Verileri nesneler olarak modelleyen ve bu nesneler arasındaki etkileşimlerle programlama yapan bir yaklaşımdır. Sınıflar, kalıtım, polimorfizm ve enkapsülasyon OOP'nin temel özellikleridir.

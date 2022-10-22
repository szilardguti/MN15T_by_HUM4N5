# Rendszerterv

## **A rendszer célja**

- Adatok gyűjtése minél több ember közreműködésével, majd a kitöltési statisztikák alapján segíeni a különböző kézzel írt számok értékének megértését.
- A felület fontos hogy elérhető legyen telefonon és weben is. Webes felület legyen kombatibilis az összes lehetséges eszköz képméretével.
- A kitöltési statisztikák különböző szempontok alapján

## **Projekt terv**

A projekt felülete HTML, CSS és JavaScript-ben fog készülni.  
Megvalósításban törekszünk arra, hogy számítógépes és mobilos felületen is élvezhető és esztétikus megjelenést biztosítsunk. A reszponzív felület élérését több eszközön való teszteléssel is biztosítjuk.

A grafikus megjelenítő felülethez egy szerver oldali alkalmazás fog társulni, ami összeköttetést biztosít az adatbázissal. Ez a backend alkalmazás fogja elvégezni a grafikonok számítását és megjelenítését valamint a szükséges adatokat biztosítja a MNIST tesztekhez.
A grafikonok és az adatok megfelelő működésének és megjelenítésének tesztelését több felületen is biztosítjuk.

## *Mérföldkövek*

- [M-00] Dokumentációk megírása.
- [M-01] Kezdetleges grafikus felület, az adatok bekérésének megvalósítása, adatbázis létrehozása és egy alap web szolgáltatás létrehozása.
- [M-02] MNIST tesztek elvégzésére szükséges rendszerek kialakítása (prototípus).
- [M-03] Alapvető grafikonok tervezése és előkészítése.
- [M-04] Összesített statisztikák oldalának szerkeztése, megvalósítsa.
- [M-05] Tesztelés és utolsó bugok kijavítása

## *Ütemterv*

1. [M-00] Közös meetingek alkalmával megírt, megbeszélt specifikációk.
2. [M-01] Megbeszélésen a grafikus felület feladatainak szétosztása, egy becsült idő megállapítása, alap frontend és backend megvalósítása.
3. [M-02] MNIST tesztek elvégzésére alkalmas prototípus megírása. (Még bugokat és hibákat tartalmazhat)
4. [M-03] A grafikonok megvalósításához szükséges technológiák megismerése. Kezdetleges váz összerakása.
5. [M-04] Kezdetleges váz kibővítése egy összesített statisztikákat mutató oldalra.
6. [M-05] Tesztelés és végleges verzió elkészítése.

## **Követelmények**

- [K01] Hordozhatóság
- [K02] Reszponzív dizájn
- [K03] Rendszerfüggetlenség
- [K04] Gyors működés
- [K05] Könnyű kezelhetőség
- [K06] A weboldal telefonon is megjeleníthető legyen
- [K07] Gamifikáció/Játékosítás

## **Fizikai környezet**

Az alkalmazás futtatására valamilyen böngészőre van szükség pl:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

Webre való fejlesztés miatt frontend és backend részekre osztjuk a fejlesztési környezteket.

##### Frontend:
- Visual Studio Code
- Windows Notepad
- Notepad++

##### Backend:
- Node.js
- Visual Studio Code
- MySQL

## **Domain specifikáció**

Az alkalmazás három fő részből áll össze:
1. Frontend fejlesztése:
	- Alapvető dizájn elemek megtervezése
	- Felhasználói adatok biztonságos továbbításának/megjelenítésének tervezése
	- Kliensoldali funkciók fejlesztése

2. Backend fejlesztése:
	- Beérkező adatok feldolgozását megvalósító funkciók fejlesztése üzleti logika alapján
	- Adatbázis és Backend kapcsolatának megtervezése
	- Különböző HTTP kérések kezelésének kigondolása

3. Adatbázis tervezés:
	- Adattábla értékek megtervezése
	- Adatok biztonságos tárolásának, kezelésének tervezése
    
## **Fogalmak**

- **Frontend:** A weboldal interaktív, a felhasználó által hozzáférhető része az alkalmazásnak, csak korlátozott adatot tekinthet meg.

- **Backend:** Az alkalmazás azon része, amely a Frontend-ről érkező adatok feldolgozásáért felelős, az adatbázis felé továbbítja ezeket. 

- **Adatbázis:** Az adatok perzisztens tárolására szolgál, ahonnan a Backend elérheti és felhasználhatja, valamint továbbíthatja a felhaszáló felé.
	
- **Perzisztens adattárolás:** Adatok hosszútávú tárolása.
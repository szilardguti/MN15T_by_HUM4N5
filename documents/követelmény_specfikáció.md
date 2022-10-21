# Követelmény specifikáció

### Jelenlegi helyzet leírása

A kézírás értelmezése betűknél és számoknál egyaránt kihívást tud okozni az embereknek.
A különféle dokumentumokat, leveleket manapság már ritkán szokták kézzel írni, viszont amennyiben
egy dokumentum kitöltése, datálása kézírással történik, az így leírt dolgok tartalmazhatnak olyan részeket is,
(például dátum vagy személyes okmányok azonosítói) melyeket kézírással lehet csak feltüntetni. 
Az ily módon írt információk feldolgozása során olyan, írásképből adódó félreértések keletkezhetnek, melyek tisztázása nehézkes. 
Ilyen esetekben nincsen olyan eszköz, ami segítené az olvasót, valamint az a szerző kézírásához való hozzáférés nélkül lehet, 
nem képes az írás helyes értelmezésére. Ennek következménye lehet, hogy a dokumentum érvénytelen, 
ezáltal újraírást igényel, ami értékes időbe telik.

Szeretnénk egy olyan eszközt/statisztikát nyújtani munkatársainknak és az általunk támogatott intézményeknek, 
amely segítségével a különböző módon írt számok tényleges értékének értelmezését tudják gyakorolni, 
továbbá önkéntes alapon felmérhetjük az értelmezési tendenciákat.

### Vágyálomrendszer leírása

A projekt egyik célja egy olyan adatbázis kialakítása, melyből statisztikai kimutatásokat lehet készíteni a felhasználói válaszok alapján. 
A másik cél egy alkalmazás fejlesztése, mellyel gyakorolni tudják munkatársaink az írott számok felismerését.
A tesztben megjelenő képek legyenek súlyozottan randomizálva, hogy a nehézség fokozatosan növekedjen. 
A webes felület megjelenése legyen kompatibilis mobiltelefon, akár tablet képméreteivel, tehát rendelkezzen reszponzív felülettel. 
A tanulói és teszt képek ne foglaljanak túl sok tárhelyet. A weboldal kezelhetősége, megjelenése legyen egyszerű és lényegretörő, 
a széleskörű használhatóség érdekében. A teszt folyamatot bármikor meg lehessen szakítani, és újra lehessen folytatni. 
A teszt képek egymás után jövetele legyen gyors.

### Jelenlegi üzleti folyamatok

A mostani rendszerünk leginkább különböző típusú dokumentumokhoz biztosít CRUD műveleteket, amik a következőek:
- Létrehozás: bármilyen típusú dokumentum létrehozása
- Visszaolvasás/Letöltés: 
    - akár online tárhelyen vagy gépről való visszaolvasás/megnyitás 
    - felhőből letöltés lehetősége
- Módosítás: bármilyen módon megnyitott dokumentumok módosítása és azok mentése
- Törlés: felhőben tárolt dokumentumok kitörlése  

Támogatja az üzleti életben legtöbbet használt formátumokat.  
Mindehez egy bizonyos adat mennyiségig ingyenes tárhelyet biztosítunk.  
Amennyiben a felhasználó nem törölni szeretné a dokumentumot, akkor a szerkesztés folyamata a következő képpen néz ki:

### Igényelt üzleti folyamatok
- A webalkalmazás oldalra navigálás -> egyértelműen látszódik az tesztelés elkezdésének és az összetett statisztikák mutatásának lehetőségei -> valamelyik gombra kattintás :
    - **Start** gombra kattintás:  
     a felhasználó megadja alapvető adatait -> elkezdődik a tesztelés ciklusa -> a rendszer betölt egy képet az MNIST adatbázisból -> megjelennek a lehetséges válaszok -> a felhasználó választ egyet a lehetőségek közül -> az eredmény bekerül az eredmények adattáblába -> visszaérkezik arra a képre releváns statisztika -> felhasználó egyhuzamban kitöltött tesztjeinek számát jegyezzük és visszajelzést biztosítunk -> újra választhat a felhasználó, hogy folytatja a tesztek kitöltését vagy az összesített statisztikákat szeretné megtekinteni
    - **Összetett statisztika** gombra kattintás:  
     a felhasználó átkerül egy összesített statisztikákat mutató oldalra -> a felhasználó adatait, többek között a streak értékét, lementjük -> visszanavigálhat a tesztelések oldalára, ahol nem kell újra kitölteni az adatait, esetleg úja le kell igazolnia azokat

Az adatbázisban tárolt számok között vannak olyanok, amelyek egyszerűbben felismerhetőek, de előfordulnak
más számokkal könnyen összetéveszthető kézírások is. Szeretnénk ha felhasználónként a kitöltések számával 
egyenesen arányosan jelenne meg egyre több ilyen megosztó kép, 
mivel ezekből érdekesebb statisztikákat lehet kinyerni.

### A rendszerre vonatkozó szabályok

- A weboldalt HTML nyelven írjuk meg.
- A weboldal kliens-oldali funkcionalitásához JavaScriptet használunk.
- A weboldal megjelenését CSS stíluslappal formázzuk.
- Adatok hosszútávú tárolására egy SQL szervert veszünk igénybe.
- A weboldal CSS és JavaScript részeit külön álloményban adjuk meg, nem  a HTML-be ágyazva.
- A weboldalnak személyi számítógépről és okostelefonról is használhatónak kell lennie.
- A weboldalnak tudnia kell igazodni a megjelenítő eszköz felbontásához.

### Követelménylista

- K01 Hordozhatóság
- K02 Reszponzív dizájn
- K03 Rendszerfüggetlenség
- K04 Gyors működés
- K05 Könnyű kezelhetőség
- K06 A weboldal telefonon is megjeleníthető legyen

### Fogalomszótár

- HTML - Hypertext Markup Language
- CSS - Cascading Style Sheets
- SQL - Structured Query Language
// 1 chi masala 3 son ichida eng katta sonni topish 
function toggleContent() {
    
    let son1 = parseFloat(prompt("Birinchi sonni kiriting:"));
    let son2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
    let son3 = parseFloat(prompt("Uchinchi sonni kiriting:"));
    let engKatta = Math.max(son1, son2, son3);
    alert("Eng katta son: " + engKatta);
    console.log("Eng katta son: " + engKatta);
}




// 2 chi masala  3 ta son ichidan eng katta yig'indini topish
function vowels() {
    
    let son1 = parseFloat(prompt("Birinchi sonni kiriting:"));
    let son2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
    let son3 = parseFloat(prompt("Uchinchi sonni kiriting:"));
    let yigindi1 = son1 + son2; 
    let yigindi2 = son1 + son3; 
    let yigindi3 = son2 + son3; 
    
    if (yigindi1 >= yigindi2 && yigindi1 >= yigindi3) {
        alert("Eng katta yig'indini beruvchi sonlar: " + son1 + " va " + son2  + " qoshganda: " + yigindi1);
        console.log("Eng katta yig'indini beruvchi sonlar: " + son1 + " va " + son2 + " qoshganda: " + yigindi1);
    } else if (yigindi2 >= yigindi1 && yigindi2 >= yigindi3) {
        alert("Eng katta yig'indini beruvchi sonlar: " + son1 + " va " + son3 + " qoshganda: " + yigindi2);
        console.log("Eng katta yig'indini beruvchi sonlar: " + son1 + " va " + son3 + " qoshganda: " + yigindi2);
    } else {
        alert("Eng katta yig'indini beruvchi sonlar: " + son2 + " va " + son3 + " qoshganda: " + yigindi3); ;
        console.log("Eng katta yig'indini beruvchi sonlar: " + son2 + " va " + son3 + " qoshganda: " + yigindi3);
    }

}    


// 3 chisi masala 



function kavlion() {
    
    let son = parseInt(prompt("Sonni kiriting:"));
    if (son === 0) {
        alert("Son 0 ga teng");
        console.log("Son 0 ga teng");
    } else if (son > 0 && son % 2 !== 0) {
        alert("Musbat toq son");
        console.log("Musbat toq son");
    } else if (son > 0 && son % 2 === 0) {
        // son 0 ga teng bolmasligi kerak
        alert("Musbat juft son");
        console.log("Musbat juft son");
    } else if (son < 0 && son % 2 !== 0) {
        alert("Manfiy toq son");
        console.log("Manfiy toq son");
    } else if (son < 0 && son % 2 === 0) {
        alert("Manfiy juft son");
        console.log("Manfiy juft son");
    }
}



// 4 chisi masala 
function numbers() {
    
    function sonniSozgaAylantir(son) {
        const birliklar = ["", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];
        const onliklar = ["", "o'n", "yigirma", "o'ttiz", "qiriq", "ellik", "oltmish", "yetmish", "sakson", "toqson"];
        const yuzlik = "yuz";
        if (son === 0) {
            return "nol";
        }
    
        let natija = "";
        if (Math.floor(son / 100) > 0) {
            natija += birliklar[Math.floor(son / 100)] + " " + yuzlik + " ";
            son %= 100;
        }
        if (Math.floor(son / 10) > 0) {
            natija += onliklar[Math.floor(son / 10)] + " ";
            son %= 10;
        }
        if (son > 0) {
            natija += birliklar[son];
        }
    
        return natija.trim();
    }
    const son = parseInt(prompt("1 dan 999 gacha bo'lgan son kiriting:"), 10);
    if (son >= 1 && son <= 999) {
        alert(sonniSozgaAylantir(son));
    } else {
        alert("Iltimos, 1 dan 999 oralig'idagi son kiriting.");
    }
}



// 5 chisi masala
function even() {
    function oydagiKunlarVaNom(oyRaqami) {
        const oylar = [
            "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
            "Iyul", "Avgust", "Sentyabr", "Oktabr", "Noyabr", "Dekabr"
        ];
    
        let kunlar;
        switch (oyRaqami) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                kunlar = 31;
                break;
            case 4: case 6: case 9: case 11:
                kunlar = 30;
                break;
            case 2:
                kunlar = "28 yoki 29 (kabisa yilida)";
                break;
            default:
                return "Noto‘g‘ri oy raqami kiritildi.";
        }
    
        return `${oylar[oyRaqami - 1]} oyida ${kunlar} kun bor.`;
    }
    
    
    const oyRaqami = parseInt(prompt("son kiriting ! (1 dan 12 gacha):"), 10);
    if (oyRaqami >= 1 && oyRaqami <= 12) {
        alert(oydagiKunlarVaNom(oyRaqami));
    } else {
        alert("Iltimos, 1 dan 12 gacha bo‘lgan oy raqamini kiriting.");
    }
}


// 6 chisi masala 
function adds() {
    
    function robotHolatiniAniqla(y, k) {
        let yonalishlar = ["S", "Q", "J", "G"];
        let index = yonalishlar.indexOf(y);
        for (let i = 0; i < k.length; i++) {
            let komanda = parseInt(k[i]);
            if (komanda === 1) {
                index = (index - 1 + yonalishlar.length) % yonalishlar.length;
            } else if (komanda === 2) {
                index = (index + 1) % yonalishlar.length;
            }
    
        }
        return yonalishlar[index];
    }
    let y = prompt("Robotning boshlang‘ich yo‘nalishini kiriting (S, J, Q, G):").toUpperCase();
    let k = prompt("Robotga berilgan komandani kiriting (0 - davom et, 1 - chapga buril, 2 - o‘ngga buril):");
    
    if (["S", "J", "Q", "G"].includes(y) && /^[0-2]+$/.test(k)) {
        let yakuniyYonalish = robotHolatiniAniqla(y, k);
        alert("Robotning yakuniy yo‘nalishi: " + yakuniyYonalish);
    } else {
        alert("Noto‘g‘ri ma'lumot kiritildi. Iltimos, yo‘nalish (S, J, Q, G) va komandalarni (0, 1, 2) to‘g‘ri kiriting.");
    }
        
    

}    

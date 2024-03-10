function s1() {
    let mesic = parseInt(prompt("Zadej číslo 1-12")); 

    switch (mesic) {
        case 1:
            ci = "1";
            break;
        case 2:
            ci = "2";
            break;
        case 3:
            ci = "3";
            break;
        case 4:
            ci = "4";
            break;
        case 5:
            ci = "5";
            break;
        case 6:
            ci = "6";
            break;
        case 7:
            ci = "7";
            break;
        case 8:
            ci = "8";
            break;
        case 9:
            ci = "9";
            break;
        case 10:
            ci = "10";
            break;
        case 11:
            ci = "11";
            break;
        case 12:
            ci = "12";
            break;
        
    }

    const mesice = [" ", " leden ", " unor ", " brezen","duben", "kveten", "cerven", "cervenec","srpen","zari","rijen","listopad","prosinec"]; 
    console.log("Mesic je: " + mesice[mesic] + ", číslo: " + ci);
}






function su20(){
    let i = 0
    while (i<20) {
        if (i % 2 === 0){
            console.log( i + " je sudé číslo")
        }
        else{
            console.log(i + " je liché číslo")
        }
        i++;
    }
    
}
function hes(){
    const heslo = ("CHlebarnik1")
    let zadaneheslo;
    do{
    let zadaneheslo = prompt("zadejte heslo");
    if (zadaneheslo==heslo){
        alert("Správné heslo")
    }
    else{
        alert("spatne heslo")
    }
    
    }
    while (zadaneheslo!= heslo);
}
function dny(){
    let den = parseInt(prompt("Zadej číslo 1-7")); 

    switch (den) {
        case 1:
            ci = "1";
            break;
        case 2:
            ci = "2";
            break;
        case 3:
            ci = "3";
            break;
        case 4:
            ci = "4";
            break;
        case 5:
            ci = "5";
            break;
        case 6:
            ci = "6";
            break;
        case 7:
            ci = "7";
            break;
        default:
            console.log("nespravné čislo")
            break;
        
    }

    const dny = [" ", " pondeli ", " utery ", " streda"," ctvrtek", " patek", " sobota", " nedele",]; 
    console.log("Mesic je: " + dny[den] + ", číslo: " + ci);
    

}
function fib(){
    let fn1 = 0, fn2 = 1, dalsifib;

    console.log('fibonaciho cislo do 10 je:');

    for (let i = 1; i <= 10; i++) {
    console.log(fn1);
    dalsifib = fn1 + fn2;
    fn1 = fn2;
    fn2 = dalsi;
    }

}
function dynsum(){

let zadanecisla;
let sum = 0;

do {
    userInput = parseInt(prompt("Zadejte číslo (pokud zadáte 0 tak se vypise soucet):"));

    if (isNaN(zadanecisla)) {
        sum += zadanecisla;
    } else {
        alert("není číslo");
    }

} while (zadanecisla !== 0);


console.log("součet je:", sum);

}

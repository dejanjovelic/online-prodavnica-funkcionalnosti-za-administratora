class Artikl {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}
let artikli = [];

function inicijalizacijaArtikla() {

    artikli = JSON.parse(localStorage.getItem("artikliBaza"))
    kreirajRedoveArtikala();
    dodajNoviArtikl();
    
}
document.addEventListener("DOMContentLoaded", inicijalizacijaArtikla());

function kreirajRedoveArtikala() {
    let table = document.querySelector("#artikli-body");
    table.innerHTML = "";
if(artikli){
    for (let i = 0; i < artikli.length; i++) {
        let tr = document.createElement("tr");

        let br = document.createElement("td");
        let naziv = document.createElement("td");
        let cena = document.createElement("td");

        br.textContent = i + 1;
        naziv.textContent = artikli[i].naziv;
        cena.textContent = artikli[i].cena;

        tr.appendChild(br);
        tr.appendChild(naziv);
        tr.appendChild(cena);
        tr.addEventListener("click", function () {
            prikazDetaljaArtikla(artikli[i]);
        });

        table.appendChild(tr);
    }
}
   
}
function prikazDetaljaArtikla(artikl) {
    let p = document.createElement("p");
    p.innerHTML = `Naziv: ${artikl.naziv} <br> Cena: ${artikl.cena} <br> Opis: ${artikl.opis}`;

    let detalji = document.querySelector("#artikli-detalji");
    if (detalji.firstChild) {
        detalji.firstChild.remove();
    }
    detalji.appendChild(p);
}

function dodajNoviArtikl() {
    let submitBtn = document.querySelector("#submitBtn");

    submitBtn.addEventListener("click", function () {
        const form = document.querySelector("#form");
        const formData = new FormData(form);

        const naziv = formData.get("naziv");
        const cena = formData.get("cena");
        const opis = formData.get("opis");

        const noviArtikl = new Artikl(naziv, cena, opis);
        if(artikli){
            artikli.push(noviArtikl);
        }else{
            artikli = [];
            artikli.push(noviArtikl);
        }
        let artikliJSON = JSON.stringify(artikli);
        localStorage.setItem("artikliBaza", artikliJSON)
        kreirajRedoveArtikala();
    })
}
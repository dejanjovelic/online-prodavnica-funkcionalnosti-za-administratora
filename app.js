class Artikl {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}
let artikli = [];

function inicijalizacijaArtikla() {
    artikli = [
        new Artikl("Monitor", 165, "Asus monitor"),
        new Artikl("TV", 650, "Samsung TV"),
        new Artikl("Miš", 20, "Genius miš")
    ]
    kreirajRedoveArtikala()
}
document.addEventListener("DOMContentLoaded", inicijalizacijaArtikla());

function kreirajRedoveArtikala() {
    let table = document.querySelector("#artikli-body");
    table.innerHTML ="";

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
        tr.addEventListener("click", function(){
            prikazDetaljaArtikla(artikli[i]);
        })

        table.appendChild(tr)
    }
}
function prikazDetaljaArtikla(artikl){
    let p = document.createElement("p");
    p.innerHTML = `Naziv: ${artikl.naziv} <br> Cena: ${artikl.cena} <br> Opis: ${artikl.opis}`

    let detalji = document.querySelector("#artikli-detalji");
    if(detalji.firstChild){
        detalji.firstChild.remove();
    }
    detalji.appendChild(p);
}
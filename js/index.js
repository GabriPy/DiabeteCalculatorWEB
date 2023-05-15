let rapportoCorrezioneDiurno = 35;
let rapportoCorrezioneNotturno = 40;


function pressbuttonInsulina() {
    var idInputInsulina = document.getElementById("inputInsulina");
    var divCorrezione = document.getElementById("divcorrezione");
    var divImpostazioni = document.getElementById("divimpostazioni");

    var pulsante = document.getElementById("buttonInsulina");
    
    if (idInputInsulina.classList.contains("hidden")) {
        idInputInsulina.classList.remove("hidden");
        divCorrezione.classList.add("hidden");
        divImpostazioni.classList.add("hidden");
        pulsante.innerHTML = "Indietro";
    } else {
        idInputInsulina.classList.add("hidden");
        divCorrezione.classList.remove("hidden");
        divImpostazioni.classList.remove("hidden");
        pulsante.innerHTML = "Insulina";
    }

}

function pressbuttonDaCarboAInsu() {
    var carboidrati = document.getElementById('carboidrati').value;
    var insulina = carboidrati / 8;

    var h3correzione = document.getElementById('outputInsulina');
    var insulinaArrotondata = Math.round(insulina * 2) / 2;
    var testo = "Devi fare " + insulinaArrotondata + " unità.";
    
    h3correzione.innerHTML = testo;
}

function pressbuttonCorrezione() {
    var idInputCorrezione = document.getElementById("inputCorrezione");
    var divInsulina = document.getElementById("divinsulina");
    var divImpostazioni = document.getElementById("divimpostazioni");
    var pulsante = document.getElementById("buttonCorrezione");

    if (idInputCorrezione.classList.contains("hidden")) {
        idInputCorrezione.classList.remove("hidden");
        divInsulina.classList.add("hidden");
        divImpostazioni.classList.add("hidden");
        pulsante.innerHTML = "Indietro";
    } else {
        idInputCorrezione.classList.add("hidden");
        divInsulina.classList.remove("hidden");
        divImpostazioni.classList.remove("hidden");
        pulsante.innerHTML = "Correzione";
    }


}

function pressbuttonCorreggi() {
    var glicemia = document.getElementById('glicemia').value;

    var checkbox = document.getElementById('notte');

    if (checkbox.checked) {
        var insulina = glicemia / rapportoCorrezioneNotturno;
    } else {
        var insulina = glicemia / rapportoCorrezioneDiurno;
    }

    var h3correzione = document.getElementById('outputCorreggi');
    var insulinaArrotondata = Math.round(insulina * 2) / 2;
    var testo = "Devi fare " + insulinaArrotondata + " unità.";

    h3correzione.innerHTML = testo;

}

function pressbuttonImpostazioni() {
    var idSpanImpostazioni = document.getElementById("spanImpostazioni")
    var divCorrezione = document.getElementById("divcorrezione");
    var divInsulina = document.getElementById("divinsulina");
    var pulsante = document.getElementById("buttonImpostazioni");


    if (idSpanImpostazioni.classList.contains("hidden")) {
        idSpanImpostazioni.classList.remove("hidden");
        divCorrezione.classList.add("hidden");
        divInsulina.classList.add("hidden");
        pulsante.innerHTML = "Indietro";
    } else {
        idSpanImpostazioni.classList.add("hidden");
        divCorrezione.classList.remove("hidden");
        divInsulina.classList.remove("hidden");
        pulsante.innerHTML = "Impostazioni";
    }
}

function modificaImpostazioni() {
    var fattoreDiur = document.getElementById('inputdiurno').value;
    var fattoreNott = document.getElementById('inputnotturno').value;

    rapportoCorrezioneDiurno = fattoreDiur;
    rapportoCorrezioneNotturno = fattoreNott;

    console.log("ok");
    console.log(rapportoCorrezioneDiurno);
    console.log(rapportoCorrezioneNotturno);
}
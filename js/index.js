let rapportoCorrezioneDiurno = 35;
let rapportoCorrezioneNotturno = 40;
let assorbimento = 8;

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
    var glicemiameno120 = glicemia - 120;
    var checkbox = document.getElementById('notte');

    if (checkbox.checked) {
        var insulina = glicemiameno120 / rapportoCorrezioneNotturno;
    } else {
        var insulina = glicemiameno120 / rapportoCorrezioneDiurno;
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
    var assorbimentoinput = document.getElementById('inputassorbimento').value;

    rapportoCorrezioneDiurno = fattoreDiur;
    rapportoCorrezioneNotturno = fattoreNott;
    assorbimento = assorbimentoinput;

    console.log("Modifica valori effettuata.");
    console.log("Rapporto correzione diurno: " + rapportoCorrezioneDiurno);
    console.log("Rapporto correzione notturno: " + rapportoCorrezioneNotturno);
    console.log("Assorbimento carboidrati: " + assorbimento)
}

function appariCalcolatrice() {
    var sezioneMoltiplicatore = document.getElementById('moltiplicatore');
    if (sezioneMoltiplicatore.classList.contains("hidden")) {
        sezioneMoltiplicatore.classList.remove("hidden");
    } else {
        sezioneMoltiplicatore.classList.add("hidden");
    }
}

function calcolaMoltiplicatore() {
    var cho100g = document.getElementById('cho100g').value;
    var peso = document.getElementById('peso').value;
    var chototali = Math.ceil(cho100g * (peso / 100));

    var risultatoPeso = document.getElementById("risultatoPeso");
    risultatoPeso.innerHTML = chototali + "g";

    var choInsulina = document.getElementById('carboidrati');
    if (chototali != 0) {
        choInsulina.value = chototali;
    }

}

function apriPopup() {
    var divPopup = document.getElementById('divNascondiPopup');
    divPopup.classList.remove("hidden");

    var pulsanteInfo = document.getElementById('pulsanteinfo');
    pulsanteInfo.classList.add("hidden");
}

function chiudiPopup() {
    var divPopup = document.getElementById('divNascondiPopup');
    divPopup.classList.add("hidden");

    var pulsanteInfo = document.getElementById('pulsanteinfo');
    pulsanteInfo.classList.remove("hidden");
}
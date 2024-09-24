
function isleistiPinigus()
{
    const islaiduElementas = document.querySelector("#islaidu-input");
    const islaidos = +islaiduElementas.value;
    atimtiNuoBalanso(islaidos);
    islaiduElementas.value = "";
}

function atimtiNuoBalanso(islaidos)
{
    // Jei islaidos yra ne skaicius arba islaidos yra neigiamos - baigiame funkciją
    //isNaN("tekstas");  true
    //isNaN("5"); true
    
    if(!atliktiValidacijaPiniguKiekiui(islaidos)) return;
    if(islaidos > balansas) return alert("Išlaidos negali būti didesnės nei jūsų balansas.");
    balansas -= islaidos;
    atnaujintiBalansa();
}

function inestiPinigus()
{
    const inasoElementas = document.querySelector("#inaso-input");
    const inasas = +inasoElementas.value;
    pridetiPrieBalanso(inasas);
    inasoElementas.value = "";
}

function pridetiPrieBalanso(indelis)
{
    // DRY - Don't repeat yourself
    if(!atliktiValidacijaPiniguKiekiui(indelis)) return;
    balansas += indelis;
    atnaujintiBalansa();
}

function gautiAlga(kitokiaAlga)
{
    if(kitokiaAlga === undefined)pridetiPrieBalanso(algosDydis);
    else pridetiPrieBalanso(kitokiaAlga);

    atnaujintiBalansa();
}

function gautiNeiprastaAlga()
{
    const neiprastosAlgosElementas = document.querySelector(`#neiprasta-alga`);
    const neiprastaAlga = +neiprastosAlgosElementas.value;
    gautiAlga(neiprastaAlga);
    neiprastosAlgosElementas.value = "";
}

function atliktiValidacijaPiniguKiekiui(pinigai)
{
    const arDuomenysNeteisingi = isNaN(pinigai) || pinigai < 0; //true jei kazkas negerai
    if(arDuomenysNeteisingi) alert("Įvesti pinigai yra neteisingi.");

    return !arDuomenysNeteisingi; // true kai duomenys geri
}

function atnaujintiBalansa()
{
    const balanceElement = document.querySelector(".money");
    balanceElement.innerText = balansas;
}

function initialize()
{
    // <h3 id="greeting">Sveiki, {vardas}</h3>
    const greetingElement = document.querySelector("#greeting");
    // Čia naudojamas priskyrimas, kadangi .replace() nepakeičia originalaus kintamojo
    greetingElement.innerText = greetingElement.innerText.replace("{vardas}", vardas);
    // greetingElement.innerHTML    -   "<h3 id="greeting" >Sveiki, {vardas}</h3>""
    // greetingElement.innerText    -   "Sveiki, {vardas}"

    // <p id="balance">Jūsų balansas: x €</p>
    const balanceElement = document.querySelector(".money");
    balanceElement.innerText = balansas;
}
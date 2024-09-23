

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
    //isNaN("5");        true
    if(isNaN(islaidos) || islaidos < 0) return; // patikrintiArTeigiamasSkaicius()
    balansas -= islaidos;
    console.log(balansas);
    const balanceElement = document.querySelector("#balance");
    balanceElement.innerText = `Jūsų balansas: ${balansas} €`
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
    const balanceElement = document.querySelector("#balance");
    balanceElement.innerText = balanceElement.innerText.replace("x", balansas);
}
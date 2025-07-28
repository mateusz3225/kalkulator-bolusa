document.querySelectorAll('.calc-table').forEach(table => {
    const węglowodany = table.querySelector('.węglowodany-na-100');
    const tłuszcze = table.querySelector('.tłuszcz-na-100');
    const białko = table.querySelector('.białko-na-100');
    const waga = table.querySelector('.waga');
    const calculatingWW = table.querySelector('.calculating-WW');
    const calculatingWBT = table.querySelector('.calculating-WBT');

 WW = document.querySelector('.right-textWW-input');
 WBT = document.querySelector('.right-textWBT-input');
ValueWWoutside = 0;
ValueWBToutside = 0;

document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/,/g, '.');
    });
});

 WW.addEventListener('input', () => {
    const ValueWW = WW.value;
    ValueWWoutside = ValueWW;
    console.log(`Twoje wymienniki na 1 WW: ${ValueWWoutside}`);
    calculateWW();
 });
    WBT.addEventListener('input', () => {
    const ValueWBT = WBT.value;
    ValueWBToutside = ValueWBT;
    console.log(`Twoje wymienniki na 1 WBT: ${ValueWBToutside}`);
    calculateWBT()
 });
    
węglowodany.addEventListener('input', () => {
    const Valuewęglowodanów = węglowodany.value;
    console.log(`Węglowodany na 100g: ${Valuewęglowodanów}`);
    calculateWW();
    calculateWBT()
});

tłuszcze.addEventListener('input', () => {
    const Valuetłuszczy = tłuszcze.value;
    console.log(`Tłuszcze na 100g: ${Valuetłuszczy}`);
    calculateWW();
    calculateWBT()
});

białko.addEventListener('input', () => {
    const Valuebiałka = białko.value;
    console.log(`Białko na 100g: ${Valuebiałka}`);
    calculateWW();
    calculateWBT()
});

waga.addEventListener('input', () => {
    const Valuewagi = waga.value;
    console.log(`Waga całej porcji: ${Valuewagi}`);
    calculateWW();
    calculateWBT()
});

function calculateWW() {
    const Valuewęlowodanów = węglowodany.value;
    const Valuewagi = waga.value;
    
    if (Valuewęlowodanów && Valuewagi) {
        let WWj = 0;
        WWj = (Valuewęlowodanów * Valuewagi) / 100 / 10 * ValueWWoutside;
        calculatingWW.innerHTML = `${Number(WWj).toFixed(2)}`;
        console.log(`Ilość jednostek WW to: ${WWj}`);
    }
};
function calculateWBT() {
    const Valuetłuszczy = tłuszcze.value;
    const Valuebiałka = białko.value;
    const Valuewagi = waga.value;
    
    if (Valuetłuszczy && Valuebiałka && Valuewagi) {
        let WBTj = 0;
        WBTj =((Valuetłuszczy * (Valuewagi/100)*9) + (Valuebiałka * (Valuewagi/100)*4) )/ 100 * ValueWBToutside;
        calculatingWBT.innerHTML = `${Number(WBTj).toFixed(2)}`;
        console.log(`Ilość WBT w jednostkach to: ${WBTj}`);
    }
};
});

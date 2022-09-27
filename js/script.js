function restartCalc() {
    document.getElementById('expenses').innerHTML = ''
    let initTotal = 1000;
    let total = initTotal;
    let outgoings;
    let spentHalf = true;
    document.getElementById('expenses').innerHTML += `<div class="single-expenses" id="total-money">Your total money is ${initTotal}€</div>`

    while (total > 0) {
        outgoings = Math.floor(Math.random() * 100);
        if (outgoings > total) {
            outgoings = total;
            total = total - outgoings;
            document.getElementById('expenses').innerHTML += `<div class="single-expenses">Spent: ${outgoings}€ - New total: ${total}€</div>`
            document.getElementById('expenses').innerHTML += `<div class="single-expenses" id="warning">You spent all your money!</div>`
        }
        else {
            total = total - outgoings;
            if (total > 0) {
                document.getElementById('expenses').innerHTML += `<div class="single-expenses">Spent: ${outgoings}€ - New total: ${total}€</div>`
            }
            if (total < initTotal / 2) {
                if (spentHalf == true) {
                    document.getElementById('expenses').innerHTML += `<div class="single-expenses" id="warning">You spent half of your money!</div>`
                    spentHalf = false;
                }
            }
            if (total < 0) {
                document.getElementById('expenses').innerHTML += `<div class="single-expenses">Spent: ${outgoings}€ - New total: 0€</div>`
                document.getElementById('expenses').innerHTML += `<div class="single-expenses" id="warning">You spent all your money!</div>`
            }
        }

    }
}

restartCalc();
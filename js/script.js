let initTotal = 1000;
let total = initTotal;
let outgoings = Math.floor(Math.random() * 100);

while (total > 0) {
    total = total - outgoings;

    if (total > 0) {
        console.log(total);
    }
    if (total < initTotal / 2 || total > initTotal / 4) {
        console.log(`${total}. Warning: you spent half of your budget!`)
    }
    else {
        console.log(`${total}. Warning: you spent all of your budget!`)
    }

}
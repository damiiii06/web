
let customer1 = "Dana";
let customer2 = "John";

let price1 = 150;
let quantity1 = 2;

let price2 = 100;
let quantity2 = 5;

function compareCarts(customer1, price1, quantity1, customer2, price2, quantity2) {
    let total1 = price1 * quantity1;
    let total2 = price2 * quantity2;

    let difference = Math.abs(total1 - total2);

    if (total1 > total2) {
        console.log(`${customer1} has a higher total cart value of $${total1}. The difference is $${difference}.`);
    } else if (total2 > total1) {
        console.log(`${customer2} has a higher total cart value of $${total2}. The difference is $${difference}.`);
    } else {
        console.log("Both customers have the same total cart value of $" + total1 + ".");
    }
}

compareCarts(customer1, price1, quantity1, customer2, price2, quantity2);
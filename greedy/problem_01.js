// Fraction Kapsnack
const weights = [10, 40, 20, 30];
const values = [60, 40, 100, 120];
let capacity = 50;
const profits = [];

class Item {
    constructor(w, v, i) {
        this.weight = w;
        this.value = v;
        this.index = i;
        this.cost = v / w;
    }
}

const greedyKnapsack = () => {
    // Calculate the ration cost=value/weight
    for (let i =0; i < values.length; i++) {
        profits.push(
            new Item(weights[i], values[i], i)
        );
    }

    // Sort in descending order
    profits.sort((a, b) => b.cost - a.cost);

    let total = 0;

    // Add to the knapsack
    for (let profit of profits) {
        if ((capacity - profit.weight) >= 0) {
            capacity = capacity - profit.weight;
            total += profit.value;
        } else {
            const fraction = capacity / profit.weight;
            total += fraction * profit.value;
            break;
        }
    }

    return total;
}

const total = greedyKnapsack();
console.log(total);

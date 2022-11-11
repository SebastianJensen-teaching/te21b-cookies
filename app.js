let gold = 0;
let diggingPower = 1;
let inventory = ["rusty nail", "switchblade", "old boots"];

let userUpgrades = document.querySelector(".user-upgrades");

let powerButtons = [
    {
        name: "Candle",
        cost: 10,
        power: 1
    },
    {
        name: "Dynamite",
        cost: 100,
        power: 5
    },
    {
        name: "Digmaster 3000",
        cost: 1000,
        power: 10
    },
    {
        name: "Town Portal Scroll",
        cost: 10,
        power: 0
    },
];

function initButtons() {
    for (let index = 0; index < powerButtons.length; index++) {
        let newButton = document.createElement("button");
        newButton.innerHTML = powerButtons[index].name;
        newButton.addEventListener("click", () => {
            buyItem(powerButtons[index].name,
                powerButtons[index].cost,
                powerButtons[index].power)
        });
        userUpgrades.append(newButton);
    }
}

let goldLabel = document.querySelector(".gold-label");

let goldButton = document.querySelector(".gold-button");
goldButton.addEventListener("click", addGold);

let inventoryList = document.querySelector(".inventory-list");

function buyItem(item, cost, powerIncrease) {
    if (gold >= cost) {
        gold -= cost;
        inventory.push(item);
        diggingPower += powerIncrease;
        updateInventory();
        goldLabel.innerHTML = gold;
    }
}

function addGold() {
    gold += diggingPower;
    goldLabel.innerHTML = gold;
}

function updateInventory() {
    inventoryList.innerHTML = "";
    for (let index = 0; index < inventory.length; index++) {
        let li = document.createElement("li");
        li.innerHTML = inventory[index];
        inventoryList.append(li);
    }
}

initButtons();
updateInventory();

let hashTable = {};  
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

function simpleHash(name) 
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 100;
}

let hashKeys = [];
for (let i = 0; i < customers.length; i++) {
    let name = prompt(`Enter customer name (${i + 1}/5):`, customers[i]);
    let key = simpleHash(name);
    
    while (hashTable[key]) {
        key = (key + 1) % 100;
    }

    hashTable[key] = name;
    hashKeys.push(key);
    alert(`${name}, your service number is ${key}`);
}

 
while (hashKeys.length > 0) {
    let num = parseInt(prompt(`Enter the number to be serviced:`));

    if (hashTable[num]) {
        let serviced = hashTable[num];
        alert(`Now servicing: ${serviced}`);
        delete hashTable[num];  // Remove from hash table
        hashKeys = hashKeys.filter(k => k !== num);
        console.log("Updated Hash Table:", hashTable);
    } else {
        alert("No customer found with that number.");
    }
}
alert("All customers have been serviced.");

let queue = [];  
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

for (let i = 0; i < customers.length; i++) {
    let name = prompt(`Enter customer name (${i + 1}/5):`, customers[i]);
    queue.push(name);
    alert(`${name}, your queue number is ${queue.length}`);
}
 
while (queue.length > 0) {
    let num = parseInt(prompt(`Enter the queue number to be serviced (1 to ${queue.length}):`));
    
    if (num < 1 || num > queue.length || isNaN(num)) {
        alert("Invalid queue number!");
    } else {
        let serviced = queue[num - 1];
        alert(`Now servicing: ${serviced}`);
        queue.splice(num - 1, 1);  // Remove the customer from queue
        console.log("Updated Queue:", queue);
    }
}
alert("All customers have been serviced.");

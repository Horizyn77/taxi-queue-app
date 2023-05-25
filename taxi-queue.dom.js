// write your DOM code here.


// DOM element references

// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events

const passengersJoinBtn = document.querySelector(".join_queue");
const passengersLeaveBtn = document.querySelector(".leave_queue")
const passengerQueueCount = document.querySelector(".passenger_queue_count");
const taxiJoinBtn = document.querySelector(".join_taxi_queue")
const taxiQueueCount = document.querySelector(".taxi_queue_count")
const taxiDepartBtn = document.querySelector(".depart")


if (!localStorage["passengeQueueCount"] && !localStorage["taxiQueueCount"]) {
    localStorage["passengerQueueCount"] = taxiQueue.queueLength();
    localStorage["taxiQueueCount"] = taxiQueue.taxiQueueLength();
}

if (localStorage["passengerQueueCount"] && localStorage["taxiQueueCount"]) {
    taxiQueue.setLocalStorage();
    passengerQueueCount.innerText = localStorage["passengerQueueCount"];
    taxiQueueCount.innerText = localStorage["taxiQueueCount"];
}
passengersJoinBtn.addEventListener("click", () => {
    taxiQueue.joinQueue();
    passengerQueueCount.innerText = taxiQueue.queueLength();
});
passengersLeaveBtn.addEventListener("click", () => {
    taxiQueue.leaveQueue()
    passengerQueueCount.innerText = taxiQueue.queueLength();
});

taxiJoinBtn.addEventListener("click", () => {
    taxiQueue.joinTaxiQueue();
    taxiQueueCount.innerText = taxiQueue.taxiQueueLength();
});


taxiDepartBtn.addEventListener("click", () => {
    taxiQueue.taxiDepart();
    passengerQueueCount.innerText = taxiQueue.queueLength();
    taxiQueueCount.innerText = taxiQueue.taxiQueueLength();
});
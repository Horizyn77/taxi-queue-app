function TaxiQueue() {

	let peopleQueue = 0;
	let taxiQueues = 0;

	
	function joinQueue() {
		peopleQueue++;
		localStorage["passengerQueueCount"] = peopleQueue;
	}
	
	function leaveQueue() {
		
		if (peopleQueue > 0) {
			peopleQueue--;
		}

		localStorage["passengerQueueCount"] = peopleQueue;
	}

	function joinTaxiQueue() {
		taxiQueues++;
		localStorage["taxiQueueCount"] = taxiQueues;
		
	}
	
	function queueLength() {
		return peopleQueue;
	}
	
	function taxiQueueLength() {
		return taxiQueues;
	}
	
	function taxiDepart(){
		
		if (peopleQueue > 11 && taxiQueues !== 0) {
			taxiQueues--;
			peopleQueue -= 12;
		}

		localStorage["passengerQueueCount"] = peopleQueue;
		localStorage["taxiQueueCount"] = taxiQueues;
		
	}
	
	function setLocalStorage() {
			peopleQueue = Number(localStorage["passengerQueueCount"]);
			taxiQueues = Number(localStorage["taxiQueueCount"]);
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart,
		setLocalStorage
	}
}
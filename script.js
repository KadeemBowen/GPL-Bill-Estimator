function calculateBill() {
    var devices = document.querySelectorAll(".device");
    var totalKWh = 0;

    devices.forEach(function(device) {
        var appliance = device.querySelector(".appliance").value;
        var wattage = parseFloat(device.querySelector(".wattage").value);
        var amount = parseInt(device.querySelector(".amount").value);
        var hours = parseFloat(device.querySelector(".hours").value);

        var deviceTotalWattage = wattage * hours * amount;
        var deviceTotalKWh = deviceTotalWattage / 1000;
        totalKWh += deviceTotalKWh;
    });

    var first75Rate = 39.1;
    var after75Rate = 43.43;

    var totalBill = 0;
    if (totalKWh <= 75) {
        totalBill = totalKWh * first75Rate;
    } else {
        var first75Bill = 75 * first75Rate;
        var after75Bill = (totalKWh - 75) * after75Rate;
        totalBill = first75Bill + after75Bill;
    }

    var monthlyBill = totalBill * 30; // Assuming 30 days in a month

    var resultHTML = "<strong>Estimated Daily Total kWh:</strong> " + totalKWh.toFixed(2) + "<br><strong>Estimated Daily Bill:</strong> $" + totalBill.toFixed(2) + "<br><strong>Estimated Monthly Bill:</strong> $" + monthlyBill.toFixed(2);

    document.getElementById("result").innerHTML = resultHTML;
}
function addDevice() {
    var devicesContainer = document.getElementById("devices");
    var newDevice = document.createElement("div");
    newDevice.classList.add("device");
    newDevice.innerHTML = `
        <label for="appliance">Select Appliance:</label>
        <select class="appliance" required>
            <option value="fridge">Fridge</option>
            <option value="tv">TV</option>
            <option value="light">Light</option>
            <option value="microwave">Microwave</option>
            <option value="fan">Fan</option>
            <option value="ac">AC</option>
        </select>
        <label for="wattage">Enter Wattage (W):</label>
        <input type="number" class="wattage" required>
        <label for="amount">Select Quantity:</label>
        <input type="number" class="amount" value="1" min="1" required>
        <label for="hours">Enter Daily Usage (hours):</label>
        <input type="number" class="hours" required>
    `;
    devicesContainer.appendChild(newDevice);
}

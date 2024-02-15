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

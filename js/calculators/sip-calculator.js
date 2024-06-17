
$(document).ready(function () {
    calculateSIP();
    createChart();
})

function calculateSIP() {
    var investmentAmount = parseFloat($('#investmentAmount').val());
    var interestRate = parseFloat($('#interestRate').val());
    var investmentPeriod = parseInt($('#investmentPeriod').val());

    var monthlyInterestRate = interestRate / 12 / 100;
    var totalMonths = investmentPeriod * 12;
    var investedAmount = investmentAmount * totalMonths;
    var totalValue = 0;
    for (var i = 0; i < totalMonths; i++) {
        totalValue = (totalValue + investmentAmount) * (1 + monthlyInterestRate);
    }
    var estReturns = totalValue - investedAmount;
    $('#investedAmount').html(Math.round(investedAmount));
    $('#estReturns').html(Math.round(estReturns));
    $('#totalValue').html(Math.round(totalValue));
    updateChart();
};

function createChart() {
    var xValues = ["Invested Amount", "Est. Returns"];
    var yValues = [$('#investedAmount').html(), $('#estReturns').html()];
    var barColors = [
        "#b91d47",
        "#00aba9"
    ];

    new Chart("myChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: true
            }
        }
    });
}

function updateChart() {
    Chart.helpers.each(Chart.instances, function (instance) {
        if (instance.chart.canvas.id === "myChart") {
            var updatedData = [$('#investedAmount').html(), $('#estReturns').html()];
            instance.chart.data.datasets[0].data = updatedData;
            instance.chart.update();
        }
    });
}

$(document).ready(function () {
    calculateGoal();
})

function calculateGoal() {
 
    var goalAmount = parseFloat($('#goalAmount').val());
    var annualInterestRate = parseFloat($('#interestRate').val());
    var yearsToGoal = parseInt($('#yearsToGoal').val());
    
    var monthlyInterestRate = annualInterestRate / 12 / 100;
    var totalMonths = yearsToGoal * 12;
    
    var monthlyInvestment = goalAmount / ((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) / monthlyInterestRate);
    var totalInvestment = monthlyInvestment * totalMonths;

    $('#monthlyInvestment').html(Math.round(monthlyInvestment).toLocaleString());
    $('#totalInvestment').html(Math.round(totalInvestment).toLocaleString());

};


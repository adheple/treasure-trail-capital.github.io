
$(document).ready(function () {
    calculateEMI();
});

$(document).on('click', '.emi-toggle-switch', function () {
    $(".emi-toggle-switch").toggleClass("bi-plus-circle bi-x-circle");
    //$('#emiDetails').toggle();
    if ($("#emiDetails").hasClass('d-none'))
        $("#emiDetails").removeClass("d-none");
    else
        $("#emiDetails").addClass("d-none");

});

function calculateEMI() {
    var loanAmount = parseFloat($('#loanAmount').val());
    var interestRate = parseFloat($('#interestRate').val());
    var loanTenure = parseInt($('#loanTenure').val());

    var monthlyInterestRate = interestRate / 12 / 100;
    var totalPayments = loanTenure * 12;

    var emi = (loanAmount * monthlyInterestRate) * Math.pow(1 + monthlyInterestRate, totalPayments) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    var totalAmount = emi * totalPayments;
    var totalInterest = totalAmount - loanAmount;

    $('#monthlyEMI').html(Math.round(emi).toLocaleString());
    $('#principalAmount').html(loanAmount.toLocaleString());
    $('#totalInterest').html(Math.round(totalInterest).toLocaleString());
    $('#totalAmount').html(Math.round(totalAmount).toLocaleString());

    emiTableMonthAndYearWise();

};

function emiTableMonthAndYearWise() {
    var loanAmount = parseFloat($('#loanAmount').val());
    var interestRate = parseFloat($('#interestRate').val()) / 1200; // Monthly interest rate
    var loanTerm = parseFloat($('#loanTenure').val()) * 12;

    var emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);

    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    var tableHead = '<div class="table-div table-responsive"><table class="table table-success table-striped table-hover d-none"><tr><th>Month</th><th>Principal</th><th>Interest</th><th>Total Payment</th><th>Balance</th></tr>';
    var caretDownIcon = '<i class="bi bi-caret-down"></i>';
    var moreBtn = '<div class="btn-div my-2"><input type="button" id="seeMoreRecords" value="Load More" onclick="showOrHideTables()" class="btn btn-success"/></div>';
    //var lessBtn = <input type="button" id="seeLessRecords" value="Less">;

    var emiDetailsHtml = '<div class="title-div"><h4 class="title-heading">' + currentYear + '</h4>' + caretDownIcon + '</div>' + tableHead;

    var balance = loanAmount;
    for (var i = 1; i <= loanTerm; i++) {
        var interest = balance * interestRate;
        var principal = emi - interest;
        balance -= principal;
        if (currentMonth >= 11) {
            currentMonth = 0;
            ++currentYear;
            emiDetailsHtml += '</table></div>';
            emiDetailsHtml += '<div class="title-div"><h4  class="title-heading">' + currentYear + '</h4>' + caretDownIcon + '</div>' + tableHead;
        }
        else
            currentMonth += 1;

        emiDetailsHtml += '<tr>';
        emiDetailsHtml += '<td>' + getMonthName(currentMonth) + '</td>';
        emiDetailsHtml += '<td>' + Math.round(principal).toLocaleString() + '</td>';
        emiDetailsHtml += '<td>' + Math.round(interest).toLocaleString() + '</td>';
        emiDetailsHtml += '<td>' + Math.round(emi).toLocaleString() + '</td>';
        emiDetailsHtml += '<td>' + Math.round(balance).toLocaleString() + '</td>';
        emiDetailsHtml += '</tr>';
    }

    emiDetailsHtml += '</table></div>';
    emiDetailsHtml += moreBtn;
    $('#emiDetails').html(emiDetailsHtml);
    loadHeadingAndTableData();
}

function getMonthName(monthNumber) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthNumber];
}

$(document).on('click', '.title-div', function () {
    //$(this).next('div').children().toggle();
    if ($(this).next('div').children().hasClass('d-none'))
        $(this).next('div').children().removeClass("d-none");
    else
        $(this).next('div').children().addClass("d-none");
});

var yearWiseTablesLength = 0;
var currentIndex = 5;

function loadHeadingAndTableData() {
    var yearWiseTables = $("#emiDetails .title-div");
    currentIndex = 5;
    yearWiseTablesLength = yearWiseTables.length;
    yearWiseTables.hide();
    yearWiseTables.slice(0, 5).show();
    checkButtonVisibility();
}

function showOrHideTables() {
    $("#emiDetails .title-div").slice(currentIndex, currentIndex + 5).show();
    currentIndex += 5;
    checkButtonVisibility();
}

function checkButtonVisibility() {
    var currentLength = $("#emiDetails .title-div:visible").length;
    if (currentLength >= yearWiseTablesLength) {
        $("#seeMoreRecords").hide();
    } else {
        $("#seeMoreRecords").show();
    }

}
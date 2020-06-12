document.getElementById("defaultOpen").click();

document.getElementById("income").addEventListener( "keydown", function( e ) {
    var keyCode = e.keyCode || e.which;
    if ( keyCode === 13 ) {
       calcTaxSalary();
    }
}, false);

document.getElementById("income-unsalaried").addEventListener( "keydown", function( e ) {
    var keyCode = e.keyCode || e.which;
    if ( keyCode === 13 ) {
       calcTaxUnsalaried();
    }
}, false);

document.getElementById("income-rental").addEventListener( "keydown", function( e ) {
    var keyCode = e.keyCode || e.which;
    if ( keyCode === 13 ) {
       calcTaxRental();
    }
}, false);

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PKR',
});


var mainNav = document.getElementById("js-menu");
var navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

function clear() {
    document.getElementById('monthly-income-unsalaried').reset();
    document.getElementById('monthly-tax-unsalaried').reset();
    document.getElementById('salary-tax-unsalaried').reset();
    document.getElementById('yearly-income-unsalaried').reset();
    document.getElementById('yearly-tax-unsalaried').reset();
    document.getElementById('yearly-post-tax-unsalaried').reset();
    document.getElementById('percentage-unsalaried').reset();
}

/*var fnf = document.getElementById("income");
fnf.addEventListener('keyup', function(evt){
    var n = parseInt(this.value.replace(/\D/g,''),10);
    fnf.value = n.toLocaleString();
}, false);

var num1 = document.getElementById("income").value;
num1 = parseFloat(num1);*/

function calcTaxSalary(income) {
    var selectedValue, percentage, bracket, yearIncome, monthlyTax, MonthlySalaryAfterTax, yearlyTax, yearlyIncomeAfterTax, monthlyIncome;
    var rbs = document.querySelectorAll('input[name="select"]')
    for (const rb of rbs) {
        if (rb.checked) {
        selectedValue = rb.value;
        break;
        }
    }
    income = document.getElementById('income').value
    if (selectedValue === 'monthly') {
        yearIncome = income * 12;
        monthlyIncome = income;
    } else {
        yearIncome = income;
        monthlyIncome = income / 12
    }
    if (yearIncome <= 600000) {
        yearlyTax = 0;
    } else if (yearIncome > 600000 && yearIncome <= 1200000) {
        yearlyTax = (yearIncome - 600000) * 0.05;
    } else if (yearIncome > 1200000 && yearIncome <= 1800000) {
        yearlyTax = ((yearIncome - 1200000) * 0.1) + 30000;
    } else if (yearIncome > 1800000 && yearIncome <= 2500000){
        yearlyTax = ((yearIncome - 1800000) * 0.15) + 90000;
    } else if (yearIncome > 2500000 && yearIncome <= 3500000) {
        yearlyTax = ((yearIncome - 2500000) * 0.175) + 195000;
    } else if (yearIncome > 3500000 && yearIncome <= 5000000) {
        yearlyTax = ((yearIncome - 3500000) * 0.2) + 370000;
    } else if (yearIncome > 5000000 && yearIncome <= 8000000) {
        yearlyTax = ((yearIncome - 5000000) * 0.225) + 670000;
    } else if (yearIncome > 8000000 && yearIncome <= 12000000) {
        yearlyTax = ((yearIncome - 8000000) * 0.25) + 1345000;
    } else if (yearIncome > 12000000 && yearIncome <= 30000000) {
        yearlyTax = ((yearIncome - 12000000) * 0.275) + 2345000;
    } else if (yearIncome > 30000000 && yearIncome <= 50000000) {
        yearlyTax = ((yearIncome - 30000000) * 0.3) + 7295000;
    } else if (yearIncome > 50000000 && yearIncome <= 75000000) {
        yearlyTax = ((yearIncome - 50000000) * 0.325) + 13295000;
    } else {
        yearlyTax = ((yearIncome - 75000000) * 0.35) + 21420000;
    }
    monthlyTax = yearlyTax / 12;
    MonthlySalaryAfterTax = monthlyIncome - monthlyTax;
    yearlyIncomeAfterTax = yearIncome - yearlyTax;
    percentage = (yearlyTax/yearIncome) * 100;
    document.getElementById('monthly-income').innerHTML = formatter.format(monthlyIncome);
    document.getElementById('monthly-tax').innerHTML = formatter.format(monthlyTax);
    document.getElementById('salary-tax').innerHTML = formatter.format(MonthlySalaryAfterTax);
    document.getElementById('yearly-income').innerHTML = formatter.format(yearIncome);
    document.getElementById('yearly-tax').innerHTML = formatter.format(yearlyTax);
    document.getElementById('yearly-post-tax').innerHTML = formatter.format(yearlyIncomeAfterTax);
    document.getElementById('percentage').innerHTML = percentage.toFixed(2) + '%';
}
    

function calcTaxUnsalaried(income) {
    var selectedValue, percentage, bracket, yearIncome, monthlyTax, MonthlySalaryAfterTax, yearlyTax, yearlyIncomeAfterTax, monthlyIncome;
    var rbs = document.querySelectorAll('input[name="select1"]')
    for (const rb of rbs) {
        if (rb.checked) {
        selectedValue = rb.value;
        break;
        }
    }
    income = document.getElementById('income-unsalaried').value
    if (selectedValue === 'monthly1') {
        yearIncome = income * 12;
        monthlyIncome = income;
    } else {
        yearIncome = income;
        monthlyIncome = income / 12;
    }
    if (yearIncome <= 400000) {
        yearlyTax = 0
    } else if (yearIncome > 400000 && yearIncome <= 600000) {
        yearlyTax = (yearIncome - 400000) * 0.05;
    } else if (yearIncome > 600000 && yearIncome <= 1200000) {
        yearlyTax = ((yearIncome - 600000) * 0.1) + 10000;
    } else if (yearIncome > 1200000 && yearIncome <= 2400000){
        yearlyTax = ((yearIncome - 1200000) * 0.15) + 70000;
    } else if (yearIncome > 2400000 && yearIncome <= 3000000) {
        yearlyTax = ((yearIncome - 2400000) * 0.2) + 250000;
    } else if (yearIncome > 3000000 && yearIncome <= 4000000) {
        yearlyTax = ((yearIncome - 3000000) * 0.25) + 370000;
    } else if (yearIncome > 4000000 && yearIncome <= 6000000) {
        yearlyTax = ((yearIncome - 4000000) * 0.3) + 620000;
    } else {
        yearlyTax = ((yearIncome - 6000000) * 0.35) + 1220000;
    }
    monthlyTax = yearlyTax / 12;
    MonthlySalaryAfterTax = monthlyIncome - monthlyTax;
    yearlyIncomeAfterTax = yearIncome - yearlyTax;
    percentage = (yearlyTax/yearIncome) * 100;
    document.getElementById('monthly-income-unsalaried').innerHTML = formatter.format(monthlyIncome);
    document.getElementById('monthly-tax-unsalaried').innerHTML = formatter.format(monthlyTax);
    document.getElementById('salary-tax-unsalaried').innerHTML = formatter.format(MonthlySalaryAfterTax);
    document.getElementById('yearly-income-unsalaried').innerHTML = formatter.format(yearIncome);
    document.getElementById('yearly-tax-unsalaried').innerHTML = formatter.format(yearlyTax);
    document.getElementById('yearly-post-tax-unsalaried').innerHTML = formatter.format(yearlyIncomeAfterTax);
    document.getElementById('percentage-unsalaried').innerHTML = percentage.toFixed(2) + '%';
}

function calcTaxRental(income) {
    var selectedValue, percentage, bracket, yearIncome, monthlyTax, MonthlySalaryAfterTax, yearlyTax, yearlyIncomeAfterTax;
    var rbs = document.querySelectorAll('input[name="select2"]')
    for (const rb of rbs) {
        if (rb.checked) {
        selectedValue = rb.value;
        break;
        }
    }
    income = document.getElementById('income-rental').value
    if (selectedValue === 'monthly2') {
        yearIncome = income * 12;
        monthlyIncome = income;
    } else {
        yearIncome = income;
        monthlyIncome = income / 12;
    }
    if (yearIncome <= 200000) {
        yearlyTax = 0
    } else if (yearIncome > 200000 && yearIncome <= 600000) {
        yearlyTax = (yearIncome - 200000) * 0.05;
    } else if (yearIncome > 600000 && yearIncome <= 1000000) {
        yearlyTax = ((yearIncome - 600000) * 0.1) + 20000;
    } else if (yearIncome > 1000000 && yearIncome <= 2000000){
        yearlyTax = ((yearIncome - 1000000) * 0.15) + 60000;
    } else if (yearIncome > 2000000 && yearIncome <= 4000000) {
        yearlyTax = ((yearIncome - 2000000) * 0.2) + 210000;
    } else if (yearIncome > 4000000 && yearIncome <= 6000000) {
        yearlyTax = ((yearIncome - 4000000) * 0.25) + 610000;
    } else if (yearIncome > 6000000 && yearIncome <= 8000000) {
        yearlyTax = ((yearIncome - 6000000) * 0.3) + 1110000;
    } else {
        yearlyTax = ((yearIncome - 8000000) * 0.35) + 1710000;
    }
    monthlyTax = yearlyTax / 12;
    MonthlySalaryAfterTax = monthlyIncome - monthlyTax;
    yearlyIncomeAfterTax = yearIncome - yearlyTax;
    percentage = (yearlyTax/yearIncome) * 100;
    document.getElementById('monthly-income-rental').innerHTML = formatter.format(monthlyIncome);
    document.getElementById('monthly-tax-rental').innerHTML = formatter.format(monthlyTax);
    document.getElementById('salary-tax-rental').innerHTML = formatter.format(MonthlySalaryAfterTax);
    document.getElementById('yearly-income-rental').innerHTML = formatter.format(yearIncome);
    document.getElementById('yearly-tax-rental').innerHTML = formatter.format(yearlyTax);
    document.getElementById('yearly-post-tax-rental').innerHTML = formatter.format(yearlyIncomeAfterTax);
    document.getElementById('percentage-rental').innerHTML = percentage.toFixed(2) + '%';
}


function openCalc(evt, taxType) {
  // Declare all variables
  var i, calculator, tablinks;

  // Get all elements with class="calculator" and hide them
  calculator = document.getElementsByClassName("calculator");
  for (i = 0; i < calculator.length; i++) {
    calculator[i].style.display = "none";
  }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(taxType).style.display = "block";
    evt.currentTarget.className += " active";
}



function openBrackets(evt, taxBrackets) {
  // Declare all variables
  var i, taxes, tablinks;

  // Get all elements with class="calculator" and hide them
  taxes = document.getElementsByClassName("taxable-income");
  for (i = 0; i < taxes.length; i++) {
    taxes[i].style.display = "none";
  }
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(taxBrackets).style.display = "block";
    evt.currentTarget.className += " active";
}






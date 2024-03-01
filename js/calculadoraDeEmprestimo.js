
    function calculate() {
        var amount = parseFloat(document.getElementById("amount").value);
        var apr = parseFloat(document.getElementById("apr").value) / 100 / 12;
        var years = parseFloat(document.getElementById("years").value) * 12;
        var zipcode = document.getElementById("zipCode").value;

        var payment = document.getElementById("payment");
        var total = document.getElementById("total");
        var totalinterest = document.getElementById("totalinterest");

        var principal = amount;
        var interest = apr;
        var payments = years;

        var x = Math.pow(1 + interest, payments);
        var monthly = (principal * x * interest) / (x - 1);

        if (isFinite(monthly)) {
            payment.innerHTML = monthly.toFixed(2);
            total.innerHTML = (monthly * payments).toFixed(2);
            totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);
            save(amount, apr, years, zipcode);

            try {
                getLenders(amount, apr, years, zipcode);
            } catch (e) {
                // Ignora esses erros
            }

            char(principal, interest, monthly, payments);
        } else {
            payment.innerHTML = "";
            total.innerHTML = "";
            totalinterest.innerHTML = "";
            char();
        }

        if (window.localStorage) {
            localStorage.setItem("loan_amount", amount);
            localStorage.setItem("loan_apr", apr);
            localStorage.setItem("loan_years", years);
            localStorage.setItem("loan_zipcode", zipcode);
        }
    }

    window.onload = function () {
        if (window.localStorage) {
            var amount = localStorage.getItem("loan_amount");
            var apr = localStorage.getItem("loan_apr");
            var years = localStorage.getItem("loan_years");
            var zipcode = localStorage.getItem("loan_zipcode");

            if (amount !== null && apr !== null && years !== null && zipcode !== null) {
                document.getElementById("amount").value = amount;
                document.getElementById("apr").value = apr;
                document.getElementById("years").value = years;
                document.getElementById("zipCode").value = zipcode;
            }
        }

        if (!window.XMLHttpRequest) return;

        var ad = document.getElementById("lenders");
        if (!ad) return;

        var amount = document.getElementById("amount").value;
        var apr = document.getElementById("apr").value;
        var years = document.getElementById("years").value;
        var zipcode = document.getElementById("zipCode").value;

        var url = "getlenders.php" + "?amt="
            + encodeURIComponent(amount) + "&apr="
            + encodeURIComponent(apr) + "&yrs="
            + encodeURIComponent(years) + "&zip="
            + encodeURIComponent(zipcode);

        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.send(null);

        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                var response = req.responseText;
                var lenders = JSON.parse(response);
                var list = "";
                for (var i = 0; i < lenders.length; i++) {
                    list += "<li><a href='" + lenders[i].url + "'>" +
                        lenders[i].name + "</a></li>"; 
                }
                ad.innerHTML = "<ul>" + list + "</ul>";
            }
        };
    }

    function char(principal, interest, monthly, payments) {
       
    }


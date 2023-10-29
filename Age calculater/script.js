document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ageCalculatorForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const dobInput = document.getElementById("dob");
        const dob = new Date(dobInput.value);
        const currentDate = new Date();

        const ageInMilliseconds = currentDate - dob;
        const ageInYears = new Date(ageInMilliseconds).getUTCFullYear() - 1970;

        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Your age is ${ageInYears} years.`;
    });
});

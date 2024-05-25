document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = getApiKey(); // Obtener la clave API desde el archivo .env
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

    const form = document.getElementById('currency-form');
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const resultDiv = document.getElementById('result');

    // Fetch and populate currency options
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.conversion_rates);
            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                const option2 = document.createElement('option');
                option1.value = currency;
                option1.textContent = currency;
                option2.value = currency;
                option2.textContent = currency;
                fromCurrency.appendChild(option1);
                toCurrency.appendChild(option2);
            });
        });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = amountInput.value;
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (amount === '' || from === '' || to === '') {
            alert('Por favor, complete todos los campos');
            return;
        }

        convertCurrency(amount, from, to);
    });

    function convertCurrency(amount, from, to) {
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`)
            .then(response => response.json())
            .then(data => {
                const conversionResult = data.conversion_result;
                resultDiv.textContent = `${amount} ${from} = ${conversionResult} ${to}`;
                animateResult();
            });
    }

    function animateResult() {
        resultDiv.style.opacity = 0;
        setTimeout(() => {
            resultDiv.style.opacity = 1;
        }, 300);
    }

    function getApiKey() {
        
        return '7556f287e46f70ba05b1553d';
    }
});

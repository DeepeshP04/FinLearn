let portfolioValue = 100000;

function buyAsset() {
    const assetType = document.getElementById('asset-type').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    portfolioValue += amount;
    updatePortfolioSummary();
}

function sellAsset() {
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (amount > portfolioValue) {
        alert('Insufficient funds.');
        return;
    }

    portfolioValue -= amount;
    updatePortfolioSummary();
}

function updatePortfolioSummary() {
    document.getElementById('portfolio-value').textContent = `Portfolio Value: $${portfolioValue.toFixed(2)}`;
}

updatePortfolioSummary();

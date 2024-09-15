function simulateSavings() {
    const initialFunds = parseFloat(document.getElementById('initial-funds').value);
    const goal = document.getElementById('goal').value;
    const savingsAmount = parseFloat(document.getElementById('savings-amount').value);
    const accountType = document.getElementById('account-type').value;
    
    // Convert goal to a numeric amount
    const goalAmount = parseFloat(goal);
    
    if (isNaN(initialFunds) || isNaN(savingsAmount) || isNaN(goalAmount) || goalAmount <= 0) {
        document.getElementById('result').innerHTML = `<p>Please enter valid numbers for all inputs.</p>`;
        return;
    }

    let interestRate;
    switch (accountType) {
        case 'regular':
            interestRate = 0.01;
            break;
        case 'fd':
            interestRate = 0.05;
            break;
        case 'high-yield':
            interestRate = 0.03;
            break;
        case 'emergency-fund':
            interestRate = 0.02;
            break;
        default:
            interestRate = 0;
    }

    // Calculate the number of months needed to reach the goal
    let currentAmount = initialFunds;
    let months = 0;

    while (currentAmount < goalAmount) {
        currentAmount += savingsAmount;
        currentAmount += currentAmount * (interestRate / 12); // Applying monthly interest
        months++;
    }

    const finalAmount = currentAmount.toFixed(2);

    document.getElementById('result').innerHTML = `
        <p>Goal: ${goal}</p>
        <p>Account Type: ${accountType.replace('-', ' ').toUpperCase()}</p>
        <p>Initial Funds: $${initialFunds}</p>
        <p>Monthly Savings: $${savingsAmount}</p>
        <p>Estimated Amount After ${months} Months: $${finalAmount}</p>
    `;
}

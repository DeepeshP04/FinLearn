function simulateSavings() {
    const initialFunds = parseFloat(document.getElementById('initial-funds').value);
    const goal = document.getElementById('goal').value;
    const savingsAmount = parseFloat(document.getElementById('savings-amount').value);
    const accountType = document.getElementById('account-type').value;

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

    const monthsToReachGoal = Math.ceil((goalAmount - initialFunds) / savingsAmount);
    const finalAmount = (initialFunds + (savingsAmount * monthsToReachGoal) * (1 + interestRate)).toFixed(2);

    document.getElementById('result').innerHTML = `
        <p>Goal: ${goal}</p>
        <p>Account Type: ${accountType.replace('-', ' ').toUpperCase()}</p>
        <p>Initial Funds: $${initialFunds}</p>
        <p>Monthly Savings: $${savingsAmount}</p>
        <p>Estimated Amount After ${monthsToReachGoal} Months: $${finalAmount}</p>`
    ;
}
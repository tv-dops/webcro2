function isValidCardNumber(value) {
    // Remove any spaces or hyphens
    const cardNumber = value.replace(/[\s-]/g, '');

    // Ensure only numbers are present
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }

    let sum = 0;
    let shouldDouble = false;

    // Start from the rightmost digit and move to the left
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);

        if (shouldDouble) {
            if ((digit *= 2) > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble; // Alternate doubling
    }

    // The card number is valid if the sum is a multiple of 10
    return (sum % 10) === 0;
}

let hasAlerted = false;

document.getElementById('input-card').addEventListener('blur', function () {
    if (!isValidCardNumber(this.value)) {
        if (!hasAlerted) {
            alert('The card number is not valid.');
            hasAlerted = true;
        }
        this.focus();
    } else {
        hasAlerted = false;
    }
});
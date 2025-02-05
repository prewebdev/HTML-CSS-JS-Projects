const calculateBMI = () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultText = document.getElementById('result');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; //convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        return resultText.textContent = 'Please enter the valid weight and height values.';
    }

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    resultText.textContent = `Your BMI: ${bmi} (${category})`;
}
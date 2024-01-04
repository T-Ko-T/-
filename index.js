function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
  
    if (height > 0 && weight > 0) {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      const resultElement = document.getElementById('result');
      const adviceElement = document.getElementById('advice');
  
      resultElement.innerHTML = `Your BMI is: ${bmi}`;
  
      if (bmi < 18.5) {
        adviceElement.innerHTML = 'Underweight - Consider gaining some weight for better health.';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        adviceElement.innerHTML = 'Normal weight - Maintain a healthy lifestyle.';
      } else if (bmi >= 25 && bmi < 29.9) {
        adviceElement.innerHTML = 'Overweight - Consider losing some weight for better health.';
      } else {
        adviceElement.innerHTML = 'Obese - Consult with a healthcare professional for guidance.';
      }
    } else {
      alert('Please enter valid height and weight.');
    }
  }
  
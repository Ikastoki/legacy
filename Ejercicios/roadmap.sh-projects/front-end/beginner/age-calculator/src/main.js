import { DateTime } from 'luxon';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';


const datepicker = flatpickr('#birthdate', {
  dateFormat: 'd/m/Y', 
  maxDate: 'today',
  locale: 'es',
  disableMobile: true,
});


const form = document.getElementById('ageForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const birthdateValue = document.getElementById('birthdate').value.trim();
  
  if (!birthdateValue) {
    showError('Por favor, selecciona una fecha de nacimiento.');
    return;
  }
  
  try {
    // Parsear fecha con formato DD/MM/YYYY
    const [day, month, year] = birthdateValue.split('/').map(Number);
    const birthDate = DateTime.local(year, month, day);
    
    if (!birthDate.isValid) {
      showError('Fecha inválida.');
      return;
    }
    
    const today = DateTime.now();
    
    if (birthDate > today) {
      showError('La fecha no puede ser futura.');
      return;
    }
    
    // Calcular edad 
    const diff = today.diff(birthDate, ['years', 'months', 'days']);
    const { years, months } = diff.toObject();
    
    const yearsFloored = Math.floor(years);
    const monthsFloored = Math.floor(months % 12);
    
    const resultMessage = buildAgeMessage(yearsFloored, monthsFloored);
    showResult(resultMessage);
    
  } catch (error) {
    console.error('Error calculando edad:', error);
    showError('Error al calcular. Intenta de nuevo.');
  }
});


function buildAgeMessage(years, months) {
  let message = 'You are ';
  
  if (years > 0) {
    message += `${years} ${years === 1 ? 'year' : 'years'} `;
  }
  
  if (months > 0) {
    message += `${months} ${months === 1 ? 'month' : 'months'} `;
  }
  
  message += 'old';
  
  return message;
}

function showResult(message) {
  resultDiv.textContent = message;
  resultDiv.className = 'result';
}

function showError(message) {
  resultDiv.textContent = message;
  resultDiv.className = 'result error';
}

// Limpiar error al cambiar fecha
document.getElementById('birthdate').addEventListener('input', () => {
  if (resultDiv.classList.contains('error')) {
    resultDiv.textContent = '';
    resultDiv.className = 'result';
  }
});
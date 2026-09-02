/**
 * Editorial Resort & Swimwear - Custom Fit Form Module (Vanilla JS)
 * Form validation, body measurement checks, mailto string generator, success confirmation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bespokeForm');
  if (!form) return;

  initBespokeForm(form);
});

function initBespokeForm(form) {
  const requiredInputs = form.querySelectorAll('.form-control[required]');

  requiredInputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    requiredInputs.forEach(input => {
      if (!validateField(input)) isValid = false;
    });

    if (!isValid) {
      const firstError = form.querySelector('.form-control.error');
      if (firstError) firstError.focus();
      return;
    }

    processBespokeSubmit(form);
  });
}

function validateField(input) {
  const val = input.value.trim();
  let valid = true;

  if (input.required && !val) {
    valid = false;
  } else if (input.type === 'email' && val) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) valid = false;
  }

  if (!valid) {
    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
  } else {
    input.classList.remove('error');
    input.removeAttribute('aria-invalid');
  }

  return valid;
}

function processBespokeSubmit(form) {
  const name = document.getElementById('fullName')?.value.trim() || document.getElementById('clientName')?.value.trim() || '';
  const email = document.getElementById('email')?.value.trim() || document.getElementById('clientEmail')?.value.trim() || '';
  const category = document.getElementById('garmentType')?.value || document.getElementById('garmentCategory')?.value || 'Custom Swimwear';
  const color = document.getElementById('yarnColor')?.value || document.getElementById('colorPreference')?.value || 'Unbleached Organic Linen';
  const bust = document.getElementById('bustMeasurement')?.value.trim() || document.getElementById('bustSize')?.value.trim() || 'N/A';
  const underbust = document.getElementById('underbustMeasurement')?.value.trim() || document.getElementById('underbustSize')?.value.trim() || 'N/A';
  const waist = document.getElementById('waistMeasurement')?.value.trim() || document.getElementById('waistSize')?.value.trim() || 'N/A';
  const hip = document.getElementById('hipMeasurement')?.value.trim() || document.getElementById('hipSize')?.value.trim() || 'N/A';
  const notes = document.getElementById('fitNotes')?.value.trim() || document.getElementById('specialNotes')?.value.trim() || 'None';

  const subject = encodeURIComponent(`Custom Swim Fit Inquiry — ${name}`);
  const bodyText = `Hello Atelier Team,

I would like to request a bespoke custom swimwear fitting order. Here are my dimensions and details:

• Client Name: ${name}
• Email: ${email}
• Garment Silhouette: ${category}
• Yarn & Colorway: ${color}

• Body Proportions:
  - Full Bust: ${bust}
  - Underbust: ${underbust}
  - Natural Waist: ${waist}
  - Full Hip: ${hip}

• Special Fitting Notes & Coverage Preferences:
${notes}

Thank you!`;

  const mailtoUrl = `mailto:atelier@editorialresort.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;

  const successBox = document.getElementById('bespokeSuccessBox');
  if (successBox) {
    successBox.classList.add('show');
    successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 700);

  form.reset();
}

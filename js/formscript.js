const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if(validateForm()) {
    sendFormData();
  }
});

function validateForm() {
  // form verilerinin doğruluğunu kontrol eden kod buraya yazılabilir
  return true;
}

function sendFormData() {
  // form verilerinin gönderildiği kod buraya yazılabilir
}
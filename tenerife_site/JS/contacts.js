submitBtnData = document.getElementById('submit_form')

let bot = {
    token: '6377693843:AAFtzYcagl55PFN3VkYBN6hjDcdZMoe4aOM',
    chatID: '928132950',

}

submitBtnData.addEventListener('click', function () {
  const nameInput = document.getElementById('submit-name').value;
  const emailInput = document.getElementById('submit-email').value;
  const phoneNumberInput = document.getElementById('submit-phone-number').value;

  if (!nameInput || !emailInput || !phoneNumberInput) {
      alert('Будь ласка, заповніть всі обов\'язкові поля.');
      return;
  }

  const message = `Ім'я: ${nameInput}\nE-mail: ${emailInput}\nНомер телефону: ${phoneNumberInput}`;

  fetch(`https://api.telegram.org/bot${bot.token}/sendMessage`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          chat_id: bot.chatID,
          text: message
      })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Помилка при відправці повідомлення до Telegram.');
      }
      alert('Повідомлення успішно відправлено до Telegram.');
  })
  .catch(error => {
      console.error(error);
      alert('Сталася помилка. Повідомлення не було відправлено.');
  });
});

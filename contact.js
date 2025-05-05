async function record_form() {
    event.preventDefault();
    const sub = new FormData(form);
    
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        // Set the FormData instance as the request body
        body: sub,
        });
        console.log(await response.json());
    } catch (e) {
        console.error(e);
    } 
}

function check_hcaptcha() {
    SECRET_KEY = "ES_5f9d9bc9e16141fba01c6699f377fbc2"
    VERIFY_URL = "https://api.hcaptcha.com/siteverify"

    token = request.POST_DATA['h-captcha-response']

    data = { 'secret': SECRET_KEY, 'response': token }

    response = http.post(url=VERIFY_URL, data=data)

    response_json = JSON.parse(response.content)

    success = response_json['success']
}





function thankYou() {
    event.preventDefault;
    alert('Thank you for reaching out!');
}



  /* const form = document.querySelector('#form');
  form.addEventListener('submit', function() {
      event.preventDefault();
      const sub = new FormData(form);
      console.log(sub);
  }) */



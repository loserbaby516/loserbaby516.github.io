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



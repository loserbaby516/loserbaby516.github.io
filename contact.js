function record_form() {
    event.preventDefault();
    const sub = new FormData(form);
    for (item of sub) {
        console.log(item);
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



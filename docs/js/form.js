$('.ui.form')
  .form({
    fields: {
      name: {
        identifier: '_subject',
        rules: [
          {
            type: 'empty',
            prompt: 'Please enter your name'
          }
        ]
      },
      skills: {
        identifier: '_replyto',
        rules: [
          {
            type: 'email',
            prompt: 'Please select at least two skills'
          }
        ]
      },
      gender: {
        identifier: 'message',
        rules: [
          {
            type: 'empty',
            prompt: 'Please select a gender'
          }
        ]
      },
    }
  })
;

$(".ui.form").submit(async function (event) {
  event.preventDefault();
  const responseElement = document.getElementsByClassName("response");
  const responseTextElement = document.getElementById("response_text");
  const buttonElement = document.getElementsByTagName("button");

  const message = document.getElementsByName("message")[0].value;
  const _subject = document.getElementsByName("_subject")[0].value;
  const _replyto = document.getElementsByName("_replyto")[0].value;
  const data = {message, _subject, _replyto};

  if (message && _subject && _replyto) {
    buttonElement[0].classList.add("loading");
    buttonElement[0].classList.add("disabled");

    try {
      await fetch("https://formspree.io/f/xknpaepv", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      responseElement[0].style.display = "block";
      responseTextElement.innerHTML = "Your message was successfully sent, I will get back to you soonest.";
      buttonElement[0].classList.remove("loading");
      buttonElement[0].classList.remove("disabled");
    } catch (error) {
      // some code
    }
  }
});

// close message
$('.message .close')
  .on('click', function () {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
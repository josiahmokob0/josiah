<template>

  <div id="contact">
    <h2 class="center heading">Get in Touch</h2>
    <div id="contact-form">
      <form class="ui form">
        <div class="field">
          <label>Subject:
            <input type="text" name="_subject" placeholder="Subject">
          </label>
        </div>
        <div class="field">
          <label>Email:
            <input type="email" name="_replyto" placeholder="Email">
          </label>
        </div>
        <div class="field">
          <label>Message:
            <textarea name="message"></textarea>
          </label>
        </div>
        <button class="ui button teal large" type="submit">Submit</button>
      </form>
      <div class="ui success message transition response">
        <i class="close icon"></i>
        <div class="header">
          Success 😼
        </div>
        <p id="response_text"></p>
      </div>
    </div>
  </div>

</template>

<style scoped>
#contact {
  position: relative;
  z-index: 999;
}

#contact-form {
  max-width: 500px;
  margin: 2rem auto;
}

#contact-form input,
#contact-form textarea {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

#contact-form textarea {
  height: 150px;
  resize: none;
}
</style>

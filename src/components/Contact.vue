<template lang="html">
  <div id="contact">
    <h2 class="center heading">Get in Touch</h2>
    <div id="contact-form">
      <sui-form>
        <sui-form-field>
          <label>Email</label>
          <input
            type="text"
            placeholder="First Name"
            name="email"
            v-model="email"
          />
        </sui-form-field>
        <sui-form-field>
          <label>Subject</label>
          <input
            type="text"
            placeholder="First Name"
            subject="subject"
            v-model="subject"
            />
        </sui-form-field>
        <sui-form-field>
          <label>Short Text</label>
          <textarea
            rows="2"
            name="content"
            v-model="content"
            />
            <sui-button
              positive
              @click="submit"
              v-bind:loading="loading">
              Submit
            </sui-button>
        </sui-form-field>

        <div class="feedback">
          <transition name="fade">
          <sui-message
            v-if="message"
            header="Info"
            dismissable
            @dismiss="handleDismiss">
            {{message}}
          </sui-message>
          </transition>
        </div>
      </sui-form>
    </div>
  </div>

</template>

<script type = "text/javascript">

export default  {
  name: "Contact",
  data() {
    return {
      email: "",
      subject: "",
      content: "",
      message: "",
      loading: false
    };
  },
  methods : {
    submit : async function(evt) {
      evt.preventDefault();
      const {content, subject, email} = this
      const dt = { content, subject, email };
      await this.sendForm(dt);
    },
    async sendForm(data) {
      try {
        this.loading = true;
        await fetch("https://formspree.io/f/xknpaepv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        this.loading = false;
        this.message = "Your message was successfully sent, I will get back to you soonest.";
      } catch (error) {
        this.loading = false;
        this.message = "Something went wrong"
      }
    },
    handleDismiss() {
      this.message = "";
    }
  },
}
</script>

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
.feedback {
  margin: 2rem 0;
}
</style>

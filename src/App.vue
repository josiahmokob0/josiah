<template>

  <div class="app">
    <Social />
    <Lead />
    <Header />
    <About />
    <Experience />
    <ClientProjects />
    <PersonalProjects />
    <Skills />
    <Testimonial />
    <div class="ui section divider"></div>
    <Contact />
  </div>

</template>

<script>

  import Social from '@/components/Social.vue'
  import Lead from '@/components/Lead.vue'
  import Header from '@/components/Header.vue'
  import About from '@/components/About.vue'
  import Experience from '@/components/Experience.vue'
  import ClientProjects from '@/components/ClientProjects.vue'
  import Skills from '@/components/Skills.vue'
  import Testimonial from '@/components/Testimonial.vue'
  import PersonalProjects from '@/components/PersonalProjects.vue'
  import Contact from '@/components/Contact.vue'
  import recommendations from '../scripts/recommendations.json'

  export default {
    name: 'App',
    components: {
      Contact,
      PersonalProjects,
      Social,
      Lead,
      Header,
      About,
      Experience,
      ClientProjects,
      Skills,
      Testimonial
    },
    created() {
      this.recommendations = recommendations
    },
    data() {
      return {
        recommendations: {}
      }
    },
    mounted() {
      setInterval(() => {
        this.counter += 1
      }, 1000)
    }
  }

</script>

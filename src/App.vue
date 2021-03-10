<template>
  <div class="container">
    <Social />
	  <Lead />
  </div>
</template>

<script>
import Social from './components/Social.vue';
import Lead from './components/Lead.vue';
import recommendations from '../scripts/recommendations.json';

export default {
  name: 'App',
  components: { Social, Lead },
  created() {
    this.recommendations = recommendations;
  },
  data() {
    return {
      recommendations: {},
    };
  },
  mounted() {
    setInterval(() => { this.counter += 1; }, 1000);
  },
};
</script>

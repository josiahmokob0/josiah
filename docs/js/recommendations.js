new Vue({
    data() {
        return {
            recommendations: [],
        }
    },
    async created() {
        this.recommendations = await this.fetchRecommendations();
    },
    methods: {
        async fetchRecommendations() {
            let results = []
            const res = await fetch('http://localhost:63342/josiah/scripts/recommendations.json');
            const data = await res.json();
            for (let rec in data) {
                results.push(data[rec])
            }
            return results
        }
    },
    template: `
      <div>
        <div class="ui cards fluid" v-for="recommendation in recommendations">
          <div class="ui card fluid">
            <div class="ui raised segment">
              <div class="segment">
                <div class="content" id="recommendations">
                  <span class="ui teal ribbon label">{{ recommendation["worked_together"] }}</span>
                  <div class="content">
                    <div class="header center">{{ recommendation["First Name"] }} {{ recommendation["Last Name"] }}</div>
                    <div class="description">
                      <blockquote> {{ recommendation.Text }}</blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
}).$mount("#recommendations")


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
    template:`
      <div class="ui cards fluid" v-for="recommendation in recommendations">
        {{ recommendation }}
        <div class="segment">
          <div class="content" id="recommendations">
            <span class="ui teal ribbon label">Stem Disintermedia</span>
            <div class="content">
              <div class="header center">Jay</div>
              <div class="meta">
                <span class="category center">Stem</span>
              </div>
              <div class="description">
                <blockquote>
                Josiah was part of a 3 person team developing full-stack React/Node/Postgres applications. I challenged the team to learn d3, SVG, CSS, and HTML5 in a deeper way, and to switch from GraphQL to using Django and a REST interface. Josiah dug in and became familiar with the d3 way which is very different from a React component approach. His ability to face challenges directly and overcome them, plus an ability to learn new technologies quickly makes him a strong asset for any team. I would gladly work with him again.
              </blockquote>
              </div>
            </div>
            </div>
        </div>
      </div>
    `
}).$mount("#recommendations")


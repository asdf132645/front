<template>
  <div id="app">
    <component :layouts="layouts" :is="currentView">
      <slot />
    </component>
  </div>
</template>

<script>
import TheLayout from '@/layouts/TheLayout';
import TheLayout2 from '@/layouts/TheLayout2';
import TheLayout3 from '@/layouts/TheLayout3';

export default {
  data: function() {
    return {
      currentView: '',
      layouts: '',
    };
  },
  components: {
    TheLayout,
    TheLayout2,
    TheLayout3,
  },
  computed: {
    reExpiresAt() {
      return this.$store.getters.reExpiresAt;
    },
    reToken() {
      return this.$store.getters.reToken;
    },
  },
  methods: {
    getCurrentView() {
      this.$axios
        .get('/layout.json')
        .then(res => {
          this.layouts = res.data.layouts;
          if (this.layouts == 'a') {
            this.currentView = 'TheLayout';
            sessionStorage.setItem('routes', this.layouts);
          } else if (this.layouts === 'b') {
            this.currentView = 'TheLayout2';
          } else if (this.layouts === 'c') {
            this.currentView = 'TheLayout3';
          }
          this.$store.commit('setLayouts', this.currentView);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
  },
  created() {
    this.getCurrentView();
  },
};
</script>

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
import defaultRoutes from '@/routes/detachPage/default';
// import loginRoutes from '@/routes/detachPage/login';

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
  methods: {
    addrouteE(defaultRoutes) {
      this.$router.addRoutes(defaultRoutes);
    },
    getCurrentView() {
      this.$axios
        .get('/layout.json')
        .then(res => {
          this.layouts = res.data.layouts;
          if (this.layouts == 'a') {
            this.currentView = 'TheLayout';
            sessionStorage.setItem('routes', this.layouts);
            console.log(process.env);
            // this.$router.addroute(...defaultRoutes);
          } else if (this.layouts === 'b') {
            this.currentView = 'TheLayout2';
            // this.$router.addroute(...loginRoutes);
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
    if (sessionStorage.getItem('routes') === 'a') {
      this.addrouteE([...defaultRoutes]);
      console.log(this.$router.options);
    } else if (sessionStorage.getItem('routes') === 'b') {
      this.addrouteE([...defaultRoutes]);
    }
  },
};
</script>

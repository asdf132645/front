<template>
  <div>
    <i class="icon ion-md-create" @click="routeEditPage"></i>
  </div>
</template>

<script>
export default {
  methods: {
    routeEditPage() {
      const id = 'edit';
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>

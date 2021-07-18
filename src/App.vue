<template>
  <Navbar />
  <router-view />
  <button type="button" class="btn btn-primary">prova</button>
  <p v-if="parks">{{ parks.author }}</p>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    let parks = ref<any>();

    store.dispatch("ExampleCall").then(() => {
      parks.value = store.getters.exampleGetters;
    });

    // router.push({ name: "Example", params: { id: id } });
    // route.params.pippo
    return { parks };
  },
});
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}
</style>

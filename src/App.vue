<script>
import { store } from './store'
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'


export default {
  name: 'App',
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  data() {
    return {
      store,
    }
  }
} 
</script>



<template>
  <PageHeader :nav_link="store.links" />
  <PageMain />
  <PageFooter :about="store.about" :contact="store.contact" :pages="store.pages" :blog="store.blog" />
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/variables.scss' as *;
</style>

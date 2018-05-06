<template>
  <div>
      <app-top-header></app-top-header>
      <app-top-menu></app-top-menu>
      <router-view></router-view>
      <app-copyright></app-copyright>
  </div>
</template>

<script>
import TopHeader from "./components/TopHeader";
import TopMenu from "./components/TopMenu";
import Welcome from "./components/Welcome";
import Why from "./components/Why";
import News from "./components/News";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
export default {
  name: "App",
  components: {
    "app-top-header": TopHeader,
    "app-top-menu": TopMenu,
    "app-welcome": Welcome,
    "app-why": Why,
    "app-news": News,
    "app-footer": Footer,
    "app-copyright": Copyright
  }
};
</script>

<style>

</style>

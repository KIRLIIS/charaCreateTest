<template>
  <div class="home">
    <input type="color" v-model="hairColor">
    {{ hairColor }}
    <div class="chara-area">
      <div class="front-area">
        <div class="front front-color" :style="{backgroundColor: hairColor}"></div>
        <img class="front" :src="this.$store.state.frontHair" alt="">
      </div>
      <div class="body-area">
        <img class="body" :src="this.$store.state.body" alt="">
      </div>
      <div class="back-area">
        <img class="back" :src="this.$store.state.backHair" alt="">
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      hairColor: '#ffffff',
      frontImage: this.$store.state.front,
    }
  },
  computed: {
    hairColorChange(){
      return{
        '--background-color': this.hairColor,
      }
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.chara-area{
  width: 50vw;
  height: 100vh;
  position: relative;
}

.front-area,
.body-area,
.back-area{
  position: absolute;
  width: 100%;
  height: 100%;
}

.front,
.body,
.back{
  width: 100%;
  height: auto;
}

.front-area{
  z-index: 3;
}

.front-color{
  position: absolute;
  width: 100%;
  height: 100%;
  mask-image: url("../assets/frontHair.png");
  mask-size: 100% 100%;
  mix-blend-mode: overlay;
}



.body-area{
  z-index: 2;
}

.back-area{
  z-index: 1;
}






</style>

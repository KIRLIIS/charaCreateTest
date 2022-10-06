<template>
  <div class="chara-area">
    <div class="front-area">
      <div class="front front-color" :style="{backgroundColor: getHairColor}">
      </div>
      <div class="front front-color front2">
      </div>
      <img class="front" :src="this.$store.state.frontHair" alt="">
    </div>
    <div class="body-area">
      <img class="body" :src="this.$store.state.body" alt="">
    </div>
    <div class="back-area">
      <img class="back" :src="this.$store.state.backHair" alt="">
    </div>
  </div>

</template>

<script>
export default {
  name: 'ShowChara',
  data(){
    return{
      thisHairColor: '#0000ff'
    }
  },
  computed:{
    getHairColor(){
      return this.$store.getters.getHairColor
    },
  }
}
</script>

<style scoped>
.chara-area{
  width: 50%;
  height: auto;
  position: relative;
}

.front-area,
.body-area,
.back-area{
  position: absolute;
  width: 100%;
  height: auto;
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

.front-color,
.front2{
  position: absolute;
  width: 100%;
  height: 100%;
  mask-image: url("../assets/frontHair.png");
  mix-blend-mode: overlay;
  mask-size: 100% 100%;
}

.front2{
  background-color: white;
}

.body-area{
  z-index: 2;
}

.back-area{
  z-index: 1;
}

</style>
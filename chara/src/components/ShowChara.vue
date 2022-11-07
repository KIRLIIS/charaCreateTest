<template>
  <div class="chara-area">
    <div class="front-area">
      <div class="front front-color" :style="{backgroundColor: getHairColor}">
      </div>
      <!-- <div class="front front-color front2">
      </div> -->
      <img class="front" :src="this.$store.state.frontHair" alt="">
    </div>

    <div class="side-area">
      <div class="side side-color" :style="{backgroundColor: getHairColor}">
      </div>
      <div class="side side-color side2">
      </div>
      <img class="side" :src="this.$store.state.sideHair" alt="">
    </div>

    <div class="body-area">
      <img class="body" :src="this.$store.state.body" alt="">
    </div>

    <div class="back-area">
      <div class="back back-color" :style="{backgroundColor: getHairColor}">
      </div>
      <div class="back back-color back2">
      </div>
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
  height: 100%;
  position: relative;
}

.front-area,
.side-area,
.body-area,
.back-area{
  position: absolute;
  width: 50%;
  height: auto;
}

.front,
.side,
.body,
.back{
  width: 100%;
  height: auto;
}

.front-area{
  z-index: 4;
}

.front-color,
.front2{
  position: absolute;
  width: 100%;
  height: 100%;
  mask-image: url("../assets/newFrontHair.png");
  mix-blend-mode: overlay;
  mask-size: 100% auto;
}

.side-area{
  z-index: 3;
}

.side-color,
.side2{
  position: absolute;
  width: 100%;
  height: 100%;
  mask-image: url("../assets/newSideHair01.png");
  mix-blend-mode: overlay;
  mask-size: 100% auto;
}

.back-color,
.back2{
  position: absolute;
  width: 100%;
  height: 100%;
  mask-image: url("../assets/newBackHair01.png");
  mix-blend-mode: overlay;
  mask-size: 100% auto;
}

.front2,
.side2,
.back2{
  background-color: rgba(255,255,255,1);
  mix-blend-mode: soft-light;
}

.body-area{
  z-index: 2;
}

.back-area{
  z-index: 1;
}

</style>
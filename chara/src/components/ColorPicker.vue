<template>
  <div>
    <v-color-picker
      canvas-height="300"
      dot-size="16"
      swatches-max-height="200"
      mode="rgba"
      hide-mode-switch
      hide-inputs
      v-model="hex"
      @input="changeHairColor"
    ></v-color-picker>
    {{hairChange}}
  </div>
</template>

<script>


export default {
  name: 'ColorPicker',
  data() {
    return{
      name: "",
      hex: '#232323',

    }
  },
  methods:{
    changeHairColor(){
      this.$store.dispatch('changeHairColorAction', {
        changeColor: this.hex
      });
    },
    testChange(){
      console.log("change!!!!!!!!!");
    }
  },
  computed: {
    // setHairColor(){
    //   return (currentColor) => {
    //     this.$store.dispatch('changeHairColorAction', {
    //       changeColor: currentColor,
    //     })
    //   }
    // },
    hairChange: {
      get(){
        return this.$store.getters.getHairColor
      },
      set(hex){
        this.$store.dispatch('changeHairColorAction', hex)
      },
    },
  }
}
</script>

<style scoped>

</style>
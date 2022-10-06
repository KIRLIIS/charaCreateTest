<template>
  <div>
    <v-color-picker
      canvas-height="300"
      dot-size="16"
      swatches-max-height="200"
      mode="rgba"
      hide-mode-switch
      hide-inputs
      v-model="currentColor"
    ></v-color-picker>
    {{currentColor}}
    {{ getHairColor }}
    <v-btn @click="changeHairColor">髪色を変更</v-btn>
  </div>
</template>

<script>


export default {
  name: 'ColorPicker',
  data() {
    return{
      name: "",
      currentColor: '#ff0000',

    }
  },
  methods:{
    changeHairColor(){
      this.$store.dispatch('changeHairColorAction', {
        changeColor: this.currentColor
      })
    },
  },
  computed:{
    getHairColor(){
      return this.$store.getters.getHairColor
    },
  }
}
</script>

<style scoped>

</style>
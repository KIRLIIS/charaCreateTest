<template>
  <div class="outside">
    <v-app>
      <v-main >
        <v-container fluid>
          <v-row justify="space-between">

              <v-spacer></v-spacer>
                <ShowChara/>
              
              <ColorPicker/>
          <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-main>
      
    </v-app>
    <div class="background"></div>
  </div>
</template>

<style scoped>
.outside{
  width: 1280px;
  height: 720px;
  
}
.background{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: cyan;
}
</style>

<script>
import ShowChara from './components/ShowChara.vue'
import ColorPicker from './components/ColorPicker.vue'


export default {
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    ShowChara,
    ColorPicker,

}
};
</script>

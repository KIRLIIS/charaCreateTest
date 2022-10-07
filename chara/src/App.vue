<template>
  <v-app>
    <v-main >
      <v-container >
        <v-row justify="space-between">

            
              <ShowChara/>
            
            <ColorPicker/>
        
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

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

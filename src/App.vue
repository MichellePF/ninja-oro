<template>
<div id="app">
  <h1 class="title">Ninja Gold</h1>
  <h2 v-bind:class="{'green': goldTotal > 0, 'red': goldTotal < 0}">Gold: {{goldTotal}}</h2>
    <div class="container">
      <Gold title="Farm" :min="10" :max="20"/>
      <Gold title="Cave" :min="5" :max="10"/>
      <Gold title="House" :min="2" :max="5"/>
      <Gold title="Casino" :min="-50" :max="50"/>
      <div class="container-activities">
        <h2>Activities:</h2>
        <ul>
          <li v-bind:class="{'green': activity.num > 0, 'red': activity.num < 0}" v-for="(activity,i) in activity" v-bind:key="i">{{activity.texto}}</li>
        </ul>
       
      </div> 
      <div>
        <input @click="reset" class="botonsReset" type="submit" value="Reset">
      </div>
       
    </div>
    
   
</div>
    
</template>

<script>
import Gold from './components/Gold.vue'
import store from '@/store.js'

export default {
  name: 'App',
  components: {
    Gold
  },
  data: () => {
    return store.state
  },
  methods: {
    reset: function(){
      let resetPage = confirm('¿Quiere resetear la pagina?');
      if(resetPage){
      store.resetGold();
      store.resetActivities();
                    
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

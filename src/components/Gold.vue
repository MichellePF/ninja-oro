<template>
    <div class="card">
        <h2>{{title}}</h2>
        <p>Obtendrás entre {{min}} y {{max}}</p>
        <input @click="findGold" class="botons" type="submit" value="Find Gold!">
    </div>
    
</template>

<script>
import store from "@/store.js";
    export default {
        name: 'Gold',
        props: {
            title: String,
            min: Number,
            max: Number,
            activity: String
        },
        methods: {
            findGold: function(){
                let newGold = Math.round(Math.random()* (this.max - this.min + 1)) + this.min;
                console.log(newGold);
                store.sumarOro(newGold);
                let new_activity = `${newGold<0?'Perdiste':'Ganaste'} ${newGold} de ${this.title} `
                store.addActivity(new_activity);
            }
        }
        
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');
html, body{
    margin: 0;
    padding: 0;
}

body{
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    letter-spacing: 0.03em;
    line-height: 1.6;
    font-family: 'Open Sans', sans-serif;
}

.title{
    text-align: center;
    font-size: 40px;
    color: #6a6a6a;
    margin-top: 100px;
    font-weight: 100;
    font-family: 'Roboto', sans-serif;
}

h2{
   text-align: center;
}

.container{
    width: 100%;
    max-width: 1200px;
    height: 430px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
}

.container .card{
    width: 20%;
    height: 330px;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;
    margin-top: 50px;
    background:lightpink;
}

.container .card:hover{
    transform: translateY(-15px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}


.container .card h4{
    font-weight: 600;
}

.container .card p{
    padding: 0 1rem;
    font-size: 16px;
    font-weight: 300;
}

.container .card .botons {
        width: 70%;
        background: #1f53c5;
        border: none;
        padding: 12px;
        color: white;
        margin: 16px 0;
        font-size: 16px;
    }

.container .card .botons:hover {
        background: yellow;
        border: 1px solid white;
        color: black;
        font-weight: 700;
    } 

.container-activities {
    width: 100%;
    border: 2px solid black;
    font-size: 15px;
    background: lightpink;
    font-weight: 800;
}
.container-activities h2 {
    font-size: 25px;
    color: #1f53c5;
}

.container-activities ul {
    list-style: none;
}

.botonsReset{
    width: 100%;
    background: #1f53c5;
    border: none;
    padding: 12px;
    color: white;
    margin: 16px 0;
    font-size: 16px;
}

.botonsReset:hover {
        background: yellow;
        border: 1px solid white;
        color: black;
        font-weight: 700;
    } 

</style>
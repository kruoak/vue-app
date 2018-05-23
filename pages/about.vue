<template>
    <div>
        <h1>Aboute <i>{{name.toUpperCase()}}</i></h1>
        <h2> age <b>{{age * 2}}</b></h2>
        <input type="text" v-model="name"><br>
        <input v-model="name"  type="text">
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'Alongkorn',
            age: 33,
        }
    }
}
</script>

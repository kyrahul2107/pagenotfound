<template>

    <h1>Profile Page</h1>

</template>

<script>
import {useRoute} from 'vue-router'

export default{
    name:'ProfileComponent',
    data()
    {
        return{
            profile:''
        }
    },
    mounted()
    {
        const route=useRoute();
        console.warn('route',route.params);
        this.profile=route.params.name;
    }
}

</script>


<style>

h1{
    color:yellow
}



</style>
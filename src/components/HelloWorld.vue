<template>
<childComponent getUser="getUser"></childComponent>
</template>

<script>
import childComponent from './childComponent.vue'

export default {
    name: 'HelloWorld',

    methods: {
        getUser(userName) {
           console.warn(userName)
        }
    },
    components: {
        childComponent
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

</style>

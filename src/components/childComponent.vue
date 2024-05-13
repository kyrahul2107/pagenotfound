<template>
    <h1>Passing data from child to parent</h1>
    <button @click="sendUser">Click me</button>
</template>

<script>
export default {
    name: 'childComponent',

    data() {
        return {
            userName: "Hello"
        }
    },
    props:{
        getUser:Function

    },

    methods: {
        sendUser() {
            this.$emit('getUser', this.userName);
        }
    }
}
</script>

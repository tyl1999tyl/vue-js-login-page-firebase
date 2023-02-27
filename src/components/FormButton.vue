<template>
    <button @click="handleClick">{{ label }}</button>
</template>

<script>

export default {
    props: ["label", "buttonClicked"],
    methods: {
        handleClick() {
            this.$emit("buttonClicked")
        }
    }
}
</script>

<style scoped>
button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px;
}

button:hover {
    background-color: #3e8e41;
}
</style>
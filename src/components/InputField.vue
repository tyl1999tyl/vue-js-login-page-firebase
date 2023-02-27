<template>
    <label>{{ label }}</label>
    <input :type="inputType" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <br>
</template>

<script>

export default {
    props: ["label", "inputType", "modelValue"]
}
</script>

<style scoped>
label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
}

input {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-bottom: 20px;
    text-align: center;
}
</style>
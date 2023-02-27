<template>
    <div class="alert" :class="{error:isError}" v-if="isShown">
        <span class="closebtn" @click="$emit('clearMessage')">&times;</span>
        <strong>{{ message }}</strong> 
    </div>
</template>

<script>

export default {
    props: ["isShown", "message", "clearMessage", "isError"],
}
</script>

<style>
.alert {
    padding: 20px;
    background-color: #9afc38;
    color: white;
}

.error {
    background-color: #f44336;
}

.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.closebtn:hover {
    color: black;
}
</style>

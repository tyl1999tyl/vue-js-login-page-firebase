<template>
  <ResultDialog :isShown="msgShown" :message="msg" @clearMessage="clearMessage" :isError="isErr" />
  <h2>ABC Shop</h2>
  <InputField label="Email" v-model="email" />
  <InputField label="Password" inputType="password" v-model="password" />
  <FormButton label="Sign In" @buttonClicked="signIn" />
  <FormButton label="Sign Up" @buttonClicked="signUp" />
</template>

<script>
import { auth } from './firebase.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import InputField from './components/InputField.vue';
import FormButton from './components/FormButton.vue';
import ResultDialog from './components/ResultDialog.vue';

export default {
  name: "App",
  data() {
    return {
      email: "",
      password: "",
      msgShown: false,
      msg: "",
      isErr: false
    };
  },
  methods: {
    async signIn() {
      console.log("sign in");
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((credential) => this.showMessage(credential.user.email + " signs in successfully!"))
        .catch((ex) => this.showMessage(ex.message, true));
    },
    async signUp() {
      console.log("sign up");
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((credential) => this.showMessage(credential.user.email + " signs up successfully!"))
        .catch((ex) => this.showMessage(ex.message, true));
    },
    showMessage(msg, isErr = false) {
      this.msgShown = true;
      this.msg = msg;
      this.isErr = isErr;
    },
    clearMessage() {
      this.msgShown = false;
      this.msg = "";
      this.isErr = false;
    }
  },
  components: { InputField, FormButton, ResultDialog }
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

h2 {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #039e06;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>

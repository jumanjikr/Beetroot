<template>
  <div class="mainer">
    <input type="text" v-model.lazy="num" />
    <button v-on:click="num--">-</button>
    <p>{{num}}</p>
    <button v-on:click="num++">+</button>
  </div>
</template>

<script>
export default {
  props: ["num"],
  data() {
    return {};
  }
};
</script>
<style lang="scss">
body {
  background-color: rgba(128, 128, 128, 0.411);
  font-family: "Montserrat", sans-serif;
}

button {
  padding: 5px 25px;
  background-color: #eb6e4b;
  border-radius: 16pt;
  border: 1px solid #eb6e4b;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 20px;
  &:active {
    outline: 0;
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }
  position: relative;
  text-transform: uppercase;

  font-size: 40px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 900;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25), 0 2px 5px rgba(0, 0, 0, 0.22);
  transition-property: all;
  transition-duration: 0.5s;
  &:hover {
    top: 2px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25), 0 15px 25px rgba(0, 0, 0, 0.22);
  }
}
input {
  padding: 20px 20px;
  margin: 0 0 40px 0;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  display: inline-block;
  width: auto;
  vertical-align: middle;
  border-color: #e96e50;

  font-weight: 700;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  &:focus {
    border-color: #66afe9;
    font-weight: 400;
    outline: 0;
    animation: heartBeat 1s ease;
    color: blue;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.22);
  }
  text-align: center;
  text-transform: uppercase;
  &::-ms-value {
    text-align: center;
  }
}

.container {
  max-width: 600px;
  height: 100%;
  margin: 25px auto;
  padding: 100px 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  background-color: #ffffff;
  border-radius: 20px;
  transition: box-shadow 1s 0.3s ease;
  &:hover {
    box-shadow: 0 10px 100px rgba(0, 0, 0, 0.25),
      0 10px 100px rgba(0, 0, 0, 0.22);
  }
  .header {
    text-align: center;
    font-size: 28px;
    font-weight: 900;
    position: relative;
    top: -50px;
    text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
    animation: rubberBand 2s ease;
    &:hover {
      animation: shakeX 2s ease;
    }
  }
  span {
    padding: 50px;
    line-height: 1.6;
    text-align: justify;
    font-size: 18px;
    font-weight: 700;
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.mainer {
  width: 300px;

  padding: 15px;
  text-align: center;
}

p {
  display: inline-block;
  width: 100px;
  font-size: 40px;
  font-weight: 900;
}
</style>
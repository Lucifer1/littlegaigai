<template>
  <div class="wrapper">
    <div class="content">
      <span id="a">欢</span>
      <span id="e">乐</span>
      <span id="i">的</span>
      <span id="o">小</span>
      <span id="u">盖</span>
      <span id="p">盖12</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHome'
}
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
}

.content {
  width: 100vw;
  background: none;
  color: #999;
  font-family: 'Dancing Script', 'Warnes', cursive;
  font-size: 100px;
  letter-spacing: -26px;
  cursor: pointer;
  text-align: center;
  position: absolute;
  top: 20%;
}

.content span {
  animation: flicker 3s linear infinite;
  padding: 0 10px;
}

.content #a {
  animation-delay: .2s;
}

.content #e {
  animation-delay: .5s;
}

.content #i {
  animation-delay: .8s;
}

.content #o {
  animation-delay: 1.1s;
}

.content #u {
  animation-delay: 1.2s;
}

.content #p {
  animation-delay: 1.3s;
}

@keyframes flicker {
  0% {
    color: #333;
  }
  2%, 7%, 12%, 15%, 50% {
    color: #fff;
    text-shadow:
      0px 0px 5px #42fff6,
      0px 0px 10px #42fff6,
      0px 0px 20px #42fff6,
      0px 0px 50px #42fff6;

  }

  5%, 10% {
    color: #333;
    text-shadow: none;
  }
}

</style>

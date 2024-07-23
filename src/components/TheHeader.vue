<template>
  <header id="home" class="hello">
    <h1>
      <span class="animate">H</span>
      <span class="animate animate-2">e</span>
      <span class="animate animate-3">l</span>
      <span class="animate animate-4">l</span>
      <span class="animate animate-5">o</span>
      <span class="animate animate-6">.</span>
      <div class="name">
        <vue-typed-js
          :strings="['I am Linda,']"
          :showCursor="false"
          :startDelay="1400"
          :typeSpeed="100"
        >
          <span class="typing"></span>
        </vue-typed-js>
        <vue-typed-js
          :strings="['a frontend']"
          :showCursor="false"
          :startDelay="2700"
          :typeSpeed="100"
        >
          <span class="typing"></span>
        </vue-typed-js>
        <vue-typed-js
          :strings="['developer.']"
          :showCursor="false"
          :startDelay="3900"
          :typeSpeed="100"
        >
          <span class="typing job-name"></span>
        </vue-typed-js>
      </div>
    </h1>
    <div class="scroll-down"></div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hello,
.hello .name {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hello {
  height: 100vh;
  background-image: url(../assets/paper-black.jpg);
  background-position: center;
  background-size: cover;
  padding: 0.5rem;

  h1 {
    font-size: 5rem;
    font-weight: 900;
    color: rgb(255, 255, 255);
    text-transform: uppercase;

    .animate {
      animation: fading-letters 8s ease 1.8s infinite;
    }
    .animate-2 {
      animation: fading-letters 8s ease 2.5s infinite;
    }
    .animate-3 {
      animation: fading-letters 8s ease 3.2s infinite;
    }
    .animate-4 {
      animation: fading-letters 8s ease 3.9s infinite;
    }
    .animate-5 {
      animation: fading-letters 8s ease 4.6s infinite;
    }
    .animate-6 {
      animation: fading-letters 8s ease 5.3s infinite;
    }

    .name {
      align-items: center;
      flex-direction: column;
      font-size: 2.5rem;
      font-weight: 700;
      text-transform: none;
      line-height: 1.1;
    }

    .job-name {
      color: #0BA79F;
    }
  }

  @keyframes fading-letters {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.05;
    }
    100% {
      opacity: 1;
    }
  }
  .scroll-down {
    position: absolute;
    left: 50%;
    bottom: 20px;
    display: block;
    text-align: center;
    font-size: 20px;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0;
    width: 15px;
    height: 15px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    z-index: 9;
    left: 50%;
    -webkit-transform: translate(-50%, 0%) rotate(45deg);
    -moz-transform: translate(-50%, 0%) rotate(45deg);
    transform: translate(-50%, 0%) rotate(45deg);
    -webkit-animation: fade_move_down 4s ease-in-out 3.5s infinite;
    -moz-animation: fade_move_down 4s ease-in-out 3.5s infinite;
    animation: fade_move_down 4s ease-in-out 3.5s infinite;
  }

  /*animated scroll arrow animation*/
  @-webkit-keyframes fade_move_down {
    0% {
      -webkit-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @-moz-keyframes fade_move_down {
    0% {
      -moz-transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
  @keyframes fade_move_down {
    0% {
      transform: translate(0, -10px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 10px) rotate(45deg);
      opacity: 0;
    }
  }
}

@media (min-width: 767px) {
  .hello h1 {
    font-size: 5.3rem;
  }
}

@media (min-width: 1020px) {
  .hello h1 {
    font-size: 6.3rem;
  }
}

@media (min-width: 1300px) {
  .hello h1 {
    font-size: 9rem;

    .name {
      font-size: 3.4rem;
    }
  }
}

@media (min-width: 1600px) {
  .hello h1 {
    font-size: 9rem;
  }
}
</style>

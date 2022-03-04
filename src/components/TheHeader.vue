<template>
  <header id="home">
    <div class="hello">
      <h1>
        <span class="animate">H</span>
        <span class="animate animate-2">e</span>
        <span class="animate animate-3">l</span>
        <span class="animate animate-4">l</span>
        <span class="animate animate-5">o</span>
        <span class="animate animate-6">.</span>
      </h1>
    </div>
    <div class="intro">
      <div class="heading">
        <p>My name is</p>
        <h2>Linda Markó</h2>
        <vue-typed-js
          :strings="['JavaScript']"
          :showCursor="false"
          :startDelay="3000"
          :typeSpeed="150"
          :backSpeed="60"
          :backDelay="5000"
          ><p>
            &#38; I am a
            <span class="typing"></span> developer.
          </p></vue-typed-js
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
header {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  .hello,
  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hello {
    background-image: url(../assets/paper-black.jpg);
    background-position: center;
    background-size: cover;
    padding: 0.5rem;
    h1 {
      font-size: 4.5rem;
      font-weight: 900;
      margin-top: 2.8rem;
      color: rgb(255, 255, 255);
      text-transform: uppercase;
    }
  }
  h1 .animate {
    opacity: 1;
  }
  .animate {
    animation: fading-letters 6s ease 0.3s 3;
  }
  .animate-2 {
    animation: fading-letters 6s ease 1s 3;
  }
  .animate-3 {
    animation: fading-letters 6s ease 1.7s 3;
  }
  .animate-4 {
    animation: fading-letters 6s ease 2.2s 3;
  }
  .animate-5 {
    animation: fading-letters 6s ease 2.9s 3;
  }
  .animate-6 {
    animation: fading-letters 6s ease 3.5s 3;
  }
  @keyframes fading-letters {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .intro {
    background-color: rgb(8, 8, 8);
    color: whitesmoke;
    padding: 1rem;
    .heading h2 {
      font-size: 1.5rem;
    }
    .heading p {
      font-size: 1.3rem;
    }
    .heading span {
      color: #00f7c3;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
}
@media (min-width: 767px) {
  header {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    .hello h1 {
      font-size: 5.3rem;
      margin-top: 2.3rem;
    }
    .intro {
      padding: 0.5rem;
      line-height: 1.4;
    }
    .intro .heading h2 {
      font-size: 1.6rem;
    }
    .intro .heading p,
    .intro .heading span {
      font-size: 1.5rem;
    }
  }
}
@media (min-width: 1020px) {
  header {
    .hello h1 {
      font-size: 6.3rem;
    }
  }
}
@media (min-width: 1300px) {
  header {
    .intro .heading h2 {
      font-size: 1.8rem;
    }
  }
}
</style>

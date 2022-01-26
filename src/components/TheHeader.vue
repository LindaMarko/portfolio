<template>
  <header id="home">
    <div class="hello">
      <h1>Hello.</h1>
    </div>
    <div class="intro">
      <div class="heading">
        <p>My name is</p>
        <h2>Linda Markó</h2>
        <p>&#38; I am a <span>JavaScript</span> developer.</p>
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
    background-color: whitesmoke;
    background-image: url(../assets/textil3.jpg);
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
    }
    .intro {
      padding: 0.5rem;
      line-height: 1.4;
    }
    .intro .heading h2 {
      font-size: 1.6rem;
    }
    .intro .heading p {
      font-size: 1.5rem;
    }
    .intro .heading span {
      font-size: 1.5rem;
    }
  }
}
@media (min-width: 830px) {
  header .hello h1 {
    font-size: 5.8rem;
  }
}
@media (min-width: 1020px) {
  header {
    .hello h1 {
      font-size: 6.5rem;
    }

    .intro .heading h2 {
      font-size: 2rem;
    }
    .intro .heading p,
    .intro .heading span {
      font-size: 1.8rem;
    }
  }
}
@media (min-width: 1300px) {
  header {
    .intro .heading h2 {
      font-size: 1.8rem;
    }
    .intro .heading p,
    .intro .heading span {
      font-size: 1.5rem;
    }
  }
}
</style>

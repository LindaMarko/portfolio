<template>
  <header>
    <div class="hello">
      <h1>Hello.</h1>
    </div>
    <div class="intro">
      <div class="heading">
        <p>My name is</p>
        <h2>Linda Markó</h2>
        <p>&#38; I am a JavaScript <span>developer.</span></p>
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
  .intro {
    background-color: rgb(8, 8, 8);
    color: whitesmoke;
    padding: 1rem;

    .heading p {
      font-size: 1.2rem;
    }
    .heading span {
      color: rgba(5, 154, 220, 0.93);
      font-size: 1.2rem;
    }
  }
  .hello {
    background-color: whitesmoke;

    h1 {
      font-size: 5rem;
      font-weight: 900;
      margin-top: 2.8rem;
      color: rgba(0, 247, 195, 0.62);
      text-transform: uppercase;
    }
  }
}
@media (min-width: 767px) {
  header {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
}
</style>

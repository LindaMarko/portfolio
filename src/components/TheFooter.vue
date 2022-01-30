<template>
  <footer id="contact">
    <div class="contact-info">
      <div class="heading">
        <h2>C<span>o</span>ntact</h2>
        <p>
          I am currently looking for internship for fall 2022. Feel free to
          contact me.
        </p>
        <p class="email"><strong>Email:</strong> lindamarko.dev@gmail.com</p>
        <div class="links">
          <a href="https://www.linkedin.com/in/linda-marko/" target="_blank"
            ><img src="../assets/logos/linkedin-logo.png" alt="LinkedIn Logo"
          /></a>
          <a href="https://github.com/LindaMarko" target="_blank"
            ><img src="../assets/logos/github-logo-black.png" alt="GitHub Logo"
          /></a>
        </div>
      </div>
    </div>
    <div class="see-you">
      <h1>See you.</h1>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
footer {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr;

  .see-you,
  .contact-info,
  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .see-you {
    background-image: url(../assets/keyboard.jpg);
    background-position: center;
    background-size: cover;
    padding: 0 3rem;

    h1 {
      font-size: 4.5rem;
      font-weight: 900;
      margin-top: 2.8rem;
      color: whitesmoke;
      text-transform: uppercase;
      line-height: 1.2;
    }
  }

  .contact-info {
    background-color: #f5f5f5;
    color: rgb(8, 8, 8);
    text-align: center;
    .heading {
      flex-direction: column;
      padding: 1rem;
      max-width: 325px;
    }

    .heading h2 {
      font-size: 2.5rem;
      margin-top: 4rem;
      margin-bottom: 2rem;
      text-transform: lowercase;
    }
    .heading p {
      font-size: 1rem;
    }
    .heading span {
      color: #00f7c3;
    }
    .heading .email {
      margin-top: 0.8rem;
    }
    .heading .links {
      margin: 2rem 0 4rem;

      a {
        margin: 0 0.3em;
      }
    }
  }
}
@media (min-width: 767px) {
  footer {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;

    .see-you h1 {
      font-size: 5.3rem;
      margin-top: 0;
    }
    .contact-info {
      line-height: 1.4;
    }
    .contact-info .heading h2 {
      font-size: 3rem;
      margin-top: 2rem;
    }
    .contact-info .heading p {
      font-size: 1rem;
    }
  }
}
@media (min-width: 1020px) {
  footer {
    .see-you {
      padding: 0 6rem;
    }
    .see-you h1 {
      font-size: 6.3rem;
    }
    .contact-info .heading h2 {
      font-size: 3rem;
    }
  }
}
@media (min-width: 1300px) {
  footer {
    .see-you {
      padding: 0 10rem;
    }
    .contact-info .heading {
      max-width: 350px;
    }
    .contact-info .heading h2 {
      font-size: 3rem;
    }
    .contact-info .heading p {
      font-size: 1.1rem;
    }
  }
}
</style>

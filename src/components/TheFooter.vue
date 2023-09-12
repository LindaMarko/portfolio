<template>
  <footer id="contact">
    <div class="contact-info">
      <div class="heading">
        <h2>C<span class="letterO">o</span>ntact</h2>
        <p class="internship">
          For more information, please don't hesitate to reach out to me.
        </p>
        <vue-typed-js
          :strings="['lindamarko.dev@gmail.com']"
          :showCursor="false"
          :startDelay="900"
          :typeSpeed="120"
          :backSpeed="40"
          :backDelay="5000"
          :loop="true"
          ><p class="email">
            <strong>Email: </strong>
            <span class="typing"></span></p
        ></vue-typed-js>
        <div class="links">
          <a href="https://www.linkedin.com/in/linda-marko/" target="_blank"
            ><img src="../assets/logos/linkedin-logo.png" alt="LinkedIn Logo"
          /></a>
          <a href="https://github.com/LindaMarko" target="_blank"
            ><img src="../assets/logos/github-logo-black.png" alt="GitHub Logo"
          /></a>
        </div>
      </div>
      <div class="see-you">
        <h1>
          <span class="animate">S</span>
          <span class="animate animate-2">e</span>
          <span class="animate animate-3">e </span>
          <span class="animate animate-4">y</span>
          <span class="animate animate-5">o</span>
          <span class="animate animate-6">u</span>
          <span class="animate animate-7">.</span>
        </h1>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
footer {
  background-image: url(../assets/barbie-pink.jpeg);
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .contact-info,
  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .see-you {
    padding: 0 3rem;

    h1 {
      font-size: 5.5rem;
      font-weight: 900;
      color: black;
      text-transform: uppercase;
      line-height: 1.2;
    }
  }
  h1 .animate {
    opacity: 1;
  }
  .animate {
    animation: fading-letters 8s ease 4.5s infinite;
  }
  .animate-2 {
    animation: fading-letters 8s ease 3.8s infinite;
  }
  .animate-3 {
    animation: fading-letters 8s ease 3.1s infinite;
  }
  .animate-4 {
    animation: fading-letters 8s ease 2.4s infinite;
  }
  .animate-5 {
    animation: fading-letters 8s ease 1.7s infinite;
  }
  .animate-6 {
    animation: fading-letters 8s ease 1s infinite;
  }
  .animate-7 {
    animation: fading-letters 8s ease 0.3s infinite;
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
  .contact-info {
    color: black;
    text-align: center;
    .heading {
      flex-direction: column;
      padding: 0;
      max-width: 340px;
    }

    .heading h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
    .heading p {
      color: black;
      font-size: 1rem;
    }
    .heading .internship {
      padding: 0 2rem;
    }
    .heading .letterO {
      color: black;
    }
    .heading .email {
      margin-top: 0.8rem;
    }
    .heading .links {
      margin: 2rem 0 6rem;

      a {
        margin: 0 0.3em;
      }
    }
  }
}
@media (min-width: 767px) {
  footer {
    .see-you h1 {
      font-size: 6rem;
      margin-top: 0;
    }
    .contact-info {
      line-height: 1.4;

      .heading {
        max-width: unset;
      }

      .heading h2 {
        font-size: 3rem;
        margin-top: 0;
      }

      .contact-info .heading p {
        font-size: 1rem;
      }
    }
  }
}
@media (min-width: 1020px) {
  footer {
    .see-you h1 {
      font-size: 6.3rem;
    }
    .contact-info {
      .heading h2 {
        font-size: 3rem;
      }

      .heading .internship {
        padding: 0;
      }
    }
  }
}
@media (min-width: 1300px) {
  footer {
    .see-you h1 {
      font-size: 9rem;
    }
    .contact-info .heading h2 {
      font-size: 3.5rem;
    }
    .contact-info .heading p {
      font-size: 1.1rem;
    }
  }
}
@media (min-width: 1600px) {
  footer {
    .see-you h1 {
      font-size: 8.5rem;
    }
  }
}
</style>

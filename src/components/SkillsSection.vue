<template>
  <section id="skills">
    <h2>Ski<span>ll</span>s</h2>
    <article>
      <ul class="skills-container">
        <li
          v-for="skill in skills"
          :key="skill.name"
          data-aos="fade-down"
          data-aos-easing="ease"
          data-aos-duration="3000"
        >
          <div class="logo-con">
            <img :src="skill.logoPath" :alt="skill.altText" />
            <p>{{ skill.name }}</p>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  props: ["skills"],
}
</script>

<style scoped lang="scss">
#skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 3rem 10rem;
  background-color: rgb(8, 8, 8);
  color: whitesmoke;

  h2 {
    font-size: 2.5rem;

    span {
      color: #00f7c3;
    }
  }
  .skills-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 2.5rem;
    margin-top: 6rem;
    .logo-con {
      text-align: center;

      img {
        width: 55px;
        height: 55px;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
}
@media (min-width: 767px) {
  #skills {
    padding: 10rem 3rem 18rem;
    h2 {
      font-size: 3rem;
    }
    .skills-container {
      grid-template-columns: repeat(4, 1fr);
      .logo-con {
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
}
@media (min-width: 1020px) {
  #skills {
    h2 {
      font-size: 3.5rem;
    }
    padding: 9rem 3rem 23rem;

    .skills-container {
      row-gap: 4rem;
    }
  }
}
</style>

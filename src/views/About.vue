<template>
  <div class="about">
    <div class="about-content">
      <div class="about-me">
        <h3>ABOUT ME</h3>
        <p>Front-end web developer and designer. Interested in immerging front-end web development technologies and always seeking new knowledge.</p>
        <br>
        <p>Currently working as an apprentice web developer at Big Blue Door, London.</p>
      </div>
      <div class="about-skills-contact">
        <div class="about-skills">
          <h5>DEVELOPMENT</h5>
          <ul>
            <li>HTML, CSS, SASS, Flexbox, CSS Grid</li>
            <li>JavaScript</li>
            <li>JavaScript Frameworks: Vuejs & React</li>
            <li>Drupal 8</li>
            <li>Firebase</li>
            <li>PHP</li>
          </ul>
          <h5>DESIGN</h5>
          <ul>
            <li>Adobe Creative Suite</li>
            <li>Sketch, Adobe XD, Figma</li>
            <li>Web design</li>
            <li>UI/UX design</li>
            <li>Editorial design</li>
          </ul>
        </div>
        <div class="about-contact">
          <h5>CONTACT</h5>
          <p>Feel free to contact me if you are interested in working together, talking about code/tech/music, or whatever.</p>
          <ul>
            <li class="contact-email"><a href="mailto:mlemon.dev@gmail.com">mlemon.dev@gmail.com</a></li>
            <li class="contact-github"><a href="https://www.github.com/mileslemon" target="_blank">github.com/mileslemon</a></li>
            <li class="contact-linkedin"><a href="https://www.linkedin.com/in/mileslemon/" target="_blank">linkedin.com/in/mileslemon</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeTitle: 'About.'
    };
  },
  created() {
    this.$emit("fetchRoute", this.routeTitle, this.$route.name);
  }
};
</script>

<style lang="scss" scoped>
.about-content {
  color: white;
  width: 100%;
  max-width: 841px;
  padding: 32px 0;
  .about-me {
    margin-bottom: 80px;
    h3 {
      margin: 0 0 32px;
      font-family: UniversLight, sans-serif;
      font-size: 0.75em;
      letter-spacing: 4px;
    }
    p {
      font-size: 1.5em;
      line-height: 1.3;
    }
  }

  .about-skills-contact {
    @include flexbox;
    @include flex-direction(column);
    @include justify-content(space-between);
    & > div {
      width: 100%;
      h5 {
        font-size: 0.75em;
        letter-spacing: 4px;
        font-family: UniversBold, sans-serif;
        font-weight: bold;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          padding: 0 0 8px;
        }
      }
    }
    .about-skills {
      margin-bottom: 56px;
    }
    .about-contact {
      p {
        line-height: 1.35;
        margin-bottom: 32px;
      }
      li {
        padding-bottom: 24px;
        @include flexbox;
        a {
          color: white;
          line-height: 1.4;
          text-decoration: none;
          @include transition(all 0.2s ease-in-out);
          &:hover {
            background: none;
            opacity: 0.6;
          }
        }
        &:before {
          content: '';
          display: block;
          width: 20px;
          height: 20px;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: left center;
          margin-right: 16px;
        }
      }
      .contact-email {
        &:before {
          background-image: url('../assets/images/email-icon.svg');
        }
      }
      .contact-github {
        &:before {
          background-image: url('../assets/images/github-icon.svg');
        }
      }
      .contact-linkedin {
        &:before {
          background-image: url('../assets/images/linkedin-icon.svg');
        }
      }
    }
  }
}

@include breakpoint(560px) {
  .about-content {
    .about-skills-contact {
      @include flex-direction(row);
      & > div {
        width: calc(50% - 24px);
      }
    }
  }
}

@include breakpoint($desk) {
  .about-content {
    margin-left: 159px;
    padding: 32px;
    width: calc(100% - 495px);
    .about-skills-contact {
      @include flex-direction(column);
      & > div {
        width: 100%;
      }
    }
  }
}

@include breakpoint(1200px) {
  .about-content {
    .about-skills-contact {
      @include flex-direction(row);
      & > div {
        width: calc(50% - 24px);
      }
    }
  }
}
</style>

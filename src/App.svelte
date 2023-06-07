<script>
  import github from './assets/github.svg';
  import fb from './assets/facebook.svg';
  import discord from './assets/discord.svg';
  import youtube from './assets/youtube.svg';
  import twitter from './assets/twitter.svg';
  import reddit from './assets/reddit.svg';
  import mail from './assets/mail.svg';
  import blogger from './assets/blogger.svg';

  import Projects from './assets/projects.svelte';

  const socialLink = [
    {
      link: "https://github.com/p3nguin-kun", icon: github
    },
    {
      link: "https://www.facebook.com/kh4nhhi3n/", icon: fb
    },
    {
      link: "https://discord.gg/fxeSRbVfkK", icon: discord
    },
    {
      link: "https://www.youtube.com/@p3nguin-kun", icon: youtube
    },
    {
      link: "https://twitter.com/p3nguin_kun", icon: twitter
    },
    {
      link: "https://reddit.com/u/kh4nhhi3n", icon: reddit
    },
    {
      link: "mailto:kh4nhhi3n@hotmail.com", icon: mail
    },
    {
      link: "https://p3nguinkun.blogspot.com", icon: blogger
    }
  ]

</script>

<main>

  <div id="main">

    <div id="nav" class="fixed z-50 w-28 min-w-24 h-12 rounded-xl items-center justify-center flex flex-row shadow-xl bg-teal-400 dark:bg-teal-700 m-9">
      <a href="/#" class="m-2 cursor-default">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house w-8" viewBox="0 0 16 16"> 
        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/> <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> 
        </svg> 
      </a>
      <a href="/#projects" class="m-2 cursor-default">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house w-8" viewBox="0 0 16 16">
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> 
      </svg>
      <a href="https://p3nguin-kun.github.io/about-me">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bi bi-house w-8">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
      </svg>
      </a>
    </div>

    <div class="grid xl:grid-cols-2 gap-10 aibietj">
      <div class="flex justify-center text-gray-900 font-medium dark:text-gray-100 h-screen">
        <span id="name" class="text-7xl absolute select-none">
        p3nguin-kun         
        </span>

        <span id="icon" class="absolute shadow-2xl p-2 rounded-lg flex flex-row">
         {#each socialLink as s}
            <a href="{s.link}">
              <img src={s.icon} alt="" class="w-10 h-10 m-4">
            </a>
          {/each}
        </span>

        <span class="text-center absolute xl:invisible top-1/2 m-4 dark:text-teal-100 text-emerald-900">
          Hi there!
          My name is Khanh Hien, but you can call me p3nguin-kun or kh4nhhi3n
          I'm a student, a programmer, a rhythm games player, a tech enthusiast and a FOSS Lover. I've loved computers and technology since I was a kid. I like to participate in FOSS projects that I'm interested in.<br><br>
        </span>
      </div>
      <div class="text-center justify-center invisible xl:visible flex flex-col dark:text-teal-100 text-emerald-900">
        <span>Hi there! <br>
          My name is Khanh Hien, but you can call me p3nguin-kun or kh4nhhi3n <br>
          I'm a student, a programmer, a rhythm games player, a tech enthusiast and a FOSS Lover. I've loved computers and technology since I was a kid. I like to participate in FOSS projects that I'm interested in.<br><br>
        </span>
      </div>
    </div>
  </div>

  <Projects/>
</main>

<style>
  main {
    font-family: 'Fira Code', monospace;
  }

  #name {
    top: 25%;
  }

  #icon {
    top: 35%;
  }
  
  @media (min-width: 1280px) {
  #name {
    top: 40%;
  }
  #icon {
    top: 50%;
  }
  }

  #icon>a>img {
    transition: all .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @media (prefers-color-scheme: dark) { 
    #icon > a > img {
      filter: invert(42%) sepia(94%) saturate(1274%) hue-rotate(161deg) brightness(95%) contrast(101%);
    }
  }

  #icon > a >img:hover {
    filter: invert(11%) sepia(87%) saturate(7410%) hue-rotate(3deg) brightness(111%) contrast(101%);
    transform: scale(1.15);

  }
</style>

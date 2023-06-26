<script>
  import github from './assets/github.svg';
  import discord from './assets/discord.svg';
  import youtube from './assets/youtube.svg';
  import reddit from './assets/reddit.svg';
  import mail from './assets/mail.svg';
  import blogger from './assets/blogger.svg';
  import anilist from './assets/anilist.svg';
  import osu from './assets/osu.svg';
  import codeberg from './assets/codeberg.svg';

  import Projects from './assets/projects.svelte';

  const socialLink = [
    {
      link: "https://codeberg.org/p3nguin-kun", icon: codeberg
    },
    {
      link: "https://github.com/p3nguin-kun", icon: github
    },
    {
      link: "https://discord.gg/fxeSRbVfkK", icon: discord
    },
    {
      link: "https://www.youtube.com/@miyamura_01", icon: youtube
    },
    {
      link: "https://reddit.com/u/kh4nhhi3n", icon: reddit
    },
    {
      link: "mailto:p3nguinkun@proton.me", icon: mail
    },
    {
      link: "https://p3nguinkun.blogspot.com", icon: blogger
    },
    {
      link: "https://anilist.co/user/p3nguinkun/", icon: anilist
    },
    {
      link: "https://osu.ppy.sh/users/31895746", icon: osu
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
    </div>

    <div class="grid xl:grid-cols-3 gap-10 aibietj">
      <div class="flex justify-center text-gray-900 font-medium dark:text-gray-100 h-screen">
        <span id="name" class="text-5xl absolute select-none">
        miyamura01         
        </span>

        <span id="icon" class="absolute shadow-2xl p-2 rounded-lg flex flex-row">
         {#each socialLink as s}
            <a href="{s.link}">
              <img src={s.icon} alt="" class="w-7 h-7 m-1.5">
            </a>
          {/each}
        </span>

        <span class="text-center absolute xl:invisible top-1/2 m-4 dark:text-teal-100 text-emerald-900">
          Hi there!
          My name is p3nguin-kun
          I'm a student, a programmer, a rhythm games player, a tech enthusiast and a FOSS Lover. I've loved computers and technology since I was a kid. I like to participate in FOSS projects that I'm interested in.<br><br>
          <br><iframe width="95%" height="95%" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLAwck3ZmnNt2_uPbcSsaTu8qXZ8bAFxYV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>




          <br>
        </span>
      </div>
      <div class="text-center justify-center invisible xl:visible flex flex-col dark:text-teal-100 text-emerald-900">
        <span>Hi there! <br>
          My name is p3nguin-kun <br>
          I'm a student, a programmer, a rhythm games player, a tech enthusiast and a FOSS Lover. I've loved computers and technology since I was a kid. I like to participate in FOSS projects that I'm interested in.<br><br>
        </span>
      </div>
      <div id="music" class="justify-center flex flex-col">   
        <span>
        <br><iframe width="95%" height="95%" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLAwck3ZmnNt2_uPbcSsaTu8qXZ8bAFxYV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>
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

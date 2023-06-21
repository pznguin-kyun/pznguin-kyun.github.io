<script>
    const projects = [
        {
            name: "Personal website",
            link: "https://p3nguin-kun.github.io",
            desc: "My personal website"
        },
        {
            name: "penguinRice",
            link: "https://codeberg.org/p3nguin-kun/penguinRice",
            desc: "Auto Rice script after installation (for Arch Linux and Arch-based distro)."
        },
        {
            name: "penguinVim",
            link: "https://codeberg.org/p3nguin-kun/penguinVim",
            desc: "My NeoVim config - Turn NeoVim into an IDE."
        },
        {
            name: "penguinFox",
            link: "https://codeberg.org/p3nguin-kun/penguinFox",
            desc: "Firefox with better UI, better privacy and security."
        },
        {
            name: "lmaofetch",
            link: "https://codeberg.org/p3nguin-kun/lmaofetch",
            desc: "Simple system fetch for Linux, written in Bash"
        },
        {
            name: "Gruvbox wallpapers",
            link: "https://codeberg.org/p3nguin-kun/gruvbox-wallpapers",
            desc: "My Gruvbox wallpapers collection."
        },
        {
            name: "Gruvbox on everything",
            link: "https://codeberg.org/p3nguin-kun/gruvbox-on-everything/",
            desc: "List of gruvbox config for apps, websites."
        },
        {
            name: "lightdm-evo-gruvbox",
            link: "https://github.com/p3nguin-kun/lightdm-evo-gruvbox",
            desc: "A modern theme for LightDM WebKit2 with Gruvbox colorscheme."
        },
        {
            name: "Lite websites",
            link: "https://codeberg.org/p3nguin-kun/lite-websites",
            desc: "List of lite websites for 2G/3G or poor internet connection."
        },
        {
            name: "Bad Apple Python",
            link: "https://codeberg.org/p3nguin-kun/badapple-python",
            desc: "Bad Apple in your terminal with Python"
        },  
    ]
</script>

<projects id="projects" class="bg-gray-800 dark:bg-teal-600 h-screen w-screen absolute">
    <div id="container" class="grid grid-cols-2 grid-rows-5" style="padding-top: 5%">
        {#each projects as thing}
            <span class='m-2 rounded bg-emerald-900 text-teal-300 p-2 text-center justify-center'> <h2 class="text-teal-500"><a href={thing.link}>{thing.name}</a></h2> <h5>{thing.desc}</h5> </span>
        {/each}
    </div>
</projects>

<style>

</style>

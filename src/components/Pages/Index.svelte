<script>
  import NowPlaying from "@/components/Pages/NowPlaying.svelte";
  import TheHeader from "@/components/Organisms/TheHeader.svelte";
  import Tab from "@/components/Molecules/Tab.svelte";
  let currentTab = 0;
</script>

<TheHeader />
<Tab {currentTab} />
<NowPlaying />

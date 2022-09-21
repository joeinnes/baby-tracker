<script lang="ts">
	import { enhance } from '$app/forms';
  import { colours } from '$lib/stores/colours';
  const actions = ['sleep', 'feed', 'nappy', 'bath', 'walk', 'physio']
</script>

<div class="py-4">
  <form method="POST" action="/event?/add" use:enhance class="buttons">
    {#each actions as action}
      <button type="submit" name="action_type" value={action} style="background-color: hsl({$colours[action].h}, {$colours[action].s*100}%, 75%);"><img src="/icons/{action}.svg" alt="{action}" /></button>
    {/each}
  </form>
</div>

<style>
  button {
    @apply rounded-full shadow hover:opacity-75 transition-opacity;
  }

  button img {
    @apply w-16 h-16 p-3;
  }

  .buttons {
    @apply flex justify-around;
  }
</style>
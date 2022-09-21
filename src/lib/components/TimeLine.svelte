<script>
  import { colours } from '$lib/stores/colours';
  import { activities } from '$lib/stores/activities';
  import { format, formatDistanceStrict } from 'date-fns';
  export let times = [];
</script>

{#each times.reverse() as time, i}
  <article style="background-color: hsl({$colours[time.activity].h}, {$colours[time.activity].s * 100}%, 95%); color: hsl({$colours[time.activity].h}, {$colours[time.activity].s * 100}%, 15%)">
  <div class="flex-1">
    <h2 class="font-bold text-xl">{$activities[time.activity].title}</h2>
    <p>{format(time.start, 'HH:mm')}{#if time.end} - {format(time.end, 'HH:mm')}{/if}</p>
    {#if time.end}
    <p class="text-sm" style="color: hsl({$colours[time.activity].h}, 10%, 55%)">{formatDistanceStrict(time.end ,time.start)}</p>
    {/if}
    </div>
    <div class="text-center">
      
    </div>
  </article>
{/each}

<style>
  article {
    @apply p-4 m-2 shadow rounded flex items-center;
  }
</style>
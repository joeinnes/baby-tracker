<script lang="ts">
	import DayCircle from '$lib/components/DayCircle.svelte';
	import AddEventForm from '$lib/components/AddEventForm.svelte';
	import TimeLine from '$lib/components/TimeLine.svelte';
  export let data;
	$: ({ times } = data);
</script>
<div class="relative">
	<DayCircle {times} />
</div>
<AddEventForm />
<TimeLine {times} />
<script lang="ts">
  import { colours } from '$lib/stores/colours';
  import { activities } from '$lib/stores/activities';
  import { differenceInSeconds, startOfDay, parseISO, endOfDay, format } from 'date-fns';
  const radius = 16
	let popoverContent = '';
	let mouseX = 0;
	let mouseY = 0;

	export let times = [];

  const getDayPercent = (start: Date, end?: Date) => {
    const SECS_IN_DAY = 24 * 60 * 60;
    if (!end) {
      return 100 * (differenceInSeconds(start, startOfDay(start)) / SECS_IN_DAY);
    } else {
		  return 100 * (differenceInSeconds(end, start) / SECS_IN_DAY);
    }
		
	};

  const updateActivity = (activity: string) => {
    if (!activity) console.log('mouseout')
    if (popoverContent === activity) return;
    popoverContent = activity;
  };

  const handleMouseMove = (e) => {
    if (!e.clientX || !e.clientY) return;
 		mouseX = e.clientX;
		mouseY = e.clientY;
  }

const getCoords = (time, rOffset = 0) => {
	const theta = (360 * (getDayPercent(time.start) + (time.end ? getDayPercent(time.start, time.end) : 0) / 2)) / 100
	const thetaRads = theta * (Math.PI / 180)
	const x = 20 + (radius + rOffset) * Math.sin(thetaRads)
	const y = 20 + -1 * (radius + rOffset) * Math.cos(thetaRads)
  return {
    x, y
  }
}

	$: {
    times = times.map(el => {
      el.duration = differenceInSeconds(el.end, el.start);
      if (el.end > endOfDay(el.start)) {
        el.end = endOfDay(el.start);
      }
      if (el.start < startOfDay(el.end)) {
        el.start = startOfDay(el.end);
      }
      return el;
    });
  }

</script>

<div class="wheel_container" on:mousemove={handleMouseMove} >
	<svg viewBox="0 0 40 40">
		{#each [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23] as el, i}
				{@const radius = 16}
				{@const theta = 360 * (el/24)}
				{@const thetaRads = theta * (Math.PI / 180)}
				{@const x = 20 + (radius + 1) * Math.sin(thetaRads)}
				{@const y = 20 + -1 * (radius + 1) * Math.cos(thetaRads)}
				{@const xT = 20 + (radius + 3) * Math.sin(thetaRads)}
				{@const yT = 20 + -1 * (radius + 3) * Math.cos(thetaRads)}
				<line
					x2="20"
					y2="20"
					x1={x}
					y1={y}
					stroke-width="0.2"
					stroke="hsl(0,0%,90%)"
					stroke-dashoffset={radius}
					stroke-dasharray="18 100"
					stroke-linecap="round"
				/>
				<text x={xT} y={yT} font-size={1} text-anchor="middle" dominant-baseline="middle" fill="hsl(0,0%,0%, 0.3)">{i}</text>
		{/each}
    <path
					d="M20 4
					a 16 16 0 0 1 0 32
					a 16 16 0 0 1 0 -32"
					fill="none"
					stroke-width="0.2"
					stroke="hsl(0,0%,90%)"
				></path>
		{#each times.reverse() as time, i}
			{#if time.end}
				<path
					d="M20 4
					a 16 16 0 0 1 0 32
					a 16 16 0 0 1 0 -32"
					fill="none"
					stroke="hsl({$colours[time.activity].h}, {100 * $colours[time.activity].s}%, 60%)"
					stroke-width="1"
					stroke-linecap="round"
					stroke-dashoffset={-1 * getDayPercent(time.start)}
					stroke-dasharray="{getDayPercent(time.start, time.end)} {100 -
						getDayPercent(time.start, time.end)}"
				> <animate attributeName="stroke-dashoffset"
         begin="0"
         values="0;{-1 * getDayPercent(time.start)};"
         dur="0.7s"
				 calcMode="spline"
				 fill="freeze"
				 keySplines="0.3, 0, 0.1, 1"
     /> </path>
     
			{:else}
				<line
					x2="20"
					y2="20"
					x1={getCoords(time,2).x}
					y1={getCoords(time,2).y}
					stroke-width="0.2"
					stroke="hsl({$colours[time.activity].h}, {100 * $colours[time.activity].s}%, 60%)"
					stroke-dashoffset={radius}
					stroke-dasharray="20 100"
					stroke-linecap="round"
				/>
			{/if}
			
		{/each}
    {#each times as time, i}
      <g on:mouseenter={() => updateActivity(time)} on:mouseleave={() => updateActivity('')}>
        <circle 
          fill="hsl({$colours[time.activity].h}, {100 * $colours[time.activity].s}%, 92%)" 
          stroke="hsl({$colours[time.activity].h}, {100 * $colours[time.activity].s}%, 50%)" 
          stroke-width="0.1" 
          r="1.2" 
          cx={getCoords(time).x} 
          cy={getCoords(time).y} 
        />
        <image 
          x={getCoords(time).x} 
          y={getCoords(time).y} 
          width="1.5" 
          height="1.5" 
          href="icons/{time.activity}.svg" 
          transform="translate(-0.75,-0.75)" 
        />
			</g>
      {/each}
	</svg>
	{#if popoverContent}
	  <div class="popover" style="position: absolute; top: {mouseY}px; left: {mouseX}px">
      <h3>{$activities[popoverContent.activity].title}</h3>
      <p>{format(popoverContent.start, 'HH:mm')}{#if popoverContent.end} - {format(popoverContent.end, 'HH:mm')}{/if}</p>
    </div>
	{/if}
</div>

<style>
	.popover {
    @apply absolute bg-white p-2 border-2 border-black rounded;
	}

	.wheel_container {
    @apply relative h-full w-full aspect-square max-h-[70vh];
	}

	svg {
		width: 100%;
		aspect-ratio: 1/1;
		position: absolute;
     max-height: 70vh;
	}

	g {
		cursor: pointer;
	}

	image:focus, circle:focus, g:focus {
		outline: none;
	}
</style>

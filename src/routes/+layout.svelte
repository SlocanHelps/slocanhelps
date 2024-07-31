<script lang="ts">
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import '../app.postcss';
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>

<AppBar>
	<svelte:fragment slot="lead">
		<svg class="fill-red-500 dark:fill-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" width="32" height=""><g data-name="House Love"><path d="M32.34986,41.53385a.4974.4974,0,0,1-.72259.00018c-6.03689-6.28456-15.35069-3.10644-16.527,2.86194-1.13477,5.73339,2.39119,11.23731,6.44879,15.44666a.49917.49917,0,0,1-.36486.84152l-14.54,0a1,1,0,0,1-1-1V28.77668a1.49332,1.49332,0,0,1,.48492-1.10143L31.65107,4.309a.5.5,0,0,1,.67511-.00015L57.87093,27.67525a1.49181,1.49181,0,0,1,.48492,1.10077v30.9081a1,1,0,0,1-1,1l-14.54,0a.49917.49917,0,0,1-.36486-.84152c4.0576-4.20935,7.58356-9.71327,6.44879-15.44666C47.73554,38.48912,38.438,35.19072,32.34986,41.53385Z"/></g></svg>
	</svelte:fragment>
		<a class="block text-2xl font-bold text-nowrap" href="/">Slocan Helps</a>
	
	<svelte:fragment slot="trail">&nbsp;</svelte:fragment>
</AppBar>

<div class="container max-w-6xl mx-auto px-4 ">

		<slot />

</div>
<script lang="typescript">
	import { page } from '$app/stores';
  import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';
 

	export let data;
  export let type = $page.url.hash.replace('#', '');

  let filteredData = data.data;

  const typeMap = {
    'Accommodation': 'fluent-emoji-high-contrast:house-with-garden',
    'Animals': 'fluent-emoji-high-contrast:goat',
    'Transportation': 'fluent-emoji-high-contrast:sport-utility-vehicle',
    'Labour': 'fluent-emoji-high-contrast:flexed-biceps',
    'Community Support': 'fluent-emoji-high-contrast:people-hugging',
    'Food': 'fluent-emoji-high-contrast:fork-knife-plate',
  };

  $: type = $page.url.hash.replace('#', '');

  $: { console.log(type);
    filteredData = data.data.filter((offer) => {
    console.log(offer)
    if (type === '') return true;
    if (type === 'accommodation') return offer.Type && offer.Type[1] === 'Accommodation';
    if (type === 'animals') return offer.Type && offer.Type[1] === 'Animals';
    if (type === 'transportation') return offer.Type && offer.Type[1] === 'Transportation';
    if (type === 'labour') return offer.Type && offer.Type[1] === 'Labour';
    if (type === 'support') return offer.Type && offer.Type[1] === 'Community Support';
    if (type === 'food') return offer.Type && offer.Type[1] === 'Food';
    return true;
  })
};
</script>


<div class="container justify-center items-center mx-auto md:mt-5 md:mb-32">

  <div class="space-y-5">

  <div class="pl-2 pr-2">
		<h2 class="h2"><a href="/">Slocan Helps</a>: Offers of Help</h2>

		<p>
			If you have something to offer evacuees, you can <a
				href="https://slocan.getgrist.com/forms/qhosjjXEfVpTGCTrVacWne/25"
				class="btn variant-ghost-primary">Offer Your Help</a
			>.
		</p>

    <p>
      If you need to change or remove your offer, please contact us by <a
      href="mailto:romeda@gmail.com" class="anchor">email</a>, text at
      250-278-7978, or on <a href="https://www.facebook.com/romeda"
      class="anchor">Facebook</a> and we'll get back to you as soon as we can.
    </p>

  </div>

  <TabGroup
    justify="justify-center"
    active="variant-filled-primary"
    hover="hover:variant-soft-primary"
    flex="flex-none"
    class="w-full"
    rounded=""
    border="">
  <!-- import FluentEmojiHighContrastGoat from 'virtual:icons/fluent-emoji-high-contrast/goat';
  import FluentEmojiHighContrastHome from '~icons/fluent-emoji-high-contrast/house-with-garden';
  import FluentEmojiHighContrastCar from '~icons/fluent-emoji-high-contrast/sport-utility-vehicle';
  import FluentEmojiHighContrastArm from '~icons/fluent-emoji-high-contrast/flexed-biceps';
  import FluentEmojiHighContrastHug from '~icons/fluent-emoji-high-contrast/people-hugging';
  -->
    <TabAnchor href="/offers" selected={$page.url.hash === ''}>All Offers</TabAnchor>
    <TabAnchor href="/offers#accommodation" selected={$page.url.hash === '#accommodation'}>
      <div class="flex items-center">
        <Icon icon="fluent-emoji-high-contrast:house-with-garden" />&nbsp; Accommodation
      </div>
    </TabAnchor>
    <TabAnchor href="/offers#animals" selected={$page.url.hash === '#animals'}>
      <div class="flex items-center">
        <Icon icon="fluent-emoji-high-contrast:goat" />&nbsp; Animals
      </div>
    </TabAnchor>
      <!-- <FluentEmojiHighContrastGoat /> Animals</TabAnchor> -->
    <TabAnchor href="/offers#transportation" selected={$page.url.hash === '#transportation'}>
      <div class="flex items-center">
        <Icon icon="fluent-emoji-high-contrast:sport-utility-vehicle" />&nbsp; Transportation
      </div>
    </TabAnchor>
    <TabAnchor href="/offers#labour" selected={$page.url.hash === '#labour'}>
      <div class="flex items-center">
        <Icon icon="fluent-emoji-high-contrast:flexed-biceps" />&nbsp; Labour
      </div>
    </TabAnchor>
    <TabAnchor href="/offers#support" selected={$page.url.hash === '#support'}>
      <div class="flex items-center">
        <Icon icon="fluent-emoji-high-contrast:people-hugging" />&nbsp; Community Supports
      </div>
    </TabAnchor>
  </TabGroup>

  <div class="table-container w-full">
		<table class="w-full table-fixed flex flex-row flex-no-wrap overflow-hidden">
			<thead>
				{#each filteredData as offer}
				<tr class="bg-teal-400 border-b-1 flex flex-col flex-no wrap sm:table-row sm:rounded-none mb-2 sm:mb-0">
					<th class="text-left h-7 p-0 px-1 md:p-2">Name</th>
					<th class="text-left h-7 md:w-40 p-0 px-1 md:p-2">Community</th>
					<th class="text-left h-7 md:w-1/2 p-0 px-1 md:p-2">Offer</th>
					<th class="text-left h-7 md:w-48 p-0 px-1 md:p-2">Contact Details</th>
				</tr>
        {/each}
			</thead>
			<tbody class="flex-1 sm:flex-none">
				{#each filteredData as offer}
					<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 even:bg-slate-100 text-slate-950 odd:bg-slate-200">
						<td class="py-0 md:px-2 h-7">{offer.Name}</td>
						<td class="h-7 sm:w-40">{offer.gristHelper_Display2 || offer.Community_if_Other_ || 'Other'}</td
						>
						<td class="overflow-hidden h-7 md:pl-2 md:w-1/2">
              <span class="flex">
                <span class="flex">
                {#if offer.Type}
                  {#each offer.Type as type}
                    <Icon icon={typeMap[type]} inline={true} />
                  {/each}
                  &nbsp;
                {/if}
                </span>

                {offer.Offer}
              </span>
            </td>
						<td class="overflow-hidden h-7 md:w-48">{offer.Contact_Details}</td>
					</tr>
				{/each}
			</tbody>
		</table></div>

	</div></div>

<style>
   @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }

    thead tr:not(:first-child) {
      display: none;
    }

    td:not(:last-child) {
      border-bottom: 0;
    }
    /* th:not(:last-child) {
      border-bottom: 2px solid rgba(0, 0, 0, .1);
    } */
  }
</style>

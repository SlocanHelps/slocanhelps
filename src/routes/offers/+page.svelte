<script lang="typescript">
	import { page } from '$app/stores';
  import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';

	export let data;
  let type = $page.url.hash.replace('#', '');

  let filteredData = data.sortedData;

  const typeMap = {
    'Accommodation': 'fluent-emoji-high-contrast:house-with-garden',
    'Animals': 'fluent-emoji-high-contrast:goat',
    'Transportation': 'fluent-emoji-high-contrast:sport-utility-vehicle',
    'Labour': 'fluent-emoji-high-contrast:flexed-biceps',
    'Community Support': 'fluent-emoji-high-contrast:people-hugging',
    'Food': 'fluent-emoji-high-contrast:fork-knife-plate',
  };

  $: type = $page.url.hash.replace('#', '');

  $: {

    filteredData = data.sortedData.filter((offer) => {
      if (type === '') return true;
      if (type === 'accommodation') return offer.Type && offer.Type.indexOf('Accommodation') !== -1;
      if (type === 'animals') return offer.Type && offer.Type.indexOf('Animals') !== -1;
      if (type === 'transportation') return offer.Type && offer.Type.indexOf('Transportation') !== -1;
      if (type === 'labour') return offer.Type && offer.Type.indexOf('Labour') !== -1;
      if (type === 'support') return offer.Type && offer.Type.indexOf('Community Support') !== -1;
      if (type === 'food') return offer.Type && offer.Type.indexOf('Food') !== -1;
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
    active="variant-filled-primary"
    hover="hover:variant-soft-primary"
    class=""
    rounded=""
    border="">

    <TabAnchor href="/offers#" selected={$page.url.hash === ''}>All Offers</TabAnchor>
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
		<table class="w-full table-fixed flex flex-row flex-nowrap overflow-hidden">
			<thead>
				<tr class="bg-teal-400 border-b-1 flex flex-col flex-nowrap invisible absolute sm:visible sm:static sm:table-row sm:rounded-none mb-2 sm:mb-0">
					<th class="text-left p-0 px-1 md:p-2 sm:w-32">Name</th>
					<th class="text-left p-0 px-1 md:p-2 sm:w-32">Community</th>
					<th class="text-left md:w-1/2 p-0 px-1 md:p-2">Offer</th>
					<th class="text-left md:w-48 p-0 px-1 md:p-2">Contact Details</th>
				</tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
				{#each filteredData as offer}
					<tr class="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0 even:bg-slate-100 text-slate-950 odd:bg-slate-200">
						<td class="py-0 md:px-2" data-th="Name">{offer.Name}</td>
						<td class="sm:w-40" data-th="Community">{offer.gristHelper_Display2 || offer.Community_if_Other_ || 'Other'}</td>
						<td class="overflow-hidden md:pl-2 md:w-1/2" data-th="Offer">
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
						<td class="overflow-hidden md:w-48 break-words" data-th="Contact">{offer.Contact_Details}</td>
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
  }

  @media (max-width: 640px) {
    td::before {
      content: attr(data-th)": ";
      font-weight: bold;
      color: rgb(36, 44, 70);
    }
    
  }
</style>

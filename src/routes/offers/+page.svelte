<script lang="typescript">
	export let data;
</script>


<div class="container justify-center items-center mx-auto md:mt-5 md:mb-32">
  <div class="space-y-5">
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

    <div class="table-container w-full">
		<table class="w-full table-fixed flex flex-row flex-no-wrap overflow-hidden">
			<thead>
				{#each data.data as offer}
				<tr class="bg-teal-400 border-b-1 flex flex-col flex-no wrap sm:table-row sm:rounded-none mb-2 sm:mb-0">
					<th class="text-left h-7 p-0 px-1 md:p-2">Name</th>
					<th class="text-left h-7 md:w-32 p-0 px-1 md:p-2">Community</th>
					<th class="text-left h-7 md:w-32 p-0 px-1 md:p-2">Type</th>
					<th class="text-left h-7 md:w-1/2 p-0 px-1 md:p-2">Offer</th>
					<th class="text-left h-7 md:w-48 p-0 px-1 md:p-2">Contact Details</th>
				</tr>
        {/each}
			</thead>
			<tbody class="flex-1 sm:flex-none">
				{#each data.data as offer}
					<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 even:bg-slate-100 text-slate-950 odd:bg-slate-200">
						<td class="sm:py-0 h-7">{offer.Name}</td>
						<td class="h-7 sm:w-32">{offer.gristHelper_Display2 || offer.Community_if_Other_ || 'Other'}</td
						>
						<td class="h-7 sm:w-32 overflow-hidden">{(offer.Type && offer.Type[1]) || offer.Type_if_Other_ || '?'}</td
						>
						<td class="overflow-hidden h-7 md:pl-2 md:w-1/2">{offer.Offer}</td>
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

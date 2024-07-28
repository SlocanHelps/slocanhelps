<script lang="typescript">
	export let data;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 pt-5">
		<h2 class="h2"><a href="/">Slocan Helps</a>: Offers of Help</h2>

		<br />

		<table class="table table-hover table-auto w-full">
			<thead>
				<tr>
					<th class="table-cell">Name</th>
					<th class="table-cell-fit">Community</th>
					<th class="table-cell-fit">Type</th>
					<th class="table-cell">Offer</th>
					<th class="table-cell-fit">Contact Details</th>
				</tr>
			</thead>
			<tbody>
				{#each data.data as offer}
					<tr>
						<td class="table-cell-fit">{offer.Name}</td>
						<td class="table-cell-fit"
							>{offer.gristHelper_Display2 || offer.Community_if_Other_ || 'Other'}</td
						>
						<td class="table-cell-fit"
							>{(offer.Type && offer.Type[1]) || offer.Type_if_Other_ || '?'}</td
						>
						<td class="table-cell">{offer.Offer}</td>
						<td class="table-cell-fit">{offer.Contact_Details}</td>
					</tr>
				{/each}
			</tbody>
		</table>

		<p>
			If you have something to offer evacuees, you can <a
				href="https://slocan.getgrist.com/forms/qhosjjXEfVpTGCTrVacWne/25"
				class="btn variant-ghost-primary">Offer Your Help</a
			>.
		</p>
	</div>
</div>

<div class="projects">
	<div class="block">
		<div class="addmenue">

			<div class="block_in_wrapper">
				<form class="main" >
					<h1>Update available</h1>
	
					<strong>Collabtive {$updateNotify->currentVersion}</strong> was released on <strong>{$updateNotify->pubDateStr}</strong>.
					<br /><br />
					<div class="row">
						<button type="reset" onfocus="this.blur();" onclick = "blindtoggle('changelog');">Show changelog</button><br />
					</div>

					<div class = "row display-none" id = "changelog">
						<br />
						<h2>Changelog</h2>
						{$updateNotify->changelog}
					</div>
										
					<div class = "row-butn-bottom">
						<br />
					</div>
					<br />
				</form>
			</div>
		</div>
	</div>
</div>
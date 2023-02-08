{include file="header.tpl" title="Login" showheader="no" jsload="ajax"}

		<div class="login">
			<div class="login-in">
				<div class="logo-name">
					<h1>
						
							<img src="./templates/{$settings.template}/theme/{$settings.theme}/images/logo-a.png" alt="{$settings.name}" />
						
					</h1>
				</div>

				<form id="loginform" name="loginform" method="post" action="manageuser.php?action=login" {literal} onsubmit="return validateCompleteForm(this,'input_error');" {/literal} >
					<fieldset>
							<div class="row">
							<label for="username" class="fad fa-user"></label>
							<input type="text" class="text" name="username" id="username" required="1" realname="{#name#}" />
						</div>
	
						<div class="row">
							<label for="pass" class="fad fa-key"></label>
							<input type="password" class="text" name="pass" id="pass" realname="{#password#}" />
						</div>
						<div class="row">
							<button type="submit" class="fa-duotone fa-right-to-bracket enterence" title="{#loginbutton#}" onfocus="this.blur();"></button>
						</div>
					
					</fieldset>
				</form>
				
			</div>

			{if $loginerror == 1}
				<div class="login-alert timetrack">
					{#loginerror#}
					
					{if $mailnotify == 1}
						<br /><br />
						<form id="blaform" name="resetform" class="main" method="post" action="manageuser.php?action=loginerror">
							<div class="row" style="text-align:center;">
								<button style="float:none;margin:0 0 0 0;" onclick="$('blaform').submit();" onfocus="this.blur();">{#resetpassword#}</button>
							</div>
						</form>
					{/if}
					
					<div class="clear_both"></div>
				</div>
			{/if}
		</div>
		
	</body>
</html>
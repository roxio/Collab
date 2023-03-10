{include file="header.tpl" jsload="ajax" jsload1="tinymce"}
{include file="tabsmenue-project.tpl" taskstab="active"}

<div id="content-left">
	<div id="content-left-in">

		<div class="tasks">
			<div class="breadcrumb">
				<a href="manageproject.php?action=showproject&amp;id={$project.ID}"><img src="./templates/{$settings.template}/theme/{$settings.theme}/images/symbols/projects.png" alt="" />{$projectname|truncate:40:"...":true}</a>
				<a href="managetask.php?action=showproject&amp;id={$project.ID}"><img src="./templates/{$settings.template}/theme/{$settings.theme}/images/symbols/tasklist.png" alt="" />{#tasklists#}</a>
				<a href="managetasklist.php?action=showtasklist&id={$project.ID}&tlid={$task.liste}" title="{#tasklist#} / {$task.list}"><img src="./templates/{$settings.template}/theme/{$settings.theme}/images/symbols/tasklist.png" alt="" />{$task.list|truncate:50:"...":true}</a>
				<span>&nbsp;/...</span>
			</div>

			<h1 class="second"><img src="./templates/{$settings.template}/theme/{$settings.theme}/images/symbols/task.png" alt="" />{$task.title|truncate:40:"...":true}</h1>

			<div class="statuswrapper">
				<ul>
					{if $userpermissions.tasks.close}
						<li class="link" id="closetoggle">
						{if $task.status == 1}
							<a class="close" href="javascript:closeElement('closetoggle','managetask.php?action=close&amp;tid={$task.ID}&amp;id={$project.ID}');" title="{#close#}"></a></li>
						{else}
							<a class="close" href="javascript:closeElement('closetoggle','managetask.php?action=open&amp;tid={$task.ID}&amp;id={$project.ID}');" title="{#open#}"></a></li>
						{/if}
					{/if}
					{if $userpermissions.tasks.edit}
						<li class="link"><a class="edit" href="javascript:void(0);" id="edit_butn" onclick="blindtoggle('form_edit');toggleClass(this,'edit-active','edit');toggleClass('sm_task','smooth','nosmooth');" title="{#edit#}"></a></li>
					{/if}
					<li><a>{#user#}: {$task.user|truncate:25:"...":true}</a></li>
					<li><a>{#start#}: {$task.startstring}</a></li>
					<li><a>{#end#}: {$task.endstring}</a></li>
				</ul>
			</div>

			{*Edit Task*}
			{if $userpermissions.tasks.edit}
				<div id="form_edit" class="addmenue display-none clear_both">
					<div class="content-spacer"></div>
					{include file="forms/edittask.tpl" showhtml="no"}
				</div>
			{/if}

			<div class="content-spacer"></div>

			<div class="nosmooth" id="sm_task">
				<div id="descript" class="descript">
					<h2>{#description#}</h2>
					{$task.text}
					<div class="content-spacer"></div>
                    <!--showCommentsInTask-->
				</div>
			</div>

		</div> {*Tasks END*}
	</div> {*content-left-in END*}
</div> {*content-left END*}

{include file="sidebar-a.tpl"}
{include file="footer.tpl"}
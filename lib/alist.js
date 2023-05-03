<!DOCTYPE html>
<html lang="zh-CN" class="theme-">
<head data-suburl="">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>chuqiuyu/gao - lib/alist.js at fd599aefbb199f48ea6cf73c3414629c1c02e50f - Agit</title>
	<meta name="theme-color" content="#6cc644">
	<meta name="author" content="chuqiuyu" />
	<meta name="description" content="gao" />
	<meta name="keywords" content="go,git,self-hosted,gitea">
	<meta name="referrer" content="no-referrer" />
	<meta name="_csrf" content="i0awkC9Bsw5Fd2BzPCblIieMVYA6MTY4MzA3ODQ2NzIyMDU3ODU5Nw" />
	<meta name="_suburl" content="" />
	
	
	

	<script>
		window.config = {
			AppVer: 'gitea模板还原\u002b138-g943c8c71f',
			AppSubUrl: '',
			StaticUrlPrefix: '',
			UseServiceWorker:  true ,
			csrf: 'i0awkC9Bsw5Fd2BzPCblIieMVYA6MTY4MzA3ODQ2NzIyMDU3ODU5Nw',
			HighlightJS: false,
			SimpleMDE: false,
			Tribute: false,
			U2F: false,
			Heatmap: false,
			heatmapUser: null,
			NotificationSettings: {
				MinTimeout:  10000 ,
				TimeoutStep:   10000 ,
				MaxTimeout:  60000 ,
				EventSourceUpdateTime:  10000 ,
			},
			PageIsProjects: false,
      
		};
	</script>
	<link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
	<link rel="alternate icon" href="/img/favicon.png" type="image/png">
	<link rel="mask-icon" href="/img/agit-safari.svg" color="#609926">
	<link rel="fluid-icon" href="/img/agit-lg.png" title="Agit">


	<link rel="stylesheet" href="/css/index.css?v=220846678a86246c9d7e7c46c21f20c2">
	<noscript>
		<style>
      .dropdown:hover > .menu { display: block; }
      .ui.secondary.menu .dropdown.item > .menu { margin-top: 0; }
		</style>
	</noscript>
	<style class="list-search-style"></style>

	
		<meta property="og:title" content="gao" />
		<meta property="og:url" content="https://agit.ai/chuqiuyu/gao" />
		
	
	<meta property="og:type" content="object" />
	
		<meta property="og:image" content="https://agit.ai/user/avatar/chuqiuyu/-1" />
	

<meta property="og:site_name" content="Agit" />


<link rel="stylesheet" href="/vendor/plugins/xterm/xterm.css?v=220846678a86246c9d7e7c46c21f20c2" />


</head>
<body>
	

	<div class="full height">
		<noscript>使用 JavaScript能使本网站更好的工作。</noscript>

		

		
			
			<div class="ui top secondary stackable main menu following bar light" style="background: #242628; height: 52px;">
				
<div class="ui container z-max" id="navbar" v-cloak style="position:fixed;">
	<div class="i-flex i-align-center i-justify-between logo-img" style="margin-right:26px;height:52px;">
		<a href="/">
			<img class="share-nav-logo" src="/img/logo/nav-logo.svg">
		</a>
		<div class="ui basic icon button mobile-only" id="navbar-expand-toggle">
			<i class="sidebar icon"></i>
		</div>
	</div>

	
		<a class="item " href="/">首页</a>
		<a class="item" href="http://help.agit.ai" id="help-header-a" target="_blank">帮助</a>
		<a class="mobile-only item " href="/explore/repos">探索</a>
		<div class="ui input d-relative navbar-search not-mobile" :class="{active:menuVisible}">
			<i class="icon iconfont icon-search"></i>
			<input v-model="searchName" placeholder="搜索" type="text" autocomplete="off"  @focus="menuVisible = true">
			<div v-show="searchName.trim() && menuVisible" class="ui segment transition z-menu" @focus="menuVisible = true">
				<div class="ui list" @click="handleSearch('repos')">
					<span class="mr-md">${searchName}</span> <span class="i-text-right">仓库</span>
				</div>
				<div class="ui list" @click="handleSearch('users')">
					<span class="mr-md">${searchName}</span> <span class="i-text-right">用户</span>
				</div>
				<div class="ui list" @click="handleSearch('organizations')">
					<span class="mr-md">${searchName}</span> <span class="i-text-right">组织</span>
				</div>
			</div>

		</div>
	
	

	


	

<div class="right stackable menu header-right">
	
	<div class="ui dropdown jump item poping up active visible">
		<i class="iconfont mr-3xs font-size-2xl" :class='{"icon-lang-zh2en":lan!=="en-US","icon-lang-en2zh":lan==="en-US"}'></i>
		<span id="footerLang" class="hidden">简体中文</span>
		<i class="caret down icon font-size-sm"></i>
		<div class="menu">
			
			<span lang="zh-CN" class="item active selected" onclick="handleLanguage(&#34;zh-CN&#34;)">简体中文</span>
			
			<span lang="en-US" class="item " onclick="handleLanguage(&#34;en-US&#34;)">English</span>
			
		</div>
	</div>

	
	<a class="item" rel="nofollow" href="/user/login?redirect_to=%2fchuqiuyu%2fgao%2fsrc%2fcommit%2ffd599aefbb199f48ea6cf73c3414629c1c02e50f%2flib%2falist.js">
		<svg viewBox="0 0 16 16" class="svg octicon-sign-in" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm6.56 4.5l1.97-1.97a.75.75 0 10-1.06-1.06L6.22 7.47a.75.75 0 000 1.06l3.25 3.25a.75.75 0 101.06-1.06L8.56 8.75h5.69a.75.75 0 000-1.5H8.56z"/></svg> 登录
	</a>
</div>


</div>

			</div>
		


<div id="repoHome" class="repository file list ">
	<div class="header-wrapper">

	<div class="ui container">
		<div class="repo-header">
			<div class="ui huge breadcrumb repo-title">
				
					<div class="repo-header-icon">
	
		
			<svg viewBox="0 0 16 16" class="svg octicon-mirror" width="32" height="32" aria-hidden="true"><path fill-rule="evenodd" d="M8.75 1.75a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5zM8 4a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5A.75.75 0 018 4zm.75 3.75a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5zM8 10a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5A.75.75 0 018 10zm0 3a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5A.75.75 0 018 13zm7.547-9.939A.75.75 0 0116 3.75v8.5a.75.75 0 01-1.265.545l-4.5-4.25a.75.75 0 010-1.09l4.5-4.25a.75.75 0 01.812-.144zM11.842 8l2.658 2.51V5.49L11.842 8zM0 12.25a.75.75 0 001.265.545l4.5-4.25a.75.75 0 000-1.09l-4.5-4.25A.75.75 0 000 3.75v8.5zm1.5-6.76L4.158 8 1.5 10.51V5.49z"/></svg>
		
	
</div>

				
				<a href="/chuqiuyu">chuqiuyu</a>
				<div class="divider"> / </div>
				<a href="/chuqiuyu/gao">gao</a>

				<i class="iconfont icon-ai"></i>

				
					
						
					
				
				
				<div class="fork-flag">镜像自地址 <a target="_blank" rel="noopener noreferrer" href="https://github.com/gaotianliuyun/gao.git">https://github.com/gaotianliuyun/gao.git</a></div>
				
				
			</div>
			
				<div class="repo-buttons">
					<form method="post" action="/chuqiuyu/gao/action/watch?redirect_to=%2fchuqiuyu%2fgao%2fsrc%2fcommit%2ffd599aefbb199f48ea6cf73c3414629c1c02e50f%2flib%2falist.js">
						<input type="hidden" name="_csrf" value="i0awkC9Bsw5Fd2BzPCblIieMVYA6MTY4MzA3ODQ2NzIyMDU3ODU5Nw">
						<div class="ui labeled button poping up" tabindex="0" data-content="请登录后再关注此仓库" data-position="top center" data-variation="tiny">
							<button type="submit" class="ui compact basic button" disabled>
								<i class="iconfont mr-2xs icon-eye"></i>关注
							</button>
							<a class="ui basic label" href="/chuqiuyu/gao/watchers">
								2
							</a>
						</div>
					</form>
					<form method="post" action="/chuqiuyu/gao/action/star?redirect_to=%2fchuqiuyu%2fgao%2fsrc%2fcommit%2ffd599aefbb199f48ea6cf73c3414629c1c02e50f%2flib%2falist.js">
						<input type="hidden" name="_csrf" value="i0awkC9Bsw5Fd2BzPCblIieMVYA6MTY4MzA3ODQ2NzIyMDU3ODU5Nw">
						<div class="ui labeled button poping up" tabindex="0" data-content="请登录后再点赞此仓库" data-position="top center" data-variation="tiny">
							<button type="submit" class="ui compact basic button" disabled>
								<i class="mr-2xs iconfont icon-star"></i>点赞
							</button>
							<a class="ui basic label" href="/chuqiuyu/gao/stars">
								0
							</a>
						</div>
					</form>
					
						<div class="ui labeled button " tabindex="0">
							<a class="ui compact basic button
								poping up"
								 data-content="登录并 派生 这个仓库。" rel="nofollow"
									href="/user/login?redirect_to=/repo/fork/5908"
								 data-position="top center" data-variation="tiny">
								<i class="mr-2xs iconfont icon-fork"></i>派生
							</a>
							<a class="ui basic label" href="/chuqiuyu/gao/forks">
								9
							</a>
						</div>
					
				</div>
			
		</div>
	</div>

	<div class="ui tabs container">
		
			<div class="ui tabular stackable menu navbar">
				
				<a class="active item" href="/chuqiuyu/gao/src/commit/fd599aefbb199f48ea6cf73c3414629c1c02e50f">
					<i class="iconfont icon-code"></i> 代码
				</a>
				

				
					<a class=" item" href="/chuqiuyu/gao/issues">
						<i class="iconfont icon-open"></i> 讨论 <span class="ui gray tiny label circular">0</span>
					</a>
				

				

				

				
					<a class=" item" href="/chuqiuyu/gao/wiki" >
						<i class="iconfont icon-wiki"></i> 百科
					</a>
				

				
					<a class=" item" href="/chuqiuyu/gao/activity">
						<i class="iconfont icon-activity"></i> 动态
					</a>
				

				


				
			</div>
		
	</div>
	<div class="ui tabs divider"></div>
</div>

	<span class="repo-url hidden">/chuqiuyu/gao</span>
	<span class="repo-id hidden">5908</span>
	<div class="ui container">
		



		<div class="ui repo-description">
			<div id="repo-desc">
				
				<a class="link" href=""></a>
			</div>
			
		</div>
		<div class="ui" id="repo-topics">
		
		
		</div>
		
		<div class="hide" id="validate_prompt">
			<span id="count_prompt">您最多选择25个主题</span>
			<span id="format_prompt">主题必须以字母或数字开头，可以包含连字符 (-)，并且长度不得超过35个字符</span>
		</div>
		
		
		

		<div class="ui segments repository-summary shadow-0 is-lang-stats">
	<div class="ui segment sub-menu repository-menu">
		<div class="ui two horizontal center link list">
			
				<div class="item">
					<a class="ui" href="/chuqiuyu/gao/commits/commit/fd599aefbb199f48ea6cf73c3414629c1c02e50f"><i class="iconfont icon-commit"></i> <b>3533</b> 提交</a>
				</div>
			
			
				<div class="item">
					<a class="ui" href="/chuqiuyu/gao/branches/"><i class="iconfont icon-branch-down"></i> <b>2</b> 分支</a>
				</div>
				<div class="item">
					<span class="ui"><i class="iconfont icon-memory"></i> <b id="RepoSize">185 MB</b></span>
				</div>
			
		</div>
	</div>
	
	<div class="ui segment sub-menu language-stats-details" style="display: none">
		<div class="ui horizontal center link list">
			
			<div class="item">
				<span class="ui">
				<i class="color-icon" style="background-color: #f1e05a"></i>
				<b>
					JavaScript
				
				</b> 98.2%</span>
			</div>
			
			<div class="item">
				<span class="ui">
				<i class="color-icon" style="background-color: #3572A5"></i>
				<b>
					Python
				
				</b> 1.8%</span>
			</div>
			
		</div>
	</div>
	<a class="ui segment language-stats">
		
		<div class="bar" style="width: 98.2%; background-color: #f1e05a">&nbsp;</div>
		
		<div class="bar" style="width: 1.8%; background-color: #3572A5">&nbsp;</div>
		
	</a>
	
</div>

		<div class="ui stackable secondary menu mobile--margin-between-items mobile--no-negative-margins">
			<div class="fitted item choose reference">
	<div class="ui floating filter dropdown custom" data-can-create-branch="false" data-no-results="未找到结果">
		<div id="branchSelect" class="ui basic small compact button" data-mode="branches" @click="menuVisible = !menuVisible" @keyup.enter="menuVisible = !menuVisible">
			<span class="text">
				<i class="iconfont icon-branch-down"></i>
				目录树:
				<strong>fd599aefbb</strong>
			</span>
			<i class="dropdown icon"></i>
		</div>
		<div class="data" style="display: none" data-mode="branches">
			
				<div class="item branch " data-url="/chuqiuyu/gao/src/branch/master/lib/alist.js">master</div>
			
				<div class="item branch " data-url="/chuqiuyu/gao/src/branch/gaotianliuyun-patch-1/lib/alist.js">gaotianliuyun-patch-1</div>
			
			
		</div>
		<div class="menu transition" :class="{visible: menuVisible}" v-if="menuVisible" v-cloak>
			<div class="ui icon search input">
				<i class="filter icon"></i>
				<input name="search" ref="searchField" v-model="searchTerm" @keydown="keydown($event)" placeholder="过滤分支或标签...">
			</div>
			<div class="header branch-tag-choice">
				<div class="ui grid">
					<div class="two column row">
						<a class="reference column" href="#" @click="mode = 'branches'; focusSearchField()">
							<span class="text" :class="{black: mode !== 'branches'}">
								<i class="iconfont icon-branch-down"></i> 分支列表
							</span>
						</a>
						<a class="reference column" href="#" @click="mode = 'tags'; focusSearchField()">
							<span class="text" :class="{black: mode !== 'tags'}">
								<i class="reference tags icon"></i> 标签列表
							</span>
						</a>
					</div>
				</div>
			</div>
			<div class="scrolling menu" ref="scrollContainer">
				<div v-for="(item, index) in filteredItems" :key="item.name" class="item" :class="{selected: item.selected, active: active == index}" @click="selectItem(item)" :ref="'listItem' + index">${ item.name }</div>
				<div class="item" v-if="showCreateNewBranch" :class="{active: active == filteredItems.length}" :ref="'listItem' + filteredItems.length">
					<a href="#" @click="createNewBranch()">
						<div>
							<i class="iconfont icon-branch-down"></i>
							创建分支 <strong>${ searchTerm }</strong>
						</div>
						<div class="text small">
							
								从 &#39;fd599aefbb&#39;
							
						</div>
					</a>
					<form ref="newBranchForm" action="/chuqiuyu/gao/branches/_new/commit/fd599aefbb199f48ea6cf73c3414629c1c02e50f" method="post">
						<input type="hidden" name="_csrf" value="i0awkC9Bsw5Fd2BzPCblIieMVYA6MTY4MzA3ODQ2NzIyMDU3ODU5Nw">
						<input type="hidden" name="new_branch_name" v-model="searchTerm">
					</form>
				</div>
			</div>
			<div class="message" v-if="showNoResults">${ noResults }</div>
		</div>
	</div>
</div>

			
			
			
			
				<div class="fitted item">
					<span class="ui breadcrumb repo-path">
						<a class="section" href="/chuqiuyu/gao/src/commit/fd599aefbb199f48ea6cf73c3414629c1c02e50f" title="gao">gao</a>
						
							<span class="divider">/</span>
							
								<span class="section">
									<a href="/chuqiuyu/gao/src/commit/fd599aefbb199f48ea6cf73c3414629c1c02e50f/lib" title="lib">lib</a></span>
						
							<span class="divider">/</span>
							
								<span class="active section" title="alist.js">alist.js</span>
							
						</span></div>
			
			<div class="right fitted item" id="file-buttons">
				<div>
					

					
					
				</div>
			</div>

			<div class="fitted item">
				
				
			</div>
		</div>
		
			<div class="tab-size-8 non-diff-file-content">
	<h4 class="file-header ui top attached header">
		<div class="file-header-left df ac">
			
				<div class="file-info text grey normal mono">
					
					
						<div class="file-info-entry">
							819 行
						</div>
					
					
						<div class="file-info-entry">
							25 KB
						</div>
					
					
				</div>
			
		</div>
		
		<div class="file-header-right df ac">
			<div class="ui right file-actions">
				<div class="ui buttons">
					<a class="ui button" href="/chuqiuyu/gao/raw/commit/fd599aefbb199f48ea6cf73c3414629c1c02e50f/lib/alist.js">原始文件</a>
					
					
						<a class="ui button" href="/chuqiuyu/gao/blame/commit/fd599aefbb199f48ea6cf73c3414629c1c02e50f/lib/alist.js">Blame</a>
					
					<a class="ui button" href="/chuqiuyu/gao/commits/commit/fd599aefbb199f48ea6cf73c3414629c1c02e50f/lib/alist.js">文件历史</a>
				</div>
				
			</div>
		</div>
		
	</h4>
	<div class="ui attached table unstackable segment">
		<div class="file-view code-view">
			
				
				<table>
					<tbody>
						
						<tr>
							<td id="L1" class="lines-num">
								<span id="L1" data-line-number="1"></span>
							</td>
							<td rel="L1" class="lines-code chroma">
								<code><span class="c1">// import _ from &#39;https://underscorejs.org/underscore-esm-min.js&#39;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L2" class="lines-num">
								<span id="L2" data-line-number="2"></span>
							</td>
							<td rel="L2" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="c1">// import {distance} from &#39;https://unpkg.com/fastest-levenshtein@1.0.16/esm/mod.js&#39;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L3" class="lines-num">
								<span id="L3" data-line-number="3"></span>
							</td>
							<td rel="L3" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="kr">import</span> <span class="p">{</span><span class="nx">distance</span><span class="p">}</span> <span class="nx">from</span> <span class="s1">&#39;./mod.js&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L4" class="lines-num">
								<span id="L4" data-line-number="4"></span>
							</td>
							<td rel="L4" class="lines-code chroma">
								<code><span class="kr">import</span> <span class="p">{</span><span class="nx">sortListByCN</span><span class="p">}</span> <span class="nx">from</span> <span class="s1">&#39;./sortName.js&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L5" class="lines-num">
								<span id="L5" data-line-number="5"></span>
							</td>
							<td rel="L5" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L6" class="lines-num">
								<span id="L6" data-line-number="6"></span>
							</td>
							<td rel="L6" class="lines-code chroma">
								<code><span class="cm">/**</code>
							</td>
						</tr>
						
						<tr>
							<td id="L7" class="lines-num">
								<span id="L7" data-line-number="7"></span>
							</td>
							<td rel="L7" class="lines-code chroma">
								<code></span><span class="cm"> * alist js</code>
							</td>
						</tr>
						
						<tr>
							<td id="L8" class="lines-num">
								<span id="L8" data-line-number="8"></span>
							</td>
							<td rel="L8" class="lines-code chroma">
								<code></span><span class="cm"> * 配置设置 {&#34;key&#34;:&#34;Alist&#34;,&#34;name&#34;:&#34;Alist&#34;,&#34;type&#34;:3,&#34;api&#34;:&#34;http://xxx.com/alist.js&#34;,&#34;searchable&#34;:0,&#34;quickSearch&#34;:0,&#34;filterable&#34;:0,&#34;ext&#34;:&#34;http://xxx.com/alist.json&#34;}</code>
							</td>
						</tr>
						
						<tr>
							<td id="L9" class="lines-num">
								<span id="L9" data-line-number="9"></span>
							</td>
							<td rel="L9" class="lines-code chroma">
								<code></span><span class="cm"> * alist.json [{</code>
							</td>
						</tr>
						
						<tr>
							<td id="L10" class="lines-num">
								<span id="L10" data-line-number="10"></span>
							</td>
							<td rel="L10" class="lines-code chroma">
								<code></span><span class="cm">				name:&#39;名称&#39;,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L11" class="lines-num">
								<span id="L11" data-line-number="11"></span>
							</td>
							<td rel="L11" class="lines-code chroma">
								<code></span><span class="cm">				server:&#39;地址&#39;,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L12" class="lines-num">
								<span id="L12" data-line-number="12"></span>
							</td>
							<td rel="L12" class="lines-code chroma">
								<code></span><span class="cm">				startPage:&#39;/&#39;,		 //启动文件夹</code>
							</td>
						</tr>
						
						<tr>
							<td id="L13" class="lines-num">
								<span id="L13" data-line-number="13"></span>
							</td>
							<td rel="L13" class="lines-code chroma">
								<code></span><span class="cm">				showAll: false ,	//是否显示全部文件，默认false只显示 音视频和文件夹</code>
							</td>
						</tr>
						
						<tr>
							<td id="L14" class="lines-num">
								<span id="L14" data-line-number="14"></span>
							</td>
							<td rel="L14" class="lines-code chroma">
								<code></span><span class="cm"> 				search: true, // 启用小雅的搜索,搜索只会搜第一个开启此开关的磁盘</code>
							</td>
						</tr>
						
						<tr>
							<td id="L15" class="lines-num">
								<span id="L15" data-line-number="15"></span>
							</td>
							<td rel="L15" class="lines-code chroma">
								<code></span><span class="cm">				params:{ 			//对应文件夹参数 如设置对应文件夹的密码</code>
							</td>
						</tr>
						
						<tr>
							<td id="L16" class="lines-num">
								<span id="L16" data-line-number="16"></span>
							</td>
							<td rel="L16" class="lines-code chroma">
								<code></span><span class="cm">					&#39;/abc&#39;:{ password : &#39;123&#39; },</code>
							</td>
						</tr>
						
						<tr>
							<td id="L17" class="lines-num">
								<span id="L17" data-line-number="17"></span>
							</td>
							<td rel="L17" class="lines-code chroma">
								<code></span><span class="cm">					&#39;/abc/abc&#39;:{ password : &#39;123&#39; },</code>
							</td>
						</tr>
						
						<tr>
							<td id="L18" class="lines-num">
								<span id="L18" data-line-number="18"></span>
							</td>
							<td rel="L18" class="lines-code chroma">
								<code></span><span class="cm">				}</code>
							</td>
						</tr>
						
						<tr>
							<td id="L19" class="lines-num">
								<span id="L19" data-line-number="19"></span>
							</td>
							<td rel="L19" class="lines-code chroma">
								<code></span><span class="cm">		}]</code>
							</td>
						</tr>
						
						<tr>
							<td id="L20" class="lines-num">
								<span id="L20" data-line-number="20"></span>
							</td>
							<td rel="L20" class="lines-code chroma">
								<code></span><span class="cm"> * 提示 想要加载文件夹里面全部视频到详情（看剧可以自动播放下一集支持历史记录）</code>
							</td>
						</tr>
						
						<tr>
							<td id="L21" class="lines-num">
								<span id="L21" data-line-number="21"></span>
							</td>
							<td rel="L21" class="lines-code chroma">
								<code></span><span class="cm"> *		需要改软件才能支持，，建议长按文件夹时添加判断 tag == folder 时跳转 DetailActivity</code>
							</td>
						</tr>
						
						<tr>
							<td id="L22" class="lines-num">
								<span id="L22" data-line-number="22"></span>
							</td>
							<td rel="L22" class="lines-code chroma">
								<code></span><span class="cm"> */</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L23" class="lines-num">
								<span id="L23" data-line-number="23"></span>
							</td>
							<td rel="L23" class="lines-code chroma">
								<code><span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">rstrip</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chars</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L24" class="lines-num">
								<span id="L24" data-line-number="24"></span>
							</td>
							<td rel="L24" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">regex</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">chars</span> <span class="o">+</span> <span class="s2">&#34;$&#34;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L25" class="lines-num">
								<span id="L25" data-line-number="25"></span>
							</td>
							<td rel="L25" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">regex</span><span class="p">,</span> <span class="s2">&#34;&#34;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L26" class="lines-num">
								<span id="L26" data-line-number="26"></span>
							</td>
							<td rel="L26" class="lines-code chroma">
								<code><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L27" class="lines-num">
								<span id="L27" data-line-number="27"></span>
							</td>
							<td rel="L27" class="lines-code chroma">
								<code><span class="kd">var</span> <span class="nx">showMode</span> <span class="o">=</span> <span class="s1">&#39;single&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L28" class="lines-num">
								<span id="L28" data-line-number="28"></span>
							</td>
							<td rel="L28" class="lines-code chroma">
								<code><span class="kd">var</span> <span class="nx">searchDriver</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L29" class="lines-num">
								<span id="L29" data-line-number="29"></span>
							</td>
							<td rel="L29" class="lines-code chroma">
								<code><span class="kd">var</span> <span class="nx">limit_search_show</span> <span class="o">=</span> <span class="mi">200</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L30" class="lines-num">
								<span id="L30" data-line-number="30"></span>
							</td>
							<td rel="L30" class="lines-code chroma">
								<code><span class="kd">var</span> <span class="nx">search_type</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L31" class="lines-num">
								<span id="L31" data-line-number="31"></span>
							</td>
							<td rel="L31" class="lines-code chroma">
								<code><span class="kd">var</span> <span class="nx">detail_order</span> <span class="o">=</span> <span class="s1">&#39;name&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L32" class="lines-num">
								<span id="L32" data-line-number="32"></span>
							</td>
							<td rel="L32" class="lines-code chroma">
								<code><span class="kd">var</span> <span class="nx">playRaw</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// 播放直链获取,默认0直接拼接/d 填1可以获取阿里oss链接。注意，有时效性</code>
							</td>
						</tr>
						
						<tr>
							<td id="L33" class="lines-num">
								<span id="L33" data-line-number="33"></span>
							</td>
							<td rel="L33" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="kr">const</span> <span class="nx">request_timeout</span> <span class="o">=</span> <span class="mi">5000</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L34" class="lines-num">
								<span id="L34" data-line-number="34"></span>
							</td>
							<td rel="L34" class="lines-code chroma">
								<code><span class="kr">const</span> <span class="nx">VERSION</span> <span class="o">=</span> <span class="s1">&#39;alist v2/v3 20221223&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L35" class="lines-num">
								<span id="L35" data-line-number="35"></span>
							</td>
							<td rel="L35" class="lines-code chroma">
								<code><span class="kr">const</span> <span class="nx">UA</span> <span class="o">=</span> <span class="s1">&#39;Mozilla/5.0&#39;</span><span class="p">;</span> <span class="c1">//默认请求ua</code>
							</td>
						</tr>
						
						<tr>
							<td id="L36" class="lines-num">
								<span id="L36" data-line-number="36"></span>
							</td>
							<td rel="L36" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="cm">/**</code>
							</td>
						</tr>
						
						<tr>
							<td id="L37" class="lines-num">
								<span id="L37" data-line-number="37"></span>
							</td>
							<td rel="L37" class="lines-code chroma">
								<code></span><span class="cm"> * 打印日志</code>
							</td>
						</tr>
						
						<tr>
							<td id="L38" class="lines-num">
								<span id="L38" data-line-number="38"></span>
							</td>
							<td rel="L38" class="lines-code chroma">
								<code></span><span class="cm"> * @param any 任意变量</code>
							</td>
						</tr>
						
						<tr>
							<td id="L39" class="lines-num">
								<span id="L39" data-line-number="39"></span>
							</td>
							<td rel="L39" class="lines-code chroma">
								<code></span><span class="cm"> */</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L40" class="lines-num">
								<span id="L40" data-line-number="40"></span>
							</td>
							<td rel="L40" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">print</span><span class="p">(</span><span class="nx">any</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L41" class="lines-num">
								<span id="L41" data-line-number="41"></span>
							</td>
							<td rel="L41" class="lines-code chroma">
								<code>	<span class="nx">any</span> <span class="o">=</span> <span class="nx">any</span><span class="o">||</span><span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L42" class="lines-num">
								<span id="L42" data-line-number="42"></span>
							</td>
							<td rel="L42" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">any</span><span class="p">)</span><span class="o">==</span><span class="s1">&#39;object&#39;</span><span class="o">&amp;&amp;</span><span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">any</span><span class="p">)</span><span class="p">.</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L43" class="lines-num">
								<span id="L43" data-line-number="43"></span>
							</td>
							<td rel="L43" class="lines-code chroma">
								<code>		<span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L44" class="lines-num">
								<span id="L44" data-line-number="44"></span>
							</td>
							<td rel="L44" class="lines-code chroma">
								<code>			<span class="nx">any</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">any</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L45" class="lines-num">
								<span id="L45" data-line-number="45"></span>
							</td>
							<td rel="L45" class="lines-code chroma">
								<code>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">any</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L46" class="lines-num">
								<span id="L46" data-line-number="46"></span>
							</td>
							<td rel="L46" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L47" class="lines-num">
								<span id="L47" data-line-number="47"></span>
							</td>
							<td rel="L47" class="lines-code chroma">
								<code>			<span class="c1">// console.log(&#39;print:&#39;+e.message);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L48" class="lines-num">
								<span id="L48" data-line-number="48"></span>
							</td>
							<td rel="L48" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">any</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;:&#39;</span><span class="o">+</span><span class="nx">any</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L49" class="lines-num">
								<span id="L49" data-line-number="49"></span>
							</td>
							<td rel="L49" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L50" class="lines-num">
								<span id="L50" data-line-number="50"></span>
							</td>
							<td rel="L50" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">any</span><span class="p">)</span><span class="o">==</span><span class="s1">&#39;object&#39;</span><span class="o">&amp;&amp;</span><span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">any</span><span class="p">)</span><span class="p">.</span><span class="nx">length</span><span class="o">&lt;</span><span class="mi">1</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L51" class="lines-num">
								<span id="L51" data-line-number="51"></span>
							</td>
							<td rel="L51" class="lines-code chroma">
								<code>		<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;null object&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L52" class="lines-num">
								<span id="L52" data-line-number="52"></span>
							</td>
							<td rel="L52" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L53" class="lines-num">
								<span id="L53" data-line-number="53"></span>
							</td>
							<td rel="L53" class="lines-code chroma">
								<code>		<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">any</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L54" class="lines-num">
								<span id="L54" data-line-number="54"></span>
							</td>
							<td rel="L54" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L55" class="lines-num">
								<span id="L55" data-line-number="55"></span>
							</td>
							<td rel="L55" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L56" class="lines-num">
								<span id="L56" data-line-number="56"></span>
							</td>
							<td rel="L56" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L57" class="lines-num">
								<span id="L57" data-line-number="57"></span>
							</td>
							<td rel="L57" class="lines-code chroma">
								<code><span class="cm">/*** js自封装的方法 ***/</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L58" class="lines-num">
								<span id="L58" data-line-number="58"></span>
							</td>
							<td rel="L58" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L59" class="lines-num">
								<span id="L59" data-line-number="59"></span>
							</td>
							<td rel="L59" class="lines-code chroma">
								<code><span class="cm">/**</code>
							</td>
						</tr>
						
						<tr>
							<td id="L60" class="lines-num">
								<span id="L60" data-line-number="60"></span>
							</td>
							<td rel="L60" class="lines-code chroma">
								<code></span><span class="cm"> * 获取链接的host(带http协议的完整链接)</code>
							</td>
						</tr>
						
						<tr>
							<td id="L61" class="lines-num">
								<span id="L61" data-line-number="61"></span>
							</td>
							<td rel="L61" class="lines-code chroma">
								<code></span><span class="cm"> * @param url 任意一个正常完整的Url,自动提取根</code>
							</td>
						</tr>
						
						<tr>
							<td id="L62" class="lines-num">
								<span id="L62" data-line-number="62"></span>
							</td>
							<td rel="L62" class="lines-code chroma">
								<code></span><span class="cm"> * @returns {string}</code>
							</td>
						</tr>
						
						<tr>
							<td id="L63" class="lines-num">
								<span id="L63" data-line-number="63"></span>
							</td>
							<td rel="L63" class="lines-code chroma">
								<code></span><span class="cm"> */</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L64" class="lines-num">
								<span id="L64" data-line-number="64"></span>
							</td>
							<td rel="L64" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">getHome</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L65" class="lines-num">
								<span id="L65" data-line-number="65"></span>
							</td>
							<td rel="L65" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">url</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L66" class="lines-num">
								<span id="L66" data-line-number="66"></span>
							</td>
							<td rel="L66" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="s1">&#39;&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L67" class="lines-num">
								<span id="L67" data-line-number="67"></span>
							</td>
							<td rel="L67" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L68" class="lines-num">
								<span id="L68" data-line-number="68"></span>
							</td>
							<td rel="L68" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">tmp</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;//&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L69" class="lines-num">
								<span id="L69" data-line-number="69"></span>
							</td>
							<td rel="L69" class="lines-code chroma">
								<code>	<span class="nx">url</span> <span class="o">=</span> <span class="nx">tmp</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;//&#39;</span> <span class="o">+</span> <span class="nx">tmp</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L70" class="lines-num">
								<span id="L70" data-line-number="70"></span>
							</td>
							<td rel="L70" class="lines-code chroma">
								<code>	<span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L71" class="lines-num">
								<span id="L71" data-line-number="71"></span>
							</td>
							<td rel="L71" class="lines-code chroma">
								<code>		<span class="nx">url</span> <span class="o">=</span> <span class="nb">decodeURIComponent</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L72" class="lines-num">
								<span id="L72" data-line-number="72"></span>
							</td>
							<td rel="L72" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L73" class="lines-num">
								<span id="L73" data-line-number="73"></span>
							</td>
							<td rel="L73" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="nx">url</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L74" class="lines-num">
								<span id="L74" data-line-number="74"></span>
							</td>
							<td rel="L74" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L75" class="lines-num">
								<span id="L75" data-line-number="75"></span>
							</td>
							<td rel="L75" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L76" class="lines-num">
								<span id="L76" data-line-number="76"></span>
							</td>
							<td rel="L76" class="lines-code chroma">
								<code><span class="kr">const</span> <span class="nx">http</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span><span class="p">}</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L77" class="lines-num">
								<span id="L77" data-line-number="77"></span>
							</td>
							<td rel="L77" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">method</span> <span class="o">===</span><span class="s1">&#39;POST&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L78" class="lines-num">
								<span id="L78" data-line-number="78"></span>
							</td>
							<td rel="L78" class="lines-code chroma">
								<code>		<span class="nx">options</span><span class="p">.</span><span class="nx">body</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L79" class="lines-num">
								<span id="L79" data-line-number="79"></span>
							</td>
							<td rel="L79" class="lines-code chroma">
								<code>		<span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="p">{</span><span class="s1">&#39;content-type&#39;</span><span class="o">:</span><span class="s1">&#39;application/json&#39;</span><span class="p">}</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L80" class="lines-num">
								<span id="L80" data-line-number="80"></span>
							</td>
							<td rel="L80" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L81" class="lines-num">
								<span id="L81" data-line-number="81"></span>
							</td>
							<td rel="L81" class="lines-code chroma">
								<code>	<span class="nx">options</span><span class="p">.</span><span class="nx">timeout</span> <span class="o">=</span> <span class="nx">request_timeout</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L82" class="lines-num">
								<span id="L82" data-line-number="82"></span>
							</td>
							<td rel="L82" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L83" class="lines-num">
								<span id="L83" data-line-number="83"></span>
							</td>
							<td rel="L83" class="lines-code chroma">
								<code>		<span class="nx">options</span><span class="p">.</span><span class="nx">headers</span> <span class="o">=</span> <span class="p">{</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L84" class="lines-num">
								<span id="L84" data-line-number="84"></span>
							</td>
							<td rel="L84" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L85" class="lines-num">
								<span id="L85" data-line-number="85"></span>
							</td>
							<td rel="L85" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">)</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">it</span><span class="p">=&gt;</span><span class="nx">it</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L86" class="lines-num">
								<span id="L86" data-line-number="86"></span>
							</td>
							<td rel="L86" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">keys</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;referer&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L87" class="lines-num">
								<span id="L87" data-line-number="87"></span>
							</td>
							<td rel="L87" class="lines-code chroma">
								<code>		<span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;Referer&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">getHome</span><span class="p">(</span><span class="nx">url</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L88" class="lines-num">
								<span id="L88" data-line-number="88"></span>
							</td>
							<td rel="L88" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L89" class="lines-num">
								<span id="L89" data-line-number="89"></span>
							</td>
							<td rel="L89" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">keys</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;user-agent&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L90" class="lines-num">
								<span id="L90" data-line-number="90"></span>
							</td>
							<td rel="L90" class="lines-code chroma">
								<code>		<span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">[</span><span class="s1">&#39;User-Agent&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">UA</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L91" class="lines-num">
								<span id="L91" data-line-number="91"></span>
							</td>
							<td rel="L91" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L92" class="lines-num">
								<span id="L92" data-line-number="92"></span>
							</td>
							<td rel="L92" class="lines-code chroma">
								<code>	<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">headers</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L93" class="lines-num">
								<span id="L93" data-line-number="93"></span>
							</td>
							<td rel="L93" class="lines-code chroma">
								<code>	<span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L94" class="lines-num">
								<span id="L94" data-line-number="94"></span>
							</td>
							<td rel="L94" class="lines-code chroma">
								<code>		<span class="kr">const</span> <span class="nx">res</span> <span class="o">=</span> <span class="nx">req</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L95" class="lines-num">
								<span id="L95" data-line-number="95"></span>
							</td>
							<td rel="L95" class="lines-code chroma">
								<code>		<span class="c1">// if(options.headers[&#39;Authorization&#39;]){</code>
							</td>
						</tr>
						
						<tr>
							<td id="L96" class="lines-num">
								<span id="L96" data-line-number="96"></span>
							</td>
							<td rel="L96" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="c1">// 	console.log(res.content);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L97" class="lines-num">
								<span id="L97" data-line-number="97"></span>
							</td>
							<td rel="L97" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="c1">// }</code>
							</td>
						</tr>
						
						<tr>
							<td id="L98" class="lines-num">
								<span id="L98" data-line-number="98"></span>
							</td>
							<td rel="L98" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="nx">res</span><span class="p">.</span><span class="nx">json</span> <span class="o">=</span> <span class="p">(</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="nx">res</span><span class="o">&amp;&amp;</span><span class="nx">res</span><span class="p">.</span><span class="nx">content</span> <span class="o">?</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">res</span><span class="p">.</span><span class="nx">content</span><span class="p">)</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L99" class="lines-num">
								<span id="L99" data-line-number="99"></span>
							</td>
							<td rel="L99" class="lines-code chroma">
								<code>		<span class="nx">res</span><span class="p">.</span><span class="nx">text</span> <span class="o">=</span> <span class="p">(</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="nx">res</span><span class="o">&amp;&amp;</span><span class="nx">res</span><span class="p">.</span><span class="nx">content</span> <span class="o">?</span> <span class="nx">res</span><span class="p">.</span><span class="nx">content</span><span class="o">:</span><span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L100" class="lines-num">
								<span id="L100" data-line-number="100"></span>
							</td>
							<td rel="L100" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">res</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L101" class="lines-num">
								<span id="L101" data-line-number="101"></span>
							</td>
							<td rel="L101" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L102" class="lines-num">
								<span id="L102" data-line-number="102"></span>
							</td>
							<td rel="L102" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L103" class="lines-num">
								<span id="L103" data-line-number="103"></span>
							</td>
							<td rel="L103" class="lines-code chroma">
								<code>			<span class="nx">json</span><span class="p">(</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L104" class="lines-num">
								<span id="L104" data-line-number="104"></span>
							</td>
							<td rel="L104" class="lines-code chroma">
								<code>				<span class="k">return</span> <span class="kc">null</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L105" class="lines-num">
								<span id="L105" data-line-number="105"></span>
							</td>
							<td rel="L105" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">,</span> <span class="nx">text</span><span class="p">(</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L106" class="lines-num">
								<span id="L106" data-line-number="106"></span>
							</td>
							<td rel="L106" class="lines-code chroma">
								<code>				<span class="k">return</span> <span class="s1">&#39;&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L107" class="lines-num">
								<span id="L107" data-line-number="107"></span>
							</td>
							<td rel="L107" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L108" class="lines-num">
								<span id="L108" data-line-number="108"></span>
							</td>
							<td rel="L108" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L109" class="lines-num">
								<span id="L109" data-line-number="109"></span>
							</td>
							<td rel="L109" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L110" class="lines-num">
								<span id="L110" data-line-number="110"></span>
							</td>
							<td rel="L110" class="lines-code chroma">
								<code><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L111" class="lines-num">
								<span id="L111" data-line-number="111"></span>
							</td>
							<td rel="L111" class="lines-code chroma">
								<code><span class="p">[</span><span class="s2">&#34;get&#34;</span><span class="p">,</span> <span class="s2">&#34;post&#34;</span><span class="p">]</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">method</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L112" class="lines-num">
								<span id="L112" data-line-number="112"></span>
							</td>
							<td rel="L112" class="lines-code chroma">
								<code>    <span class="nx">http</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span><span class="p">}</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L113" class="lines-num">
								<span id="L113" data-line-number="113"></span>
							</td>
							<td rel="L113" class="lines-code chroma">
								<code>        <span class="k">return</span> <span class="nx">http</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="nx">options</span><span class="p">,</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span> <span class="nx">method</span><span class="p">.</span><span class="nx">toUpperCase</span><span class="p">(</span><span class="p">)</span><span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L114" class="lines-num">
								<span id="L114" data-line-number="114"></span>
							</td>
							<td rel="L114" class="lines-code chroma">
								<code>    <span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L115" class="lines-num">
								<span id="L115" data-line-number="115"></span>
							</td>
							<td rel="L115" class="lines-code chroma">
								<code><span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L116" class="lines-num">
								<span id="L116" data-line-number="116"></span>
							</td>
							<td rel="L116" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L117" class="lines-num">
								<span id="L117" data-line-number="117"></span>
							</td>
							<td rel="L117" class="lines-code chroma">
								<code><span class="kr">const</span> <span class="nx">__drives</span> <span class="o">=</span> <span class="p">{</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L118" class="lines-num">
								<span id="L118" data-line-number="118"></span>
							</td>
							<td rel="L118" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L119" class="lines-num">
								<span id="L119" data-line-number="119"></span>
							</td>
							<td rel="L119" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">isMedia</span><span class="p">(</span><span class="nx">file</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L120" class="lines-num">
								<span id="L120" data-line-number="120"></span>
							</td>
							<td rel="L120" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="sr">/\.(dff|dsf|mp3|aac|wav|wma|cda|flac|m4a|mid|mka|mp2|mpa|mpc|ape|ofr|ogg|ra|wv|tta|ac3|dts|tak|webm|wmv|mpeg|mov|ram|swf|mp4|avi|rm|rmvb|flv|mpg|mkv|m3u8|ts|3gp|asf)$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">file</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L121" class="lines-num">
								<span id="L121" data-line-number="121"></span>
							</td>
							<td rel="L121" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L122" class="lines-num">
								<span id="L122" data-line-number="122"></span>
							</td>
							<td rel="L122" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L123" class="lines-num">
								<span id="L123" data-line-number="123"></span>
							</td>
							<td rel="L123" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">get_drives_path</span><span class="p">(</span><span class="nx">tid</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L124" class="lines-num">
								<span id="L124" data-line-number="124"></span>
							</td>
							<td rel="L124" class="lines-code chroma">
								<code>	<span class="kr">const</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;$&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L125" class="lines-num">
								<span id="L125" data-line-number="125"></span>
							</td>
							<td rel="L125" class="lines-code chroma">
								<code>	<span class="kr">const</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L126" class="lines-num">
								<span id="L126" data-line-number="126"></span>
							</td>
							<td rel="L126" class="lines-code chroma">
								<code>	<span class="kr">const</span> <span class="nx">path</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">index</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L127" class="lines-num">
								<span id="L127" data-line-number="127"></span>
							</td>
							<td rel="L127" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="p">{</span> <span class="nx">drives</span><span class="o">:</span> <span class="nx">get_drives</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span><span class="p">,</span> <span class="nx">path</span> <span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L128" class="lines-num">
								<span id="L128" data-line-number="128"></span>
							</td>
							<td rel="L128" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L129" class="lines-num">
								<span id="L129" data-line-number="129"></span>
							</td>
							<td rel="L129" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L130" class="lines-num">
								<span id="L130" data-line-number="130"></span>
							</td>
							<td rel="L130" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">get_drives</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L131" class="lines-num">
								<span id="L131" data-line-number="131"></span>
							</td>
							<td rel="L131" class="lines-code chroma">
								<code>	<span class="kr">const</span> <span class="p">{</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">api</span><span class="p">,</span> <span class="nx">server</span><span class="p">,</span><span class="nx">headers</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">__drives</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L132" class="lines-num">
								<span id="L132" data-line-number="132"></span>
							</td>
							<td rel="L132" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//获取 设置</code>
							</td>
						</tr>
						
						<tr>
							<td id="L133" class="lines-num">
								<span id="L133" data-line-number="133"></span>
							</td>
							<td rel="L133" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L134" class="lines-num">
								<span id="L134" data-line-number="134"></span>
							</td>
							<td rel="L134" class="lines-code chroma">
								<code>		<span class="kr">const</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">http</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">server</span> <span class="o">+</span> <span class="s1">&#39;/api/public/settings&#39;</span><span class="p">,</span><span class="p">{</span><span class="nx">headers</span><span class="o">:</span><span class="nx">headers</span><span class="p">}</span><span class="p">)</span><span class="p">.</span><span class="nx">json</span><span class="p">(</span><span class="p">)</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L135" class="lines-num">
								<span id="L135" data-line-number="135"></span>
							</td>
							<td rel="L135" class="lines-code chroma">
								<code>		<span class="k">if</span> <span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L136" class="lines-num">
								<span id="L136" data-line-number="136"></span>
							</td>
							<td rel="L136" class="lines-code chroma">
								<code>			<span class="nx">settings</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">x</span> <span class="p">=&gt;</span> <span class="nx">x</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;title&#39;</span><span class="p">)</span><span class="o">?</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L137" class="lines-num">
								<span id="L137" data-line-number="137"></span>
							</td>
							<td rel="L137" class="lines-code chroma">
								<code>			<span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L138" class="lines-num">
								<span id="L138" data-line-number="138"></span>
							</td>
							<td rel="L138" class="lines-code chroma">
								<code>			<span class="nx">settings</span><span class="p">.</span><span class="nx">version</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">x</span> <span class="p">=&gt;</span> <span class="nx">x</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;version&#39;</span><span class="p">)</span><span class="o">?</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L139" class="lines-num">
								<span id="L139" data-line-number="139"></span>
							</td>
							<td rel="L139" class="lines-code chroma">
								<code>			<span class="nx">settings</span><span class="p">.</span><span class="nx">enableSearch</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">x</span> <span class="p">=&gt;</span> <span class="nx">x</span><span class="p">.</span><span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;enable search&#39;</span><span class="p">)</span><span class="o">?</span><span class="p">.</span><span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;true&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L140" class="lines-num">
								<span id="L140" data-line-number="140"></span>
							</td>
							<td rel="L140" class="lines-code chroma">
								<code>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L141" class="lines-num">
								<span id="L141" data-line-number="141"></span>
							</td>
							<td rel="L141" class="lines-code chroma">
								<code>			<span class="nx">settings</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">title</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L142" class="lines-num">
								<span id="L142" data-line-number="142"></span>
							</td>
							<td rel="L142" class="lines-code chroma">
								<code>			<span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L143" class="lines-num">
								<span id="L143" data-line-number="143"></span>
							</td>
							<td rel="L143" class="lines-code chroma">
								<code>			<span class="nx">settings</span><span class="p">.</span><span class="nx">version</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">version</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L144" class="lines-num">
								<span id="L144" data-line-number="144"></span>
							</td>
							<td rel="L144" class="lines-code chroma">
								<code>			<span class="nx">settings</span><span class="p">.</span><span class="nx">enableSearch</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span> <span class="c1">//v3 没有找到 搜索配置</code>
							</td>
						</tr>
						
						<tr>
							<td id="L145" class="lines-num">
								<span id="L145" data-line-number="145"></span>
							</td>
							<td rel="L145" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L146" class="lines-num">
								<span id="L146" data-line-number="146"></span>
							</td>
							<td rel="L146" class="lines-code chroma">
								<code>		<span class="c1">//不同版本 接口不一样</code>
							</td>
						</tr>
						
						<tr>
							<td id="L147" class="lines-num">
								<span id="L147" data-line-number="147"></span>
							</td>
							<td rel="L147" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="nx">api</span><span class="p">.</span><span class="nx">path</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">?</span> <span class="s1">&#39;/api/fs/list&#39;</span> <span class="o">:</span> <span class="s1">&#39;/api/public/path&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L148" class="lines-num">
								<span id="L148" data-line-number="148"></span>
							</td>
							<td rel="L148" class="lines-code chroma">
								<code>		<span class="nx">api</span><span class="p">.</span><span class="nx">file</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">?</span> <span class="s1">&#39;/api/fs/get&#39;</span> <span class="o">:</span> <span class="s1">&#39;/api/public/path&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L149" class="lines-num">
								<span id="L149" data-line-number="149"></span>
							</td>
							<td rel="L149" class="lines-code chroma">
								<code>		<span class="nx">api</span><span class="p">.</span><span class="nx">search</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">?</span> <span class="s1">&#39;/api/public/search&#39;</span> <span class="o">:</span> <span class="s1">&#39;/api/public/search&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L150" class="lines-num">
								<span id="L150" data-line-number="150"></span>
							</td>
							<td rel="L150" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L151" class="lines-num">
								<span id="L151" data-line-number="151"></span>
							</td>
							<td rel="L151" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="nx">__drives</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L152" class="lines-num">
								<span id="L152" data-line-number="152"></span>
							</td>
							<td rel="L152" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L153" class="lines-num">
								<span id="L153" data-line-number="153"></span>
							</td>
							<td rel="L153" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L154" class="lines-num">
								<span id="L154" data-line-number="154"></span>
							</td>
							<td rel="L154" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">init</span><span class="p">(</span><span class="nx">ext</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L155" class="lines-num">
								<span id="L155" data-line-number="155"></span>
							</td>
							<td rel="L155" class="lines-code chroma">
								<code>	<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&#34;当前版本号:&#34;</span><span class="o">+</span><span class="nx">VERSION</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L156" class="lines-num">
								<span id="L156" data-line-number="156"></span>
							</td>
							<td rel="L156" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">data</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L157" class="lines-num">
								<span id="L157" data-line-number="157"></span>
							</td>
							<td rel="L157" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">ext</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L158" class="lines-num">
								<span id="L158" data-line-number="158"></span>
							</td>
							<td rel="L158" class="lines-code chroma">
								<code>		<span class="nx">data</span> <span class="o">=</span> <span class="nx">ext</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L159" class="lines-num">
								<span id="L159" data-line-number="159"></span>
							</td>
							<td rel="L159" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="s1">&#39;alist ext:object&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L160" class="lines-num">
								<span id="L160" data-line-number="160"></span>
							</td>
							<td rel="L160" class="lines-code chroma">
								<code>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">ext</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L161" class="lines-num">
								<span id="L161" data-line-number="161"></span>
							</td>
							<td rel="L161" class="lines-code chroma">
								<code>		<span class="k">if</span> <span class="p">(</span><span class="nx">ext</span><span class="p">.</span><span class="nx">startsWith</span><span class="p">(</span><span class="s1">&#39;http&#39;</span><span class="p">)</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L162" class="lines-num">
								<span id="L162" data-line-number="162"></span>
							</td>
							<td rel="L162" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">alist_data</span> <span class="o">=</span> <span class="nx">ext</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;;&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L163" class="lines-num">
								<span id="L163" data-line-number="163"></span>
							</td>
							<td rel="L163" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">alist_data_url</span> <span class="o">=</span> <span class="nx">alist_data</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L164" class="lines-num">
								<span id="L164" data-line-number="164"></span>
							</td>
							<td rel="L164" class="lines-code chroma">
								<code>			<span class="nx">limit_search_show</span> <span class="o">=</span> <span class="nx">alist_data</span><span class="p">.</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">1</span><span class="o">?</span><span class="nb">Number</span><span class="p">(</span><span class="nx">alist_data</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">)</span><span class="o">||</span><span class="nx">limit_search_show</span><span class="o">:</span><span class="nx">limit_search_show</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L165" class="lines-num">
								<span id="L165" data-line-number="165"></span>
							</td>
							<td rel="L165" class="lines-code chroma">
								<code>			<span class="nx">search_type</span> <span class="o">=</span> <span class="nx">alist_data</span><span class="p">.</span><span class="nx">length</span><span class="o">&gt;</span><span class="mi">2</span><span class="o">?</span><span class="nx">alist_data</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">:</span><span class="nx">search_type</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L166" class="lines-num">
								<span id="L166" data-line-number="166"></span>
							</td>
							<td rel="L166" class="lines-code chroma">
								<code>			<span class="nx">print</span><span class="p">(</span><span class="nx">alist_data_url</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L167" class="lines-num">
								<span id="L167" data-line-number="167"></span>
							</td>
							<td rel="L167" class="lines-code chroma">
								<code>			<span class="nx">data</span> <span class="o">=</span> <span class="nx">http</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">alist_data_url</span><span class="p">)</span><span class="p">.</span><span class="nx">json</span><span class="p">(</span><span class="p">)</span><span class="p">;</span> <span class="c1">// .map(it=&gt;{it.name=&#39;🙋丫仙女&#39;;return it})</code>
							</td>
						</tr>
						
						<tr>
							<td id="L168" class="lines-num">
								<span id="L168" data-line-number="168"></span>
							</td>
							<td rel="L168" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L169" class="lines-num">
								<span id="L169" data-line-number="169"></span>
							</td>
							<td rel="L169" class="lines-code chroma">
								<code>			<span class="nx">print</span><span class="p">(</span><span class="s1">&#39;alist ext:json string&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L170" class="lines-num">
								<span id="L170" data-line-number="170"></span>
							</td>
							<td rel="L170" class="lines-code chroma">
								<code>			<span class="nx">data</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">ext</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L171" class="lines-num">
								<span id="L171" data-line-number="171"></span>
							</td>
							<td rel="L171" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L172" class="lines-num">
								<span id="L172" data-line-number="172"></span>
							</td>
							<td rel="L172" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L173" class="lines-num">
								<span id="L173" data-line-number="173"></span>
							</td>
							<td rel="L173" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L174" class="lines-num">
								<span id="L174" data-line-number="174"></span>
							</td>
							<td rel="L174" class="lines-code chroma">
								<code>	<span class="c1">// print(data); // 测试证明壳子标题支持emoji,是http请求源码不支持emoji</code>
							</td>
						</tr>
						
						<tr>
							<td id="L175" class="lines-num">
								<span id="L175" data-line-number="175"></span>
							</td>
							<td rel="L175" class="lines-code chroma">
								<code></span><span class="c1"></span>	<span class="kd">let</span> <span class="nx">drives</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L176" class="lines-num">
								<span id="L176" data-line-number="176"></span>
							</td>
							<td rel="L176" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="s1">&#39;server&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">data</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L177" class="lines-num">
								<span id="L177" data-line-number="177"></span>
							</td>
							<td rel="L177" class="lines-code chroma">
								<code>		<span class="nx">drives</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L178" class="lines-num">
								<span id="L178" data-line-number="178"></span>
							</td>
							<td rel="L178" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">data</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="s1">&#39;drives&#39;</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">drives</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L179" class="lines-num">
								<span id="L179" data-line-number="179"></span>
							</td>
							<td rel="L179" class="lines-code chroma">
								<code>		<span class="nx">drives</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">drives</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">it</span><span class="p">=&gt;</span><span class="p">(</span><span class="nx">it</span><span class="p">.</span><span class="nx">type</span><span class="o">&amp;&amp;</span><span class="nx">it</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s1">&#39;alist&#39;</span><span class="p">)</span><span class="o">||</span><span class="o">!</span><span class="nx">it</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L180" class="lines-num">
								<span id="L180" data-line-number="180"></span>
							</td>
							<td rel="L180" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L181" class="lines-num">
								<span id="L181" data-line-number="181"></span>
							</td>
							<td rel="L181" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="nx">drives</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L182" class="lines-num">
								<span id="L182" data-line-number="182"></span>
							</td>
							<td rel="L182" class="lines-code chroma">
								<code>	<span class="nx">searchDriver</span> <span class="o">=</span> <span class="p">(</span><span class="nx">drives</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">x</span><span class="p">=&gt;</span><span class="nx">x</span><span class="p">.</span><span class="nx">search</span><span class="p">)</span><span class="o">||</span><span class="p">{</span><span class="p">}</span><span class="p">)</span><span class="p">.</span><span class="nx">name</span><span class="o">||</span><span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L183" class="lines-num">
								<span id="L183" data-line-number="183"></span>
							</td>
							<td rel="L183" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">searchDriver</span> <span class="o">&amp;&amp;</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L184" class="lines-num">
								<span id="L184" data-line-number="184"></span>
							</td>
							<td rel="L184" class="lines-code chroma">
								<code>		<span class="nx">searchDriver</span> <span class="o">=</span> <span class="nx">drives</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L185" class="lines-num">
								<span id="L185" data-line-number="185"></span>
							</td>
							<td rel="L185" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L186" class="lines-num">
								<span id="L186" data-line-number="186"></span>
							</td>
							<td rel="L186" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="nx">searchDriver</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L187" class="lines-num">
								<span id="L187" data-line-number="187"></span>
							</td>
							<td rel="L187" class="lines-code chroma">
								<code>	<span class="nx">drives</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">item</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L188" class="lines-num">
								<span id="L188" data-line-number="188"></span>
							</td>
							<td rel="L188" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">_path_param</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L189" class="lines-num">
								<span id="L189" data-line-number="189"></span>
							</td>
							<td rel="L189" class="lines-code chroma">
								<code>		<span class="k">if</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">params</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L190" class="lines-num">
								<span id="L190" data-line-number="190"></span>
							</td>
							<td rel="L190" class="lines-code chroma">
								<code>			<span class="nx">_path_param</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">params</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L191" class="lines-num">
								<span id="L191" data-line-number="191"></span>
							</td>
							<td rel="L191" class="lines-code chroma">
								<code>			<span class="c1">// 升序排列</code>
							</td>
						</tr>
						
						<tr>
							<td id="L192" class="lines-num">
								<span id="L192" data-line-number="192"></span>
							</td>
							<td rel="L192" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="nx">_path_param</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">)</span><span class="p">=&gt;</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L193" class="lines-num">
								<span id="L193" data-line-number="193"></span>
							</td>
							<td rel="L193" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L194" class="lines-num">
								<span id="L194" data-line-number="194"></span>
							</td>
							<td rel="L194" class="lines-code chroma">
								<code>		<span class="k">if</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">password</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L195" class="lines-num">
								<span id="L195" data-line-number="195"></span>
							</td>
							<td rel="L195" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">pwdObj</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L196" class="lines-num">
								<span id="L196" data-line-number="196"></span>
							</td>
							<td rel="L196" class="lines-code chroma">
								<code>				<span class="nx">password</span><span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">password</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L197" class="lines-num">
								<span id="L197" data-line-number="197"></span>
							</td>
							<td rel="L197" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L198" class="lines-num">
								<span id="L198" data-line-number="198"></span>
							</td>
							<td rel="L198" class="lines-code chroma">
								<code>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">item</span><span class="p">.</span><span class="nx">params</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L199" class="lines-num">
								<span id="L199" data-line-number="199"></span>
							</td>
							<td rel="L199" class="lines-code chroma">
								<code>				<span class="nx">item</span><span class="p">.</span><span class="nx">params</span> <span class="o">=</span> <span class="p">{</span><span class="s1">&#39;/&#39;</span><span class="o">:</span><span class="nx">pwdObj</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L200" class="lines-num">
								<span id="L200" data-line-number="200"></span>
							</td>
							<td rel="L200" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L201" class="lines-num">
								<span id="L201" data-line-number="201"></span>
							</td>
							<td rel="L201" class="lines-code chroma">
								<code>				<span class="nx">item</span><span class="p">.</span><span class="nx">params</span><span class="p">[</span><span class="s1">&#39;/&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">pwdObj</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L202" class="lines-num">
								<span id="L202" data-line-number="202"></span>
							</td>
							<td rel="L202" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L203" class="lines-num">
								<span id="L203" data-line-number="203"></span>
							</td>
							<td rel="L203" class="lines-code chroma">
								<code>			<span class="nx">_path_param</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L204" class="lines-num">
								<span id="L204" data-line-number="204"></span>
							</td>
							<td rel="L204" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L205" class="lines-num">
								<span id="L205" data-line-number="205"></span>
							</td>
							<td rel="L205" class="lines-code chroma">
								<code>		<span class="nx">__drives</span><span class="p">[</span><span class="nx">item</span><span class="p">.</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L206" class="lines-num">
								<span id="L206" data-line-number="206"></span>
							</td>
							<td rel="L206" class="lines-code chroma">
								<code>			<span class="nx">name</span><span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L207" class="lines-num">
								<span id="L207" data-line-number="207"></span>
							</td>
							<td rel="L207" class="lines-code chroma">
								<code>			<span class="nx">server</span><span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">server</span><span class="p">.</span><span class="nx">endsWith</span><span class="p">(</span><span class="s2">&#34;/&#34;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">item</span><span class="p">.</span><span class="nx">server</span><span class="p">.</span><span class="nx">rstrip</span><span class="p">(</span><span class="s2">&#34;/&#34;</span><span class="p">)</span> <span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">server</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L208" class="lines-num">
								<span id="L208" data-line-number="208"></span>
							</td>
							<td rel="L208" class="lines-code chroma">
								<code>			<span class="nx">startPage</span><span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">startPage</span> <span class="o">||</span> <span class="s1">&#39;/&#39;</span><span class="p">,</span> <span class="c1">//首页</code>
							</td>
						</tr>
						
						<tr>
							<td id="L209" class="lines-num">
								<span id="L209" data-line-number="209"></span>
							</td>
							<td rel="L209" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="nx">showAll</span><span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">showAll</span> <span class="o">===</span> <span class="kc">true</span><span class="p">,</span> <span class="c1">//默认只显示 视频和文件夹，如果想显示全部 showAll 设置true</code>
							</td>
						</tr>
						
						<tr>
							<td id="L210" class="lines-num">
								<span id="L210" data-line-number="210"></span>
							</td>
							<td rel="L210" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="nx">search</span><span class="o">:</span> <span class="o">!</span><span class="o">!</span><span class="nx">item</span><span class="p">.</span><span class="nx">search</span><span class="p">,</span> <span class="c1">//是否支持搜索,只有小丫的可以,多个可搜索只取最前面的一个</code>
							</td>
						</tr>
						
						<tr>
							<td id="L211" class="lines-num">
								<span id="L211" data-line-number="211"></span>
							</td>
							<td rel="L211" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="nx">params</span><span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">params</span> <span class="o">||</span> <span class="p">{</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L212" class="lines-num">
								<span id="L212" data-line-number="212"></span>
							</td>
							<td rel="L212" class="lines-code chroma">
								<code>			<span class="nx">_path_param</span><span class="o">:</span> <span class="nx">_path_param</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L213" class="lines-num">
								<span id="L213" data-line-number="213"></span>
							</td>
							<td rel="L213" class="lines-code chroma">
								<code>			<span class="nx">settings</span><span class="o">:</span> <span class="p">{</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L214" class="lines-num">
								<span id="L214" data-line-number="214"></span>
							</td>
							<td rel="L214" class="lines-code chroma">
								<code>			<span class="nx">api</span><span class="o">:</span> <span class="p">{</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L215" class="lines-num">
								<span id="L215" data-line-number="215"></span>
							</td>
							<td rel="L215" class="lines-code chroma">
								<code>			<span class="nx">headers</span><span class="o">:</span><span class="nx">item</span><span class="p">.</span><span class="nx">headers</span><span class="o">||</span><span class="p">{</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L216" class="lines-num">
								<span id="L216" data-line-number="216"></span>
							</td>
							<td rel="L216" class="lines-code chroma">
								<code>			<span class="nx">getParams</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L217" class="lines-num">
								<span id="L217" data-line-number="217"></span>
							</td>
							<td rel="L217" class="lines-code chroma">
								<code>				<span class="kr">const</span> <span class="nx">key</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_path_param</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">x</span> <span class="p">=&gt;</span> <span class="nx">path</span><span class="p">.</span><span class="nx">startsWith</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L218" class="lines-num">
								<span id="L218" data-line-number="218"></span>
							</td>
							<td rel="L218" class="lines-code chroma">
								<code>				<span class="k">return</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">assign</span><span class="p">(</span><span class="p">{</span><span class="p">}</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">params</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span><span class="p">,</span> <span class="p">{</span> <span class="nx">path</span> <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L219" class="lines-num">
								<span id="L219" data-line-number="219"></span>
							</td>
							<td rel="L219" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L220" class="lines-num">
								<span id="L220" data-line-number="220"></span>
							</td>
							<td rel="L220" class="lines-code chroma">
								<code>			<span class="nx">getPath</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L221" class="lines-num">
								<span id="L221" data-line-number="221"></span>
							</td>
							<td rel="L221" class="lines-code chroma">
								<code>				<span class="kr">const</span> <span class="nx">res</span> <span class="o">=</span> <span class="nx">http</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">server</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">api</span><span class="p">.</span><span class="nx">path</span><span class="p">,</span> <span class="p">{</span> <span class="nx">data</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">getParams</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">headers</span> <span class="p">}</span><span class="p">)</span><span class="p">.</span><span class="nx">json</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L222" class="lines-num">
								<span id="L222" data-line-number="222"></span>
							</td>
							<td rel="L222" class="lines-code chroma">
								<code>				<span class="c1">// console.log(res);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L223" class="lines-num">
								<span id="L223" data-line-number="223"></span>
							</td>
							<td rel="L223" class="lines-code chroma">
								<code></span><span class="c1"></span>				<span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L224" class="lines-num">
								<span id="L224" data-line-number="224"></span>
							</td>
							<td rel="L224" class="lines-code chroma">
								<code>					<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">?</span> <span class="nx">res</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">content</span> <span class="o">:</span> <span class="nx">res</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">files</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L225" class="lines-num">
								<span id="L225" data-line-number="225"></span>
							</td>
							<td rel="L225" class="lines-code chroma">
								<code>				<span class="p">}</span><span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L226" class="lines-num">
								<span id="L226" data-line-number="226"></span>
							</td>
							<td rel="L226" class="lines-code chroma">
								<code>					<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="sb">`</span><span class="sb">getPath发生错误:</span><span class="si">${</span><span class="nx">e</span><span class="p">.</span><span class="nx">message</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L227" class="lines-num">
								<span id="L227" data-line-number="227"></span>
							</td>
							<td rel="L227" class="lines-code chroma">
								<code>					<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">res</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L228" class="lines-num">
								<span id="L228" data-line-number="228"></span>
							</td>
							<td rel="L228" class="lines-code chroma">
								<code>					<span class="k">return</span> <span class="p">[</span><span class="p">{</span><span class="nx">name</span><span class="o">:</span><span class="s1">&#39;error&#39;</span><span class="p">,</span><span class="nx">value</span><span class="o">:</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">res</span><span class="p">)</span><span class="p">}</span><span class="p">]</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L229" class="lines-num">
								<span id="L229" data-line-number="229"></span>
							</td>
							<td rel="L229" class="lines-code chroma">
								<code>				<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L230" class="lines-num">
								<span id="L230" data-line-number="230"></span>
							</td>
							<td rel="L230" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L231" class="lines-num">
								<span id="L231" data-line-number="231"></span>
							</td>
							<td rel="L231" class="lines-code chroma">
								<code>			<span class="nx">getFile</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L232" class="lines-num">
								<span id="L232" data-line-number="232"></span>
							</td>
							<td rel="L232" class="lines-code chroma">
								<code>				<span class="kd">let</span> <span class="nx">raw_url</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">server</span><span class="o">+</span><span class="s1">&#39;/d&#39;</span><span class="o">+</span><span class="nx">path</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L233" class="lines-num">
								<span id="L233" data-line-number="233"></span>
							</td>
							<td rel="L233" class="lines-code chroma">
								<code>				<span class="nx">raw_url</span> <span class="o">=</span> <span class="nb">encodeURI</span><span class="p">(</span><span class="nx">raw_url</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L234" class="lines-num">
								<span id="L234" data-line-number="234"></span>
							</td>
							<td rel="L234" class="lines-code chroma">
								<code>				<span class="kd">let</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">{</span><span class="nx">raw_url</span><span class="o">:</span><span class="nx">raw_url</span><span class="p">,</span><span class="nx">raw_url1</span><span class="o">:</span><span class="nx">raw_url</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L235" class="lines-num">
								<span id="L235" data-line-number="235"></span>
							</td>
							<td rel="L235" class="lines-code chroma">
								<code>				<span class="k">if</span><span class="p">(</span><span class="nx">playRaw</span><span class="o">===</span><span class="mi">1</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L236" class="lines-num">
								<span id="L236" data-line-number="236"></span>
							</td>
							<td rel="L236" class="lines-code chroma">
								<code>					<span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L237" class="lines-num">
								<span id="L237" data-line-number="237"></span>
							</td>
							<td rel="L237" class="lines-code chroma">
								<code>						<span class="kr">const</span> <span class="nx">res</span> <span class="o">=</span> <span class="nx">http</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">server</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">api</span><span class="p">.</span><span class="nx">file</span><span class="p">,</span> <span class="p">{</span> <span class="nx">data</span><span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">getParams</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span><span class="p">,</span><span class="nx">headers</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">headers</span> <span class="p">}</span><span class="p">)</span><span class="p">.</span><span class="nx">json</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L238" class="lines-num">
								<span id="L238" data-line-number="238"></span>
							</td>
							<td rel="L238" class="lines-code chroma">
								<code>						<span class="nx">data</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">?</span> <span class="nx">res</span><span class="p">.</span><span class="nx">data</span> <span class="o">:</span> <span class="nx">res</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">files</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L239" class="lines-num">
								<span id="L239" data-line-number="239"></span>
							</td>
							<td rel="L239" class="lines-code chroma">
								<code>						<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L240" class="lines-num">
								<span id="L240" data-line-number="240"></span>
							</td>
							<td rel="L240" class="lines-code chroma">
								<code>							<span class="nx">data</span><span class="p">.</span><span class="nx">raw_url</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">url</span><span class="p">;</span> <span class="c1">//v2 的url和v3不一样</code>
							</td>
						</tr>
						
						<tr>
							<td id="L241" class="lines-num">
								<span id="L241" data-line-number="241"></span>
							</td>
							<td rel="L241" class="lines-code chroma">
								<code></span><span class="c1"></span>						<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L242" class="lines-num">
								<span id="L242" data-line-number="242"></span>
							</td>
							<td rel="L242" class="lines-code chroma">
								<code>						<span class="nx">data</span><span class="p">.</span><span class="nx">raw_url1</span> <span class="o">=</span> <span class="nx">raw_url</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L243" class="lines-num">
								<span id="L243" data-line-number="243"></span>
							</td>
							<td rel="L243" class="lines-code chroma">
								<code>						<span class="k">return</span> <span class="nx">data</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L244" class="lines-num">
								<span id="L244" data-line-number="244"></span>
							</td>
							<td rel="L244" class="lines-code chroma">
								<code>					<span class="p">}</span><span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L245" class="lines-num">
								<span id="L245" data-line-number="245"></span>
							</td>
							<td rel="L245" class="lines-code chroma">
								<code>						<span class="k">return</span> <span class="nx">data</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L246" class="lines-num">
								<span id="L246" data-line-number="246"></span>
							</td>
							<td rel="L246" class="lines-code chroma">
								<code>					<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L247" class="lines-num">
								<span id="L247" data-line-number="247"></span>
							</td>
							<td rel="L247" class="lines-code chroma">
								<code>				<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L248" class="lines-num">
								<span id="L248" data-line-number="248"></span>
							</td>
							<td rel="L248" class="lines-code chroma">
								<code>					<span class="k">return</span> <span class="nx">data</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L249" class="lines-num">
								<span id="L249" data-line-number="249"></span>
							</td>
							<td rel="L249" class="lines-code chroma">
								<code>				<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L250" class="lines-num">
								<span id="L250" data-line-number="250"></span>
							</td>
							<td rel="L250" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L251" class="lines-num">
								<span id="L251" data-line-number="251"></span>
							</td>
							<td rel="L251" class="lines-code chroma">
								<code>			<span class="nx">isFolder</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">data</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L252" class="lines-num">
								<span id="L252" data-line-number="252"></span>
							</td>
							<td rel="L252" class="lines-code chroma">
								<code>			<span class="nx">isVideo</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//判断是否是 视频文件</code>
							</td>
						</tr>
						
						<tr>
							<td id="L253" class="lines-num">
								<span id="L253" data-line-number="253"></span>
							</td>
							<td rel="L253" class="lines-code chroma">
								<code></span><span class="c1"></span>				<span class="c1">// return this.settings.v3 ? data.type === 2 : data.type === 3</code>
							</td>
						</tr>
						
						<tr>
							<td id="L254" class="lines-num">
								<span id="L254" data-line-number="254"></span>
							</td>
							<td rel="L254" class="lines-code chroma">
								<code></span><span class="c1"></span>				<span class="c1">// 增加音乐识别 视频,其他,音频</code>
							</td>
						</tr>
						
						<tr>
							<td id="L255" class="lines-num">
								<span id="L255" data-line-number="255"></span>
							</td>
							<td rel="L255" class="lines-code chroma">
								<code></span><span class="c1"></span>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">?</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="mi">2</span><span class="o">||</span><span class="nx">data</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="mi">0</span><span class="o">||</span><span class="nx">data</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="mi">3</span><span class="p">)</span> <span class="o">:</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="mi">3</span><span class="o">||</span><span class="nx">data</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="mi">0</span><span class="o">||</span><span class="nx">data</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="mi">4</span><span class="p">)</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L256" class="lines-num">
								<span id="L256" data-line-number="256"></span>
							</td>
							<td rel="L256" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L257" class="lines-num">
								<span id="L257" data-line-number="257"></span>
							</td>
							<td rel="L257" class="lines-code chroma">
								<code>			<span class="nx">is_subt</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L258" class="lines-num">
								<span id="L258" data-line-number="258"></span>
							</td>
							<td rel="L258" class="lines-code chroma">
								<code>				<span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L259" class="lines-num">
								<span id="L259" data-line-number="259"></span>
							</td>
							<td rel="L259" class="lines-code chroma">
								<code>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L260" class="lines-num">
								<span id="L260" data-line-number="260"></span>
							</td>
							<td rel="L260" class="lines-code chroma">
								<code>				<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L261" class="lines-num">
								<span id="L261" data-line-number="261"></span>
							</td>
							<td rel="L261" class="lines-code chroma">
								<code>				<span class="kr">const</span> <span class="nx">ext</span> <span class="o">=</span> <span class="sr">/\.(srt|ass|scc|stl|ttml)$/</span><span class="p">;</span>  <span class="c1">// [&#34;.srt&#34;, &#34;.ass&#34;, &#34;.scc&#34;, &#34;.stl&#34;, &#34;.ttml&#34;];</code>
							</td>
						</tr>
						
						<tr>
							<td id="L262" class="lines-num">
								<span id="L262" data-line-number="262"></span>
							</td>
							<td rel="L262" class="lines-code chroma">
								<code></span><span class="c1"></span>				<span class="c1">// return ext.some(x =&gt; data.name.endsWith(x));</code>
							</td>
						</tr>
						
						<tr>
							<td id="L263" class="lines-num">
								<span id="L263" data-line-number="263"></span>
							</td>
							<td rel="L263" class="lines-code chroma">
								<code></span><span class="c1"></span>				<span class="k">return</span> <span class="nx">ext</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">name</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L264" class="lines-num">
								<span id="L264" data-line-number="264"></span>
							</td>
							<td rel="L264" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L265" class="lines-num">
								<span id="L265" data-line-number="265"></span>
							</td>
							<td rel="L265" class="lines-code chroma">
								<code>			<span class="nx">getPic</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L266" class="lines-num">
								<span id="L266" data-line-number="266"></span>
							</td>
							<td rel="L266" class="lines-code chroma">
								<code>				<span class="kd">let</span> <span class="nx">pic</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">v3</span> <span class="o">?</span> <span class="nx">data</span><span class="p">.</span><span class="nx">thumb</span> <span class="o">:</span> <span class="nx">data</span><span class="p">.</span><span class="nx">thumbnail</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L267" class="lines-num">
								<span id="L267" data-line-number="267"></span>
							</td>
							<td rel="L267" class="lines-code chroma">
								<code>				<span class="k">return</span> <span class="nx">pic</span> <span class="o">||</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isFolder</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">?</span> <span class="s2">&#34;http://img1.3png.com/281e284a670865a71d91515866552b5f172b.png&#34;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L268" class="lines-num">
								<span id="L268" data-line-number="268"></span>
							</td>
							<td rel="L268" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L269" class="lines-num">
								<span id="L269" data-line-number="269"></span>
							</td>
							<td rel="L269" class="lines-code chroma">
								<code>			<span class="nx">getTime</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span><span class="nx">isStandard</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L270" class="lines-num">
								<span id="L270" data-line-number="270"></span>
							</td>
							<td rel="L270" class="lines-code chroma">
								<code>				<span class="nx">isStandard</span> <span class="o">=</span> <span class="nx">isStandard</span><span class="o">||</span><span class="kc">false</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L271" class="lines-num">
								<span id="L271" data-line-number="271"></span>
							</td>
							<td rel="L271" class="lines-code chroma">
								<code>				<span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L272" class="lines-num">
								<span id="L272" data-line-number="272"></span>
							</td>
							<td rel="L272" class="lines-code chroma">
								<code>					<span class="kd">let</span> <span class="nx">tTime</span> <span class="o">=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">updated_at</span> <span class="o">||</span> <span class="nx">data</span><span class="p">.</span><span class="nx">time_str</span> <span class="o">||</span> <span class="nx">data</span><span class="p">.</span><span class="nx">modified</span> <span class="o">||</span> <span class="s2">&#34;&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L273" class="lines-num">
								<span id="L273" data-line-number="273"></span>
							</td>
							<td rel="L273" class="lines-code chroma">
								<code>					<span class="kd">let</span> <span class="nx">date</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L274" class="lines-num">
								<span id="L274" data-line-number="274"></span>
							</td>
							<td rel="L274" class="lines-code chroma">
								<code>					<span class="k">if</span><span class="p">(</span><span class="nx">tTime</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L275" class="lines-num">
								<span id="L275" data-line-number="275"></span>
							</td>
							<td rel="L275" class="lines-code chroma">
								<code>						<span class="nx">tTime</span> <span class="o">=</span> <span class="nx">tTime</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&#34;T&#34;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L276" class="lines-num">
								<span id="L276" data-line-number="276"></span>
							</td>
							<td rel="L276" class="lines-code chroma">
								<code>						<span class="nx">date</span> <span class="o">=</span> <span class="nx">tTime</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L277" class="lines-num">
								<span id="L277" data-line-number="277"></span>
							</td>
							<td rel="L277" class="lines-code chroma">
								<code>						<span class="k">if</span><span class="p">(</span><span class="nx">isStandard</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L278" class="lines-num">
								<span id="L278" data-line-number="278"></span>
							</td>
							<td rel="L278" class="lines-code chroma">
								<code>							<span class="nx">date</span> <span class="o">=</span> <span class="nx">date</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/-/g</span><span class="p">,</span><span class="s2">&#34;/&#34;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L279" class="lines-num">
								<span id="L279" data-line-number="279"></span>
							</td>
							<td rel="L279" class="lines-code chroma">
								<code>						<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L280" class="lines-num">
								<span id="L280" data-line-number="280"></span>
							</td>
							<td rel="L280" class="lines-code chroma">
								<code>						<span class="nx">tTime</span> <span class="o">=</span> <span class="nx">tTime</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/Z|\./</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L281" class="lines-num">
								<span id="L281" data-line-number="281"></span>
							</td>
							<td rel="L281" class="lines-code chroma">
								<code>						<span class="nx">date</span> <span class="o">+=</span> <span class="s2">&#34; &#34;</span> <span class="o">+</span> <span class="nx">tTime</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L282" class="lines-num">
								<span id="L282" data-line-number="282"></span>
							</td>
							<td rel="L282" class="lines-code chroma">
								<code>					<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L283" class="lines-num">
								<span id="L283" data-line-number="283"></span>
							</td>
							<td rel="L283" class="lines-code chroma">
								<code>					<span class="k">return</span> <span class="nx">date</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L284" class="lines-num">
								<span id="L284" data-line-number="284"></span>
							</td>
							<td rel="L284" class="lines-code chroma">
								<code>				<span class="p">}</span><span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L285" class="lines-num">
								<span id="L285" data-line-number="285"></span>
							</td>
							<td rel="L285" class="lines-code chroma">
								<code>					<span class="c1">// print(e.message);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L286" class="lines-num">
								<span id="L286" data-line-number="286"></span>
							</td>
							<td rel="L286" class="lines-code chroma">
								<code></span><span class="c1"></span>					<span class="c1">// print(data);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L287" class="lines-num">
								<span id="L287" data-line-number="287"></span>
							</td>
							<td rel="L287" class="lines-code chroma">
								<code></span><span class="c1"></span>					<span class="k">return</span> <span class="s1">&#39;&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L288" class="lines-num">
								<span id="L288" data-line-number="288"></span>
							</td>
							<td rel="L288" class="lines-code chroma">
								<code>				<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L289" class="lines-num">
								<span id="L289" data-line-number="289"></span>
							</td>
							<td rel="L289" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L290" class="lines-num">
								<span id="L290" data-line-number="290"></span>
							</td>
							<td rel="L290" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L291" class="lines-num">
								<span id="L291" data-line-number="291"></span>
							</td>
							<td rel="L291" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L292" class="lines-num">
								<span id="L292" data-line-number="292"></span>
							</td>
							<td rel="L292" class="lines-code chroma">
								<code>	<span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L293" class="lines-num">
								<span id="L293" data-line-number="293"></span>
							</td>
							<td rel="L293" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="s1">&#39;init执行完毕&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L294" class="lines-num">
								<span id="L294" data-line-number="294"></span>
							</td>
							<td rel="L294" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L295" class="lines-num">
								<span id="L295" data-line-number="295"></span>
							</td>
							<td rel="L295" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L296" class="lines-num">
								<span id="L296" data-line-number="296"></span>
							</td>
							<td rel="L296" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">home</span><span class="p">(</span><span class="nx">filter</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L297" class="lines-num">
								<span id="L297" data-line-number="297"></span>
							</td>
							<td rel="L297" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">classes</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">__drives</span><span class="p">)</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">key</span> <span class="p">=&gt;</span> <span class="p">(</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L298" class="lines-num">
								<span id="L298" data-line-number="298"></span>
							</td>
							<td rel="L298" class="lines-code chroma">
								<code>		<span class="nx">type_id</span><span class="o">:</span> <span class="sb">`</span><span class="si">${</span><span class="nx">key</span><span class="si">}</span><span class="sb">$</span><span class="si">${</span><span class="nx">__drives</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span><span class="p">.</span><span class="nx">startPage</span><span class="si">}</span><span class="sb">`</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L299" class="lines-num">
								<span id="L299" data-line-number="299"></span>
							</td>
							<td rel="L299" class="lines-code chroma">
								<code>		<span class="nx">type_name</span><span class="o">:</span> <span class="nx">key</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L300" class="lines-num">
								<span id="L300" data-line-number="300"></span>
							</td>
							<td rel="L300" class="lines-code chroma">
								<code>		<span class="nx">type_flag</span><span class="o">:</span> <span class="s1">&#39;1&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L301" class="lines-num">
								<span id="L301" data-line-number="301"></span>
							</td>
							<td rel="L301" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L302" class="lines-num">
								<span id="L302" data-line-number="302"></span>
							</td>
							<td rel="L302" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">filter_dict</span> <span class="o">=</span> <span class="p">{</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L303" class="lines-num">
								<span id="L303" data-line-number="303"></span>
							</td>
							<td rel="L303" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">filters</span> <span class="o">=</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;order&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;排序&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;名称⬆️&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;vod_name_asc&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;名称⬇️&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;vod_name_desc&#39;</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L304" class="lines-num">
								<span id="L304" data-line-number="304"></span>
							</td>
							<td rel="L304" class="lines-code chroma">
								<code>			<span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中英⬆️&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;vod_cn_asc&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;中英⬇️&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;vod_cn_desc&#39;</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L305" class="lines-num">
								<span id="L305" data-line-number="305"></span>
							</td>
							<td rel="L305" class="lines-code chroma">
								<code>			<span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;时间⬆️&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;vod_time_asc&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;时间⬇️&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;vod_time_desc&#39;</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L306" class="lines-num">
								<span id="L306" data-line-number="306"></span>
							</td>
							<td rel="L306" class="lines-code chroma">
								<code>			<span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;大小⬆️&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;vod_size_asc&#39;</span><span class="p">}</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;大小⬇️&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;vod_size_desc&#39;</span><span class="p">}</span><span class="p">,</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;无&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;none&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L307" class="lines-num">
								<span id="L307" data-line-number="307"></span>
							</td>
							<td rel="L307" class="lines-code chroma">
								<code>			<span class="p">{</span><span class="s1">&#39;key&#39;</span><span class="o">:</span> <span class="s1">&#39;show&#39;</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="o">:</span> <span class="s1">&#39;播放展示&#39;</span><span class="p">,</span> <span class="s1">&#39;value&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;单集&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;single&#39;</span><span class="p">}</span><span class="p">,</span><span class="p">{</span><span class="s1">&#39;n&#39;</span><span class="o">:</span> <span class="s1">&#39;全集&#39;</span><span class="p">,</span> <span class="s1">&#39;v&#39;</span><span class="o">:</span> <span class="s1">&#39;all&#39;</span><span class="p">}</span><span class="p">]</span><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L308" class="lines-num">
								<span id="L308" data-line-number="308"></span>
							</td>
							<td rel="L308" class="lines-code chroma">
								<code>	<span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L309" class="lines-num">
								<span id="L309" data-line-number="309"></span>
							</td>
							<td rel="L309" class="lines-code chroma">
								<code>	<span class="nx">classes</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">it</span><span class="p">=&gt;</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L310" class="lines-num">
								<span id="L310" data-line-number="310"></span>
							</td>
							<td rel="L310" class="lines-code chroma">
								<code>		<span class="nx">filter_dict</span><span class="p">[</span><span class="nx">it</span><span class="p">.</span><span class="nx">type_id</span><span class="p">]</span> <span class="o">=</span> <span class="nx">filters</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L311" class="lines-num">
								<span id="L311" data-line-number="311"></span>
							</td>
							<td rel="L311" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L312" class="lines-num">
								<span id="L312" data-line-number="312"></span>
							</td>
							<td rel="L312" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="s2">&#34;----home----&#34;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L313" class="lines-num">
								<span id="L313" data-line-number="313"></span>
							</td>
							<td rel="L313" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="nx">classes</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L314" class="lines-num">
								<span id="L314" data-line-number="314"></span>
							</td>
							<td rel="L314" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="p">{</span> <span class="s1">&#39;class&#39;</span><span class="o">:</span> <span class="nx">classes</span><span class="p">,</span><span class="s1">&#39;filters&#39;</span><span class="o">:</span> <span class="nx">filter_dict</span><span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L315" class="lines-num">
								<span id="L315" data-line-number="315"></span>
							</td>
							<td rel="L315" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L316" class="lines-num">
								<span id="L316" data-line-number="316"></span>
							</td>
							<td rel="L316" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L317" class="lines-num">
								<span id="L317" data-line-number="317"></span>
							</td>
							<td rel="L317" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">homeVod</span><span class="p">(</span><span class="nx">params</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L318" class="lines-num">
								<span id="L318" data-line-number="318"></span>
							</td>
							<td rel="L318" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">_post_data</span> <span class="o">=</span> <span class="p">{</span><span class="s2">&#34;pageNum&#34;</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="s2">&#34;pageSize&#34;</span><span class="o">:</span><span class="mi">100</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L319" class="lines-num">
								<span id="L319" data-line-number="319"></span>
							</td>
							<td rel="L319" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">_post_url</span> <span class="o">=</span> <span class="s1">&#39;https://pbaccess.video.qq.com/trpc.videosearch.hot_rank.HotRankServantHttp/HotRankHttp&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L320" class="lines-num">
								<span id="L320" data-line-number="320"></span>
							</td>
							<td rel="L320" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">http</span><span class="p">.</span><span class="nx">post</span><span class="p">(</span><span class="nx">_post_url</span><span class="p">,</span><span class="p">{</span> <span class="nx">data</span><span class="o">:</span> <span class="nx">_post_data</span> <span class="p">}</span><span class="p">)</span><span class="p">.</span><span class="nx">json</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L321" class="lines-num">
								<span id="L321" data-line-number="321"></span>
							</td>
							<td rel="L321" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">_list</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L322" class="lines-num">
								<span id="L322" data-line-number="322"></span>
							</td>
							<td rel="L322" class="lines-code chroma">
								<code>	<span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L323" class="lines-num">
								<span id="L323" data-line-number="323"></span>
							</td>
							<td rel="L323" class="lines-code chroma">
								<code>		<span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">[</span><span class="s1">&#39;data&#39;</span><span class="p">]</span><span class="p">[</span><span class="s1">&#39;navItemList&#39;</span><span class="p">]</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">[</span><span class="s1">&#39;hotRankResult&#39;</span><span class="p">]</span><span class="p">[</span><span class="s1">&#39;rankItemList&#39;</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L324" class="lines-num">
								<span id="L324" data-line-number="324"></span>
							</td>
							<td rel="L324" class="lines-code chroma">
								<code>		<span class="c1">// print(data);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L325" class="lines-num">
								<span id="L325" data-line-number="325"></span>
							</td>
							<td rel="L325" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="nx">data</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">it</span><span class="p">=&gt;</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L326" class="lines-num">
								<span id="L326" data-line-number="326"></span>
							</td>
							<td rel="L326" class="lines-code chroma">
								<code>			<span class="nx">_list</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L327" class="lines-num">
								<span id="L327" data-line-number="327"></span>
							</td>
							<td rel="L327" class="lines-code chroma">
								<code>				<span class="nx">vod_name</span><span class="o">:</span><span class="nx">it</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L328" class="lines-num">
								<span id="L328" data-line-number="328"></span>
							</td>
							<td rel="L328" class="lines-code chroma">
								<code>				<span class="nx">vod_id</span><span class="o">:</span><span class="s1">&#39;msearch:&#39;</span><span class="o">+</span><span class="nx">it</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L329" class="lines-num">
								<span id="L329" data-line-number="329"></span>
							</td>
							<td rel="L329" class="lines-code chroma">
								<code>				<span class="nx">vod_pic</span><span class="o">:</span><span class="s1">&#39;https://avatars.githubusercontent.com/u/97389433?s=120&amp;v=4&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L330" class="lines-num">
								<span id="L330" data-line-number="330"></span>
							</td>
							<td rel="L330" class="lines-code chroma">
								<code>				<span class="nx">vod_remarks</span><span class="o">:</span><span class="nx">it</span><span class="p">.</span><span class="nx">changeOrder</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L331" class="lines-num">
								<span id="L331" data-line-number="331"></span>
							</td>
							<td rel="L331" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L332" class="lines-num">
								<span id="L332" data-line-number="332"></span>
							</td>
							<td rel="L332" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L333" class="lines-num">
								<span id="L333" data-line-number="333"></span>
							</td>
							<td rel="L333" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L334" class="lines-num">
								<span id="L334" data-line-number="334"></span>
							</td>
							<td rel="L334" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="s1">&#39;Alist获取首页推荐发送错误:&#39;</span><span class="o">+</span><span class="nx">e</span><span class="p">.</span><span class="nx">message</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L335" class="lines-num">
								<span id="L335" data-line-number="335"></span>
							</td>
							<td rel="L335" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L336" class="lines-num">
								<span id="L336" data-line-number="336"></span>
							</td>
							<td rel="L336" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="p">{</span> <span class="s1">&#39;list&#39;</span><span class="o">:</span> <span class="nx">_list</span> <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L337" class="lines-num">
								<span id="L337" data-line-number="337"></span>
							</td>
							<td rel="L337" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L338" class="lines-num">
								<span id="L338" data-line-number="338"></span>
							</td>
							<td rel="L338" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L339" class="lines-num">
								<span id="L339" data-line-number="339"></span>
							</td>
							<td rel="L339" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">category</span><span class="p">(</span><span class="nx">tid</span><span class="p">,</span> <span class="nx">pg</span><span class="p">,</span> <span class="nx">filter</span><span class="p">,</span> <span class="nx">extend</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L340" class="lines-num">
								<span id="L340" data-line-number="340"></span>
							</td>
							<td rel="L340" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">orid</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/#all#|#search#/g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L341" class="lines-num">
								<span id="L341" data-line-number="341"></span>
							</td>
							<td rel="L341" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="p">{</span> <span class="nx">drives</span><span class="p">,</span> <span class="nx">path</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">get_drives_path</span><span class="p">(</span><span class="nx">orid</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L342" class="lines-num">
								<span id="L342" data-line-number="342"></span>
							</td>
							<td rel="L342" class="lines-code chroma">
								<code>	<span class="kr">const</span> <span class="nx">id</span> <span class="o">=</span> <span class="nx">orid</span><span class="p">.</span><span class="nx">endsWith</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="nx">orid</span> <span class="o">:</span> <span class="nx">orid</span> <span class="o">+</span> <span class="s1">&#39;/&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L343" class="lines-num">
								<span id="L343" data-line-number="343"></span>
							</td>
							<td rel="L343" class="lines-code chroma">
								<code>	<span class="kr">const</span> <span class="nx">list</span> <span class="o">=</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">getPath</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L344" class="lines-num">
								<span id="L344" data-line-number="344"></span>
							</td>
							<td rel="L344" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">subList</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L345" class="lines-num">
								<span id="L345" data-line-number="345"></span>
							</td>
							<td rel="L345" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">vodFiles</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L346" class="lines-num">
								<span id="L346" data-line-number="346"></span>
							</td>
							<td rel="L346" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">allList</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L347" class="lines-num">
								<span id="L347" data-line-number="347"></span>
							</td>
							<td rel="L347" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">fl</span> <span class="o">=</span> <span class="nx">filter</span><span class="o">?</span><span class="nx">extend</span><span class="o">:</span><span class="p">{</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L348" class="lines-num">
								<span id="L348" data-line-number="348"></span>
							</td>
							<td rel="L348" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="nx">fl</span><span class="p">.</span><span class="nx">show</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L349" class="lines-num">
								<span id="L349" data-line-number="349"></span>
							</td>
							<td rel="L349" class="lines-code chroma">
								<code>		<span class="nx">showMode</span> <span class="o">=</span> <span class="nx">fl</span><span class="p">.</span><span class="nx">show</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L350" class="lines-num">
								<span id="L350" data-line-number="350"></span>
							</td>
							<td rel="L350" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L351" class="lines-num">
								<span id="L351" data-line-number="351"></span>
							</td>
							<td rel="L351" class="lines-code chroma">
								<code>	<span class="nx">list</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">item</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L352" class="lines-num">
								<span id="L352" data-line-number="352"></span>
							</td>
							<td rel="L352" class="lines-code chroma">
								<code>		<span class="k">if</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">name</span><span class="o">!==</span><span class="s1">&#39;error&#39;</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L353" class="lines-num">
								<span id="L353" data-line-number="353"></span>
							</td>
							<td rel="L353" class="lines-code chroma">
								<code>			<span class="k">if</span> <span class="p">(</span><span class="nx">drives</span><span class="p">.</span><span class="nx">is_subt</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L354" class="lines-num">
								<span id="L354" data-line-number="354"></span>
							</td>
							<td rel="L354" class="lines-code chroma">
								<code>				<span class="nx">subList</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">name</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L355" class="lines-num">
								<span id="L355" data-line-number="355"></span>
							</td>
							<td rel="L355" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L356" class="lines-num">
								<span id="L356" data-line-number="356"></span>
							</td>
							<td rel="L356" class="lines-code chroma">
								<code>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">drives</span><span class="p">.</span><span class="nx">showAll</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">drives</span><span class="p">.</span><span class="nx">isFolder</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">drives</span><span class="p">.</span><span class="nx">isVideo</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L357" class="lines-num">
								<span id="L357" data-line-number="357"></span>
							</td>
							<td rel="L357" class="lines-code chroma">
								<code>				<span class="k">return</span> <span class="c1">//只显示视频文件和文件夹</code>
							</td>
						</tr>
						
						<tr>
							<td id="L358" class="lines-num">
								<span id="L358" data-line-number="358"></span>
							</td>
							<td rel="L358" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L359" class="lines-num">
								<span id="L359" data-line-number="359"></span>
							</td>
							<td rel="L359" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">vod_time</span> <span class="o">=</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">getTime</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L360" class="lines-num">
								<span id="L360" data-line-number="360"></span>
							</td>
							<td rel="L360" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">vod_size</span> <span class="o">=</span> <span class="nx">get_size</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">size</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L361" class="lines-num">
								<span id="L361" data-line-number="361"></span>
							</td>
							<td rel="L361" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">remark</span> <span class="o">=</span> <span class="nx">vod_time</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">)</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\t&#39;</span> <span class="o">+</span> <span class="nx">vod_size</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L362" class="lines-num">
								<span id="L362" data-line-number="362"></span>
							</td>
							<td rel="L362" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">vod_id</span> <span class="o">=</span> <span class="nx">id</span> <span class="o">+</span> <span class="nx">item</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="p">(</span><span class="nx">drives</span><span class="p">.</span><span class="nx">isFolder</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;/&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L363" class="lines-num">
								<span id="L363" data-line-number="363"></span>
							</td>
							<td rel="L363" class="lines-code chroma">
								<code>			<span class="k">if</span> <span class="p">(</span><span class="nx">showMode</span> <span class="o">===</span> <span class="s1">&#39;all&#39;</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L364" class="lines-num">
								<span id="L364" data-line-number="364"></span>
							</td>
							<td rel="L364" class="lines-code chroma">
								<code>				<span class="nx">vod_id</span> <span class="o">+=</span> <span class="s1">&#39;#all#&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L365" class="lines-num">
								<span id="L365" data-line-number="365"></span>
							</td>
							<td rel="L365" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L366" class="lines-num">
								<span id="L366" data-line-number="366"></span>
							</td>
							<td rel="L366" class="lines-code chroma">
								<code>			<span class="nx">print</span><span class="p">(</span><span class="nx">vod_id</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L367" class="lines-num">
								<span id="L367" data-line-number="367"></span>
							</td>
							<td rel="L367" class="lines-code chroma">
								<code>			<span class="kr">const</span> <span class="nx">vod</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L368" class="lines-num">
								<span id="L368" data-line-number="368"></span>
							</td>
							<td rel="L368" class="lines-code chroma">
								<code>				<span class="s1">&#39;vod_id&#39;</span><span class="o">:</span> <span class="nx">vod_id</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L369" class="lines-num">
								<span id="L369" data-line-number="369"></span>
							</td>
							<td rel="L369" class="lines-code chroma">
								<code>				<span class="s1">&#39;vod_name&#39;</span><span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">name</span><span class="p">.</span><span class="nx">replaceAll</span><span class="p">(</span><span class="s2">&#34;$&#34;</span><span class="p">,</span> <span class="s2">&#34;&#34;</span><span class="p">)</span><span class="p">.</span><span class="nx">replaceAll</span><span class="p">(</span><span class="s2">&#34;#&#34;</span><span class="p">,</span> <span class="s2">&#34;&#34;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L370" class="lines-num">
								<span id="L370" data-line-number="370"></span>
							</td>
							<td rel="L370" class="lines-code chroma">
								<code>				<span class="s1">&#39;vod_pic&#39;</span><span class="o">:</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">getPic</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L371" class="lines-num">
								<span id="L371" data-line-number="371"></span>
							</td>
							<td rel="L371" class="lines-code chroma">
								<code>				<span class="s1">&#39;vod_time&#39;</span><span class="o">:</span> <span class="nx">vod_time</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L372" class="lines-num">
								<span id="L372" data-line-number="372"></span>
							</td>
							<td rel="L372" class="lines-code chroma">
								<code>				<span class="s1">&#39;vod_size&#39;</span><span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">size</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L373" class="lines-num">
								<span id="L373" data-line-number="373"></span>
							</td>
							<td rel="L373" class="lines-code chroma">
								<code>				<span class="s1">&#39;vod_tag&#39;</span><span class="o">:</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">isFolder</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;folder&#39;</span> <span class="o">:</span> <span class="s1">&#39;file&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L374" class="lines-num">
								<span id="L374" data-line-number="374"></span>
							</td>
							<td rel="L374" class="lines-code chroma">
								<code>				<span class="s1">&#39;vod_remarks&#39;</span><span class="o">:</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">isFolder</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="o">?</span> <span class="nx">remark</span> <span class="o">+</span> <span class="s1">&#39; 文件夹&#39;</span> <span class="o">:</span> <span class="nx">remark</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L375" class="lines-num">
								<span id="L375" data-line-number="375"></span>
							</td>
							<td rel="L375" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L376" class="lines-num">
								<span id="L376" data-line-number="376"></span>
							</td>
							<td rel="L376" class="lines-code chroma">
								<code>			<span class="k">if</span> <span class="p">(</span><span class="nx">drives</span><span class="p">.</span><span class="nx">isVideo</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L377" class="lines-num">
								<span id="L377" data-line-number="377"></span>
							</td>
							<td rel="L377" class="lines-code chroma">
								<code>				<span class="nx">vodFiles</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">vod</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L378" class="lines-num">
								<span id="L378" data-line-number="378"></span>
							</td>
							<td rel="L378" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L379" class="lines-num">
								<span id="L379" data-line-number="379"></span>
							</td>
							<td rel="L379" class="lines-code chroma">
								<code>			<span class="nx">allList</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">vod</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L380" class="lines-num">
								<span id="L380" data-line-number="380"></span>
							</td>
							<td rel="L380" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L381" class="lines-num">
								<span id="L381" data-line-number="381"></span>
							</td>
							<td rel="L381" class="lines-code chroma">
								<code>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L382" class="lines-num">
								<span id="L382" data-line-number="382"></span>
							</td>
							<td rel="L382" class="lines-code chroma">
								<code>			<span class="kr">const</span> <span class="nx">vod</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L383" class="lines-num">
								<span id="L383" data-line-number="383"></span>
							</td>
							<td rel="L383" class="lines-code chroma">
								<code>				<span class="nx">vod_name</span><span class="o">:</span> <span class="nx">item</span><span class="p">.</span><span class="nx">value</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L384" class="lines-num">
								<span id="L384" data-line-number="384"></span>
							</td>
							<td rel="L384" class="lines-code chroma">
								<code>				<span class="nx">vod_id</span><span class="o">:</span> <span class="s1">&#39;no_data&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L385" class="lines-num">
								<span id="L385" data-line-number="385"></span>
							</td>
							<td rel="L385" class="lines-code chroma">
								<code>				<span class="nx">vod_remarks</span><span class="o">:</span> <span class="s1">&#39;不要点,会崩的&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L386" class="lines-num">
								<span id="L386" data-line-number="386"></span>
							</td>
							<td rel="L386" class="lines-code chroma">
								<code>				<span class="nx">vod_pic</span><span class="o">:</span> <span class="s1">&#39;https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg&#39;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L387" class="lines-num">
								<span id="L387" data-line-number="387"></span>
							</td>
							<td rel="L387" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L388" class="lines-num">
								<span id="L388" data-line-number="388"></span>
							</td>
							<td rel="L388" class="lines-code chroma">
								<code>			<span class="nx">allList</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">vod</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L389" class="lines-num">
								<span id="L389" data-line-number="389"></span>
							</td>
							<td rel="L389" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L390" class="lines-num">
								<span id="L390" data-line-number="390"></span>
							</td>
							<td rel="L390" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L391" class="lines-num">
								<span id="L391" data-line-number="391"></span>
							</td>
							<td rel="L391" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L392" class="lines-num">
								<span id="L392" data-line-number="392"></span>
							</td>
							<td rel="L392" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="nx">vodFiles</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">subList</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//只有一个视频 一个或者多个字幕 取相似度最高的</code>
							</td>
						</tr>
						
						<tr>
							<td id="L393" class="lines-num">
								<span id="L393" data-line-number="393"></span>
							</td>
							<td rel="L393" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="c1">// let sub = subList.length === 1 ? subList[0] : _.chain(allList).sortBy(x =&gt; (x.includes(&#39;chs&#39;) ? 100 : 0) + levenshteinDistance(x, vodFiles[0].vod_name)).last().value();</code>
							</td>
						</tr>
						
						<tr>
							<td id="L394" class="lines-num">
								<span id="L394" data-line-number="394"></span>
							</td>
							<td rel="L394" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="kd">let</span> <span class="nx">sub</span><span class="p">;</span> <span class="c1">// 字幕文件名称</code>
							</td>
						</tr>
						
						<tr>
							<td id="L395" class="lines-num">
								<span id="L395" data-line-number="395"></span>
							</td>
							<td rel="L395" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="k">if</span><span class="p">(</span><span class="nx">subList</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L396" class="lines-num">
								<span id="L396" data-line-number="396"></span>
							</td>
							<td rel="L396" class="lines-code chroma">
								<code>			<span class="nx">sub</span> <span class="o">=</span> <span class="nx">subList</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L397" class="lines-num">
								<span id="L397" data-line-number="397"></span>
							</td>
							<td rel="L397" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L398" class="lines-num">
								<span id="L398" data-line-number="398"></span>
							</td>
							<td rel="L398" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">subs</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">subList</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L399" class="lines-num">
								<span id="L399" data-line-number="399"></span>
							</td>
							<td rel="L399" class="lines-code chroma">
								<code>			<span class="nx">subs</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">)</span><span class="p">=&gt;</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L400" class="lines-num">
								<span id="L400" data-line-number="400"></span>
							</td>
							<td rel="L400" class="lines-code chroma">
								<code>				<span class="c1">// chs是简体中文字幕</code>
							</td>
						</tr>
						
						<tr>
							<td id="L401" class="lines-num">
								<span id="L401" data-line-number="401"></span>
							</td>
							<td rel="L401" class="lines-code chroma">
								<code></span><span class="c1"></span>				<span class="kd">let</span> <span class="nx">a_similar</span> <span class="o">=</span> <span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;chs&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="mi">100</span> <span class="o">:</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="nx">levenshteinDistance</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">vodFiles</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">vod_name</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L402" class="lines-num">
								<span id="L402" data-line-number="402"></span>
							</td>
							<td rel="L402" class="lines-code chroma">
								<code>				<span class="kd">let</span> <span class="nx">b_similar</span> <span class="o">=</span> <span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;chs&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="mi">100</span> <span class="o">:</span> <span class="mi">0</span><span class="p">)</span> <span class="o">+</span> <span class="nx">levenshteinDistance</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span> <span class="nx">vodFiles</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">vod_name</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L403" class="lines-num">
								<span id="L403" data-line-number="403"></span>
							</td>
							<td rel="L403" class="lines-code chroma">
								<code>				<span class="k">if</span><span class="p">(</span><span class="nx">a_similar</span><span class="o">&gt;</span><span class="nx">b_similar</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// 按相似度正序排列</code>
							</td>
						</tr>
						
						<tr>
							<td id="L404" class="lines-num">
								<span id="L404" data-line-number="404"></span>
							</td>
							<td rel="L404" class="lines-code chroma">
								<code></span><span class="c1"></span>					<span class="k">return</span> <span class="mi">1</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L405" class="lines-num">
								<span id="L405" data-line-number="405"></span>
							</td>
							<td rel="L405" class="lines-code chroma">
								<code>				<span class="p">}</span><span class="k">else</span><span class="p">{</span> <span class="c1">//否则，位置不变</code>
							</td>
						</tr>
						
						<tr>
							<td id="L406" class="lines-num">
								<span id="L406" data-line-number="406"></span>
							</td>
							<td rel="L406" class="lines-code chroma">
								<code></span><span class="c1"></span>					<span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L407" class="lines-num">
								<span id="L407" data-line-number="407"></span>
							</td>
							<td rel="L407" class="lines-code chroma">
								<code>				<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L408" class="lines-num">
								<span id="L408" data-line-number="408"></span>
							</td>
							<td rel="L408" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L409" class="lines-num">
								<span id="L409" data-line-number="409"></span>
							</td>
							<td rel="L409" class="lines-code chroma">
								<code>			<span class="nx">sub</span> <span class="o">=</span> <span class="nx">subs</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L410" class="lines-num">
								<span id="L410" data-line-number="410"></span>
							</td>
							<td rel="L410" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L411" class="lines-num">
								<span id="L411" data-line-number="411"></span>
							</td>
							<td rel="L411" class="lines-code chroma">
								<code>		<span class="nx">vodFiles</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">vod_id</span> <span class="o">+=</span> <span class="s2">&#34;@@@&#34;</span> <span class="o">+</span> <span class="nx">sub</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L412" class="lines-num">
								<span id="L412" data-line-number="412"></span>
							</td>
							<td rel="L412" class="lines-code chroma">
								<code>		<span class="c1">// vodFiles[0].vod_remarks += &#34; 有字幕&#34;;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L413" class="lines-num">
								<span id="L413" data-line-number="413"></span>
							</td>
							<td rel="L413" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="nx">vodFiles</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">vod_remarks</span> <span class="o">+=</span> <span class="s2">&#34;🏷️&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L414" class="lines-num">
								<span id="L414" data-line-number="414"></span>
							</td>
							<td rel="L414" class="lines-code chroma">
								<code>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L415" class="lines-num">
								<span id="L415" data-line-number="415"></span>
							</td>
							<td rel="L415" class="lines-code chroma">
								<code>		<span class="nx">vodFiles</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">item</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L416" class="lines-num">
								<span id="L416" data-line-number="416"></span>
							</td>
							<td rel="L416" class="lines-code chroma">
								<code>			<span class="kr">const</span> <span class="nx">lh</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L417" class="lines-num">
								<span id="L417" data-line-number="417"></span>
							</td>
							<td rel="L417" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">sub</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L418" class="lines-num">
								<span id="L418" data-line-number="418"></span>
							</td>
							<td rel="L418" class="lines-code chroma">
								<code>			<span class="nx">subList</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">s</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L419" class="lines-num">
								<span id="L419" data-line-number="419"></span>
							</td>
							<td rel="L419" class="lines-code chroma">
								<code>				<span class="c1">//编辑距离相似度</code>
							</td>
						</tr>
						
						<tr>
							<td id="L420" class="lines-num">
								<span id="L420" data-line-number="420"></span>
							</td>
							<td rel="L420" class="lines-code chroma">
								<code></span><span class="c1"></span>				<span class="kr">const</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">levenshteinDistance</span><span class="p">(</span><span class="nx">s</span><span class="p">,</span> <span class="nx">item</span><span class="p">.</span><span class="nx">vod_name</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L421" class="lines-num">
								<span id="L421" data-line-number="421"></span>
							</td>
							<td rel="L421" class="lines-code chroma">
								<code>				<span class="k">if</span> <span class="p">(</span><span class="nx">l</span> <span class="o">&gt;</span> <span class="mi">60</span> <span class="o">&amp;&amp;</span> <span class="nx">l</span> <span class="o">&gt;</span> <span class="nx">lh</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L422" class="lines-num">
								<span id="L422" data-line-number="422"></span>
							</td>
							<td rel="L422" class="lines-code chroma">
								<code>					<span class="nx">sub</span> <span class="o">=</span> <span class="nx">s</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L423" class="lines-num">
								<span id="L423" data-line-number="423"></span>
							</td>
							<td rel="L423" class="lines-code chroma">
								<code>				<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L424" class="lines-num">
								<span id="L424" data-line-number="424"></span>
							</td>
							<td rel="L424" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L425" class="lines-num">
								<span id="L425" data-line-number="425"></span>
							</td>
							<td rel="L425" class="lines-code chroma">
								<code>			<span class="k">if</span> <span class="p">(</span><span class="nx">sub</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L426" class="lines-num">
								<span id="L426" data-line-number="426"></span>
							</td>
							<td rel="L426" class="lines-code chroma">
								<code>				<span class="nx">item</span><span class="p">.</span><span class="nx">vod_id</span> <span class="o">+=</span> <span class="s2">&#34;@@@&#34;</span> <span class="o">+</span> <span class="nx">sub</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L427" class="lines-num">
								<span id="L427" data-line-number="427"></span>
							</td>
							<td rel="L427" class="lines-code chroma">
								<code>				<span class="c1">// item.vod_remarks += &#34; 有字幕&#34;;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L428" class="lines-num">
								<span id="L428" data-line-number="428"></span>
							</td>
							<td rel="L428" class="lines-code chroma">
								<code></span><span class="c1"></span>				<span class="nx">item</span><span class="p">.</span><span class="nx">vod_remarks</span> <span class="o">+=</span> <span class="s2">&#34;🏷️&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L429" class="lines-num">
								<span id="L429" data-line-number="429"></span>
							</td>
							<td rel="L429" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L430" class="lines-num">
								<span id="L430" data-line-number="430"></span>
							</td>
							<td rel="L430" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L431" class="lines-num">
								<span id="L431" data-line-number="431"></span>
							</td>
							<td rel="L431" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L432" class="lines-num">
								<span id="L432" data-line-number="432"></span>
							</td>
							<td rel="L432" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L433" class="lines-num">
								<span id="L433" data-line-number="433"></span>
							</td>
							<td rel="L433" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="nx">fl</span><span class="p">.</span><span class="nx">order</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L434" class="lines-num">
								<span id="L434" data-line-number="434"></span>
							</td>
							<td rel="L434" class="lines-code chroma">
								<code>		<span class="c1">// print(fl.order);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L435" class="lines-num">
								<span id="L435" data-line-number="435"></span>
							</td>
							<td rel="L435" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="kd">let</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">fl</span><span class="p">.</span><span class="nx">order</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;_&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;_&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L436" class="lines-num">
								<span id="L436" data-line-number="436"></span>
							</td>
							<td rel="L436" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">order</span> <span class="o">=</span> <span class="nx">fl</span><span class="p">.</span><span class="nx">order</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;_&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L437" class="lines-num">
								<span id="L437" data-line-number="437"></span>
							</td>
							<td rel="L437" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="sb">`</span><span class="sb">排序key:</span><span class="si">${</span><span class="nx">key</span><span class="si">}</span><span class="sb">,排序order:</span><span class="si">${</span><span class="nx">order</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L438" class="lines-num">
								<span id="L438" data-line-number="438"></span>
							</td>
							<td rel="L438" class="lines-code chroma">
								<code>		<span class="k">if</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;name&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L439" class="lines-num">
								<span id="L439" data-line-number="439"></span>
							</td>
							<td rel="L439" class="lines-code chroma">
								<code>			<span class="nx">detail_order</span> <span class="o">=</span> <span class="s1">&#39;name&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L440" class="lines-num">
								<span id="L440" data-line-number="440"></span>
							</td>
							<td rel="L440" class="lines-code chroma">
								<code>			<span class="nx">allList</span> <span class="o">=</span> <span class="nx">sortListByName</span><span class="p">(</span><span class="nx">allList</span><span class="p">,</span><span class="nx">key</span><span class="p">,</span><span class="nx">order</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L441" class="lines-num">
								<span id="L441" data-line-number="441"></span>
							</td>
							<td rel="L441" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;cn&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L442" class="lines-num">
								<span id="L442" data-line-number="442"></span>
							</td>
							<td rel="L442" class="lines-code chroma">
								<code>			<span class="nx">detail_order</span> <span class="o">=</span> <span class="s1">&#39;cn&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L443" class="lines-num">
								<span id="L443" data-line-number="443"></span>
							</td>
							<td rel="L443" class="lines-code chroma">
								<code>			<span class="nx">allList</span> <span class="o">=</span> <span class="nx">sortListByCN</span><span class="p">(</span><span class="nx">allList</span><span class="p">,</span><span class="s1">&#39;vod_name&#39;</span><span class="p">,</span><span class="nx">order</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L444" class="lines-num">
								<span id="L444" data-line-number="444"></span>
							</td>
							<td rel="L444" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;time&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L445" class="lines-num">
								<span id="L445" data-line-number="445"></span>
							</td>
							<td rel="L445" class="lines-code chroma">
								<code>			<span class="nx">detail_order</span> <span class="o">=</span> <span class="s1">&#39;time&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L446" class="lines-num">
								<span id="L446" data-line-number="446"></span>
							</td>
							<td rel="L446" class="lines-code chroma">
								<code>			<span class="nx">allList</span> <span class="o">=</span> <span class="nx">sortListByTime</span><span class="p">(</span><span class="nx">allList</span><span class="p">,</span><span class="nx">key</span><span class="p">,</span><span class="nx">order</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L447" class="lines-num">
								<span id="L447" data-line-number="447"></span>
							</td>
							<td rel="L447" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;size&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L448" class="lines-num">
								<span id="L448" data-line-number="448"></span>
							</td>
							<td rel="L448" class="lines-code chroma">
								<code>			<span class="nx">detail_order</span> <span class="o">=</span> <span class="s1">&#39;size&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L449" class="lines-num">
								<span id="L449" data-line-number="449"></span>
							</td>
							<td rel="L449" class="lines-code chroma">
								<code>			<span class="nx">allList</span> <span class="o">=</span> <span class="nx">sortListBySize</span><span class="p">(</span><span class="nx">allList</span><span class="p">,</span><span class="nx">key</span><span class="p">,</span><span class="nx">order</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L450" class="lines-num">
								<span id="L450" data-line-number="450"></span>
							</td>
							<td rel="L450" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">fl</span><span class="p">.</span><span class="nx">order</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;none&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L451" class="lines-num">
								<span id="L451" data-line-number="451"></span>
							</td>
							<td rel="L451" class="lines-code chroma">
								<code>			<span class="nx">detail_order</span> <span class="o">=</span> <span class="s1">&#39;none&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L452" class="lines-num">
								<span id="L452" data-line-number="452"></span>
							</td>
							<td rel="L452" class="lines-code chroma">
								<code>			<span class="nx">print</span><span class="p">(</span><span class="s1">&#39;不排序&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L453" class="lines-num">
								<span id="L453" data-line-number="453"></span>
							</td>
							<td rel="L453" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L454" class="lines-num">
								<span id="L454" data-line-number="454"></span>
							</td>
							<td rel="L454" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L455" class="lines-num">
								<span id="L455" data-line-number="455"></span>
							</td>
							<td rel="L455" class="lines-code chroma">
								<code>		<span class="c1">// 没传order是其他地方调用的,自动按名称正序排序方便追剧,如果传了none进去就不排序，假装云盘里本身文件顺序是正常的</code>
							</td>
						</tr>
						
						<tr>
							<td id="L456" class="lines-num">
								<span id="L456" data-line-number="456"></span>
							</td>
							<td rel="L456" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="k">if</span><span class="p">(</span><span class="nx">detail_order</span><span class="o">!==</span><span class="s1">&#39;none&#39;</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L457" class="lines-num">
								<span id="L457" data-line-number="457"></span>
							</td>
							<td rel="L457" class="lines-code chroma">
								<code>			<span class="nx">allList</span> <span class="o">=</span> <span class="nx">sortListByName</span><span class="p">(</span><span class="nx">allList</span><span class="p">,</span><span class="s1">&#39;vod_name&#39;</span><span class="p">,</span><span class="s1">&#39;asc&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L458" class="lines-num">
								<span id="L458" data-line-number="458"></span>
							</td>
							<td rel="L458" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L459" class="lines-num">
								<span id="L459" data-line-number="459"></span>
							</td>
							<td rel="L459" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L460" class="lines-num">
								<span id="L460" data-line-number="460"></span>
							</td>
							<td rel="L460" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L461" class="lines-num">
								<span id="L461" data-line-number="461"></span>
							</td>
							<td rel="L461" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="s2">&#34;----category----&#34;</span><span class="o">+</span><span class="sb">`</span><span class="sb">tid:</span><span class="si">${</span><span class="nx">tid</span><span class="si">}</span><span class="sb">,detail_order:</span><span class="si">${</span><span class="nx">detail_order</span><span class="si">}</span><span class="sb">,showMode:</span><span class="si">${</span><span class="nx">showMode</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L462" class="lines-num">
								<span id="L462" data-line-number="462"></span>
							</td>
							<td rel="L462" class="lines-code chroma">
								<code>	<span class="c1">// print(allList);</code>
							</td>
						</tr>
						
						<tr>
							<td id="L463" class="lines-num">
								<span id="L463" data-line-number="463"></span>
							</td>
							<td rel="L463" class="lines-code chroma">
								<code></span><span class="c1"></span>	<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L464" class="lines-num">
								<span id="L464" data-line-number="464"></span>
							</td>
							<td rel="L464" class="lines-code chroma">
								<code>		<span class="s1">&#39;page&#39;</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L465" class="lines-num">
								<span id="L465" data-line-number="465"></span>
							</td>
							<td rel="L465" class="lines-code chroma">
								<code>		<span class="s1">&#39;pagecount&#39;</span><span class="o">:</span> <span class="mi">1</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L466" class="lines-num">
								<span id="L466" data-line-number="466"></span>
							</td>
							<td rel="L466" class="lines-code chroma">
								<code>		<span class="s1">&#39;limit&#39;</span><span class="o">:</span> <span class="nx">allList</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L467" class="lines-num">
								<span id="L467" data-line-number="467"></span>
							</td>
							<td rel="L467" class="lines-code chroma">
								<code>		<span class="s1">&#39;total&#39;</span><span class="o">:</span> <span class="nx">allList</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L468" class="lines-num">
								<span id="L468" data-line-number="468"></span>
							</td>
							<td rel="L468" class="lines-code chroma">
								<code>		<span class="s1">&#39;list&#39;</span><span class="o">:</span> <span class="nx">allList</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L469" class="lines-num">
								<span id="L469" data-line-number="469"></span>
							</td>
							<td rel="L469" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L470" class="lines-num">
								<span id="L470" data-line-number="470"></span>
							</td>
							<td rel="L470" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L471" class="lines-num">
								<span id="L471" data-line-number="471"></span>
							</td>
							<td rel="L471" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L472" class="lines-num">
								<span id="L472" data-line-number="472"></span>
							</td>
							<td rel="L472" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">getAll</span><span class="p">(</span><span class="nx">otid</span><span class="p">,</span><span class="nx">tid</span><span class="p">,</span><span class="nx">drives</span><span class="p">,</span><span class="nx">path</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L473" class="lines-num">
								<span id="L473" data-line-number="473"></span>
							</td>
							<td rel="L473" class="lines-code chroma">
								<code>	<span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L474" class="lines-num">
								<span id="L474" data-line-number="474"></span>
							</td>
							<td rel="L474" class="lines-code chroma">
								<code>		<span class="kr">const</span> <span class="nx">content</span> <span class="o">=</span> <span class="nx">category</span><span class="p">(</span><span class="nx">tid</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="kc">null</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L475" class="lines-num">
								<span id="L475" data-line-number="475"></span>
							</td>
							<td rel="L475" class="lines-code chroma">
								<code>		<span class="kr">const</span> <span class="nx">isFile</span> <span class="o">=</span> <span class="nx">isMedia</span><span class="p">(</span><span class="nx">otid</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/#all#|#search#/g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;@@@&#39;</span><span class="p">)</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L476" class="lines-num">
								<span id="L476" data-line-number="476"></span>
							</td>
							<td rel="L476" class="lines-code chroma">
								<code>		<span class="kr">const</span> <span class="p">{</span> <span class="nx">list</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">content</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L477" class="lines-num">
								<span id="L477" data-line-number="477"></span>
							</td>
							<td rel="L477" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">vod_play_url</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L478" class="lines-num">
								<span id="L478" data-line-number="478"></span>
							</td>
							<td rel="L478" class="lines-code chroma">
								<code>		<span class="nx">list</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">x</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L479" class="lines-num">
								<span id="L479" data-line-number="479"></span>
							</td>
							<td rel="L479" class="lines-code chroma">
								<code>			<span class="k">if</span> <span class="p">(</span><span class="nx">x</span><span class="p">.</span><span class="nx">vod_tag</span> <span class="o">===</span> <span class="s1">&#39;file&#39;</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L480" class="lines-num">
								<span id="L480" data-line-number="480"></span>
							</td>
							<td rel="L480" class="lines-code chroma">
								<code>				<span class="kd">let</span> <span class="nx">vid</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">vod_id</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/#all#|#search#/g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L481" class="lines-num">
								<span id="L481" data-line-number="481"></span>
							</td>
							<td rel="L481" class="lines-code chroma">
								<code>				<span class="nx">vod_play_url</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="sb">`</span><span class="si">${</span><span class="nx">x</span><span class="p">.</span><span class="nx">vod_name</span><span class="si">}</span><span class="sb">$</span><span class="si">${</span><span class="nx">vid</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">vid</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;$&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L482" class="lines-num">
								<span id="L482" data-line-number="482"></span>
							</td>
							<td rel="L482" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L483" class="lines-num">
								<span id="L483" data-line-number="483"></span>
							</td>
							<td rel="L483" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L484" class="lines-num">
								<span id="L484" data-line-number="484"></span>
							</td>
							<td rel="L484" class="lines-code chroma">
								<code>		<span class="kr">const</span> <span class="nx">pl</span> <span class="o">=</span> <span class="nx">path</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&#34;/&#34;</span><span class="p">)</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">it</span><span class="p">=&gt;</span><span class="nx">it</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L485" class="lines-num">
								<span id="L485" data-line-number="485"></span>
							</td>
							<td rel="L485" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">vod_name</span> <span class="o">=</span> <span class="nx">pl</span><span class="p">[</span><span class="nx">pl</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">]</span> <span class="o">||</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L486" class="lines-num">
								<span id="L486" data-line-number="486"></span>
							</td>
							<td rel="L486" class="lines-code chroma">
								<code>		<span class="k">if</span><span class="p">(</span><span class="nx">vod_name</span> <span class="o">===</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">name</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L487" class="lines-num">
								<span id="L487" data-line-number="487"></span>
							</td>
							<td rel="L487" class="lines-code chroma">
								<code>			<span class="nx">print</span><span class="p">(</span><span class="nx">pl</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L488" class="lines-num">
								<span id="L488" data-line-number="488"></span>
							</td>
							<td rel="L488" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L489" class="lines-num">
								<span id="L489" data-line-number="489"></span>
							</td>
							<td rel="L489" class="lines-code chroma">
								<code>		<span class="k">if</span><span class="p">(</span><span class="nx">otid</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;#search#&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L490" class="lines-num">
								<span id="L490" data-line-number="490"></span>
							</td>
							<td rel="L490" class="lines-code chroma">
								<code>			<span class="nx">vod_name</span><span class="o">+=</span><span class="s1">&#39;[搜]&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L491" class="lines-num">
								<span id="L491" data-line-number="491"></span>
							</td>
							<td rel="L491" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L492" class="lines-num">
								<span id="L492" data-line-number="492"></span>
							</td>
							<td rel="L492" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">vod</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L493" class="lines-num">
								<span id="L493" data-line-number="493"></span>
							</td>
							<td rel="L493" class="lines-code chroma">
								<code>			<span class="c1">// vod_id: tid,</code>
							</td>
						</tr>
						
						<tr>
							<td id="L494" class="lines-num">
								<span id="L494" data-line-number="494"></span>
							</td>
							<td rel="L494" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="nx">vod_id</span><span class="o">:</span> <span class="nx">otid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L495" class="lines-num">
								<span id="L495" data-line-number="495"></span>
							</td>
							<td rel="L495" class="lines-code chroma">
								<code>			<span class="nx">vod_name</span><span class="o">:</span> <span class="nx">vod_name</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L496" class="lines-num">
								<span id="L496" data-line-number="496"></span>
							</td>
							<td rel="L496" class="lines-code chroma">
								<code>			<span class="nx">type_name</span><span class="o">:</span> <span class="s2">&#34;文件夹&#34;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L497" class="lines-num">
								<span id="L497" data-line-number="497"></span>
							</td>
							<td rel="L497" class="lines-code chroma">
								<code>			<span class="nx">vod_pic</span><span class="o">:</span> <span class="s2">&#34;https://avatars.githubusercontent.com/u/97389433?s=120&amp;v=4&#34;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L498" class="lines-num">
								<span id="L498" data-line-number="498"></span>
							</td>
							<td rel="L498" class="lines-code chroma">
								<code>			<span class="nx">vod_content</span><span class="o">:</span> <span class="nx">tid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L499" class="lines-num">
								<span id="L499" data-line-number="499"></span>
							</td>
							<td rel="L499" class="lines-code chroma">
								<code>			<span class="nx">vod_tag</span><span class="o">:</span> <span class="s1">&#39;folder&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L500" class="lines-num">
								<span id="L500" data-line-number="500"></span>
							</td>
							<td rel="L500" class="lines-code chroma">
								<code>			<span class="nx">vod_play_from</span><span class="o">:</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L501" class="lines-num">
								<span id="L501" data-line-number="501"></span>
							</td>
							<td rel="L501" class="lines-code chroma">
								<code>			<span class="nx">vod_play_url</span><span class="o">:</span> <span class="nx">vod_play_url</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;#&#39;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L502" class="lines-num">
								<span id="L502" data-line-number="502"></span>
							</td>
							<td rel="L502" class="lines-code chroma">
								<code>			<span class="nx">vod_remarks</span><span class="o">:</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L503" class="lines-num">
								<span id="L503" data-line-number="503"></span>
							</td>
							<td rel="L503" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L504" class="lines-num">
								<span id="L504" data-line-number="504"></span>
							</td>
							<td rel="L504" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="s2">&#34;----detail1----&#34;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L505" class="lines-num">
								<span id="L505" data-line-number="505"></span>
							</td>
							<td rel="L505" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="nx">vod</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L506" class="lines-num">
								<span id="L506" data-line-number="506"></span>
							</td>
							<td rel="L506" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="p">{</span> <span class="s1">&#39;list&#39;</span><span class="o">:</span> <span class="p">[</span><span class="nx">vod</span><span class="p">]</span> <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L507" class="lines-num">
								<span id="L507" data-line-number="507"></span>
							</td>
							<td rel="L507" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L508" class="lines-num">
								<span id="L508" data-line-number="508"></span>
							</td>
							<td rel="L508" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">message</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L509" class="lines-num">
								<span id="L509" data-line-number="509"></span>
							</td>
							<td rel="L509" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">list</span> <span class="o">=</span> <span class="p">[</span><span class="p">{</span><span class="nx">vod_name</span><span class="o">:</span><span class="s1">&#39;无数据,防无限请求&#39;</span><span class="p">,</span><span class="nx">type_name</span><span class="o">:</span> <span class="s2">&#34;文件夹&#34;</span><span class="p">,</span><span class="nx">vod_id</span><span class="o">:</span><span class="s1">&#39;no_data&#39;</span><span class="p">,</span><span class="nx">vod_remarks</span><span class="o">:</span><span class="s1">&#39;不要点,会崩的&#39;</span><span class="p">,</span><span class="nx">vod_pic</span><span class="o">:</span><span class="s1">&#39;https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/static/img/404.jpg&#39;</span><span class="p">,</span><span class="nx">vod_actor</span><span class="o">:</span><span class="nx">e</span><span class="p">.</span><span class="nx">message</span><span class="p">,</span><span class="nx">vod_director</span><span class="o">:</span> <span class="nx">tid</span><span class="p">,</span><span class="nx">vod_content</span><span class="o">:</span> <span class="nx">otid</span><span class="p">}</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L510" class="lines-num">
								<span id="L510" data-line-number="510"></span>
							</td>
							<td rel="L510" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="p">{</span> <span class="s1">&#39;list&#39;</span><span class="o">:</span> <span class="nx">list</span> <span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L511" class="lines-num">
								<span id="L511" data-line-number="511"></span>
							</td>
							<td rel="L511" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L512" class="lines-num">
								<span id="L512" data-line-number="512"></span>
							</td>
							<td rel="L512" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L513" class="lines-num">
								<span id="L513" data-line-number="513"></span>
							</td>
							<td rel="L513" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L514" class="lines-num">
								<span id="L514" data-line-number="514"></span>
							</td>
							<td rel="L514" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">detail</span><span class="p">(</span><span class="nx">tid</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L515" class="lines-num">
								<span id="L515" data-line-number="515"></span>
							</td>
							<td rel="L515" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">isSearch</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;#search#&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L516" class="lines-num">
								<span id="L516" data-line-number="516"></span>
							</td>
							<td rel="L516" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">isAll</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;#all#&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L517" class="lines-num">
								<span id="L517" data-line-number="517"></span>
							</td>
							<td rel="L517" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">otid</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L518" class="lines-num">
								<span id="L518" data-line-number="518"></span>
							</td>
							<td rel="L518" class="lines-code chroma">
								<code>	<span class="nx">tid</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/#all#|#search#/g</span><span class="p">,</span><span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L519" class="lines-num">
								<span id="L519" data-line-number="519"></span>
							</td>
							<td rel="L519" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">isFile</span> <span class="o">=</span> <span class="nx">isMedia</span><span class="p">(</span><span class="nx">tid</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;@@@&#39;</span><span class="p">)</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L520" class="lines-num">
								<span id="L520" data-line-number="520"></span>
							</td>
							<td rel="L520" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="sb">`</span><span class="sb">isFile:</span><span class="si">${</span><span class="nx">tid</span><span class="si">}</span><span class="sb">?</span><span class="si">${</span><span class="nx">isFile</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L521" class="lines-num">
								<span id="L521" data-line-number="521"></span>
							</td>
							<td rel="L521" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="p">{</span> <span class="nx">drives</span><span class="p">,</span> <span class="nx">path</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">get_drives_path</span><span class="p">(</span><span class="nx">tid</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L522" class="lines-num">
								<span id="L522" data-line-number="522"></span>
							</td>
							<td rel="L522" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="sb">`</span><span class="sb">drives:</span><span class="si">${</span><span class="nx">drives</span><span class="si">}</span><span class="sb">,path:</span><span class="si">${</span><span class="nx">path</span><span class="si">}</span><span class="sb">,</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L523" class="lines-num">
								<span id="L523" data-line-number="523"></span>
							</td>
							<td rel="L523" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="nx">path</span><span class="p">.</span><span class="nx">endsWith</span><span class="p">(</span><span class="s2">&#34;/&#34;</span><span class="p">)</span><span class="p">)</span> <span class="p">{</span> <span class="c1">//长按文件夹可以 加载里面全部视频到详情</code>
							</td>
						</tr>
						
						<tr>
							<td id="L524" class="lines-num">
								<span id="L524" data-line-number="524"></span>
							</td>
							<td rel="L524" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="k">return</span> <span class="nx">getAll</span><span class="p">(</span><span class="nx">otid</span><span class="p">,</span><span class="nx">tid</span><span class="p">,</span><span class="nx">drives</span><span class="p">,</span><span class="nx">path</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L525" class="lines-num">
								<span id="L525" data-line-number="525"></span>
							</td>
							<td rel="L525" class="lines-code chroma">
								<code>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L526" class="lines-num">
								<span id="L526" data-line-number="526"></span>
							</td>
							<td rel="L526" class="lines-code chroma">
								<code>		<span class="k">if</span><span class="p">(</span><span class="nx">isSearch</span><span class="o">&amp;&amp;</span><span class="o">!</span><span class="nx">isFile</span><span class="p">)</span><span class="p">{</span> <span class="c1">// 搜索结果 当前目录获取所有文件</code>
							</td>
						</tr>
						
						<tr>
							<td id="L527" class="lines-num">
								<span id="L527" data-line-number="527"></span>
							</td>
							<td rel="L527" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="k">return</span> <span class="nx">getAll</span><span class="p">(</span><span class="nx">otid</span><span class="p">,</span><span class="nx">tid</span><span class="p">,</span><span class="nx">drives</span><span class="p">,</span><span class="nx">path</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L528" class="lines-num">
								<span id="L528" data-line-number="528"></span>
							</td>
							<td rel="L528" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">isAll</span><span class="p">)</span><span class="p">{</span> <span class="c1">// 上级目录获取所有文件  不管是搜索还是分类,只要不是 搜索到的文件夹，且展示模式为全部,都获取上级目录的所有文件</code>
							</td>
						</tr>
						
						<tr>
							<td id="L529" class="lines-num">
								<span id="L529" data-line-number="529"></span>
							</td>
							<td rel="L529" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="c1">// 是文件就取上级目录</code>
							</td>
						</tr>
						
						<tr>
							<td id="L530" class="lines-num">
								<span id="L530" data-line-number="530"></span>
							</td>
							<td rel="L530" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="kd">let</span> <span class="nx">new_tid</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L531" class="lines-num">
								<span id="L531" data-line-number="531"></span>
							</td>
							<td rel="L531" class="lines-code chroma">
								<code>			<span class="k">if</span><span class="p">(</span><span class="nx">isFile</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L532" class="lines-num">
								<span id="L532" data-line-number="532"></span>
							</td>
							<td rel="L532" class="lines-code chroma">
								<code>				<span class="nx">new_tid</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;/&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L533" class="lines-num">
								<span id="L533" data-line-number="533"></span>
							</td>
							<td rel="L533" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L534" class="lines-num">
								<span id="L534" data-line-number="534"></span>
							</td>
							<td rel="L534" class="lines-code chroma">
								<code>				<span class="nx">new_tid</span> <span class="o">=</span> <span class="nx">tid</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L535" class="lines-num">
								<span id="L535" data-line-number="535"></span>
							</td>
							<td rel="L535" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L536" class="lines-num">
								<span id="L536" data-line-number="536"></span>
							</td>
							<td rel="L536" class="lines-code chroma">
								<code>			<span class="nx">print</span><span class="p">(</span><span class="sb">`</span><span class="sb">全集模式 tid:</span><span class="si">${</span><span class="nx">tid</span><span class="si">}</span><span class="sb">=&gt;tid:</span><span class="si">${</span><span class="nx">new_tid</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L537" class="lines-num">
								<span id="L537" data-line-number="537"></span>
							</td>
							<td rel="L537" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="p">{</span> <span class="nx">drives</span><span class="p">,</span> <span class="nx">path</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">get_drives_path</span><span class="p">(</span><span class="nx">new_tid</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L538" class="lines-num">
								<span id="L538" data-line-number="538"></span>
							</td>
							<td rel="L538" class="lines-code chroma">
								<code>			<span class="k">return</span> <span class="nx">getAll</span><span class="p">(</span><span class="nx">otid</span><span class="p">,</span><span class="nx">new_tid</span><span class="p">,</span><span class="nx">drives</span><span class="p">,</span><span class="nx">path</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L539" class="lines-num">
								<span id="L539" data-line-number="539"></span>
							</td>
							<td rel="L539" class="lines-code chroma">
								<code>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">isFile</span><span class="p">)</span><span class="p">{</span> <span class="c1">// 单文件进入</code>
							</td>
						</tr>
						
						<tr>
							<td id="L540" class="lines-num">
								<span id="L540" data-line-number="540"></span>
							</td>
							<td rel="L540" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="kd">let</span> <span class="nx">paths</span> <span class="o">=</span> <span class="nx">path</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&#34;@@@&#34;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L541" class="lines-num">
								<span id="L541" data-line-number="541"></span>
							</td>
							<td rel="L541" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">vod_name</span> <span class="o">=</span> <span class="nx">paths</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">paths</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="s2">&#34;/&#34;</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L542" class="lines-num">
								<span id="L542" data-line-number="542"></span>
							</td>
							<td rel="L542" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">vod_title</span> <span class="o">=</span> <span class="nx">vod_name</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L543" class="lines-num">
								<span id="L543" data-line-number="543"></span>
							</td>
							<td rel="L543" class="lines-code chroma">
								<code>			<span class="k">if</span><span class="p">(</span><span class="nx">otid</span><span class="p">.</span><span class="nx">includes</span><span class="p">(</span><span class="s1">&#39;#search#&#39;</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L544" class="lines-num">
								<span id="L544" data-line-number="544"></span>
							</td>
							<td rel="L544" class="lines-code chroma">
								<code>				<span class="nx">vod_title</span><span class="o">+=</span><span class="s1">&#39;[搜]&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L545" class="lines-num">
								<span id="L545" data-line-number="545"></span>
							</td>
							<td rel="L545" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L546" class="lines-num">
								<span id="L546" data-line-number="546"></span>
							</td>
							<td rel="L546" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">vod</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L547" class="lines-num">
								<span id="L547" data-line-number="547"></span>
							</td>
							<td rel="L547" class="lines-code chroma">
								<code>				<span class="nx">vod_id</span><span class="o">:</span> <span class="nx">otid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L548" class="lines-num">
								<span id="L548" data-line-number="548"></span>
							</td>
							<td rel="L548" class="lines-code chroma">
								<code>				<span class="nx">vod_name</span><span class="o">:</span> <span class="nx">vod_title</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L549" class="lines-num">
								<span id="L549" data-line-number="549"></span>
							</td>
							<td rel="L549" class="lines-code chroma">
								<code>				<span class="nx">type_name</span><span class="o">:</span> <span class="s2">&#34;文件&#34;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L550" class="lines-num">
								<span id="L550" data-line-number="550"></span>
							</td>
							<td rel="L550" class="lines-code chroma">
								<code>				<span class="nx">vod_pic</span><span class="o">:</span> <span class="s2">&#34;https://avatars.githubusercontent.com/u/97389433?s=120&amp;v=4&#34;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L551" class="lines-num">
								<span id="L551" data-line-number="551"></span>
							</td>
							<td rel="L551" class="lines-code chroma">
								<code>				<span class="nx">vod_content</span><span class="o">:</span> <span class="nx">tid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L552" class="lines-num">
								<span id="L552" data-line-number="552"></span>
							</td>
							<td rel="L552" class="lines-code chroma">
								<code>				<span class="nx">vod_play_from</span><span class="o">:</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L553" class="lines-num">
								<span id="L553" data-line-number="553"></span>
							</td>
							<td rel="L553" class="lines-code chroma">
								<code>				<span class="nx">vod_play_url</span><span class="o">:</span> <span class="nx">vod_name</span> <span class="o">+</span> <span class="s2">&#34;$&#34;</span> <span class="o">+</span> <span class="nx">path</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L554" class="lines-num">
								<span id="L554" data-line-number="554"></span>
							</td>
							<td rel="L554" class="lines-code chroma">
								<code>				<span class="nx">vod_remarks</span><span class="o">:</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">settings</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L555" class="lines-num">
								<span id="L555" data-line-number="555"></span>
							</td>
							<td rel="L555" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L556" class="lines-num">
								<span id="L556" data-line-number="556"></span>
							</td>
							<td rel="L556" class="lines-code chroma">
								<code>			<span class="nx">print</span><span class="p">(</span><span class="s2">&#34;----detail2----&#34;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L557" class="lines-num">
								<span id="L557" data-line-number="557"></span>
							</td>
							<td rel="L557" class="lines-code chroma">
								<code>			<span class="nx">print</span><span class="p">(</span><span class="nx">vod</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L558" class="lines-num">
								<span id="L558" data-line-number="558"></span>
							</td>
							<td rel="L558" class="lines-code chroma">
								<code>			<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L559" class="lines-num">
								<span id="L559" data-line-number="559"></span>
							</td>
							<td rel="L559" class="lines-code chroma">
								<code>				<span class="s1">&#39;list&#39;</span><span class="o">:</span> <span class="p">[</span><span class="nx">vod</span><span class="p">]</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L560" class="lines-num">
								<span id="L560" data-line-number="560"></span>
							</td>
							<td rel="L560" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L561" class="lines-num">
								<span id="L561" data-line-number="561"></span>
							</td>
							<td rel="L561" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L562" class="lines-num">
								<span id="L562" data-line-number="562"></span>
							</td>
							<td rel="L562" class="lines-code chroma">
								<code>			<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L563" class="lines-num">
								<span id="L563" data-line-number="563"></span>
							</td>
							<td rel="L563" class="lines-code chroma">
								<code>				<span class="s1">&#39;list&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">]</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L564" class="lines-num">
								<span id="L564" data-line-number="564"></span>
							</td>
							<td rel="L564" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L565" class="lines-num">
								<span id="L565" data-line-number="565"></span>
							</td>
							<td rel="L565" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L566" class="lines-num">
								<span id="L566" data-line-number="566"></span>
							</td>
							<td rel="L566" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L567" class="lines-num">
								<span id="L567" data-line-number="567"></span>
							</td>
							<td rel="L567" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L568" class="lines-num">
								<span id="L568" data-line-number="568"></span>
							</td>
							<td rel="L568" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L569" class="lines-num">
								<span id="L569" data-line-number="569"></span>
							</td>
							<td rel="L569" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">play</span><span class="p">(</span><span class="nx">flag</span><span class="p">,</span> <span class="nx">id</span><span class="p">,</span> <span class="nx">flags</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L570" class="lines-num">
								<span id="L570" data-line-number="570"></span>
							</td>
							<td rel="L570" class="lines-code chroma">
								<code>	<span class="kr">const</span> <span class="nx">drives</span> <span class="o">=</span> <span class="nx">get_drives</span><span class="p">(</span><span class="nx">flag</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L571" class="lines-num">
								<span id="L571" data-line-number="571"></span>
							</td>
							<td rel="L571" class="lines-code chroma">
								<code>	<span class="kr">const</span> <span class="nx">urls</span> <span class="o">=</span> <span class="nx">id</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&#34;@@@&#34;</span><span class="p">)</span><span class="p">;</span> <span class="c1">// @@@ 分割前是 相对文件path,分割后是字幕文件</code>
							</td>
						</tr>
						
						<tr>
							<td id="L572" class="lines-num">
								<span id="L572" data-line-number="572"></span>
							</td>
							<td rel="L572" class="lines-code chroma">
								<code></span><span class="c1"></span>	<span class="kd">let</span> <span class="nx">vod</span> <span class="o">=</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L573" class="lines-num">
								<span id="L573" data-line-number="573"></span>
							</td>
							<td rel="L573" class="lines-code chroma">
								<code>		<span class="s1">&#39;parse&#39;</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L574" class="lines-num">
								<span id="L574" data-line-number="574"></span>
							</td>
							<td rel="L574" class="lines-code chroma">
								<code>		<span class="s1">&#39;playUrl&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L575" class="lines-num">
								<span id="L575" data-line-number="575"></span>
							</td>
							<td rel="L575" class="lines-code chroma">
								<code>		<span class="c1">// &#39;url&#39;: drives.getFile(urls[0]).raw_url+&#39;#.m3u8&#39; // 加 # 没法播放</code>
							</td>
						</tr>
						
						<tr>
							<td id="L576" class="lines-num">
								<span id="L576" data-line-number="576"></span>
							</td>
							<td rel="L576" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="s1">&#39;url&#39;</span><span class="o">:</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">getFile</span><span class="p">(</span><span class="nx">urls</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">)</span><span class="p">.</span><span class="nx">raw_url</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L577" class="lines-num">
								<span id="L577" data-line-number="577"></span>
							</td>
							<td rel="L577" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L578" class="lines-num">
								<span id="L578" data-line-number="578"></span>
							</td>
							<td rel="L578" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="nx">urls</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">2</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L579" class="lines-num">
								<span id="L579" data-line-number="579"></span>
							</td>
							<td rel="L579" class="lines-code chroma">
								<code>		<span class="kr">const</span> <span class="nx">path</span> <span class="o">=</span> <span class="nx">urls</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">urls</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L580" class="lines-num">
								<span id="L580" data-line-number="580"></span>
							</td>
							<td rel="L580" class="lines-code chroma">
								<code>		<span class="nx">vod</span><span class="p">.</span><span class="nx">subt</span> <span class="o">=</span> <span class="nx">drives</span><span class="p">.</span><span class="nx">getFile</span><span class="p">(</span><span class="nx">path</span> <span class="o">+</span> <span class="nx">urls</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="p">)</span><span class="p">.</span><span class="nx">raw_url1</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L581" class="lines-num">
								<span id="L581" data-line-number="581"></span>
							</td>
							<td rel="L581" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L582" class="lines-num">
								<span id="L582" data-line-number="582"></span>
							</td>
							<td rel="L582" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="s2">&#34;----play----&#34;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L583" class="lines-num">
								<span id="L583" data-line-number="583"></span>
							</td>
							<td rel="L583" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="nx">vod</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L584" class="lines-num">
								<span id="L584" data-line-number="584"></span>
							</td>
							<td rel="L584" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">vod</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L585" class="lines-num">
								<span id="L585" data-line-number="585"></span>
							</td>
							<td rel="L585" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L586" class="lines-num">
								<span id="L586" data-line-number="586"></span>
							</td>
							<td rel="L586" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L587" class="lines-num">
								<span id="L587" data-line-number="587"></span>
							</td>
							<td rel="L587" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">search</span><span class="p">(</span><span class="nx">wd</span><span class="p">,</span> <span class="nx">quick</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L588" class="lines-num">
								<span id="L588" data-line-number="588"></span>
							</td>
							<td rel="L588" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="nx">__drives</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L589" class="lines-num">
								<span id="L589" data-line-number="589"></span>
							</td>
							<td rel="L589" class="lines-code chroma">
								<code>	<span class="nx">print</span><span class="p">(</span><span class="s1">&#39;可搜索的alist驱动:&#39;</span><span class="o">+</span><span class="nx">searchDriver</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L590" class="lines-num">
								<span id="L590" data-line-number="590"></span>
							</td>
							<td rel="L590" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">searchDriver</span><span class="o">||</span><span class="o">!</span><span class="nx">wd</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L591" class="lines-num">
								<span id="L591" data-line-number="591"></span>
							</td>
							<td rel="L591" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L592" class="lines-num">
								<span id="L592" data-line-number="592"></span>
							</td>
							<td rel="L592" class="lines-code chroma">
								<code>			<span class="s1">&#39;list&#39;</span><span class="o">:</span> <span class="p">[</span><span class="p">]</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L593" class="lines-num">
								<span id="L593" data-line-number="593"></span>
							</td>
							<td rel="L593" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L594" class="lines-num">
								<span id="L594" data-line-number="594"></span>
							</td>
							<td rel="L594" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L595" class="lines-num">
								<span id="L595" data-line-number="595"></span>
							</td>
							<td rel="L595" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">driver</span> <span class="o">=</span> <span class="nx">__drives</span><span class="p">[</span><span class="nx">searchDriver</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L596" class="lines-num">
								<span id="L596" data-line-number="596"></span>
							</td>
							<td rel="L596" class="lines-code chroma">
								<code>		<span class="nx">wd</span> <span class="o">=</span> <span class="nx">wd</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">it</span><span class="p">=&gt;</span><span class="nx">it</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span><span class="p">)</span><span class="p">)</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;+&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L597" class="lines-num">
								<span id="L597" data-line-number="597"></span>
							</td>
							<td rel="L597" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="nx">driver</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L598" class="lines-num">
								<span id="L598" data-line-number="598"></span>
							</td>
							<td rel="L598" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">surl</span> <span class="o">=</span> <span class="nx">driver</span><span class="p">.</span><span class="nx">server</span> <span class="o">+</span> <span class="s1">&#39;/search?box=&#39;</span><span class="o">+</span><span class="nx">wd</span><span class="o">+</span><span class="s1">&#39;&amp;url=&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L599" class="lines-num">
								<span id="L599" data-line-number="599"></span>
							</td>
							<td rel="L599" class="lines-code chroma">
								<code>		<span class="k">if</span><span class="p">(</span><span class="nx">search_type</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L600" class="lines-num">
								<span id="L600" data-line-number="600"></span>
							</td>
							<td rel="L600" class="lines-code chroma">
								<code>			<span class="nx">surl</span><span class="o">+=</span><span class="s1">&#39;&amp;type=&#39;</span><span class="o">+</span><span class="nx">search_type</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L601" class="lines-num">
								<span id="L601" data-line-number="601"></span>
							</td>
							<td rel="L601" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L602" class="lines-num">
								<span id="L602" data-line-number="602"></span>
							</td>
							<td rel="L602" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="s1">&#39;搜索链接:&#39;</span><span class="o">+</span><span class="nx">surl</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L603" class="lines-num">
								<span id="L603" data-line-number="603"></span>
							</td>
							<td rel="L603" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">html</span> <span class="o">=</span> <span class="nx">http</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">surl</span><span class="p">)</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L604" class="lines-num">
								<span id="L604" data-line-number="604"></span>
							</td>
							<td rel="L604" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">lists</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L605" class="lines-num">
								<span id="L605" data-line-number="605"></span>
							</td>
							<td rel="L605" class="lines-code chroma">
								<code>		<span class="k">try</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L606" class="lines-num">
								<span id="L606" data-line-number="606"></span>
							</td>
							<td rel="L606" class="lines-code chroma">
								<code>			<span class="nx">lists</span> <span class="o">=</span> <span class="nx">pdfa</span><span class="p">(</span><span class="nx">html</span><span class="p">,</span><span class="s1">&#39;div&amp;&amp;ul&amp;&amp;a&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L607" class="lines-num">
								<span id="L607" data-line-number="607"></span>
							</td>
							<td rel="L607" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L608" class="lines-num">
								<span id="L608" data-line-number="608"></span>
							</td>
							<td rel="L608" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="sb">`</span><span class="sb">搜索结果数:</span><span class="si">${</span><span class="nx">lists</span><span class="p">.</span><span class="nx">length</span><span class="si">}</span><span class="sb">,搜索结果显示数量限制:</span><span class="si">${</span><span class="nx">limit_search_show</span><span class="si">}</span><span class="sb">`</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L609" class="lines-num">
								<span id="L609" data-line-number="609"></span>
							</td>
							<td rel="L609" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">vods</span> <span class="o">=</span> <span class="p">[</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L610" class="lines-num">
								<span id="L610" data-line-number="610"></span>
							</td>
							<td rel="L610" class="lines-code chroma">
								<code>		<span class="kd">let</span> <span class="nx">excludeReg</span> <span class="o">=</span> <span class="sr">/\.(pdf|epub|mobi|txt|doc|lrc)$/</span><span class="p">;</span> <span class="c1">// 过滤后缀文件</code>
							</td>
						</tr>
						
						<tr>
							<td id="L611" class="lines-num">
								<span id="L611" data-line-number="611"></span>
							</td>
							<td rel="L611" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="kd">let</span> <span class="nx">cnt</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L612" class="lines-num">
								<span id="L612" data-line-number="612"></span>
							</td>
							<td rel="L612" class="lines-code chroma">
								<code>		<span class="nx">lists</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">it</span><span class="p">=&gt;</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L613" class="lines-num">
								<span id="L613" data-line-number="613"></span>
							</td>
							<td rel="L613" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">vhref</span> <span class="o">=</span> <span class="nx">pdfh</span><span class="p">(</span><span class="nx">it</span><span class="p">,</span><span class="s1">&#39;a&amp;&amp;href&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L614" class="lines-num">
								<span id="L614" data-line-number="614"></span>
							</td>
							<td rel="L614" class="lines-code chroma">
								<code>			<span class="k">if</span><span class="p">(</span><span class="nx">vhref</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L615" class="lines-num">
								<span id="L615" data-line-number="615"></span>
							</td>
							<td rel="L615" class="lines-code chroma">
								<code>				<span class="nx">vhref</span> <span class="o">=</span> <span class="nx">unescape</span><span class="p">(</span><span class="nx">vhref</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L616" class="lines-num">
								<span id="L616" data-line-number="616"></span>
							</td>
							<td rel="L616" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L617" class="lines-num">
								<span id="L617" data-line-number="617"></span>
							</td>
							<td rel="L617" class="lines-code chroma">
								<code>			<span class="k">if</span><span class="p">(</span><span class="nx">excludeReg</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">vhref</span><span class="p">)</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L618" class="lines-num">
								<span id="L618" data-line-number="618"></span>
							</td>
							<td rel="L618" class="lines-code chroma">
								<code>				<span class="k">return</span><span class="p">;</span> <span class="c1">//跳过本次循环</code>
							</td>
						</tr>
						
						<tr>
							<td id="L619" class="lines-num">
								<span id="L619" data-line-number="619"></span>
							</td>
							<td rel="L619" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L620" class="lines-num">
								<span id="L620" data-line-number="620"></span>
							</td>
							<td rel="L620" class="lines-code chroma">
								<code>			<span class="k">if</span><span class="p">(</span><span class="nx">cnt</span> <span class="o">&lt;</span> <span class="nx">limit_search_show</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L621" class="lines-num">
								<span id="L621" data-line-number="621"></span>
							</td>
							<td rel="L621" class="lines-code chroma">
								<code>				<span class="nx">print</span><span class="p">(</span><span class="nx">vhref</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L622" class="lines-num">
								<span id="L622" data-line-number="622"></span>
							</td>
							<td rel="L622" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L623" class="lines-num">
								<span id="L623" data-line-number="623"></span>
							</td>
							<td rel="L623" class="lines-code chroma">
								<code>			<span class="nx">cnt</span> <span class="o">++</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L624" class="lines-num">
								<span id="L624" data-line-number="624"></span>
							</td>
							<td rel="L624" class="lines-code chroma">
								<code>			<span class="kd">let</span> <span class="nx">vid</span> <span class="o">=</span> <span class="nx">searchDriver</span><span class="o">+</span><span class="s1">&#39;$&#39;</span><span class="o">+</span><span class="nx">vhref</span><span class="o">+</span><span class="s1">&#39;#search#&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L625" class="lines-num">
								<span id="L625" data-line-number="625"></span>
							</td>
							<td rel="L625" class="lines-code chroma">
								<code>			<span class="k">if</span><span class="p">(</span><span class="nx">showMode</span><span class="o">===</span><span class="s1">&#39;all&#39;</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L626" class="lines-num">
								<span id="L626" data-line-number="626"></span>
							</td>
							<td rel="L626" class="lines-code chroma">
								<code>				<span class="nx">vid</span><span class="o">+=</span><span class="s1">&#39;#all#&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L627" class="lines-num">
								<span id="L627" data-line-number="627"></span>
							</td>
							<td rel="L627" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L628" class="lines-num">
								<span id="L628" data-line-number="628"></span>
							</td>
							<td rel="L628" class="lines-code chroma">
								<code>			<span class="nx">vods</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L629" class="lines-num">
								<span id="L629" data-line-number="629"></span>
							</td>
							<td rel="L629" class="lines-code chroma">
								<code>				<span class="nx">vod_name</span><span class="o">:</span><span class="nx">pdfh</span><span class="p">(</span><span class="nx">it</span><span class="p">,</span><span class="s1">&#39;a&amp;&amp;Text&#39;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L630" class="lines-num">
								<span id="L630" data-line-number="630"></span>
							</td>
							<td rel="L630" class="lines-code chroma">
								<code>				<span class="nx">vod_id</span><span class="o">:</span><span class="nx">vid</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L631" class="lines-num">
								<span id="L631" data-line-number="631"></span>
							</td>
							<td rel="L631" class="lines-code chroma">
								<code>				<span class="nx">vod_tag</span><span class="o">:</span> <span class="nx">isMedia</span><span class="p">(</span><span class="nx">vhref</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;file&#39;</span> <span class="o">:</span> <span class="s1">&#39;folder&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L632" class="lines-num">
								<span id="L632" data-line-number="632"></span>
							</td>
							<td rel="L632" class="lines-code chroma">
								<code>				<span class="nx">vod_pic</span><span class="o">:</span><span class="s1">&#39;http://img1.3png.com/281e284a670865a71d91515866552b5f172b.png&#39;</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L633" class="lines-num">
								<span id="L633" data-line-number="633"></span>
							</td>
							<td rel="L633" class="lines-code chroma">
								<code>				<span class="nx">vod_remarks</span><span class="o">:</span><span class="nx">searchDriver</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L634" class="lines-num">
								<span id="L634" data-line-number="634"></span>
							</td>
							<td rel="L634" class="lines-code chroma">
								<code>			<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L635" class="lines-num">
								<span id="L635" data-line-number="635"></span>
							</td>
							<td rel="L635" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L636" class="lines-num">
								<span id="L636" data-line-number="636"></span>
							</td>
							<td rel="L636" class="lines-code chroma">
								<code>		<span class="c1">// 截取搜索结果</code>
							</td>
						</tr>
						
						<tr>
							<td id="L637" class="lines-num">
								<span id="L637" data-line-number="637"></span>
							</td>
							<td rel="L637" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="nx">vods</span> <span class="o">=</span> <span class="nx">vods</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">limit_search_show</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L638" class="lines-num">
								<span id="L638" data-line-number="638"></span>
							</td>
							<td rel="L638" class="lines-code chroma">
								<code>		<span class="nx">print</span><span class="p">(</span><span class="nx">vods</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L639" class="lines-num">
								<span id="L639" data-line-number="639"></span>
							</td>
							<td rel="L639" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L640" class="lines-num">
								<span id="L640" data-line-number="640"></span>
							</td>
							<td rel="L640" class="lines-code chroma">
								<code>			<span class="s1">&#39;list&#39;</span><span class="o">:</span> <span class="nx">vods</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L641" class="lines-num">
								<span id="L641" data-line-number="641"></span>
							</td>
							<td rel="L641" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L642" class="lines-num">
								<span id="L642" data-line-number="642"></span>
							</td>
							<td rel="L642" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L643" class="lines-num">
								<span id="L643" data-line-number="643"></span>
							</td>
							<td rel="L643" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L644" class="lines-num">
								<span id="L644" data-line-number="644"></span>
							</td>
							<td rel="L644" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L645" class="lines-num">
								<span id="L645" data-line-number="645"></span>
							</td>
							<td rel="L645" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">get_size</span><span class="p">(</span><span class="nx">sz</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L646" class="lines-num">
								<span id="L646" data-line-number="646"></span>
							</td>
							<td rel="L646" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="nx">sz</span> <span class="o">&lt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L647" class="lines-num">
								<span id="L647" data-line-number="647"></span>
							</td>
							<td rel="L647" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="s2">&#34;&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L648" class="lines-num">
								<span id="L648" data-line-number="648"></span>
							</td>
							<td rel="L648" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L649" class="lines-num">
								<span id="L649" data-line-number="649"></span>
							</td>
							<td rel="L649" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">filesize</span> <span class="o">=</span> <span class="s2">&#34;&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L650" class="lines-num">
								<span id="L650" data-line-number="650"></span>
							</td>
							<td rel="L650" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="nx">sz</span> <span class="o">&gt;</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mf">1024.0</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L651" class="lines-num">
								<span id="L651" data-line-number="651"></span>
							</td>
							<td rel="L651" class="lines-code chroma">
								<code>		<span class="nx">sz</span> <span class="o">/=</span> <span class="p">(</span><span class="mi">1024</span> <span class="o">*</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mf">1024.0</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L652" class="lines-num">
								<span id="L652" data-line-number="652"></span>
							</td>
							<td rel="L652" class="lines-code chroma">
								<code>		<span class="nx">filesize</span> <span class="o">=</span> <span class="s2">&#34;TB&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L653" class="lines-num">
								<span id="L653" data-line-number="653"></span>
							</td>
							<td rel="L653" class="lines-code chroma">
								<code>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">sz</span> <span class="o">&gt;</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mf">1024.0</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L654" class="lines-num">
								<span id="L654" data-line-number="654"></span>
							</td>
							<td rel="L654" class="lines-code chroma">
								<code>		<span class="nx">sz</span> <span class="o">/=</span> <span class="p">(</span><span class="mi">1024</span> <span class="o">*</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mf">1024.0</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L655" class="lines-num">
								<span id="L655" data-line-number="655"></span>
							</td>
							<td rel="L655" class="lines-code chroma">
								<code>		<span class="nx">filesize</span> <span class="o">=</span> <span class="s2">&#34;GB&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L656" class="lines-num">
								<span id="L656" data-line-number="656"></span>
							</td>
							<td rel="L656" class="lines-code chroma">
								<code>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">sz</span> <span class="o">&gt;</span> <span class="mi">1024</span> <span class="o">*</span> <span class="mf">1024.0</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L657" class="lines-num">
								<span id="L657" data-line-number="657"></span>
							</td>
							<td rel="L657" class="lines-code chroma">
								<code>		<span class="nx">sz</span> <span class="o">/=</span> <span class="p">(</span><span class="mi">1024</span> <span class="o">*</span> <span class="mf">1024.0</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L658" class="lines-num">
								<span id="L658" data-line-number="658"></span>
							</td>
							<td rel="L658" class="lines-code chroma">
								<code>		<span class="nx">filesize</span> <span class="o">=</span> <span class="s2">&#34;MB&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L659" class="lines-num">
								<span id="L659" data-line-number="659"></span>
							</td>
							<td rel="L659" class="lines-code chroma">
								<code>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="nx">sz</span> <span class="o">&gt;</span> <span class="mf">1024.0</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L660" class="lines-num">
								<span id="L660" data-line-number="660"></span>
							</td>
							<td rel="L660" class="lines-code chroma">
								<code>		<span class="nx">sz</span> <span class="o">/=</span> <span class="mf">1024.0</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L661" class="lines-num">
								<span id="L661" data-line-number="661"></span>
							</td>
							<td rel="L661" class="lines-code chroma">
								<code>		<span class="nx">filesize</span> <span class="o">=</span> <span class="s2">&#34;KB&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L662" class="lines-num">
								<span id="L662" data-line-number="662"></span>
							</td>
							<td rel="L662" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L663" class="lines-num">
								<span id="L663" data-line-number="663"></span>
							</td>
							<td rel="L663" class="lines-code chroma">
								<code>		<span class="nx">filesize</span> <span class="o">=</span> <span class="s2">&#34;B&#34;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L664" class="lines-num">
								<span id="L664" data-line-number="664"></span>
							</td>
							<td rel="L664" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L665" class="lines-num">
								<span id="L665" data-line-number="665"></span>
							</td>
							<td rel="L665" class="lines-code chroma">
								<code>	<span class="c1">// 转成字符串</code>
							</td>
						</tr>
						
						<tr>
							<td id="L666" class="lines-num">
								<span id="L666" data-line-number="666"></span>
							</td>
							<td rel="L666" class="lines-code chroma">
								<code></span><span class="c1"></span>	<span class="kd">let</span> <span class="nx">sizeStr</span> <span class="o">=</span> <span class="nx">sz</span><span class="p">.</span><span class="nx">toFixed</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="nx">filesize</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L667" class="lines-num">
								<span id="L667" data-line-number="667"></span>
							</td>
							<td rel="L667" class="lines-code chroma">
								<code>	<span class="c1">// 获取小数点处的索引</code>
							</td>
						</tr>
						
						<tr>
							<td id="L668" class="lines-num">
								<span id="L668" data-line-number="668"></span>
							</td>
							<td rel="L668" class="lines-code chroma">
								<code></span><span class="c1"></span>	<span class="nx">index</span> <span class="o">=</span> <span class="nx">sizeStr</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&#34;.&#34;</span><span class="p">)</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L669" class="lines-num">
								<span id="L669" data-line-number="669"></span>
							</td>
							<td rel="L669" class="lines-code chroma">
								<code>	<span class="c1">// 获取小数点后两位的值</code>
							</td>
						</tr>
						
						<tr>
							<td id="L670" class="lines-num">
								<span id="L670" data-line-number="670"></span>
							</td>
							<td rel="L670" class="lines-code chroma">
								<code></span><span class="c1"></span>	<span class="nx">dou</span> <span class="o">=</span> <span class="nx">sizeStr</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">index</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L671" class="lines-num">
								<span id="L671" data-line-number="671"></span>
							</td>
							<td rel="L671" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="nx">dou</span> <span class="o">===</span> <span class="s2">&#34;00&#34;</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L672" class="lines-num">
								<span id="L672" data-line-number="672"></span>
							</td>
							<td rel="L672" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">sizeStr</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="o">+</span> <span class="nx">sizeStr</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">index</span> <span class="o">+</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L673" class="lines-num">
								<span id="L673" data-line-number="673"></span>
							</td>
							<td rel="L673" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="k">else</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L674" class="lines-num">
								<span id="L674" data-line-number="674"></span>
							</td>
							<td rel="L674" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">sizeStr</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L675" class="lines-num">
								<span id="L675" data-line-number="675"></span>
							</td>
							<td rel="L675" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L676" class="lines-num">
								<span id="L676" data-line-number="676"></span>
							</td>
							<td rel="L676" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L677" class="lines-num">
								<span id="L677" data-line-number="677"></span>
							</td>
							<td rel="L677" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L678" class="lines-num">
								<span id="L678" data-line-number="678"></span>
							</td>
							<td rel="L678" class="lines-code chroma">
								<code><span class="c1">// 相似度获取</code>
							</td>
						</tr>
						
						<tr>
							<td id="L679" class="lines-num">
								<span id="L679" data-line-number="679"></span>
							</td>
							<td rel="L679" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="kd">function</span> <span class="nx">levenshteinDistance</span><span class="p">(</span><span class="nx">str1</span><span class="p">,</span> <span class="nx">str2</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L680" class="lines-num">
								<span id="L680" data-line-number="680"></span>
							</td>
							<td rel="L680" class="lines-code chroma">
								<code>    <span class="k">return</span> <span class="mi">100</span> <span class="o">-</span> <span class="mi">100</span> <span class="o">*</span> <span class="nx">distance</span><span class="p">(</span><span class="nx">str1</span><span class="p">,</span> <span class="nx">str2</span><span class="p">)</span> <span class="o">/</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">str1</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">str2</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L681" class="lines-num">
								<span id="L681" data-line-number="681"></span>
							</td>
							<td rel="L681" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L682" class="lines-num">
								<span id="L682" data-line-number="682"></span>
							</td>
							<td rel="L682" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L683" class="lines-num">
								<span id="L683" data-line-number="683"></span>
							</td>
							<td rel="L683" class="lines-code chroma">
								<code><span class="cm">/**</code>
							</td>
						</tr>
						
						<tr>
							<td id="L684" class="lines-num">
								<span id="L684" data-line-number="684"></span>
							</td>
							<td rel="L684" class="lines-code chroma">
								<code></span><span class="cm"> * 自然排序</code>
							</td>
						</tr>
						
						<tr>
							<td id="L685" class="lines-num">
								<span id="L685" data-line-number="685"></span>
							</td>
							<td rel="L685" class="lines-code chroma">
								<code></span><span class="cm"> * [&#34;第1集&#34;,&#34;第10集&#34;,&#34;第20集&#34;,&#34;第2集&#34;,&#34;1&#34;,&#34;2&#34;,&#34;10&#34;,&#34;12&#34;,&#34;23&#34;,&#34;01&#34;,&#34;02&#34;].sort(naturalSort())</code>
							</td>
						</tr>
						
						<tr>
							<td id="L686" class="lines-num">
								<span id="L686" data-line-number="686"></span>
							</td>
							<td rel="L686" class="lines-code chroma">
								<code></span><span class="cm"> * @param options {{key,caseSensitive, order: string}}</code>
							</td>
						</tr>
						
						<tr>
							<td id="L687" class="lines-num">
								<span id="L687" data-line-number="687"></span>
							</td>
							<td rel="L687" class="lines-code chroma">
								<code></span><span class="cm"> */</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L688" class="lines-num">
								<span id="L688" data-line-number="688"></span>
							</td>
							<td rel="L688" class="lines-code chroma">
								<code><span class="kd">function</span> <span class="nx">naturalSort</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L689" class="lines-num">
								<span id="L689" data-line-number="689"></span>
							</td>
							<td rel="L689" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L690" class="lines-num">
								<span id="L690" data-line-number="690"></span>
							</td>
							<td rel="L690" class="lines-code chroma">
								<code>		<span class="nx">options</span> <span class="o">=</span> <span class="p">{</span><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L691" class="lines-num">
								<span id="L691" data-line-number="691"></span>
							</td>
							<td rel="L691" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L692" class="lines-num">
								<span id="L692" data-line-number="692"></span>
							</td>
							<td rel="L692" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L693" class="lines-num">
								<span id="L693" data-line-number="693"></span>
							</td>
							<td rel="L693" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L694" class="lines-num">
								<span id="L694" data-line-number="694"></span>
							</td>
							<td rel="L694" class="lines-code chroma">
								<code>		<span class="k">if</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">key</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L695" class="lines-num">
								<span id="L695" data-line-number="695"></span>
							</td>
							<td rel="L695" class="lines-code chroma">
								<code>			<span class="nx">a</span> <span class="o">=</span> <span class="nx">a</span><span class="p">[</span><span class="nx">options</span><span class="p">.</span><span class="nx">key</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L696" class="lines-num">
								<span id="L696" data-line-number="696"></span>
							</td>
							<td rel="L696" class="lines-code chroma">
								<code>			<span class="nx">b</span> <span class="o">=</span> <span class="nx">b</span><span class="p">[</span><span class="nx">options</span><span class="p">.</span><span class="nx">key</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L697" class="lines-num">
								<span id="L697" data-line-number="697"></span>
							</td>
							<td rel="L697" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L698" class="lines-num">
								<span id="L698" data-line-number="698"></span>
							</td>
							<td rel="L698" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">EQUAL</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L699" class="lines-num">
								<span id="L699" data-line-number="699"></span>
							</td>
							<td rel="L699" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">GREATER</span> <span class="o">=</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">order</span> <span class="o">===</span> <span class="s1">&#39;desc&#39;</span> <span class="o">?</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L700" class="lines-num">
								<span id="L700" data-line-number="700"></span>
							</td>
							<td rel="L700" class="lines-code chroma">
								<code>				<span class="o">-</span><span class="mi">1</span> <span class="o">:</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L701" class="lines-num">
								<span id="L701" data-line-number="701"></span>
							</td>
							<td rel="L701" class="lines-code chroma">
								<code>				<span class="mi">1</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L702" class="lines-num">
								<span id="L702" data-line-number="702"></span>
							</td>
							<td rel="L702" class="lines-code chroma">
								<code>		<span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L703" class="lines-num">
								<span id="L703" data-line-number="703"></span>
							</td>
							<td rel="L703" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">SMALLER</span> <span class="o">=</span> <span class="o">-</span><span class="nx">GREATER</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L704" class="lines-num">
								<span id="L704" data-line-number="704"></span>
							</td>
							<td rel="L704" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L705" class="lines-num">
								<span id="L705" data-line-number="705"></span>
							</td>
							<td rel="L705" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">re</span> <span class="o">=</span> <span class="sr">/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L706" class="lines-num">
								<span id="L706" data-line-number="706"></span>
							</td>
							<td rel="L706" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">sre</span> <span class="o">=</span> <span class="sr">/(^[ ]*|[ ]*$)/g</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L707" class="lines-num">
								<span id="L707" data-line-number="707"></span>
							</td>
							<td rel="L707" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">dre</span> <span class="o">=</span> <span class="sr">/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L708" class="lines-num">
								<span id="L708" data-line-number="708"></span>
							</td>
							<td rel="L708" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">hre</span> <span class="o">=</span> <span class="sr">/^0x[0-9a-f]+$/i</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L709" class="lines-num">
								<span id="L709" data-line-number="709"></span>
							</td>
							<td rel="L709" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">ore</span> <span class="o">=</span> <span class="sr">/^0/</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L710" class="lines-num">
								<span id="L710" data-line-number="710"></span>
							</td>
							<td rel="L710" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L711" class="lines-num">
								<span id="L711" data-line-number="711"></span>
							</td>
							<td rel="L711" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">normalize</span> <span class="o">=</span> <span class="kd">function</span> <span class="nx">normalize</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L712" class="lines-num">
								<span id="L712" data-line-number="712"></span>
							</td>
							<td rel="L712" class="lines-code chroma">
								<code>			<span class="kd">var</span> <span class="nx">string</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L713" class="lines-num">
								<span id="L713" data-line-number="713"></span>
							</td>
							<td rel="L713" class="lines-code chroma">
								<code>			<span class="k">return</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">caseSensitive</span> <span class="o">?</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L714" class="lines-num">
								<span id="L714" data-line-number="714"></span>
							</td>
							<td rel="L714" class="lines-code chroma">
								<code>					<span class="nx">string</span> <span class="o">:</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L715" class="lines-num">
								<span id="L715" data-line-number="715"></span>
							</td>
							<td rel="L715" class="lines-code chroma">
								<code>					<span class="nx">string</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(</span><span class="p">)</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L716" class="lines-num">
								<span id="L716" data-line-number="716"></span>
							</td>
							<td rel="L716" class="lines-code chroma">
								<code>			<span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L717" class="lines-num">
								<span id="L717" data-line-number="717"></span>
							</td>
							<td rel="L717" class="lines-code chroma">
								<code>		<span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L718" class="lines-num">
								<span id="L718" data-line-number="718"></span>
							</td>
							<td rel="L718" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L719" class="lines-num">
								<span id="L719" data-line-number="719"></span>
							</td>
							<td rel="L719" class="lines-code chroma">
								<code>		<span class="c1">// Normalize values to strings</code>
							</td>
						</tr>
						
						<tr>
							<td id="L720" class="lines-num">
								<span id="L720" data-line-number="720"></span>
							</td>
							<td rel="L720" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="kd">var</span> <span class="nx">x</span> <span class="o">=</span> <span class="nx">normalize</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">sre</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L721" class="lines-num">
								<span id="L721" data-line-number="721"></span>
							</td>
							<td rel="L721" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">y</span> <span class="o">=</span> <span class="nx">normalize</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">sre</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L722" class="lines-num">
								<span id="L722" data-line-number="722"></span>
							</td>
							<td rel="L722" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L723" class="lines-num">
								<span id="L723" data-line-number="723"></span>
							</td>
							<td rel="L723" class="lines-code chroma">
								<code>		<span class="c1">// chunk/tokenize</code>
							</td>
						</tr>
						
						<tr>
							<td id="L724" class="lines-num">
								<span id="L724" data-line-number="724"></span>
							</td>
							<td rel="L724" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="kd">var</span> <span class="nx">xN</span> <span class="o">=</span> <span class="nx">x</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">re</span><span class="p">,</span> <span class="s1">&#39;\0$1\0&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\0$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\0/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;\0&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L725" class="lines-num">
								<span id="L725" data-line-number="725"></span>
							</td>
							<td rel="L725" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">yN</span> <span class="o">=</span> <span class="nx">y</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">re</span><span class="p">,</span> <span class="s1">&#39;\0$1\0&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\0$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\0/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;\0&#39;</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L726" class="lines-num">
								<span id="L726" data-line-number="726"></span>
							</td>
							<td rel="L726" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L727" class="lines-num">
								<span id="L727" data-line-number="727"></span>
							</td>
							<td rel="L727" class="lines-code chroma">
								<code>		<span class="c1">// Return immediately if at least one of the values is empty.</code>
							</td>
						</tr>
						
						<tr>
							<td id="L728" class="lines-num">
								<span id="L728" data-line-number="728"></span>
							</td>
							<td rel="L728" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">x</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">y</span><span class="p">)</span> <span class="k">return</span> <span class="nx">EQUAL</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L729" class="lines-num">
								<span id="L729" data-line-number="729"></span>
							</td>
							<td rel="L729" class="lines-code chroma">
								<code>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">x</span> <span class="o">&amp;&amp;</span> <span class="nx">y</span><span class="p">)</span> <span class="k">return</span> <span class="nx">GREATER</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L730" class="lines-num">
								<span id="L730" data-line-number="730"></span>
							</td>
							<td rel="L730" class="lines-code chroma">
								<code>		<span class="k">if</span> <span class="p">(</span><span class="nx">x</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">y</span><span class="p">)</span> <span class="k">return</span> <span class="nx">SMALLER</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L731" class="lines-num">
								<span id="L731" data-line-number="731"></span>
							</td>
							<td rel="L731" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L732" class="lines-num">
								<span id="L732" data-line-number="732"></span>
							</td>
							<td rel="L732" class="lines-code chroma">
								<code>		<span class="c1">// numeric, hex or date detection</code>
							</td>
						</tr>
						
						<tr>
							<td id="L733" class="lines-num">
								<span id="L733" data-line-number="733"></span>
							</td>
							<td rel="L733" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="kd">var</span> <span class="nx">xD</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">x</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">hre</span><span class="p">)</span><span class="p">)</span> <span class="o">||</span> <span class="p">(</span><span class="nx">xN</span><span class="p">.</span><span class="nx">length</span> <span class="o">!=</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">x</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">dre</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L734" class="lines-num">
								<span id="L734" data-line-number="734"></span>
							</td>
							<td rel="L734" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">yD</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">y</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">hre</span><span class="p">)</span><span class="p">)</span> <span class="o">||</span> <span class="nx">xD</span> <span class="o">&amp;&amp;</span> <span class="nx">y</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">dre</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">y</span><span class="p">)</span> <span class="o">||</span> <span class="kc">null</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L735" class="lines-num">
								<span id="L735" data-line-number="735"></span>
							</td>
							<td rel="L735" class="lines-code chroma">
								<code>		<span class="kd">var</span> <span class="nx">oFxNcL</span><span class="p">,</span> <span class="nx">oFyNcL</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L736" class="lines-num">
								<span id="L736" data-line-number="736"></span>
							</td>
							<td rel="L736" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L737" class="lines-num">
								<span id="L737" data-line-number="737"></span>
							</td>
							<td rel="L737" class="lines-code chroma">
								<code>		<span class="c1">// first try and sort Hex codes or Dates</code>
							</td>
						</tr>
						
						<tr>
							<td id="L738" class="lines-num">
								<span id="L738" data-line-number="738"></span>
							</td>
							<td rel="L738" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="k">if</span> <span class="p">(</span><span class="nx">yD</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L739" class="lines-num">
								<span id="L739" data-line-number="739"></span>
							</td>
							<td rel="L739" class="lines-code chroma">
								<code>			<span class="k">if</span> <span class="p">(</span><span class="nx">xD</span> <span class="o">&lt;</span> <span class="nx">yD</span><span class="p">)</span> <span class="k">return</span> <span class="nx">SMALLER</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L740" class="lines-num">
								<span id="L740" data-line-number="740"></span>
							</td>
							<td rel="L740" class="lines-code chroma">
								<code>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">xD</span> <span class="o">&gt;</span> <span class="nx">yD</span><span class="p">)</span> <span class="k">return</span> <span class="nx">GREATER</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L741" class="lines-num">
								<span id="L741" data-line-number="741"></span>
							</td>
							<td rel="L741" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L742" class="lines-num">
								<span id="L742" data-line-number="742"></span>
							</td>
							<td rel="L742" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L743" class="lines-num">
								<span id="L743" data-line-number="743"></span>
							</td>
							<td rel="L743" class="lines-code chroma">
								<code>		<span class="c1">// natural sorting through split numeric strings and default strings</code>
							</td>
						</tr>
						
						<tr>
							<td id="L744" class="lines-num">
								<span id="L744" data-line-number="744"></span>
							</td>
							<td rel="L744" class="lines-code chroma">
								<code></span><span class="c1"></span>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">cLoc</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">numS</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">xN</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span> <span class="nx">yN</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span><span class="p">;</span> <span class="nx">cLoc</span> <span class="o">&lt;</span> <span class="nx">numS</span><span class="p">;</span> <span class="nx">cLoc</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L745" class="lines-num">
								<span id="L745" data-line-number="745"></span>
							</td>
							<td rel="L745" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L746" class="lines-num">
								<span id="L746" data-line-number="746"></span>
							</td>
							<td rel="L746" class="lines-code chroma">
								<code>			<span class="c1">// find floats not starting with &#39;0&#39;, string or 0 if not defined (Clint Priest)</code>
							</td>
						</tr>
						
						<tr>
							<td id="L747" class="lines-num">
								<span id="L747" data-line-number="747"></span>
							</td>
							<td rel="L747" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="nx">oFxNcL</span> <span class="o">=</span> <span class="o">!</span><span class="p">(</span><span class="nx">xN</span><span class="p">[</span><span class="nx">cLoc</span><span class="p">]</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">ore</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">xN</span><span class="p">[</span><span class="nx">cLoc</span><span class="p">]</span><span class="p">)</span> <span class="o">||</span> <span class="nx">xN</span><span class="p">[</span><span class="nx">cLoc</span><span class="p">]</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L748" class="lines-num">
								<span id="L748" data-line-number="748"></span>
							</td>
							<td rel="L748" class="lines-code chroma">
								<code>			<span class="nx">oFyNcL</span> <span class="o">=</span> <span class="o">!</span><span class="p">(</span><span class="nx">yN</span><span class="p">[</span><span class="nx">cLoc</span><span class="p">]</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">)</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">ore</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">yN</span><span class="p">[</span><span class="nx">cLoc</span><span class="p">]</span><span class="p">)</span> <span class="o">||</span> <span class="nx">yN</span><span class="p">[</span><span class="nx">cLoc</span><span class="p">]</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L749" class="lines-num">
								<span id="L749" data-line-number="749"></span>
							</td>
							<td rel="L749" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L750" class="lines-num">
								<span id="L750" data-line-number="750"></span>
							</td>
							<td rel="L750" class="lines-code chroma">
								<code>			<span class="c1">// handle numeric vs string comparison - number &lt; string - (Kyle Adams)</code>
							</td>
						</tr>
						
						<tr>
							<td id="L751" class="lines-num">
								<span id="L751" data-line-number="751"></span>
							</td>
							<td rel="L751" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="k">if</span> <span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">oFxNcL</span><span class="p">)</span> <span class="o">!==</span> <span class="nb">isNaN</span><span class="p">(</span><span class="nx">oFyNcL</span><span class="p">)</span><span class="p">)</span> <span class="k">return</span> <span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">oFxNcL</span><span class="p">)</span><span class="p">)</span> <span class="o">?</span> <span class="nx">GREATER</span> <span class="o">:</span> <span class="nx">SMALLER</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L752" class="lines-num">
								<span id="L752" data-line-number="752"></span>
							</td>
							<td rel="L752" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L753" class="lines-num">
								<span id="L753" data-line-number="753"></span>
							</td>
							<td rel="L753" class="lines-code chroma">
								<code>			<span class="c1">// rely on string comparison if different types - i.e. &#39;02&#39; &lt; 2 != &#39;02&#39; &lt; &#39;2&#39;</code>
							</td>
						</tr>
						
						<tr>
							<td id="L754" class="lines-num">
								<span id="L754" data-line-number="754"></span>
							</td>
							<td rel="L754" class="lines-code chroma">
								<code></span><span class="c1"></span>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">oFxNcL</span> <span class="o">!==</span> <span class="k">typeof</span> <span class="nx">oFyNcL</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L755" class="lines-num">
								<span id="L755" data-line-number="755"></span>
							</td>
							<td rel="L755" class="lines-code chroma">
								<code>				<span class="nx">oFxNcL</span> <span class="o">+=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L756" class="lines-num">
								<span id="L756" data-line-number="756"></span>
							</td>
							<td rel="L756" class="lines-code chroma">
								<code>				<span class="nx">oFyNcL</span> <span class="o">+=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L757" class="lines-num">
								<span id="L757" data-line-number="757"></span>
							</td>
							<td rel="L757" class="lines-code chroma">
								<code>			<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L758" class="lines-num">
								<span id="L758" data-line-number="758"></span>
							</td>
							<td rel="L758" class="lines-code chroma">
								<code>			<span class="k">if</span> <span class="p">(</span><span class="nx">oFxNcL</span> <span class="o">&lt;</span> <span class="nx">oFyNcL</span><span class="p">)</span> <span class="k">return</span> <span class="nx">SMALLER</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L759" class="lines-num">
								<span id="L759" data-line-number="759"></span>
							</td>
							<td rel="L759" class="lines-code chroma">
								<code>			<span class="k">if</span> <span class="p">(</span><span class="nx">oFxNcL</span> <span class="o">&gt;</span> <span class="nx">oFyNcL</span><span class="p">)</span> <span class="k">return</span> <span class="nx">GREATER</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L760" class="lines-num">
								<span id="L760" data-line-number="760"></span>
							</td>
							<td rel="L760" class="lines-code chroma">
								<code>		<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L761" class="lines-num">
								<span id="L761" data-line-number="761"></span>
							</td>
							<td rel="L761" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">EQUAL</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L762" class="lines-num">
								<span id="L762" data-line-number="762"></span>
							</td>
							<td rel="L762" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L763" class="lines-num">
								<span id="L763" data-line-number="763"></span>
							</td>
							<td rel="L763" class="lines-code chroma">
								<code><span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L764" class="lines-num">
								<span id="L764" data-line-number="764"></span>
							</td>
							<td rel="L764" class="lines-code chroma">
								<code><span class="c1">// 完整名称排序</code>
							</td>
						</tr>
						
						<tr>
							<td id="L765" class="lines-num">
								<span id="L765" data-line-number="765"></span>
							</td>
							<td rel="L765" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="kr">const</span> <span class="nx">sortListByName</span> <span class="o">=</span> <span class="p">(</span><span class="nx">vodList</span><span class="p">,</span><span class="nx">key</span><span class="p">,</span><span class="nx">order</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L766" class="lines-num">
								<span id="L766" data-line-number="766"></span>
							</td>
							<td rel="L766" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">key</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L767" class="lines-num">
								<span id="L767" data-line-number="767"></span>
							</td>
							<td rel="L767" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">vodList</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L768" class="lines-num">
								<span id="L768" data-line-number="768"></span>
							</td>
							<td rel="L768" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L769" class="lines-num">
								<span id="L769" data-line-number="769"></span>
							</td>
							<td rel="L769" class="lines-code chroma">
								<code>	<span class="nx">order</span> <span class="o">=</span> <span class="nx">order</span><span class="o">||</span><span class="s1">&#39;asc&#39;</span><span class="p">;</span> <span class="c1">// 默认正序</code>
							</td>
						</tr>
						
						<tr>
							<td id="L770" class="lines-num">
								<span id="L770" data-line-number="770"></span>
							</td>
							<td rel="L770" class="lines-code chroma">
								<code></span><span class="c1"></span>	<span class="c1">// 排序键,顺序,区分大小写</code>
							</td>
						</tr>
						
						<tr>
							<td id="L771" class="lines-num">
								<span id="L771" data-line-number="771"></span>
							</td>
							<td rel="L771" class="lines-code chroma">
								<code></span><span class="c1"></span>	<span class="k">return</span> <span class="nx">vodList</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="nx">naturalSort</span><span class="p">(</span><span class="p">{</span><span class="nx">key</span><span class="o">:</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">order</span><span class="o">:</span> <span class="nx">order</span><span class="p">,</span><span class="nx">caseSensitive</span><span class="o">:</span><span class="kc">true</span><span class="p">}</span><span class="p">)</span><span class="p">)</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L772" class="lines-num">
								<span id="L772" data-line-number="772"></span>
							</td>
							<td rel="L772" class="lines-code chroma">
								<code><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L773" class="lines-num">
								<span id="L773" data-line-number="773"></span>
							</td>
							<td rel="L773" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L774" class="lines-num">
								<span id="L774" data-line-number="774"></span>
							</td>
							<td rel="L774" class="lines-code chroma">
								<code><span class="kr">const</span> <span class="nx">getTimeInt</span> <span class="o">=</span> <span class="p">(</span><span class="nx">timeStr</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L775" class="lines-num">
								<span id="L775" data-line-number="775"></span>
							</td>
							<td rel="L775" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">timeStr</span><span class="p">)</span><span class="p">)</span><span class="p">.</span><span class="nx">getTime</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L776" class="lines-num">
								<span id="L776" data-line-number="776"></span>
							</td>
							<td rel="L776" class="lines-code chroma">
								<code><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L777" class="lines-num">
								<span id="L777" data-line-number="777"></span>
							</td>
							<td rel="L777" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L778" class="lines-num">
								<span id="L778" data-line-number="778"></span>
							</td>
							<td rel="L778" class="lines-code chroma">
								<code><span class="c1">// 时间</code>
							</td>
						</tr>
						
						<tr>
							<td id="L779" class="lines-num">
								<span id="L779" data-line-number="779"></span>
							</td>
							<td rel="L779" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="kr">const</span> <span class="nx">sortListByTime</span> <span class="o">=</span> <span class="p">(</span><span class="nx">vodList</span><span class="p">,</span><span class="nx">key</span><span class="p">,</span><span class="nx">order</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L780" class="lines-num">
								<span id="L780" data-line-number="780"></span>
							</td>
							<td rel="L780" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L781" class="lines-num">
								<span id="L781" data-line-number="781"></span>
							</td>
							<td rel="L781" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">vodList</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L782" class="lines-num">
								<span id="L782" data-line-number="782"></span>
							</td>
							<td rel="L782" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L783" class="lines-num">
								<span id="L783" data-line-number="783"></span>
							</td>
							<td rel="L783" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">ASCarr</span> <span class="o">=</span> <span class="nx">vodList</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L784" class="lines-num">
								<span id="L784" data-line-number="784"></span>
							</td>
							<td rel="L784" class="lines-code chroma">
								<code>		<span class="nx">a</span> <span class="o">=</span> <span class="nx">a</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L785" class="lines-num">
								<span id="L785" data-line-number="785"></span>
							</td>
							<td rel="L785" class="lines-code chroma">
								<code>		<span class="nx">b</span> <span class="o">=</span> <span class="nx">b</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L786" class="lines-num">
								<span id="L786" data-line-number="786"></span>
							</td>
							<td rel="L786" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">getTimeInt</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="o">-</span> <span class="nx">getTimeInt</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L787" class="lines-num">
								<span id="L787" data-line-number="787"></span>
							</td>
							<td rel="L787" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L788" class="lines-num">
								<span id="L788" data-line-number="788"></span>
							</td>
							<td rel="L788" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="nx">order</span><span class="o">===</span><span class="s1">&#39;desc&#39;</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L789" class="lines-num">
								<span id="L789" data-line-number="789"></span>
							</td>
							<td rel="L789" class="lines-code chroma">
								<code>		<span class="nx">ASCarr</span><span class="p">.</span><span class="nx">reverse</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L790" class="lines-num">
								<span id="L790" data-line-number="790"></span>
							</td>
							<td rel="L790" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L791" class="lines-num">
								<span id="L791" data-line-number="791"></span>
							</td>
							<td rel="L791" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="nx">ASCarr</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L792" class="lines-num">
								<span id="L792" data-line-number="792"></span>
							</td>
							<td rel="L792" class="lines-code chroma">
								<code><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L793" class="lines-num">
								<span id="L793" data-line-number="793"></span>
							</td>
							<td rel="L793" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L794" class="lines-num">
								<span id="L794" data-line-number="794"></span>
							</td>
							<td rel="L794" class="lines-code chroma">
								<code><span class="c1">// 大小</code>
							</td>
						</tr>
						
						<tr>
							<td id="L795" class="lines-num">
								<span id="L795" data-line-number="795"></span>
							</td>
							<td rel="L795" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="kr">const</span> <span class="nx">sortListBySize</span> <span class="o">=</span> <span class="p">(</span><span class="nx">vodList</span><span class="p">,</span><span class="nx">key</span><span class="p">,</span><span class="nx">order</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L796" class="lines-num">
								<span id="L796" data-line-number="796"></span>
							</td>
							<td rel="L796" class="lines-code chroma">
								<code>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L797" class="lines-num">
								<span id="L797" data-line-number="797"></span>
							</td>
							<td rel="L797" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="nx">vodList</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L798" class="lines-num">
								<span id="L798" data-line-number="798"></span>
							</td>
							<td rel="L798" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L799" class="lines-num">
								<span id="L799" data-line-number="799"></span>
							</td>
							<td rel="L799" class="lines-code chroma">
								<code>	<span class="kd">let</span> <span class="nx">ASCarr</span> <span class="o">=</span> <span class="nx">vodList</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L800" class="lines-num">
								<span id="L800" data-line-number="800"></span>
							</td>
							<td rel="L800" class="lines-code chroma">
								<code>		<span class="nx">a</span> <span class="o">=</span> <span class="nx">a</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L801" class="lines-num">
								<span id="L801" data-line-number="801"></span>
							</td>
							<td rel="L801" class="lines-code chroma">
								<code>		<span class="nx">b</span> <span class="o">=</span> <span class="nx">b</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L802" class="lines-num">
								<span id="L802" data-line-number="802"></span>
							</td>
							<td rel="L802" class="lines-code chroma">
								<code>		<span class="k">return</span> <span class="p">(</span><span class="nb">Number</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">)</span> <span class="o">-</span> <span class="p">(</span><span class="nb">Number</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span> <span class="o">||</span> <span class="mi">0</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L803" class="lines-num">
								<span id="L803" data-line-number="803"></span>
							</td>
							<td rel="L803" class="lines-code chroma">
								<code>	<span class="p">}</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L804" class="lines-num">
								<span id="L804" data-line-number="804"></span>
							</td>
							<td rel="L804" class="lines-code chroma">
								<code>	<span class="k">if</span><span class="p">(</span><span class="nx">order</span><span class="o">===</span><span class="s1">&#39;desc&#39;</span><span class="p">)</span><span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L805" class="lines-num">
								<span id="L805" data-line-number="805"></span>
							</td>
							<td rel="L805" class="lines-code chroma">
								<code>		<span class="nx">ASCarr</span><span class="p">.</span><span class="nx">reverse</span><span class="p">(</span><span class="p">)</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L806" class="lines-num">
								<span id="L806" data-line-number="806"></span>
							</td>
							<td rel="L806" class="lines-code chroma">
								<code>	<span class="p">}</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L807" class="lines-num">
								<span id="L807" data-line-number="807"></span>
							</td>
							<td rel="L807" class="lines-code chroma">
								<code>	<span class="k">return</span> <span class="nx">ASCarr</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L808" class="lines-num">
								<span id="L808" data-line-number="808"></span>
							</td>
							<td rel="L808" class="lines-code chroma">
								<code><span class="p">}</span><span class="p">;</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L809" class="lines-num">
								<span id="L809" data-line-number="809"></span>
							</td>
							<td rel="L809" class="lines-code chroma">
								<code>
</code>
							</td>
						</tr>
						
						<tr>
							<td id="L810" class="lines-num">
								<span id="L810" data-line-number="810"></span>
							</td>
							<td rel="L810" class="lines-code chroma">
								<code><span class="c1">// 导出函数对象</code>
							</td>
						</tr>
						
						<tr>
							<td id="L811" class="lines-num">
								<span id="L811" data-line-number="811"></span>
							</td>
							<td rel="L811" class="lines-code chroma">
								<code></span><span class="c1"></span><span class="kr">export</span> <span class="k">default</span> <span class="p">{</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L812" class="lines-num">
								<span id="L812" data-line-number="812"></span>
							</td>
							<td rel="L812" class="lines-code chroma">
								<code>	<span class="nx">init</span><span class="o">:</span> <span class="nx">init</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L813" class="lines-num">
								<span id="L813" data-line-number="813"></span>
							</td>
							<td rel="L813" class="lines-code chroma">
								<code>	<span class="nx">home</span><span class="o">:</span> <span class="nx">home</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L814" class="lines-num">
								<span id="L814" data-line-number="814"></span>
							</td>
							<td rel="L814" class="lines-code chroma">
								<code>	<span class="nx">homeVod</span><span class="o">:</span> <span class="nx">homeVod</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L815" class="lines-num">
								<span id="L815" data-line-number="815"></span>
							</td>
							<td rel="L815" class="lines-code chroma">
								<code>	<span class="nx">category</span><span class="o">:</span> <span class="nx">category</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L816" class="lines-num">
								<span id="L816" data-line-number="816"></span>
							</td>
							<td rel="L816" class="lines-code chroma">
								<code>	<span class="nx">detail</span><span class="o">:</span> <span class="nx">detail</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L817" class="lines-num">
								<span id="L817" data-line-number="817"></span>
							</td>
							<td rel="L817" class="lines-code chroma">
								<code>	<span class="nx">play</span><span class="o">:</span> <span class="nx">play</span><span class="p">,</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L818" class="lines-num">
								<span id="L818" data-line-number="818"></span>
							</td>
							<td rel="L818" class="lines-code chroma">
								<code>	<span class="nx">search</span><span class="o">:</span> <span class="nx">search</span></code>
							</td>
						</tr>
						
						<tr>
							<td id="L819" class="lines-num">
								<span id="L819" data-line-number="819"></span>
							</td>
							<td rel="L819" class="lines-code chroma">
								<code><span class="p">}</span>
</code>
							</td>
						</tr>
						
					</tbody>
				</table>
				
			
		</div>
	</div>
</div>


	<div class="i-text-center">
		
				
		
	</div>


<script>
function submitDeleteForm() {
    var message = prompt("delete_confirm_message\n\ndelete_commit_summary", "Delete ''");
    if (message != null) {
        $("#delete-message").val(message);
        $("#delete-file-form").submit()
    }
}
</script>

		
	</div>
	<div id="toListModel">
		<div class="ui modal" id="toShare">
			<i class="close icon black"></i>
			<div class="header">共享</div>
			<div class="content">
				<form autocomplete="off" class="ui form training ignore-dirty">
					
					<div class="fields">
						<p class="px-sm py-none mb-sm">共享页面将在匿名链接下呈现所选的代码和训练结果，不会显示项目的原始链接地址。但Agit系统不会自动处理代码和训练结果，因此如果需要为匿名盲审等场景提供匿名内容，还需要您自行保证代码内容和训练结果的匿名化。</p>
					</div>

					<div class="fields">
						<div class="two wide field required">
							<label>代码分支</label>
						</div>
						<div id="branchField" class="fourteen wide field">

							<div class="fitted item choose">
								<div class="ui floating filter dropdown custom">

									<div class="ui basic small compact button" style="min-width: 200px;" @click="menuVisible = !menuVisible">
										<span class="text">
											<i class="iconfont icon-branch-down"></i>
											<span v-text='isViewBranch?"分支":"目录树"'></span>:
                      <strong v-text='isViewBranch?(selectedBranch?selectedBranch:"请选择"):(selectedTag?selectedTag:"请选择")'></strong>
										</span>
										<i class="dropdown icon" tabIndex="-1"></i>
									</div>

									<div tabindex="-1"  id="scrolling" class="menu transition menu-share" :class="{visible: menuVisible}" v-show="menuVisible" @blur="menuVisible = false">

										<div class="ui icon search input" style="width: 200px;">
											<i class="filter icon"></i>
											<input name="search" v-model="searchTerm" @keydown="keydown($event)" placeholder="过滤分支或标签...">
										</div>

										<div class="header branch-tag-choice">
											<div class="ui grid">
												<div class="two column row">
													<a class="reference column" href="javascript:;" @click="handleBranchTab(true)">
														<span class="text" :class="{black: !isViewBranch}">
															<i class="iconfont icon-branch-down"></i>
															分支列表
														</span>
													</a>
													<a class="reference column" href="javascript:;" @click="handleBranchTab(false)">
														<span class="text" :class="{black: isViewBranch}">
															<i class="reference tags icon"></i>
															标签列表
														</span>
													</a>
												</div>
											</div>
										</div>

										<div v-show="isViewBranch" class="scrolling menu" ref="scrollContainer">
											<div v-for="(item, index) in branches" v-show="item.name.includes(searchTerm)" :key="item.name" class="item" @click="handleBranchOrTag(item)">
												<span v-text="item.name"></span>
											</div>
										</div>
										<div v-show="!isViewBranch" class="scrolling menu" ref="scrollContainer">
											<div v-for="(item, index) in tags" v-show="item.name.includes(searchTerm)" :key="item.name" class="item" @click="handleBranchOrTag(item)">
												<span v-text="item.name"></span>
											</div>
										</div>

										<div class="message" v-if="(isViewBranch && branches.length==0) || (!isViewBranch && tags.length==0)">未找到结果</div>
									</div>

									<div class="ui pointing red basic label" style="display:none;">
										请选择分支或标签
									</div>

								</div>
							</div>
						</div>
					</div>

					<div class="fields" v-show="selectedBranch">
						<div class="two wide field">
							<label>提交</label>
						</div>
						<div id="commitWrap" class="fourteen wide field">
							<select class="ui search selection dropdown commit-wrap" name="commit">
								<option value=""></option>
							</select>
						</div>
					</div>
					<div class="fields">
						<label class="two wide field  required">共享标题</label>
						<div class="fourteen wide field trainName-filed">
							<input v-model="shareName" type="text" name="shareName"  class="form-trainName" :maxlength="16"  placeholder="请输入标题内容，最多16个字符">
						</div>
					</div>
					<div class="ui grid uioption">
						<label class="required">链接有效期</label>
					</div>
					<div class="ui grid fields">
						<div class="thirteen wide column">
							<div class="ui four item stackable tabs menu ui-link-bg">
								<a v-for="(item, index) in shareTimeList" :key="index" :class="['item', activeIdx === item.shareTimeId ? 'active' : '']" data-tab="oneday" @click="handleMenuChange(item)">
									<span v-text="formatLinkTime(item.shareTimeName)"></span></a>
							</div>
						</div>
						<div class="right aligned three wide column action mt-3xs">
							<button class="ui primary button" @click="handleLink">
								生成链接</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="ui modal" id="toCopyShareLink">
			<i class="close icon black"></i>
			<div class="header">共享链接已生成</div>
			<div class="content ui form">
				<div class="fields">
					<div class="two wide field">
						<label>链接地址:</label>
					</div>
					<div  class="fourteen wide field">
						<p v-text="linkAddress" id="share_url"></p>
					</div>
				</div>
				<div class="fields uioption">
					<div class="two wide field">
					<label>链接有效期:</label>
					</div>
					<div class="fourteen wide field">
						<p v-text="linkExDate"></p>
					</div>
				</div>
				<div class="fields uioption">
							<div class="sixteen wide field" style="text-align: right">
								<button class="ui basic icon button poping primary up clipboard share-button" id="share-button" data-original="复制链接" data-success="已复制链接" data-error="请按下 ⌘-C 或 Ctrl-C 复制" data-content="复制链接" data-variation="inverted tiny"  data-clipboard-target="#share_url">
									复制
								</button>
							</div>
				</div>

			</div>
		</div>
	</div>

</div>
<div class="content">
	<p></p>
</div>
</div>
</div>




		

		</div>

		

		<footer>
	<div class="base-footer-content i-footer mx-auto">
		<div class="ui left">
			<div class="p-logo i-flex i-align-center">
				<img class="logo-icon" src="/img/logo/logo.svg">
				<i class="logo-text">&copy; 2023 Agit Cloud Computing, Ltd.</i>
				<a  id="version-a" style="margin-right: 16px; text-decoration: underline; font-size: 12px;" target="_blank" href="https://agit.ai/AgitDeveloper/AgitPythonExamples/wiki"></a>
			</div>
		</div>
		<div class="ui right links p-logo">
			<a style="margin-right: 16px; text-decoration: underline; font-size: 12px;" target="_blank" href="/agreement/terms">服务协议</a>
<a style="margin-right: 16px; text-decoration: underline; font-size: 12px;" target="_blank" href="/agreement/privacy">隐私政策</a>
<a style="text-decoration: underline; font-size: 12px; margin-right: 16px;" target="_blank" href="/opensource">开源软件</a>
<a style="text-decoration: underline; font-size: 12px;" target="_blank" id="help-a" target="_blank" href="http://help.agit.ai/">帮助</a>

		</div>
	</div>
</footer>



		

		
		
		
		<script src="/js/index.js?v=220846678a86246c9d7e7c46c21f20c2"></script>

		<script src="/vendor/plugins/vue/vue.min.js"></script>
<script src="/minifyjs/head_navbar.base.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/minifyjs/footer_content.base.js?v=220846678a86246c9d7e7c46c21f20c2"></script>


<script src="/vendor/plugins/promise-polyfill/polyfill.min.js"></script>
<script src="/vendor/plugins/cssrelpreload/loadCSS.min.js"></script>
<script src="/vendor/plugins/cssrelpreload/cssrelpreload.min.js"></script>
<script src="/vendor/plugins/vue-infinite-loading/vue-infinite-loading.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/vendor/plugins/Qrcode/qrcode.min.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/vendor/plugins/i-components/i.components.min.js?v=220846678a86246c9d7e7c46c21f20c2"></script>

<script src="/vendor/plugins/vue-node-spec/node-spec.min.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/vendor/plugins/jquery-migrate/jquery-migrate.min.js?v=3.0.1"></script>
<script src="/vendor/plugins/jquery.areyousure/jquery.are-you-sure.js"></script>
<script src="/vendor/plugins/emojify/emojify.custom.js"></script>
<script src="/vendor/plugins/xterm/xterm.js"></script>









	</body>
	</html>

<script>
$("#createTraining").click(function(){

	$api.trainReachUpperLimit({repoId:Number($('.repo-id').text())}).then(data => {
        if (!data) return;
		if(data.isUpperLimit){
			$ITools.handleToast('error', $i18n.tr('code', 'trainCountLimit'))
			return
		}

		const mode = $("#branchSelect").attr("data-mode"),
	      	branch = $("#branchSelect").find("strong").text();
		let path = ""
		$(".repo-path a").each(function(index,item){
			if(index === 0){
				return
			}
			path += path === ""?$(this).attr("title"):("/"+$(this).attr("title"))
		})
		const params={
			scriptPath: $(".repo-path").find(".active.section").attr("title"),
			workSpace: path,
			branchName: mode === "branches" ? branch : "",
			tagName: mode === "branches" ? "" : branch
		}
		window.location.href = window.location.origin + $('.repo-url').text() + '/training/create?scriptFile=' + escapePound(JSON.stringify(params))
      })


})
function toUpload(el) {

const tempSplit = $("#RepoSize").text().split("GB")


if (tempSplit.length === 2 && tempSplit[0] >= 1) {
	$ITools.handleToast('error', $i18n.tr('valid', 'fileSizeLimit'))
	return
}
window.location.href = $(el).attr("data-href")
}
function handleShare() {
$('#toShare').modal('show')
}
function shareLink() {
$('#toCopyShareLink').modal('show')
}
function escapePound(str){
	let res=""
	res=str.replaceAll("%","%25")
	res=res.replaceAll("#","%23")
	res=res.replaceAll(" ","%20")
	res=res.replaceAll("?","%3F")
	return res
}
</script>

<script src="/minifyjs/auth.js?v=220846678a86246c9d7e7c46c21f20c2"></script>
<script src="/minifyjs/repo_home.js?v=220846678a86246c9d7e7c46c21f20c2"></script>


(() => {
const T={
en:{
"skip":"Skip to content","brand.subtitle":"Academic profile & research portfolio","nav.about":"About","nav.research":"Research","nav.projects":"Projects","nav.publications":"Publications","nav.background":"Background","nav.contact":"Contact",
"hero.eyebrow":"RESEARCHER · AI × MARINE ECOLOGY","hero.title":"Understanding a changing ocean with <span class=\"hero-highlight\">intelligent systems</span>","hero.lede":"I work at the intersection of artificial intelligence, marine ecology, and global change — developing interpretable methods to understand ecological responses and improve environmental prediction.","hero.ctaResearch":"Explore research","hero.ctaProjects":"View projects","hero.affiliation":"School of Environmental Science & Engineering · Nankai University","visual.label":"OCEAN SYSTEMS/01","visual.status":"Research in progress","visual.caption":"From environmental signals to ecological insight","facts.one":"Interdisciplinary research","facts.two":"Core research themes","facts.three":"Interactive research agents","facts.four":"Paradigm Creation Award",
"sections.about":"ABOUT","sections.research":"RESEARCH","sections.projects":"PROJECTS","sections.publications":"PUBLICATIONS","sections.background":"BACKGROUND","sections.contact":"CONTACT","about.title":"Connecting computational methods with ecological questions","about.lead":"My work asks how marine and aquatic ecosystems respond to interacting environmental pressures — and how AI can help detect, explain, and anticipate those changes.","about.detail":"With training across applied mathematics, computer science, and environmental science, I combine predictive modelling with interpretable analysis, causal reasoning, and graph-based representations. The goal is not only to improve model performance, but to produce evidence that can support ecological understanding and environmental decision-making.","research.title":"Questions that guide the work","research.note":"Four connected themes, from environmental extremes to practical prediction systems.","projects.title":"Research, made tangible","projects.note":"Selected prototypes and research frameworks. Project status and links are kept explicit.","publications.title":"Selected publications","publications.filterYear":"Year","publications.filterRole":"Author role","publications.empty":"No publications match these filters.","award.eyebrow":"RECOGNITION/2026","award.title":"Paradigm Creation Award","award.subtitle":"World Open-Source AI Competition · AI for Research","award.description":"Global finalist — 4th place overall, receiving the Paradigm Creation Award for GlobalHAB-Agent, a research agent for global harmful algal bloom prediction and early warning.","award.rank":"WORLD FINAL","background.title":"Training across disciplines","background.education":"Education","background.experience":"Research experience","contact.title":"For research, collaboration, and scientific exchange","contact.description":"I welcome conversations around marine ecology, interpretable AI, environmental prediction, and interdisciplinary research.","contact.email":"Email","footer.note":"Last updated, October 20, 2026","footer.top":"Back to top"},
zh:{
"skip":"跳转到正文","brand.subtitle":"学术主页与科研作品集","nav.about":"个人简介","nav.research":"研究方向","nav.projects":"科研项目","nav.publications":"代表论文","nav.background":"学术经历","nav.contact":"联系方式",
"hero.eyebrow":"人工智能 × 海洋生态研究","hero.title":"用<span class=\"hero-highlight\">人工智能</span>理解海洋生态变化","hero.lede":"我研究人工智能、海洋生态与全球变化交叉领域的问题，重点关注复合环境压力下的生态响应，并开发可解释的分析方法，改进环境预测。","hero.ctaResearch":"研究方向","hero.ctaProjects":"科研项目","hero.affiliation":"南开大学 · 环境科学与工程学院","visual.label":"海洋系统/01","visual.status":"研究进行中","visual.caption":"从环境变化中理解生态响应","facts.one":"交叉学科研究","facts.two":"主要研究方向","facts.three":"科研智能体原型","facts.four":"范式创造奖",
"sections.about":"个人简介","sections.research":"研究方向","sections.projects":"科研项目","sections.publications":"代表论文","sections.background":"学术经历","sections.contact":"联系方式","about.title":"把计算方法用在真实的生态问题上","about.lead":"我关注海洋和湖泊生态系统如何响应多种环境压力，也探索人工智能能否帮助我们更早发现生态变化、解释相关过程，并提高预测的可靠性。","about.detail":"我接受过应用数学、计算机科学和环境科学方面的训练。研究中，我结合预测建模、可解释机器学习、因果分析和图结构方法。我不仅关注模型预测得准不准，也希望弄清哪些环境因素与生态变化相关，以及这些发现能为监测和管理提供什么参考。","research.title":"我关注的研究问题","research.note":"从复合环境压力到生态预警，这些研究方向彼此关联。","projects.title":"把研究思路做成工具","projects.note":"这里展示已开放的演示系统，以及仍在推进的研究框架；项目状态和链接会如实标明。","publications.title":"代表性论文","publications.filterYear":"年份","publications.filterRole":"作者身份","publications.empty":"没有符合当前筛选条件的论文。","award.eyebrow":"获奖经历·2026","award.title":"范式创造奖","award.subtitle":"世界开源人工智能大赛 · AI for Research","award.description":"在世界开源人工智能大赛AI for Research全球总决赛中获得第4名，并获范式创造奖。参赛项目GlobalHAB-Agent聚焦全球有害藻华的预测与预警。","award.rank":"全球总决赛","background.title":"跨学科的学术训练","background.education":"教育背景","background.experience":"科研经历","contact.title":"欢迎交流与合作","contact.description":"欢迎就海洋生态、可解释人工智能、环境预测和交叉学科研究交流想法、探讨合作。","contact.email":"邮箱","footer.note":"最近更新，2026年10月20日","footer.top":"返回顶部"}};
const R={
en:[
["⌁","Compound marine extremes","Marine heatwaves, acidification, hypoxia, and interacting stressors — with a focus on ecological exposure and response."],
["◎","Ecological forecasting","Early warning for harmful algal blooms and ecosystem anomalies, connecting environmental signals with ecological outcomes."],
["⌘","Interpretable & causal AI","Explainable machine learning, transfer entropy, counterfactual reasoning, and lag-aware analysis for environmental systems."],
["⌬","Graph learning & scientific agents","Graph-based spatial spillovers, higher-order interactions, and research agents that connect data, models, and hypotheses."]],
zh:[
["⌁","海洋复合极端","关注海洋热浪、海洋酸化、缺氧等环境压力，以及它们与生态响应之间的关系。"],
["◎","生态预测与预警","围绕有害藻华和生态异常，探索如何利用环境数据识别风险并开展预测预警。"],
["⌘","可解释机器学习与因果分析","运用可解释机器学习、传递熵和反事实分析，考察环境因素之间的联系及其滞后效应。"],
["⌬","图学习与科研智能体","研究环境影响的空间溢出和高阶生态相互作用，并开发连接数据、模型与科学假设的科研智能体。"]]};
const P={
en:[
{type:"OPEN-SOURCE DEMO",status:"Live demo",title:"GlobalHAB-Agent",desc:"A research-agent prototype for global harmful algal bloom prediction and early warning, integrating environmental indicators, adaptive analysis, and event replay.",tags:["HAB forecasting","Environmental signals","Research agent"],links:[["Open demo","https://globalhab-agent-demo.streamlit.app/"],["Source code","https://github.com/Haoliu9427/GlobalHAB-Agent-demo"]]},
{type:"OPEN-SOURCE DEMO",status:"Live demo",title:"CoralBleach-Agent",desc:"A demonstration workflow for coral bleaching prediction, scientific question definition, and simulated experimental iteration. Synthetic data are used for the demo.",tags:["Coral bleaching","Simulated experiments","Model validation"],links:[["Open demo","https://haoliu9427.github.io/CoralBleach-Agent-demo/"],["Source code","https://github.com/Haoliu9427/CoralBleach-Agent-demo"]]},
{type:"RESEARCH FRAMEWORK",status:"In progress",title:"STS-Graph",desc:"A shock–transmission–spillover framework for examining compound extremes, spatial pathways, and algal-bloom dynamics in lake ecosystems.",tags:["Compound extremes","Spatial spillovers","Graph learning"],links:[["Project details to be added",null]]},
{type:"ECOLOGICAL NETWORKS",status:"In progress",title:"Higher-order plankton food webs",desc:"A higher-order interaction framework for studying plankton food-web stability and resilience under compound marine stress.",tags:["Hypergraphs","Food-web stability","ST-HGAT"],links:[["Project details to be added",null]]}],
zh:[
{type:"开源演示系统",status:"演示可访问",title:"GlobalHAB-Agent",desc:"面向全球有害藻华预测预警的科研智能体原型，整合环境指标与分析流程，并支持典型事件回放。",tags:["赤潮预测","环境信号","科研智能体"],links:[["打开演示","https://globalhab-agent-demo.streamlit.app/"],["源代码","https://github.com/Haoliu9427/GlobalHAB-Agent-demo"]]},
{type:"开源演示系统",status:"演示可访问",title:"CoralBleach-Agent",desc:"展示珊瑚白化预测、科学问题梳理、模拟实验和模型验证的演示流程。当前版本使用合成数据，不代表真实业务预测结果。",tags:["珊瑚白化","模拟实验","模型验证"],links:[["打开演示","https://haoliu9427.github.io/CoralBleach-Agent-demo/"],["源代码","https://github.com/Haoliu9427/CoralBleach-Agent-demo"]]},
{type:"研究框架",status:"研究进行中",title:"STS-Graph",desc:"以冲击—传导—溢出（STS）框架为基础，研究复合极端事件的空间传播路径，以及这些过程与湖泊藻华变化之间的关系。",tags:["复合极端","空间溢出","图学习"],links:[["项目详情待补充",null]]},
{type:"生态网络",status:"研究进行中",title:"浮游生物高阶食物网",desc:"研究复合海洋压力下浮游生物食物网的稳定性与韧性，重点关注高阶相互作用如何影响群落关系。",tags:["超图","食物网稳定性","ST-HGAT"],links:[["项目详情待补充",null]]}]};
const PUB={
en:[
["2025","Global Change Biology","Marine heatwaves and iceberg melting in polar areas intensify phytoplankton blooms","First author","First author"],
["2026","Environmental Science & Technology","Anomalies of net primary productivity under compound marine heatwaves and microplastics","First author","First author"],
["2026","Environmental Science & Technology","Global characterization of sea turtle ecological traps driven by compound marine heatwaves and microplastics","First author","First author"],
["2026","Environmental Science & Technology","An AI framework for pollutant studies","Accepted · Co-first author","Co-first author"],
["2025","Environmental Science & Technology","<a href=\"https://scholar.google.com/citations?view_op=view_citation&amp;hl=zh-CN&amp;user=wZEQ1fgAAAAJ&amp;authuser=1&amp;citation_for_view=wZEQ1fgAAAAJ:2osOgNQ5qMEC\" target=\"_blank\" rel=\"noopener noreferrer\">Spatiotemporal Distribution of Marine Viral Functions Associated with Microplastics</a>","Fourth author","Fourth author"],
["2026","Nature Communications","Decreases in South Pacific and South Atlantic sea-air CO2 fluxes caused by extreme precipitation","Second author","Second author"],
["2023","iScience","<a href=\"https://scholar.google.com/citations?view_op=view_citation&amp;hl=zh-CN&amp;user=wZEQ1fgAAAAJ&amp;authuser=1&amp;citation_for_view=wZEQ1fgAAAAJ:qjMakFHDy7sC\" target=\"_blank\" rel=\"noopener noreferrer\">Environmental tipping points for global soil carbon fixation microorganisms</a>","Co-first author","Co-first author"],["2025","iScience","<a href=\"https://scholar.google.com/citations?view_op=view_citation&amp;hl=zh-CN&amp;user=wZEQ1fgAAAAJ&amp;authuser=1&amp;citation_for_view=wZEQ1fgAAAAJ:d1gkVwhDpl0C\" target=\"_blank\" rel=\"noopener noreferrer\">Environmental tipping points for global soil nitrogen-fixing microorganisms</a>","Second author","Second author"]
],
zh:[
["2025","Global Change Biology","Marine heatwaves and iceberg melting in polar areas intensify phytoplankton blooms","第一作者","第一作者"],
["2026","Environmental Science & Technology","Anomalies of net primary productivity under compound marine heatwaves and microplastics","第一作者","第一作者"],
["2026","Environmental Science & Technology","Global characterization of sea turtle ecological traps driven by compound marine heatwaves and microplastics","第一作者","第一作者"],
["2026","Environmental Science & Technology","An AI framework for pollutant studies","已接收·共同第一作者","共同第一作者"],
["2025","Environmental Science & Technology","<a href=\"https://scholar.google.com/citations?view_op=view_citation&amp;hl=zh-CN&amp;user=wZEQ1fgAAAAJ&amp;authuser=1&amp;citation_for_view=wZEQ1fgAAAAJ:2osOgNQ5qMEC\" target=\"_blank\" rel=\"noopener noreferrer\">Spatiotemporal Distribution of Marine Viral Functions Associated with Microplastics</a>","第四作者","第四作者"],
["2026","Nature Communications","Decreases in South Pacific and South Atlantic sea-air CO2 fluxes caused by extreme precipitation","第二作者","第二作者"],
["2023","iScience","<a href=\"https://scholar.google.com/citations?view_op=view_citation&amp;hl=zh-CN&amp;user=wZEQ1fgAAAAJ&amp;authuser=1&amp;citation_for_view=wZEQ1fgAAAAJ:qjMakFHDy7sC\" target=\"_blank\" rel=\"noopener noreferrer\">Environmental tipping points for global soil carbon fixation microorganisms</a>","共同第一作者","共同第一作者"],["2025","iScience","<a href=\"https://scholar.google.com/citations?view_op=view_citation&amp;hl=zh-CN&amp;user=wZEQ1fgAAAAJ&amp;authuser=1&amp;citation_for_view=wZEQ1fgAAAAJ:d1gkVwhDpl0C\" target=\"_blank\" rel=\"noopener noreferrer\">Environmental tipping points for global soil nitrogen-fixing microorganisms</a>","第二作者","第二作者"]
]};
const E={
en:[["PhD candidate · Environmental Science","Nankai University"],["MSc · Integrated Science & Engineering","Tokyo Institute of Technology"],["MSc · Computer Science","The University of Tokyo"]],
zh:[["博士研究生·环境科学","南开大学"],["硕士研究生·融合理工学","东京工业大学"],["硕士研究生·计算机科学","东京大学"]]
};
const X={
en:[["Research Assistant · Academic Research","Ocean College, Zhejiang University"]],
zh:[["科研助理","浙江大学海洋学院"]]
};
let lang="zh";let publicationYearFilter="All",publicationRoleFilter="all";const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function normalizeChineseSpacing(root){
if(lang!=="zh")return;
const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
let node;
while((node=walker.nextNode())){
node.nodeValue=node.nodeValue.replace(/([\u3400-\u9fff])\s+([A-Za-z0-9])/g,"$1$2").replace(/([A-Za-z0-9])\s+([\u3400-\u9fff])/g,"$1$2");
}
}
function publicationRole(x){const role=String(x[4]||"").toLowerCase();if(role.includes("corresponding")||role.includes("通讯作者"))return "corresponding";if(role.includes("first author")||role.includes("co-first")||role.includes("第一作者")||role.includes("共同第一"))return "first";return "other";}
function renderPublicationFilters(){const years=["All","2026","2025","2024","2023"];
$("#publication-year-filters").innerHTML=years.map(y=>'<button type="button" class="filter-chip'+(publicationYearFilter===y?" is-active":"")+'" data-year-filter="'+y+'" aria-pressed="'+(publicationYearFilter===y)+'">'+y+'</button>').join("");
const roles=lang==="zh"?[["first","第一作者"],["corresponding","通讯作者"],["other","其他作者"]]:[["first","First author"],["corresponding","Corresponding author"],["other","Other authors"]];
$("#publication-role-filters").innerHTML=roles.map(([key,label])=>'<button type="button" class="filter-chip'+(publicationRoleFilter===key?" is-active":"")+'" data-role-filter="'+key+'" aria-pressed="'+(publicationRoleFilter===key)+'">'+label+'</button>').join("");}
function renderPublicationList(){const rows=PUB[lang].filter(x=>(publicationYearFilter==="All"||String(x[0])===publicationYearFilter)&&(publicationRoleFilter==="all"||publicationRole(x)===publicationRoleFilter));
$("#publication-list").innerHTML=rows.length?rows.map(x=>'<article class="publication-item"><div class="publication-year">'+x[0]+'</div><div><h3 class="publication-journal">'+x[1]+'</h3><p class="publication-title">'+x[2]+'</p></div><span class="publication-role">'+x[4]+'</span></article>').join(""):'<p class="publication-empty">'+T[lang]["publications.empty"]+'</p>';}
function render(){
document.documentElement.lang=lang==="zh"?"zh-CN":"en";
$$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(T[lang][k]!==undefined)el.innerHTML=T[lang][k]});
document.title=lang==="zh"?"刘浩 | 人工智能与海洋生态":"Hao Liu | AI for Marine Ecosystems";
$("#language-label").textContent=lang==="en"?"中文":"EN";$("#language-toggle").setAttribute("aria-label",lang==="en"?"切换为中文":"Switch to English");
$("#research-grid").innerHTML=R[lang].map(x=>'<article class="research-card"><span class="research-icon" aria-hidden="true">'+x[0]+'</span><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>').join("");
$("#projects-grid").innerHTML=P[lang].map((x,i)=>'<article class="project-card"><div class="project-top"><span class="project-type">'+x.type+'</span><span class="status-pill '+(i>1?'status-research':'')+'">'+x.status+'</span></div><h3>'+x.title+'</h3><p>'+x.desc+'</p><div class="project-tags">'+x.tags.map(t=>'<span>'+t+'</span>').join("")+'</div><div class="project-links">'+x.links.map(l=>l[1]?'<a href="'+l[1]+'" target="_blank" rel="noopener noreferrer">'+l[0]+' ↗</a>':'<span class="placeholder-link">'+l[0]+'</span>').join("")+'</div></article>').join("");
renderPublicationList();renderPublicationFilters();
$("#education-list").innerHTML=E[lang].map(x=>'<article class="timeline-item"><h4>'+x[0]+'</h4><p class="timeline-place">'+x[1]+'</p></article>').join("");
$("#experience-list").innerHTML=X[lang].map(x=>'<article class="timeline-item"><h4>'+x[0]+'</h4><p class="timeline-place">'+x[1]+'</p></article>').join("");
normalizeChineseSpacing(document.body);
}
$("#language-toggle").addEventListener("click",()=>{lang=lang==="en"?"zh":"en";render()});
$("#publication-filters").addEventListener("click",event=>{const yearButton=event.target.closest("button[data-year-filter]");if(yearButton){publicationYearFilter=yearButton.dataset.yearFilter;renderPublicationFilters();renderPublicationList();return;}const roleButton=event.target.closest("button[data-role-filter]");if(roleButton){const selected=roleButton.dataset.roleFilter;publicationRoleFilter=publicationRoleFilter===selected?"all":selected;renderPublicationFilters();renderPublicationList();}});
const toggle=$("#menu-toggle"),nav=$("#site-nav");toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));toggle.setAttribute("aria-label",open?"Open navigation":"Close navigation");nav.classList.toggle("open",!open)});
$$('#site-nav a').forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
if("IntersectionObserver"in window){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)$$('#site-nav a').forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-25% 0px -65% 0px"});$$("main section[id]").forEach(s=>obs.observe(s))}
render();
})();
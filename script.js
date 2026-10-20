(() => {
const T={
en:{
"skip":"Skip to content","brand.subtitle":"Academic profile & research portfolio","nav.about":"About","nav.research":"Research","nav.projects":"Projects","nav.publications":"Publications","nav.background":"Background","nav.contact":"Contact",
"hero.eyebrow":"RESEARCHER · AI × MARINE ECOLOGY","hero.title":"Understanding a changing ocean with <span class=\"hero-highlight\">intelligent systems</span>","hero.lede":"I work at the intersection of artificial intelligence, marine ecology, and global change — developing interpretable methods to understand ecological responses and improve environmental prediction.","hero.ctaResearch":"Explore research","hero.ctaProjects":"View projects","hero.affiliation":"School of Environmental Science & Engineering · Nankai University","visual.label":"OCEAN SYSTEMS/01","visual.status":"Research in progress","visual.caption":"From environmental signals to ecological insight","facts.one":"Interdisciplinary research","facts.two":"Core research themes","facts.three":"Interactive research agents","facts.four":"Paradigm Creation Award",
"sections.about":"ABOUT","sections.research":"RESEARCH","sections.projects":"PROJECTS","sections.publications":"PUBLICATIONS","sections.background":"BACKGROUND","sections.contact":"CONTACT","about.title":"Connecting computational methods with ecological questions","about.lead":"My work asks how marine and aquatic ecosystems respond to interacting environmental pressures — and how AI can help detect, explain, and anticipate those changes.","about.detail":"With training across applied mathematics, computer science, and environmental science, I combine predictive modelling with interpretable analysis, causal reasoning, and graph-based representations. The goal is not only to improve model performance, but to produce evidence that can support ecological understanding and environmental decision-making.","research.title":"Questions that guide the work","research.note":"Four connected themes, from environmental extremes to practical prediction systems.","projects.title":"Research, made tangible","projects.note":"Selected prototypes and research frameworks. Project status and links are kept explicit.","publications.title":"Selected publications","award.eyebrow":"RECOGNITION/2026","award.title":"Paradigm Creation Award","award.subtitle":"World Open-Source AI Competition · AI for Research","award.description":"Global finalist — 4th place overall, receiving the Paradigm Creation Award for GlobalHAB-Agent, a research agent for global harmful algal bloom prediction and early warning.","award.rank":"WORLD FINAL","background.title":"Training across disciplines","background.education":"Education","background.experience":"Research experience","contact.title":"For research, collaboration, and scientific exchange","contact.description":"I welcome conversations around marine ecology, interpretable AI, environmental prediction, and interdisciplinary research.","contact.email":"Email","footer.note":"Last updated, October 20, 2026","footer.top":"Back to top"},
zh:{
"skip":"跳转到正文","brand.subtitle":"学术主页与科研作品集","nav.about":"个人简介","nav.research":"研究方向","nav.projects":"科研项目","nav.publications":"代表论文","nav.background":"学术经历","nav.contact":"联系方式",
"hero.eyebrow":"科研人员·人工智能×海洋生态","hero.title":"以<span class=\"hero-highlight\">智能方法</span>理解不断变化的海洋","hero.lede":"我的研究位于人工智能、海洋生态与全球变化的交叉领域，致力于发展可解释的分析方法，以理解生态响应并提升环境预测能力。","hero.ctaResearch":"查看研究方向","hero.ctaProjects":"查看科研项目","hero.affiliation":"南开大学 · 环境科学与工程学院","visual.label":"海洋系统/01","visual.status":"研究进行中","visual.caption":"从环境信号到生态认知","facts.one":"跨学科研究","facts.two":"核心研究主题","facts.three":"交互式科研智能体","facts.four":"范式创造奖",
"sections.about":"个人简介","sections.research":"研究方向","sections.projects":"科研项目","sections.publications":"代表论文","sections.background":"学术经历","sections.contact":"联系方式","about.title":"让计算方法回应真实的生态问题","about.lead":"我关注海洋与水生生态系统如何响应相互作用的环境压力，以及人工智能如何帮助识别、解释并预判这些变化。","about.detail":"我的训练背景横跨应用数学、计算机科学与环境科学，研究中结合预测建模、可解释分析、因果推断和图结构表征。目标不只是提升模型性能，也希望形成能够支持生态理解与环境决策的证据。","research.title":"由科学问题驱动的研究","research.note":"四个彼此关联的主题，从复合环境极端到可落地的预测系统。","projects.title":"让研究变得可见、可用","projects.note":"展示部分原型系统与研究框架，并明确区分已公开项目和进行中的研究。","publications.title":"代表性论文","award.eyebrow":"奖项/2026","award.title":"范式创造奖","award.subtitle":"世界开源人工智能大赛·AI for Research","award.description":"全球总决赛第4名，并获得范式创造奖。参赛项目GlobalHAB-Agent面向全球有害藻华预测与预警。","award.rank":"全球总决赛","background.title":"跨学科的学术训练","background.education":"教育背景","background.experience":"科研经历","contact.title":"欢迎开展科研合作与学术交流","contact.description":"欢迎围绕海洋生态、可解释人工智能、环境预测及跨学科研究展开交流。","contact.email":"邮箱","footer.note":"最近更新，2026年10月20日","footer.top":"返回顶部"}};
const R={
en:[
["⌁","Compound marine extremes","Marine heatwaves, acidification, hypoxia, and interacting stressors — with a focus on ecological exposure and response."],
["◎","Ecological forecasting","Early warning for harmful algal blooms and ecosystem anomalies, connecting environmental signals with ecological outcomes."],
["⌘","Interpretable & causal AI","Explainable machine learning, transfer entropy, counterfactual reasoning, and lag-aware analysis for environmental systems."],
["⌬","Graph learning & scientific agents","Graph-based spatial spillovers, higher-order interactions, and research agents that connect data, models, and hypotheses."]],
zh:[
["⌁","海洋复合极端","关注海洋热浪、酸化、缺氧及其交互作用，研究生态暴露与响应。"],
["◎","生态预测与预警","面向有害藻华与生态异常预警，将环境信号与生态结果联系起来。"],
["⌘","可解释与因果人工智能","结合可解释机器学习、传递熵、反事实推理和考虑时滞的环境系统分析。"],
["⌬","图学习与科研智能体","研究空间溢出、高阶生态相互作用，以及连接数据、模型与科学假设的科研智能体."]]};
const P={
en:[
{type:"OPEN-SOURCE DEMO",status:"Live demo",title:"GlobalHAB-Agent",desc:"A research-agent prototype for global harmful algal bloom prediction and early warning, integrating environmental indicators, adaptive analysis, and event replay.",tags:["HAB forecasting","Environmental signals","Research agent"],links:[["Open demo","https://globalhab-agent-demo.streamlit.app/"],["Source code","https://github.com/Haoliu9427/GlobalHAB-Agent-demo"]]},
{type:"OPEN-SOURCE DEMO",status:"Live demo",title:"CoralBleach-Agent",desc:"A demonstration workflow for coral bleaching prediction, scientific question definition, and simulated experimental iteration. Synthetic data are used for the demo.",tags:["Coral bleaching","Simulated experiments","Model validation"],links:[["Open demo","https://haoliu9427.github.io/CoralBleach-Agent-demo/"],["Source code","https://github.com/Haoliu9427/CoralBleach-Agent-demo"]]},
{type:"RESEARCH FRAMEWORK",status:"In progress",title:"STS-Graph",desc:"A shock–transmission–spillover framework for examining compound extremes, spatial pathways, and algal-bloom dynamics in lake ecosystems.",tags:["Compound extremes","Spatial spillovers","Graph learning"],links:[["Project details to be added",null]]},
{type:"ECOLOGICAL NETWORKS",status:"In progress",title:"Higher-order plankton food webs",desc:"A higher-order interaction framework for studying plankton food-web stability and resilience under compound marine stress.",tags:["Hypergraphs","Food-web stability","ST-HGAT"],links:[["Project details to be added",null]]}],
zh:[
{type:"开源演示系统",status:"演示可访问",title:"GlobalHAB-Agent",desc:"面向全球有害藻华预测预警的科研智能体原型，整合环境指标、自适应分析与事件回放。",tags:["赤潮预测","环境信号","科研智能体"],links:[["打开演示","https://globalhab-agent-demo.streamlit.app/"],["源代码","https://github.com/Haoliu9427/GlobalHAB-Agent-demo"]]},
{type:"开源演示系统",status:"演示可访问",title:"CoralBleach-Agent",desc:"用于展示珊瑚白化预测、科学问题定义与模拟实验迭代的工作流。演示版本使用合成数据。",tags:["珊瑚白化","模拟实验","模型验证"],links:[["打开演示","https://haoliu9427.github.io/CoralBleach-Agent-demo/"],["源代码","https://github.com/Haoliu9427/CoralBleach-Agent-demo"]]},
{type:"研究框架",status:"研究进行中",title:"STS-Graph",desc:"基于冲击—传导—溢出（STS）框架，分析湖泊生态系统中复合极端、空间传播路径与藻华动态。",tags:["复合极端","空间溢出","图学习"],links:[["项目详情待补充",null]]},
{type:"生态网络",status:"研究进行中",title:"浮游生物高阶食物网",desc:"构建高阶相互作用框架，研究复合海洋压力下浮游生物食物网的稳定性与韧性。",tags:["超图","食物网稳定性","ST-HGAT"],links:[["项目详情待补充",null]]}]};
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
zh:[["科研助理·学术/科研","浙江大学海洋学院"]]
};
let lang="en";const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function normalizeChineseSpacing(root){
if(lang!=="zh")return;
const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
let node;
while((node=walker.nextNode())){
node.nodeValue=node.nodeValue.replace(/([\u3400-\u9fff])\s+([A-Za-z0-9])/g,"$1$2").replace(/([A-Za-z0-9])\s+([\u3400-\u9fff])/g,"$1$2");
}
}
function render(){
document.documentElement.lang=lang==="zh"?"zh-CN":"en";
$$("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(T[lang][k]!==undefined)el.innerHTML=T[lang][k]});
document.title=lang==="zh"?"刘浩 | 人工智能与海洋生态":"Hao Liu | AI for Marine Ecosystems";
$("#language-label").textContent=lang==="en"?"中文":"EN";$("#language-toggle").setAttribute("aria-label",lang==="en"?"切换为中文":"Switch to English");
$("#research-grid").innerHTML=R[lang].map((x,i)=>'<article class="research-card"><span class="card-number">0'+(i+1)+' / THEME</span><span class="research-icon" aria-hidden="true">'+x[0]+'</span><h3>'+x[1]+'</h3><p>'+x[2]+'</p></article>').join("");
$("#projects-grid").innerHTML=P[lang].map((x,i)=>'<article class="project-card"><div class="project-top"><span class="project-type">'+x.type+'</span><span class="status-pill '+(i>1?'status-research':'')+'">'+x.status+'</span></div><h3>'+x.title+'</h3><p>'+x.desc+'</p><div class="project-tags">'+x.tags.map(t=>'<span>'+t+'</span>').join("")+'</div><div class="project-links">'+x.links.map(l=>l[1]?'<a href="'+l[1]+'" target="_blank" rel="noopener noreferrer">'+l[0]+' ↗</a>':'<span class="placeholder-link">'+l[0]+'</span>').join("")+'</div></article>').join("");
$("#publication-list").innerHTML=PUB[lang].map(x=>'<article class="publication-item"><div class="publication-year">'+x[0]+'</div><div><h3 class="publication-journal">'+x[1]+'</h3><p class="publication-title">'+x[2]+'</p></div><span class="publication-role">'+x[4]+'</span></article>').join("");
$("#education-list").innerHTML=E[lang].map(x=>'<article class="timeline-item"><h4>'+x[0]+'</h4><p class="timeline-place">'+x[1]+'</p></article>').join("");
$("#experience-list").innerHTML=X[lang].map(x=>'<article class="timeline-item"><h4>'+x[0]+'</h4><p class="timeline-place">'+x[1]+'</p></article>').join("");
normalizeChineseSpacing(document.body);
}
$("#language-toggle").addEventListener("click",()=>{lang=lang==="en"?"zh":"en";render()});
const toggle=$("#menu-toggle"),nav=$("#site-nav");toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));toggle.setAttribute("aria-label",open?"Open navigation":"Close navigation");nav.classList.toggle("open",!open)});
$$('#site-nav a').forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
if("IntersectionObserver"in window){const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)$$('#site-nav a').forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-25% 0px -65% 0px"});$$("main section[id]").forEach(s=>obs.observe(s))}
render();
})();
(this["webpackJsonpnew-flare"]=this["webpackJsonpnew-flare"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var o=n(4),i=n(15),d=n.n(i),r=n(16),a=n.n(r),s=n(17);fetch("./fruchHighGrav4.gexf").then((function(e){return e.text()})).then((function(e){var t=Object(s.parse)(a.a,e),n=document.getElementById("sigma-container"),i=document.getElementById("zoom-in"),r=document.getElementById("zoom-out"),u=document.getElementById("zoom-reset"),l=document.getElementById("labels-threshold"),c=document.getElementById("search-input"),g=document.getElementById("suggestions"),h=new d.a(t,n,{minCameraRatio:.01,maxCameraRatio:3,allowInvalidContainer:!0,renderEdgeLabels:!0}),v=h.getCamera();i.addEventListener("click",(function(){v.animatedZoom({duration:600})})),r.addEventListener("click",(function(){v.animatedUnzoom({duration:600})})),u.addEventListener("click",(function(){v.animatedReset({duration:600})})),l.addEventListener("input",(function(){h.setSetting("labelRenderedSizeThreshold",+l.value)})),l.value=h.getSetting("labelRenderedSizeThreshold")+"";var f={searchQuery:""};function m(e){if(f.searchQuery=e,c.value!==e&&(c.value=e),e){var n=e.toLowerCase(),o=t.nodes().map((function(e){return{id:e,label:t.getNodeAttribute(e,"label")}})).filter((function(e){return e.label.toLowerCase().includes(n)}));if(1===o.length&&o[0].label===e){f.selectedNode=o[0].id,b(o[0].id),f.suggestions=void 0,p=!0,N=o[0].id;var i=h.getNodeDisplayData(f.selectedNode);h.getCamera().animate(i,{duration:500})}else f.selectedNode=void 0,f.suggestions=new Set(o.map((function(e){return e.id})))}else f.selectedNode=void 0,f.suggestions=void 0;h.refresh()}function b(e){e?(f.hoveredNode=e,f.hoveredNeighbors=new Set(t.neighbors(e))):(f.hoveredNode=void 0,f.hoveredNeighbors=void 0),h.refresh()}g.innerHTML=t.nodes().map((function(e){return'<option value="'.concat(t.getNodeAttribute(e,"label"),'"></option>')})).join("\n"),c.addEventListener("input",(function(){m(c.value||"")})),c.addEventListener("blur",(function(){m("")}));var N=void 0,p=!1;h.on("clickNode",(function(e){var t=e.node;N===t?(N=void 0,b(void 0),p=!1):(N=t,p=!0,b(t))})),h.on("enterNode",(function(e){var t=e.node;!1===p&&b(t)})),h.on("leaveNode",(function(e){var t=e.node;!1===p&&N!==t&&b(void 0)})),h.on("doubleClickNode",(function(e){var t=e.node;window.open("https://www.opensecrets.org/search?q="+t)})),h.setSetting("nodeReducer",(function(e,n){var i=Object(o.a)({},n);return f.hoveredNeighbors&&!f.hoveredNeighbors.has(e)&&f.hoveredNode!==e&&(i.label="",i.color="#f6f6f6"),f.selectedNode===e?i.highlighted=!0:f.suggestions&&!f.suggestions.has(e)&&(i.label="",i.color="#f6f6f6"),f.suggestions&&f.suggestions.has(e)&&(i.highlighted=!0,i.label=t.getNodeAttribute(e,"label"),i.color=t.getNodeAttribute(e,"color")),i})),h.setSetting("edgeReducer",(function(e,n){var i=Object(o.a)({},n);return f.hoveredNode&&!t.hasExtremity(e,f.hoveredNode)&&(i.hidden=!0),!f.suggestions||f.suggestions.has(t.source(e))&&f.suggestions.has(t.target(e))||(i.hidden=!0),i}))}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3d8faa4b.chunk.js.map
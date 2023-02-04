Array.prototype.removeDuplicates=function(){for(i=0;i<this.length;i++){for(j=this.length-1;j>i;j--){if(this[i][0]==this[j][0]){this.splice(j,1);}}}};Array.prototype.empty=function(){for(var i=0;i<=this.length;i++){this.shift();}};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");};function LyteBox(){this.theme="grey";this.hideFlash=true;this.outerBorder=false;this.resizeSpeed=4;this.maxOpacity=80;this.navType=1;this.autoResize=true;this.doAnimations=true;this.borderSize=12;this.slideInterval=4000;this.showNavigation=true;this.showClose=true;this.showDetails=true;this.showPlayPause=true;this.autoEnd=true;this.pauseOnNextClick=false;this.pauseOnPrevClick=true;if(this.resizeSpeed>10){this.resizeSpeed=10;}if(this.resizeSpeed<1){resizeSpeed=1;}this.resizeDuration=(11-this.resizeSpeed)*0.15;this.resizeWTimerArray=new Array();this.resizeWTimerCount=0;this.resizeHTimerArray=new Array();this.resizeHTimerCount=0;this.showContentTimerArray=new Array();this.showContentTimerCount=0;this.overlayTimerArray=new Array();this.overlayTimerCount=0;this.imageTimerArray=new Array();this.imageTimerCount=0;this.timerIDArray=new Array();this.timerIDCount=0;this.slideshowIDArray=new Array();this.slideshowIDCount=0;this.imageArray=new Array();this.activeImage=null;this.slideArray=new Array();this.activeSlide=null;this.frameArray=new Array();this.activeFrame=null;this.checkFrame();this.isSlideshow=false;this.isLyteframe=false;this.ie=false;this.ie7=(this.ie&&window.XMLHttpRequest);this.initialize();}LyteBox.prototype.initialize=function(){this.updateLyteboxItems();var _2=this.doc.getElementsByTagName("body").item(0);if(this.doc.getElementById("lbOverlay")){_2.removeChild(this.doc.getElementById("lbOverlay"));_2.removeChild(this.doc.getElementById("lbMain"));}var _3=this.doc.createElement("div");_3.setAttribute("id","lbOverlay");_3.setAttribute((this.ie?"className":"class"),this.theme);if((this.ie&&!this.ie7)||(this.ie7&&this.doc.compatMode=="BackCompat")){_3.style.position="absolute";}_3.style.display="none";_2.appendChild(_3);var _4=this.doc.createElement("div");_4.setAttribute("id","lbMain");_4.style.display="none";_2.appendChild(_4);var _5=this.doc.createElement("div");_5.setAttribute("id","lbOuterContainer");_5.setAttribute((this.ie?"className":"class"),this.theme);_4.appendChild(_5);var _6=this.doc.createElement("div");_6.setAttribute("id","lbIframeContainer");_6.style.display="none";_5.appendChild(_6);var _7=this.doc.createElement("iframe");_7.setAttribute("id","lbIframe");_7.setAttribute("name","lbIframe");_7.style.display="none";_6.appendChild(_7);var _8=this.doc.createElement("div");_8.setAttribute("id","lbImageContainer");_5.appendChild(_8);var _9=this.doc.createElement("img");_9.setAttribute("id","lbImage");_8.appendChild(_9);var _a=this.doc.createElement("div");_a.setAttribute("id","lbLoading");_5.appendChild(_a);var _b=this.doc.createElement("div");_b.setAttribute("id","lbDetailsContainer");_b.setAttribute((this.ie?"className":"class"),this.theme);_4.appendChild(_b);var _c=this.doc.createElement("div");_c.setAttribute("id","lbDetailsData");_c.setAttribute((this.ie?"className":"class"),this.theme);_b.appendChild(_c);var _d=this.doc.createElement("div");_d.setAttribute("id","lbDetails");_c.appendChild(_d);var _e=this.doc.createElement("span");_e.setAttribute("id","lbCaption");_d.appendChild(_e);var _f=this.doc.createElement("div");_f.setAttribute("id","lbHoverNav");_8.appendChild(_f);var _10=this.doc.createElement("div");_10.setAttribute("id","lbBottomNav");_c.appendChild(_10);var _11=this.doc.createElement("a");_11.setAttribute("id","lbPrev");_11.setAttribute((this.ie?"className":"class"),this.theme);_11.setAttribute("href","#");_f.appendChild(_11);var _12=this.doc.createElement("a");_12.setAttribute("id","lbNext");_12.setAttribute((this.ie?"className":"class"),this.theme);_12.setAttribute("href","#");_f.appendChild(_12);var _13=this.doc.createElement("span");_13.setAttribute("id","lbNumberDisplay");_d.appendChild(_13);var _14=this.doc.createElement("span");_14.setAttribute("id","lbNavDisplay");_14.style.display="none";_d.appendChild(_14);var _15=this.doc.createElement("a");_15.setAttribute("id","lbClose");_15.setAttribute((this.ie?"className":"class"),this.theme);_15.setAttribute("href","#");_10.appendChild(_15);var _16=this.doc.createElement("a");_16.setAttribute("id","lbPause");_16.setAttribute((this.ie?"className":"class"),this.theme);_16.setAttribute("href","#");_16.style.display="none";_10.appendChild(_16);var _17=this.doc.createElement("a");_17.setAttribute("id","lbPlay");_17.setAttribute((this.ie?"className":"class"),this.theme);_17.setAttribute("href","#");_17.style.display="none";_10.appendChild(_17);};LyteBox.prototype.updateLyteboxItems=function(){var _18=(this.isFrame)?window.parent.frames[window.name].document.getElementsByTagName("a"):document.getElementsByTagName("a");for(var i=0;i<_18.length;i++){var _1a=_18[i];var _1b=String(_1a.getAttribute("rel"));if(_1a.getAttribute("href")){if(_1b.toLowerCase().match("lytebox")){_1a.onclick=function(){myLytebox.start(this,false,false);return false;};}else{if(_1b.toLowerCase().match("lyteshow")){_1a.onclick=function(){myLytebox.start(this,true,false);return false;};}else{if(_1b.toLowerCase().match("lyteframe")){_1a.onclick=function(){myLytebox.start(this,false,true);return false;};}}}}}};LyteBox.prototype.start=function(_1c,_1d,_1e){if(this.ie&&!this.ie7){this.toggleSelects("hide");}if(this.hideFlash){this.toggleFlash("hide");}this.isLyteframe=(_1e?true:false);var _1f=this.getPageSize();var _20=this.doc.getElementById("lbOverlay");var _21=this.doc.getElementsByTagName("body").item(0);_20.style.height=_1f[1]+"px";_20.style.display="";this.appear("lbOverlay",(this.doAnimations?0:this.maxOpacity));var _22=(this.isFrame)?window.parent.frames[window.name].document.getElementsByTagName("a"):document.getElementsByTagName("a");if(this.isLyteframe){this.frameArray=[];this.frameNum=0;if((_1c.getAttribute("rel")=="lyteframe")){var rev=_1c.getAttribute("rev");this.frameArray.push(new Array(_1c.getAttribute("href"),_1c.getAttribute("title"),(rev==null||rev==""?"width: 400px; height: 400px; scrolling: auto;":rev)));}else{if(_1c.getAttribute("rel").indexOf("lyteframe")!=-1){for(var i=0;i<_22.length;i++){var _25=_22[i];if(_25.getAttribute("href")&&(_25.getAttribute("rel")==_1c.getAttribute("rel"))){var rev=_25.getAttribute("rev");this.frameArray.push(new Array(_25.getAttribute("href"),_25.getAttribute("title"),(rev==null||rev==""?"width: 400px; height: 400px; scrolling: auto;":rev)));}}this.frameArray.removeDuplicates();while(this.frameArray[this.frameNum][0]!=_1c.getAttribute("href")){this.frameNum++;}}}}else{this.imageArray=[];this.imageNum=0;this.slideArray=[];this.slideNum=0;if((_1c.getAttribute("rel")=="lytebox")){this.imageArray.push(new Array(_1c.getAttribute("href"),_1c.getAttribute("title")));}else{if(_1c.getAttribute("rel").indexOf("lytebox")!=-1){for(var i=0;i<_22.length;i++){var _28=_22[i];if(_28.getAttribute("href")&&(_28.getAttribute("rel")==_1c.getAttribute("rel"))){this.imageArray.push(new Array(_28.getAttribute("href"),_28.getAttribute("title")));}}this.imageArray.removeDuplicates();while(this.imageArray[this.imageNum][0]!=_1c.getAttribute("href")){this.imageNum++;}}if(_1c.getAttribute("rel").indexOf("lyteshow")!=-1){for(var i=0;i<_22.length;i++){var _2a=_22[i];if(_2a.getAttribute("href")&&(_2a.getAttribute("rel")==_1c.getAttribute("rel"))){this.slideArray.push(new Array(_2a.getAttribute("href"),_2a.getAttribute("title")));}}this.slideArray.removeDuplicates();while(this.slideArray[this.slideNum][0]!=_1c.getAttribute("href")){this.slideNum++;}}}}var _2b=this.doc.getElementById("lbMain");_2b.style.top=(this.getPageScroll()+(_1f[3]/15))+"px";_2b.style.display="";if(!this.outerBorder){this.doc.getElementById("lbOuterContainer").style.border="none";this.doc.getElementById("lbDetailsContainer").style.border="none";}else{this.doc.getElementById("lbOuterContainer").style.borderBottom="";this.doc.getElementById("lbOuterContainer").setAttribute((this.ie?"className":"class"),this.theme);}this.doc.getElementById("lbOverlay").onclick=function(){myLytebox.end();return false;};this.doc.getElementById("lbMain").onclick=function(e){var e=e;if(!e){if(window.parent.frames[window.name]&&(parent.document.getElementsByTagName("frameset").length<=0)){e=window.parent.window.event;}else{e=window.event;}}var id=(e.target?e.target.id:e.srcElement.id);if(id=="lbMain"){myLytebox.end();return false;}};this.doc.getElementById("lbClose").onclick=function(){myLytebox.end();return false;};this.doc.getElementById("lbPause").onclick=function(){myLytebox.togglePlayPause("lbPause","lbPlay");return false;};this.doc.getElementById("lbPlay").onclick=function(){myLytebox.togglePlayPause("lbPlay","lbPause");return false;};this.isSlideshow=_1d;this.isPaused=(this.slideNum!=0?true:false);if(this.isSlideshow&&this.showPlayPause&&this.isPaused){this.doc.getElementById("lbPlay").style.display="";this.doc.getElementById("lbPause").style.display="none";}if(this.isLyteframe){this.changeContent(this.frameNum);}else{if(this.isSlideshow){this.changeContent(this.slideNum);}else{this.changeContent(this.imageNum);}}};LyteBox.prototype.changeContent=function(_2f){if(this.isSlideshow){for(var i=0;i<this.slideshowIDCount;i++){window.clearTimeout(this.slideshowIDArray[i]);}}this.activeImage=this.activeSlide=this.activeFrame=_2f;if(!this.outerBorder){this.doc.getElementById("lbOuterContainer").style.border="none";this.doc.getElementById("lbDetailsContainer").style.border="none";}else{this.doc.getElementById("lbOuterContainer").style.borderBottom="";this.doc.getElementById("lbOuterContainer").setAttribute((this.ie?"className":"class"),this.theme);}this.doc.getElementById("lbLoading").style.display="";this.doc.getElementById("lbImage").style.display="none";this.doc.getElementById("lbIframe").style.display="none";this.doc.getElementById("lbPrev").style.display="none";this.doc.getElementById("lbNext").style.display="none";this.doc.getElementById("lbIframeContainer").style.display="none";this.doc.getElementById("lbDetailsContainer").style.display="none";this.doc.getElementById("lbNumberDisplay").style.display="none";if(this.navType==2||this.isLyteframe){object=this.doc.getElementById("lbNavDisplay");object.innerHTML="&nbsp;&nbsp;&nbsp;<span id=\"lbPrev2_Off\" style=\"display: none;\" class=\""+this.theme+"\">&laquo;</span><a href=\"#\" id=\"lbPrev2\" class=\""+this.theme+"\" style=\"display: none;\">&laquo; </a> <b id=\"lbSpacer\" class=\""+this.theme+"\">||</b> <span id=\"lbNext2_Off\" style=\"display: none;\" class=\""+this.theme+"\"> &raquo;</span><a href=\"#\" id=\"lbNext2\" class=\""+this.theme+"\" style=\"display: none;\"> &raquo;</a>";object.style.display="none";}if(this.isLyteframe){var _31=myLytebox.doc.getElementById("lbIframe");var _32=this.frameArray[this.activeFrame][2];var _33=_32.split(";");for(var i=0;i<_33.length;i++){if(_33[i].indexOf("width:")>=0){var w=_33[i].replace("width:","");_31.width=w.trim();}else{if(_33[i].indexOf("height:")>=0){var h=_33[i].replace("height:","");_31.height=h.trim();}else{if(_33[i].indexOf("scrolling:")>=0){var s=_33[i].replace("scrolling:","");_31.scrolling=s.trim();}else{if(_33[i].indexOf("border:")>=0){}}}}}this.resizeContainer(parseInt(_31.width),parseInt(_31.height));}else{imgPreloader=new Image();imgPreloader.onload=function(){var _38=imgPreloader.width;var _39=imgPreloader.height;if(myLytebox.autoResize){var _3a=myLytebox.getPageSize();var x=_3a[2]-150;var y=_3a[3]-150;if(_38>x){_39=Math.round(_39*(x/_38));_38=x;if(_39>y){_38=Math.round(_38*(y/_39));_39=y;}}else{if(_39>y){_38=Math.round(_38*(y/_39));_39=y;if(_38>x){_39=Math.round(_39*(x/_38));_38=x;}}}}var _3d=myLytebox.doc.getElementById("lbImage");_3d.src=(myLytebox.isSlideshow?myLytebox.slideArray[myLytebox.activeSlide][0]:myLytebox.imageArray[myLytebox.activeImage][0]);_3d.width=_38;_3d.height=_39;myLytebox.resizeContainer(_38,_39);imgPreloader.onload=function(){};};imgPreloader.src=(this.isSlideshow?this.slideArray[this.activeSlide][0]:this.imageArray[this.activeImage][0]);}};LyteBox.prototype.resizeContainer=function(_3e,_3f){this.wCur=this.doc.getElementById("lbOuterContainer").offsetWidth;this.hCur=this.doc.getElementById("lbOuterContainer").offsetHeight;this.xScale=((_3e+(this.borderSize*2))/this.wCur)*100;this.yScale=((_3f+(this.borderSize*2))/this.hCur)*100;var _40=(this.wCur-this.borderSize*2)-_3e;var _41=(this.hCur-this.borderSize*2)-_3f;if(!(_41==0)){this.hDone=false;this.resizeH("lbOuterContainer",this.hCur,_3f+this.borderSize*2,this.getPixelRate(this.hCur,_3f));}else{this.hDone=true;}if(!(_40==0)){this.wDone=false;this.resizeW("lbOuterContainer",this.wCur,_3e+this.borderSize*2,this.getPixelRate(this.wCur,_3e));}else{this.wDone=true;}if((_41==0)&&(_40==0)){if(this.ie){this.pause(250);}else{this.pause(100);}}this.doc.getElementById("lbPrev").style.height=_3f+"px";this.doc.getElementById("lbNext").style.height=_3f+"px";this.doc.getElementById("lbDetailsContainer").style.width=(_3e+(this.borderSize*2)+(this.ie&&this.doc.compatMode=="BackCompat"&&this.outerBorder?2:0))+"px";this.showContent();};LyteBox.prototype.showContent=function(){if(this.wDone&&this.hDone){for(var i=0;i<this.showContentTimerCount;i++){window.clearTimeout(this.showContentTimerArray[i]);}if(this.outerBorder){this.doc.getElementById("lbOuterContainer").style.borderBottom="none";}this.doc.getElementById("lbLoading").style.display="none";if(this.isLyteframe){this.doc.getElementById("lbIframe").style.display="";this.appear("lbIframe",(this.doAnimations?0:100));}else{this.doc.getElementById("lbImage").style.display="";this.appear("lbImage",(this.doAnimations?0:100));this.preloadNeighborImages();}if(this.isSlideshow){if(this.activeSlide==(this.slideArray.length-1)){if(this.autoEnd){this.slideshowIDArray[this.slideshowIDCount++]=setTimeout("myLytebox.end('slideshow')",this.slideInterval);}}else{if(!this.isPaused){this.slideshowIDArray[this.slideshowIDCount++]=setTimeout("myLytebox.changeContent("+(this.activeSlide+1)+")",this.slideInterval);}}this.doc.getElementById("lbHoverNav").style.display=(this.showNavigation&&this.navType==1?"":"none");this.doc.getElementById("lbClose").style.display=(this.showClose?"":"none");this.doc.getElementById("lbDetails").style.display=(this.showDetails?"":"none");this.doc.getElementById("lbPause").style.display=(this.showPlayPause&&!this.isPaused?"":"none");this.doc.getElementById("lbPlay").style.display=(this.showPlayPause&&!this.isPaused?"none":"");this.doc.getElementById("lbNavDisplay").style.display=(this.showNavigation&&this.navType==2?"":"none");}else{this.doc.getElementById("lbHoverNav").style.display=(this.navType==1&&!this.isLyteframe?"":"none");if((this.navType==2&&!this.isLyteframe&&this.imageArray.length>1)||(this.frameArray.length>1&&this.isLyteframe)){this.doc.getElementById("lbNavDisplay").style.display="";}else{this.doc.getElementById("lbNavDisplay").style.display="none";}this.doc.getElementById("lbClose").style.display="";this.doc.getElementById("lbDetails").style.display="";this.doc.getElementById("lbPause").style.display="none";this.doc.getElementById("lbPlay").style.display="none";}this.doc.getElementById("lbImageContainer").style.display=(this.isLyteframe?"none":"");this.doc.getElementById("lbIframeContainer").style.display=(this.isLyteframe?"":"none");try{this.doc.getElementById("lbIframe").src=this.frameArray[this.activeFrame][0];}catch(e){}}else{this.showContentTimerArray[this.showContentTimerCount++]=setTimeout("myLytebox.showContent()",200);}};LyteBox.prototype.updateDetails=function(){var _43=this.doc.getElementById("lbCaption");var _44=(this.isSlideshow?this.slideArray[this.activeSlide][1]:(this.isLyteframe?this.frameArray[this.activeFrame][1]:this.imageArray[this.activeImage][1]));_43.style.display="";_43.innerHTML=(_44==null?"":_44);this.updateNav();this.doc.getElementById("lbDetailsContainer").style.display="";_43=this.doc.getElementById("lbNumberDisplay");if(this.isSlideshow&&this.slideArray.length>1){_43.style.display="";_43.innerHTML=eval(this.activeSlide+1)+" / "+this.slideArray.length;this.doc.getElementById("lbNavDisplay").style.display=(this.navType==2&&this.showNavigation?"":"none");}else{if(this.imageArray.length>1&&!this.isLyteframe){_43.style.display="";_43.innerHTML=eval(this.activeImage+1)+" / "+this.imageArray.length;this.doc.getElementById("lbNavDisplay").style.display=(this.navType==2?"":"none");}else{if(this.frameArray.length>1&&this.isLyteframe){_43.style.display="";_43.innerHTML=eval(this.activeFrame+1)+" / "+this.frameArray.length;this.doc.getElementById("lbNavDisplay").style.display="";}else{this.doc.getElementById("lbNavDisplay").style.display="none";}}}this.appear("lbDetailsContainer",(this.doAnimations?0:100));};LyteBox.prototype.updateNav=function(){if(this.isSlideshow){if(this.activeSlide!=0){var _45=(this.navType==2?this.doc.getElementById("lbPrev2"):this.doc.getElementById("lbPrev"));_45.style.display="";_45.onclick=function(){if(myLytebox.pauseOnPrevClick){myLytebox.togglePlayPause("lbPause","lbPlay");}myLytebox.changeContent(myLytebox.activeSlide-1);return false;};}else{if(this.navType==2){this.doc.getElementById("lbPrev2_Off").style.display="";}}if(this.activeSlide!=(this.slideArray.length-1)){var _46=(this.navType==2?this.doc.getElementById("lbNext2"):this.doc.getElementById("lbNext"));_46.style.display="";_46.onclick=function(){if(myLytebox.pauseOnNextClick){myLytebox.togglePlayPause("lbPause","lbPlay");}myLytebox.changeContent(myLytebox.activeSlide+1);return false;};}else{if(this.navType==2){this.doc.getElementById("lbNext2_Off").style.display="";}}}else{if(this.isLyteframe){if(this.activeFrame!=0){var _47=this.doc.getElementById("lbPrev2");_47.style.display="";_47.onclick=function(){myLytebox.changeContent(myLytebox.activeFrame-1);return false;};}else{this.doc.getElementById("lbPrev2_Off").style.display="";}if(this.activeFrame!=(this.frameArray.length-1)){var _48=this.doc.getElementById("lbNext2");_48.style.display="";_48.onclick=function(){myLytebox.changeContent(myLytebox.activeFrame+1);return false;};}else{this.doc.getElementById("lbNext2_Off").style.display="";}}else{if(this.activeImage!=0){var _49=(this.navType==2?this.doc.getElementById("lbPrev2"):this.doc.getElementById("lbPrev"));_49.style.display="";_49.onclick=function(){myLytebox.changeContent(myLytebox.activeImage-1);return false;};}else{if(this.navType==2){this.doc.getElementById("lbPrev2_Off").style.display="";}}if(this.activeImage!=(this.imageArray.length-1)){var _4a=(this.navType==2?this.doc.getElementById("lbNext2"):this.doc.getElementById("lbNext"));_4a.style.display="";_4a.onclick=function(){myLytebox.changeContent(myLytebox.activeImage+1);return false;};}else{if(this.navType==2){this.doc.getElementById("lbNext2_Off").style.display="";}}}}this.enableKeyboardNav();};LyteBox.prototype.enableKeyboardNav=function(){document.onkeydown=this.keyboardAction;};LyteBox.prototype.disableKeyboardNav=function(){document.onkeydown="";};LyteBox.prototype.keyboardAction=function(e){var _4c=key=escape=null;_4c=(e==null)?event.keyCode:e.which;key=String.fromCharCode(_4c).toLowerCase();escape=(e==null)?27:e.DOM_VK_ESCAPE;if((key=="x")||(key=="c")||(_4c==escape)){myLytebox.end();}else{if((key=="p")||(_4c==37)){if(myLytebox.isSlideshow){if(myLytebox.activeSlide!=0){myLytebox.disableKeyboardNav();myLytebox.changeContent(myLytebox.activeSlide-1);}}else{if(myLytebox.isLyteframe){if(myLytebox.activeFrame!=0){myLytebox.disableKeyboardNav();myLytebox.changeContent(myLytebox.activeFrame-1);}}else{if(myLytebox.activeImage!=0){myLytebox.disableKeyboardNav();myLytebox.changeContent(myLytebox.activeImage-1);}}}}else{if((key=="n")||(_4c==39)){if(myLytebox.isSlideshow){if(myLytebox.activeSlide!=(myLytebox.slideArray.length-1)){myLytebox.disableKeyboardNav();myLytebox.changeContent(myLytebox.activeSlide+1);}}else{if(myLytebox.isLyteframe){if(myLytebox.activeFrame!=(myLytebox.frameArray.length-1)){myLytebox.disableKeyboardNav();myLytebox.changeContent(myLytebox.activeFrame+1);}}else{if(myLytebox.activeImage!=(myLytebox.imageArray.length-1)){myLytebox.disableKeyboardNav();myLytebox.changeContent(myLytebox.activeImage+1);}}}}}}};LyteBox.prototype.preloadNeighborImages=function(){if(this.isSlideshow){if((this.slideArray.length-1)>this.activeSlide){preloadNextImage=new Image();preloadNextImage.src=this.slideArray[this.activeSlide+1][0];}if(this.activeSlide>0){preloadPrevImage=new Image();preloadPrevImage.src=this.slideArray[this.activeSlide-1][0];}}else{if((this.imageArray.length-1)>this.activeImage){preloadNextImage=new Image();preloadNextImage.src=this.imageArray[this.activeImage+1][0];}if(this.activeImage>0){preloadPrevImage=new Image();preloadPrevImage.src=this.imageArray[this.activeImage-1][0];}}};LyteBox.prototype.togglePlayPause=function(_4d,_4e){if(this.isSlideshow&&_4d=="lbPause"){for(var i=0;i<this.slideshowIDCount;i++){window.clearTimeout(this.slideshowIDArray[i]);}}this.doc.getElementById(_4d).style.display="none";this.doc.getElementById(_4e).style.display="";if(_4d=="lbPlay"){this.isPaused=false;if(this.activeSlide==(this.slideArray.length-1)){this.end();}else{this.changeContent(this.activeSlide+1);}}else{this.isPaused=true;}};LyteBox.prototype.end=function(_50){var _51=(_50=="slideshow"?false:true);if(this.isSlideshow&&this.isPaused&&!_51){return;}this.disableKeyboardNav();this.doc.getElementById("lbMain").style.display="none";this.fade("lbOverlay",(this.doAnimations?this.maxOpacity:0));this.toggleSelects("visible");if(this.hideFlash){this.toggleFlash("visible");}if(this.isSlideshow){for(var i=0;i<this.slideshowIDCount;i++){window.clearTimeout(this.slideshowIDArray[i]);}}if(this.isLyteframe){this.initialize();}};LyteBox.prototype.checkFrame=function(){if(window.parent.frames[window.name]&&(parent.document.getElementsByTagName("frameset").length<=0)){this.isFrame=true;this.lytebox="window.parent."+window.name+".myLytebox";this.doc=parent.document;}else{this.isFrame=false;this.lytebox="myLytebox";this.doc=document;}};LyteBox.prototype.getPixelRate=function(cur,img){var _55=(img>cur)?img-cur:cur-img;if(_55>=0&&_55<=100){return 10;}if(_55>100&&_55<=200){return 15;}if(_55>200&&_55<=300){return 20;}if(_55>300&&_55<=400){return 25;}if(_55>400&&_55<=500){return 30;}if(_55>500&&_55<=600){return 35;}if(_55>600&&_55<=700){return 40;}if(_55>700){return 45;}};LyteBox.prototype.appear=function(id,_57){var _58=this.doc.getElementById(id).style;_58.opacity=(_57/100);_58.MozOpacity=(_57/100);_58.KhtmlOpacity=(_57/100);_58.filter="alpha(opacity="+(_57+10)+")";if(_57==100&&(id=="lbImage"||id=="lbIframe")){try{_58.removeAttribute("filter");}catch(e){}this.updateDetails();}else{if(_57>=this.maxOpacity&&id=="lbOverlay"){for(var i=0;i<this.overlayTimerCount;i++){window.clearTimeout(this.overlayTimerArray[i]);}return;}else{if(_57>=100&&id=="lbDetailsContainer"){try{_58.removeAttribute("filter");}catch(e){}for(var i=0;i<this.imageTimerCount;i++){window.clearTimeout(this.imageTimerArray[i]);}this.doc.getElementById("lbOverlay").style.height=this.getPageSize()[1]+"px";}else{if(id=="lbOverlay"){this.overlayTimerArray[this.overlayTimerCount++]=setTimeout("myLytebox.appear('"+id+"', "+(_57+20)+")",1);}else{this.imageTimerArray[this.imageTimerCount++]=setTimeout("myLytebox.appear('"+id+"', "+(_57+10)+")",1);}}}}};LyteBox.prototype.fade=function(id,_5c){var _5d=this.doc.getElementById(id).style;_5d.opacity=(_5c/100);_5d.MozOpacity=(_5c/100);_5d.KhtmlOpacity=(_5c/100);_5d.filter="alpha(opacity="+_5c+")";if(_5c<=0){try{_5d.display="none";}catch(err){}}else{if(id=="lbOverlay"){this.overlayTimerArray[this.overlayTimerCount++]=setTimeout("myLytebox.fade('"+id+"', "+(_5c-20)+")",1);}else{this.timerIDArray[this.timerIDCount++]=setTimeout("myLytebox.fade('"+id+"', "+(_5c-10)+")",1);}}};LyteBox.prototype.resizeW=function(id,_5f,_60,_61,_62){if(!this.hDone){this.resizeWTimerArray[this.resizeWTimerCount++]=setTimeout("myLytebox.resizeW('"+id+"', "+_5f+", "+_60+", "+_61+")",100);return;}var _63=this.doc.getElementById(id);var _64=_62?_62:(this.resizeDuration/2);var _65=(this.doAnimations?_5f:_60);_63.style.width=(_65)+"px";if(_65<_60){_65+=(_65+_61>=_60)?(_60-_65):_61;}else{if(_65>_60){_65-=(_65-_61<=_60)?(_65-_60):_61;}}this.resizeWTimerArray[this.resizeWTimerCount++]=setTimeout("myLytebox.resizeW('"+id+"', "+_65+", "+_60+", "+_61+", "+(_64+0.02)+")",_64+0.02);if(parseInt(_63.style.width)==_60){this.wDone=true;for(var i=0;i<this.resizeWTimerCount;i++){window.clearTimeout(this.resizeWTimerArray[i]);}}};LyteBox.prototype.resizeH=function(id,_68,_69,_6a,_6b){var _6c=_6b?_6b:(this.resizeDuration/2);var _6d=this.doc.getElementById(id);var _6e=(this.doAnimations?_68:_69);_6d.style.height=(_6e)+"px";if(_6e<_69){_6e+=(_6e+_6a>=_69)?(_69-_6e):_6a;}else{if(_6e>_69){_6e-=(_6e-_6a<=_69)?(_6e-_69):_6a;}}this.resizeHTimerArray[this.resizeHTimerCount++]=setTimeout("myLytebox.resizeH('"+id+"', "+_6e+", "+_69+", "+_6a+", "+(_6c+0.02)+")",_6c+0.02);if(parseInt(_6d.style.height)==_69){this.hDone=true;for(var i=0;i<this.resizeHTimerCount;i++){window.clearTimeout(this.resizeHTimerArray[i]);}}};LyteBox.prototype.getPageScroll=function(){if(self.pageYOffset){return this.isFrame?parent.pageYOffset:self.pageYOffset;}else{if(this.doc.documentElement&&this.doc.documentElement.scrollTop){return this.doc.documentElement.scrollTop;}else{if(document.body){return this.doc.body.scrollTop;}}}};LyteBox.prototype.getPageSize=function(){var _70,yScroll,windowWidth,windowHeight;if(window.innerHeight&&window.scrollMaxY){_70=this.doc.scrollWidth;yScroll=(this.isFrame?parent.innerHeight:self.innerHeight)+(this.isFrame?parent.scrollMaxY:self.scrollMaxY);}else{if(this.doc.body.scrollHeight>this.doc.body.offsetHeight){_70=this.doc.body.scrollWidth;yScroll=this.doc.body.scrollHeight;}else{_70=this.doc.getElementsByTagName("html").item(0).offsetWidth;yScroll=this.doc.getElementsByTagName("html").item(0).offsetHeight;_70=(_70<this.doc.body.offsetWidth)?this.doc.body.offsetWidth:_70;yScroll=(yScroll<this.doc.body.offsetHeight)?this.doc.body.offsetHeight:yScroll;}}if(self.innerHeight){windowWidth=(this.isFrame)?parent.innerWidth:self.innerWidth;windowHeight=(this.isFrame)?parent.innerHeight:self.innerHeight;}else{if(document.documentElement&&document.documentElement.clientHeight){windowWidth=this.doc.documentElement.clientWidth;windowHeight=this.doc.documentElement.clientHeight;}else{if(document.body){windowWidth=this.doc.getElementsByTagName("html").item(0).clientWidth;windowHeight=this.doc.getElementsByTagName("html").item(0).clientHeight;windowWidth=(windowWidth==0)?this.doc.body.clientWidth:windowWidth;windowHeight=(windowHeight==0)?this.doc.body.clientHeight:windowHeight;}}}var _71=(yScroll<windowHeight)?windowHeight:yScroll;var _72=(_70<windowWidth)?windowWidth:_70;return new Array(_72,_71,windowWidth,windowHeight);};LyteBox.prototype.toggleFlash=function(_73){var _74=this.doc.getElementsByTagName("object");for(var i=0;i<_74.length;i++){_74[i].style.visibility=(_73=="hide")?"hidden":"visible";}var _76=this.doc.getElementsByTagName("embed");for(var i=0;i<_76.length;i++){_76[i].style.visibility=(_73=="hide")?"hidden":"visible";}if(this.isFrame){for(var i=0;i<parent.frames.length;i++){try{_74=parent.frames[i].window.document.getElementsByTagName("object");for(var j=0;j<_74.length;j++){_74[j].style.visibility=(_73=="hide")?"hidden":"visible";}}catch(e){}try{_76=parent.frames[i].window.document.getElementsByTagName("embed");for(var j=0;j<_76.length;j++){_76[j].style.visibility=(_73=="hide")?"hidden":"visible";}}catch(e){}}}};LyteBox.prototype.toggleSelects=function(_7b){var _7c=this.doc.getElementsByTagName("select");for(var i=0;i<_7c.length;i++){_7c[i].style.visibility=(_7b=="hide")?"hidden":"visible";}if(this.isFrame){for(var i=0;i<parent.frames.length;i++){try{_7c=parent.frames[i].window.document.getElementsByTagName("select");for(var j=0;j<_7c.length;j++){_7c[j].style.visibility=(_7b=="hide")?"hidden":"visible";}}catch(e){}}}};LyteBox.prototype.pause=function(_80){var now=new Date();var _82=now.getTime()+_80;while(true){now=new Date();if(now.getTime()>_82){return;}}};if(window.addEventListener){window.addEventListener("load",initLytebox,false);}else{if(window.attachEvent){window.attachEvent("onload",initLytebox);}else{window.onload=function(){initLytebox();};}}function initLytebox(){myLytebox=new LyteBox();}
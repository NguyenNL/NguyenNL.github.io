!function(e){function t(t){for(var o,r,a=t[0],c=t[1],u=t[2],p=0,d=[];p<a.length;p++)r=a[p],i[r]&&d.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);d.length;)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={1:0},s=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;s.push([351,0]),n()}({248:function(e,t,n){"use strict";function o(e,t,n,o){"ngInject";n.interceptors.push("Intercepter"),n.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"}o.$inject=["$urlRouterProvider","$locationProvider","$httpProvider","$provide"],t.__esModule=!0,t.default=o},249:function(e,t,n){"use strict";var o;t.__esModule=!0;var i=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$location=t,this.$q=n,this.authService=i,o=this}return e.prototype.request=function(e){return e},e.prototype.response=function(e){return e},e.prototype.responseError=function(e){return o.$q.reject(e)},e.prototype.requestError=function(e){return o.$q.reject(e)},e.factory=function(t,n,o,i){return new e(t,n,o,i)},e}();i.factory.$inject=["$location","$q","AuthService","$cookies"],t.default=i.factory},250:function(e,t,n){"use strict";t.__esModule=!0;var o="https://chat-app.kilatiron.com";angular.module("app.constant",[]).constant("CONSTANT",{RESTPATH:{LOGIN:{AUTH:o+"/user",CONNECT:o+"/ws",SUBSCRIBE:"/topic/public",ADD_USER:"/app/chat.addUser"},LOGOUT:{SIGN_OUT:o+"/logout"},HOME:{UPLOAD_FILE:o+"/api/upload/eblox",GET_PERCENT:o+"/api/upload/progress"}},AUTH:{TOKEN_KEY:"AuthorizationToken",USER_INFO:"USER_INFO"},STATE:{LOGIN:"login",HOME:"navigation.home"},GOOGLE:{CLIENT_ID:"611814235738-r5iieilg39dfkh0lgolp674iqa85msoj.apps.googleusercontent.com",SCOPES:["https://www.googleapis.com/auth/drive","profile"]}}),t.default="app.constant"},254:function(e,t){},255:function(e,t){},256:function(e,t){},257:function(e,t){},263:function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(t,n,o){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$http=t,this.CONSTANT=n,this.authService=o}return e.$inject=["$http","CONSTANT","AuthService"],e.prototype.uploadFile=function(e){return this.$http({method:"POST",url:this.CONSTANT.RESTPATH.HOME.UPLOAD_FILE,headers:{"Content-Type":void 0},data:e}).then(function(e){return e.data},function(e){return Promise.reject(e)})},e.prototype.getPercentUploaded=function(){return this.$http({method:"GET",url:this.CONSTANT.RESTPATH.HOME.GET_PERCENT,headers:{"X-XSRF-TOKEN":this.authService.getXsrfToken()}}).then(function(e){return e.data},function(e){return Promise.reject(e)})},e}();t.default=o},264:function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(t,n,o){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$http=t,this.CONSTANT=n,this.authService=o}return e.$inject=["$http","CONSTANT","AuthService"],e.prototype.logout=function(){return this.$http({method:"POST",url:this.CONSTANT.RESTPATH.LOGOUT.SIGN_OUT,headers:{}}).then(function(e){return e.data},function(e){return Promise.reject(e)})},e}();t.default=o},265:function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(t){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.CONSTANT=t}return e.$inject=["CONSTANT"],e.prototype.getJwtToken=function(){return localStorage.getItem(this.CONSTANT.AUTH.TOKEN_KEY)},e.prototype.setJwtToken=function(e){localStorage.setItem(this.CONSTANT.AUTH.TOKEN_KEY,e)},e.prototype.removeJwtToken=function(){localStorage.removeItem(this.CONSTANT.AUTH.TOKEN_KEY)},e.prototype.setUserInfo=function(e){localStorage.setItem(this.CONSTANT.AUTH.USER_INFO,JSON.stringify(e))},e.prototype.removeUserInfo=function(){localStorage.removeItem(this.CONSTANT.AUTH.USER_INFO)},e.prototype.getUserInfo=function(){return JSON.parse(localStorage.getItem(this.CONSTANT.AUTH.USER_INFO))},e.prototype.removeAuthInfo=function(){this.removeUserInfo()},e.prototype.getXsrfToken=function(){var e=new RegExp("XSRF-TOKEN=([^;]+)").exec(document.cookie);return null!==e?unescape(e[1]):null},e.prototype.createAuthorizationTokenHeader=function(e){},e}();t.default=o},266:function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(t,n){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$http=t,this.CONSTANT=n}return e.$inject=["$http","CONSTANT"],e.prototype.auth=function(){return this.$http({method:"GET",url:this.CONSTANT.RESTPATH.LOGIN.AUTH}).then(function(e){return e.data},function(e){return Promise.reject(e)})},e}();t.default=o},267:function(e,t,n){"use strict";t.__esModule=!0;var o=c(n(266)),i=c(n(38)),s=c(n(265)),r=c(n(264)),a=c(n(263));function c(e){return e&&e.__esModule?e:{default:e}}i.default.module("app.service",[]).service("LoginService",o.default).service("AuthService",s.default).service("LogoutService",r.default).service("HomeService",a.default),t.default="app.service"},269:function(e,t,n){},270:function(e,t){e.exports="<div id=home> this is home page </div>"},271:function(e,t,n){"use strict";t.__esModule=!0;o(n(69)),o(n(151));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(t,n,o,i,s){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$scope=s,this.toaster=i}return e.$inject=["CONSTANT","$rootScope","$timeout","toaster","$scope"],e.prototype.$onInit=function(){},e}();t.default=i},272:function(e,t,n){"use strict";r.$inject=["$stateProvider"],t.__esModule=!0;var o,i=n(271),s=(o=i)&&o.__esModule?o:{default:o};function r(e){"ngInject";e.state("navigation.home",{url:"/home",template:n(270),controller:s.default,controllerAs:"vm"})}t.default=r},273:function(e,t,n){"use strict";t.__esModule=!0;var o=r(n(38)),i=r(n(109)),s=r(n(272));function r(e){return e&&e.__esModule?e:{default:e}}n(269);o.default.module("app.pages.home",[i.default]).config(s.default),t.default="app.pages.home"},275:function(e,t,n){},276:function(e,t){e.exports='<div id=login-page> <div class=sign-in ng-if=!vm.isDoneRegisterUsername> <h1 class=title>Type your username</h1> <form id=usernameForm name=usernameForm ng-submit=vm.connect()> <div class=form-group> <input type=text id=name placeholder=Username autocomplete=off class=form-control ng-model=vm.username /> </div> <div class=form-group> <button type=submit class="accent username-submit">Start Chatting</button> </div> </form> </div> <div id=chat-page ng-show=vm.isDoneRegisterUsername> <div class=voice-call ng-if=vm.isSupportWebSpeechAPI> <p>Voice call</p> <i class="fa fa-microphone" ng-if=!vm.isSpeakNowWebSpeechApi ng-click=vm.startRecordingWebSpeechApi()></i> <i class="fa fa-microphone-slash" ng-if=vm.isSpeakNowWebSpeechApi ng-click=vm.stopRecordingWebSpeechApi()></i> </div> <p id=recording-instructions></p> <div class=chat-container> <div class=chat-header> <h2>Spring WebSocket Chat Demo</h2> </div> <div class=connecting> Connecting... </div> <ul id=messageArea> </ul> <form id=messageForm name=messageForm nameform=messageForm ng-submit=vm.sendMessage()> <div class=form-group> <div class="input-group clearfix"> <input type=text id=message placeholder="Type a message..." autocomplete=off class=form-control ng-model=vm.messageInput /> <button type=submit class=primary>Send</button> </div> </div> </form> </div> </div> </div>'},277:function(e,t,n){"use strict";t.__esModule=!0;var o,i=n(69),s=(o=i)&&o.__esModule?o:{default:o};var r=void 0,a=function(){function e(t,n,o,i,a,c){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$state=t,this.CONSTANT=n,this.$rootScope=a,this.$scope=c,this.isDoneRegisterUsername=!1,this.connectingElement=document.querySelector(".connecting"),this.messageArea=document.querySelector("#messageArea"),this.colors=["#2196F3","#32c787","#00BCD4","#ff5652","#ffc107","#ff85af","#FF9800","#39bbb0"],this.instructions=(0,s.default)("#recording-instructions"),this.isSupportWebSpeechAPI=!1,this.speechToTextByWebAPI=[],r=this}return e.$inject=["$state","CONSTANT","LoginService","AuthService","$rootScope","$scope"],e.prototype.$onInit=function(){this.initWebSpeechAPI()},e.prototype.connect=function(){var e=new SockJS(this.CONSTANT.RESTPATH.LOGIN.CONNECT);this.stompClient=Stomp.over(e),this.stompClient.connect({},this.onConnected.bind(this),this.onError)},e.prototype.onConnected=function(){var e=this;this.$scope.$apply(function(){e.isDoneRegisterUsername=!0}),this.connectingElement.classList.add("hidden"),this.stompClient.subscribe(this.CONSTANT.RESTPATH.LOGIN.SUBSCRIBE,this.onMessageReceived.bind(this)),this.stompClient.send(this.CONSTANT.RESTPATH.LOGIN.ADD_USER,{},JSON.stringify({sender:this.username,type:"JOIN"}))},e.prototype.onError=function(){this.connectingElement.textContent="Could not connect to WebSocket server. Please refresh this page to try again!",this.connectingElement.style.color="red"},e.prototype.onMessageReceived=function(e){var t=JSON.parse(e.body),n=document.createElement("li");if("JOIN"===t.type)n.classList.add("event-message"),t.content=t.sender+" joined!";else if("LEAVE"===t.type)n.classList.add("event-message"),t.content=t.sender+" left!";else{this.isSpeakNowWebSpeechApi&&t.sender!==this.username&&this.textToSpeechWebSpeechApi(t.content),n.classList.add("chat-message");var o=document.createElement("i"),i=document.createTextNode(t.sender[0]);o.appendChild(i),o.style["background-color"]=this.getAvatarColor(t.sender),n.appendChild(o);var s=document.createElement("span"),r=document.createTextNode(t.sender);s.appendChild(r),n.appendChild(s)}var a=document.createElement("p"),c=document.createTextNode(t.content);a.appendChild(c),n.appendChild(a),this.messageArea.appendChild(n),this.messageArea.scrollTop=this.messageArea.scrollHeight},e.prototype.getAvatarColor=function(e){for(var t=0,n=0;n<e.length;n++)t=31*t+e.charCodeAt(n);var o=Math.abs(t%this.colors.length);return this.colors[o]},e.prototype.sendMessage=function(){if(this.messageInput&&this.stompClient){var e={sender:this.username,content:this.messageInput,type:"CHAT"};this.stompClient.send("/app/chat.sendMessage",{},JSON.stringify(e)),this.messageInput="",this.speechToTextByWebAPI=[]}},e.prototype.initWebSpeechAPI=function(){try{r.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition,r.recognition=new r.SpeechRecognition,r.isSupportWebSpeechAPI=!0,r.recognitionConfig(r.recognition)}catch(e){r.isSupportWebSpeechAPI=!1}},e.prototype.textToSpeechWebSpeechApi=function(e){var t=new SpeechSynthesisUtterance;t.text=e,t.volume=1,t.rate=1,t.pitch=1,window.speechSynthesis.speak(t)},e.prototype.recognitionConfig=function(e){e.continuous=!0,e.onresult=function(e){var t=e.resultIndex,n=e.results[t][0].transcript;1==t&&n==e.results[0][0].transcript||(r.speechToTextByWebAPI.push(n),r.$scope.$apply(function(){r.messageInput=r.speechToTextByWebAPI.join(" "),r.sendMessage()}))},e.onstart=function(){r.instructions.text("Voice recognition activated. Try speaking into the microphone.")},e.onspeechend=function(){r.$scope.$apply(function(){r.isSpeakNowWebSpeechApi=!1}),r.instructions.text("You were quiet for a while so voice recognition turned itself off.")},e.onerror=function(e){r.$scope.$apply(function(){r.isSpeakNowWebSpeechApi=!1}),"no-speech"==e.error&&r.instructions.text("No speech was detected. Try again.")}},e.prototype.startRecordingWebSpeechApi=function(){this.isSpeakNowWebSpeechApi=!0,r.recognition.start()},e.prototype.stopRecordingWebSpeechApi=function(){this.isSpeakNowWebSpeechApi=!1,r.recognition.stop()},e}();t.default=a},278:function(e,t,n){"use strict";r.$inject=["$stateProvider"],t.__esModule=!0;var o,i=n(277),s=(o=i)&&o.__esModule?o:{default:o};function r(e){"ngInject";e.state("login",{url:"/",template:n(276),controller:s.default,controllerAs:"vm"})}t.default=r},279:function(e,t,n){"use strict";t.__esModule=!0;var o=r(n(38)),i=r(n(109)),s=r(n(278));function r(e){return e&&e.__esModule?e:{default:e}}n(275);o.default.module("app.pages.login",[i.default]).config(s.default),t.default="app.pages.login"},280:function(e,t,n){"use strict";t.__esModule=!0;var o=s(n(279)),i=s(n(273));function s(e){return e&&e.__esModule?e:{default:e}}s(n(38)).default.module("app.page",[o.default,i.default]),t.default="app.page"},282:function(e,t,n){},283:function(e,t){e.exports="<div class=loading-wrap ng-if=vm.$rootScope.isLoading> <md-progress-circular md-mode=indeterminate class=loading-icon></md-progress-circular> </div>"},284:function(e,t,n){"use strict";t.__esModule=!0;var o=function e(t){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$rootScope=t};o.$inject=["$rootScope"],t.default=o},285:function(e,t,n){"use strict";t.__esModule=!0;var o=s(n(284)),i=s(n(283));function s(e){return e&&e.__esModule?e:{default:e}}n(282);var r="app.components.directives.loading";angular.module(r,[]).component("loading",{template:i.default,controller:o.default,bindings:{},controllerAs:"vm"}),t.default=r},287:function(e,t,n){},288:function(e,t){e.exports='<div class=confirm-dialog> <div class=dialog-header> <p>Confirm</p> <i class="fa fa-times" ng-click=vm.closePopup()></i> </div> <div class=dialog-body> <p class=text-message>{{vm.message}}</p> <div class=btn-wrap> <div class="cancel-btn btn" ng-click=vm.closePopup()>Cancel</div> <div class="okay-btn btn" ng-click="vm.okayCallBack(); vm.closePopup()">Okay</div> </div> </div> </div>'},289:function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(t){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$mdDialog=t}return e.$inject=["$mdDialog"],e.prototype.closePopup=function(){this.$mdDialog.hide()},e}();t.default=o},290:function(e,t,n){"use strict";t.__esModule=!0;var o=s(n(289)),i=s(n(288));function s(e){return e&&e.__esModule?e:{default:e}}n(287);var r="app.components.directives.confirmDialog";angular.module(r,[]).component("confirmDialog",{template:i.default,controller:o.default,bindings:{message:"<",okayCallBack:"&"},controllerAs:"vm"}),t.default=r},291:function(e,t,n){"use strict";t.__esModule=!0;var o,i,s=n(151),r=(o=s)&&o.__esModule?o:{default:o};var a=function(){function e(t,n,o,s,r){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$rootScope=t,this.authService=n,this.$state=o,this.CONSTANT=s,this.$transitions=r,i=this}return e.$inject=["$rootScope","AuthService","$state","CONSTANT","$transitions"],e.prototype.$onInit=function(){var e=this;this.$transitions.onSuccess({},function(){r.default.isNil(gapi.auth2)&&e.loadGoogleConfig()}),this.$transitions.onBefore({},function(){})},e.prototype.loadGoogleConfig=function(){return gapi.load("client:auth2",this.initClient)},e.prototype.initClient=function(){return new Promise(function(e,t){gapi.client.init({clientId:i.CONSTANT.GOOGLE.CLIENT_ID,scope:i.CONSTANT.GOOGLE.SCOPES.join(" ")}).then(function(){e(),gapi.auth2.getAuthInstance().isSignedIn.get()||i.$state.$current.name===i.CONSTANT.STATE.LOGIN||i.$state.go(i.CONSTANT.STATE.LOGIN)})}).promise},e}();t.default=a},292:function(e,t,n){"use strict";t.__esModule=!0;var o,i=n(291),s=(o=i)&&o.__esModule?o:{default:o};var r="app.components.directives.authen";angular.module(r,[]).component("authenBeforeStateChange",{controller:s.default,controllerAs:"vm"}),t.default=r},294:function(e,t,n){},295:function(e,t){e.exports="<div class=popup-wrap> <div class=\"header flex-c flex-row-c\"> <p>{{!vm.isUpdateCandidate ? 'Create your candidate' : 'Update your candidate'}}</p> <i class=\"fa fa-times\" ng-click=vm.closePopup()></i> </div> <div class=pop-content layout-gt-sm=row> <form class=form-content ng-submit=\"vm.updateInfo({objectInfo: {name: vm.name, position: vm.position, experience: vm.experience, endClient: vm.endClient, lastInterviewResult: vm.lastInterviewResult, email:  vm.email, botinterviewResult: vm.BOTInterviewResult,phoneNumber: vm.phoneNumber, code: vm.code}});vm.closePopup()\"> <md-input-container class=md-block flex-gt-sm> <label>Name</label> <input ng-model=vm.name required> <div ng-messages=projectForm.clientName.$error> <div ng-message=required>This is required.</div> </div> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>Position</label> <input ng-model=vm.position required> <div ng-messages=projectForm.clientName.$error> <div ng-message=required>This is required.</div> </div> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>Experience</label> <input ng-model=vm.experience> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>End client</label> <input ng-model=vm.endClient required> <div ng-messages=projectForm.clientName.$error> <div ng-message=required>This is required.</div> </div> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>Last interview result</label> <input ng-model=vm.lastInterviewResult> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>BOT interview result</label> <input ng-model=vm.BOTInterviewResult> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>Email</label> <input ng-model=vm.email required type=email> <div ng-messages=projectForm.clientName.$error> <div ng-message=required>This is required.</div> </div> </md-input-container> <md-input-container class=md-block flex-gt-sm> <label>Phone number</label> <input ng-model=vm.phoneNumber type=text> </md-input-container> <button type=submit class=\"btn btn-primary btn-block\"> {{!vm.isUpdateCandidate ? 'Create' : 'Update'}} </button> </form> </div> </div> "},296:function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(t,n){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.displayText=null,this.variableName=null,this.variableType=null,this.$scope=t,this.$mdDialog=n}return e.$inject=["$scope","$mdDialog"],e.prototype.$onInit=function(){this.candidateData&&(this.name=this.candidateData.name,this.position=this.candidateData.position,this.experience=this.candidateData.experience,this.endClient=this.candidateData.endClient,this.lastInterviewResult=this.candidateData.lastInterviewResult,this.BOTInterviewResult=this.candidateData.botinterviewResult,this.email=this.candidateData.email,this.phoneNumber=this.candidateData.phoneNumber,this.code=this.candidateData.code)},e.prototype.closePopup=function(){this.$mdDialog.hide()},e}();t.default=o},297:function(e,t,n){"use strict";t.__esModule=!0;var o=s(n(296)),i=s(n(295));function s(e){return e&&e.__esModule?e:{default:e}}n(294);var r="app.components.directives.dialog";angular.module(r,[]).component("dialogPopup",{template:i.default,controller:o.default,bindings:{updateInfo:"&",isUpdateCandidate:"<",candidateData:"<"},controllerAs:"vm"}),t.default=r},298:function(e,t,n){"use strict";function o(e){"ngInject";e.state("navigation",{template:"<nav>",abstract:!0})}o.$inject=["$stateProvider"],t.__esModule=!0,t.default=o},300:function(e,t,n){},301:function(e,t){e.exports='<div id=nav> <div class=nav-container> <div class=text-title-wrap> <p class=text-project>Upload file demo</p> </div> <div class=account-wrap> <div class=user-avatar ng-if=vm.userInfo.picture> <img ng-src={{vm.userInfo.picture}}> </div> <i class="fa fa-user user-icon" ng-if=!vm.userInfo.picture></i> <p class=account>{{vm.userInfo.name}}</p> <i class="fa fa-caret-down drop-icon" ng-click=vm.toggleDropDownList()></i> </div> <div id=drop-down class=drop-down-list ng-if=vm.isDisplayDropDownList> <div class="setting drop-down-item"> <i class="fa fa-cog" aria-hidden=true></i> <p>Setting</p> </div> <div class="logout drop-down-item" ng-click=vm.logOut()> <i class="fa fa-sign-out" aria-hidden=true></i> <p>Logout</p> </div> </div> </div> <div class=child-page> <ui-view/> </div> </div>'},302:function(e,t,n){"use strict";t.__esModule=!0;var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.out=function(){},e}();t.default=o},303:function(e,t,n){"use strict";t.__esModule=!0;var o=i(n(69));i(n(302));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(t,n,o,i,s,r){"ngInject";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.authService=t,this.isDisplayDropDownList=!1,this.$scope=n,this.$state=o,this.CONSTANT=i,this.logoutService=s,this.$rootScope=r}return e.$inject=["AuthService","$scope","$state","CONSTANT","LogoutService","$rootScope"],e.prototype.$onInit=function(){var e=this;(0,o.default)(document).click(function(t){"drop-down"!==t.target.id&&"fa fa-caret-down drop-icon"!==t.target.className&&e.$scope.$apply(function(){e.isDisplayDropDownList=!1})}),this.userInfo=this.authService.getUserInfo()},e.prototype.toggleDropDownList=function(){this.isDisplayDropDownList=!this.isDisplayDropDownList},e.prototype.logOut=function(e){var t=this;confirm("Are you sure you want to logout?")&&gapi.auth2.getAuthInstance().signOut().then(function(){t.$state.go(t.CONSTANT.STATE.LOGIN),t.authService.removeUserInfo()})},e}();t.default=s},304:function(e,t,n){"use strict";t.__esModule=!0;var o=r(n(303)),i=r(n(301));n(300);var s=r(n(298));function r(e){return e&&e.__esModule?e:{default:e}}angular.module("app.components.directives.nav",[]).component("nav",{controller:o.default,template:i.default,controllerAs:"vm",bindings:{}}).config(s.default),t.default="app.components.directives.nav"},305:function(e,t,n){"use strict";t.__esModule=!0;var o=c(n(304)),i=c(n(297)),s=c(n(292)),r=c(n(290)),a=c(n(285));function c(e){return e&&e.__esModule?e:{default:e}}angular.module("app.components.directives",[o.default,i.default,s.default,r.default,a.default]),t.default="app.components.directives"},306:function(e,t,n){"use strict";t.__esModule=!0;var o=a(n(38)),i=a(n(305)),s=a(n(280)),r=a(n(267));function a(e){return e&&e.__esModule?e:{default:e}}o.default.module("app.components",[s.default,r.default,i.default]);t.default="app.components"},307:function(e,t,n){"use strict";function o(e,t,n,o){"ngInject";t.html5Mode(!1),e.otherwise("/")}o.$inject=["$urlRouterProvider","$locationProvider","$httpProvider","CONSTANT"],t.__esModule=!0,t.default=o},328:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=window.gapi=window.gapi||{};i._bs=(new Date).getTime(),function(){var e,t=window,n=document,i=t.location,s=function(){},r=/\[native code\]/,a=function(e,t,n){return e[t]=e[t]||n},c=function(){var e;if((e=Object.create)&&r.test(e))e=e(null);else for(var t in e={})e[t]=void 0;return e},u=a(t,"gapi",{});e=a(t,"___jsl",c()),a(e,"I",0),a(e,"hel",10);var l=function(){var t=i.href;if(e.dpo)var n=e.h;else{n=e.h;if(t=t&&(/([#].*&|[#])jsh=([^&#]*)/g.exec(t)||/([?#].*&|[?#])jsh=([^&#]*)/g.exec(t)))try{n=decodeURIComponent(t[2])}catch(e){}}return n},p=function(t){return a(a(e,"H",c()),t,c())},d=a(e,"perf",c()),f=a(d,"g",c()),h=a(d,"i",c());a(d,"r",[]),c(),c();var g=function(e,t,n){var o=d.r;"function"==typeof o?o(e,t,n):o.push([e,t,n])},m=function(e,t,n){t&&0<t.length&&(t=v(t),n&&0<n.length&&(t+="___"+v(n)),28<t.length&&(t=t.substr(0,28)+(t.length-28)),n=t,t=a(h,"_p",c()),a(t,n,c())[e]=(new Date).getTime(),g(e,"_p",n))},v=function(e){return e.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")},_=c(),b=[],w=function(e){throw Error("Bad hint"+(e?": "+e:""))};b.push(["jsl",function(t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=t[n];"object"==(void 0===i?"undefined":o(i))?e[n]=a(e,n,[]).concat(i):a(e,n,i)}(n=t.u)&&((t=a(e,"us",[])).push(n),(n=/^https:(.*)$/.exec(n))&&t.push("http:"+n[1]))}]);var y=/^(\/[a-zA-Z0-9_\-]+)+$/,T=[/\/amp\//,/\/amp$/,/^\/amp$/],S=/^[a-zA-Z0-9\-_\.,!]+$/,N=/^gapi\.loaded_[0-9]+$/,A=/^[a-zA-Z0-9,._-]+$/,C=function(e){"/"!==e.charAt(0)&&w("relative path");for(var t=e.substring(1).split("/"),n=[];t.length;){if((e=t.shift()).length&&0!=e.indexOf(".")){if(0<e.indexOf("=")){t.unshift(e);break}}else w("empty/relative directory");n.push(e)}e={};for(var o=0,i=t.length;o<i;++o){var s=t[o].split("="),r=decodeURIComponent(s[0]),a=decodeURIComponent(s[1]);2==s.length&&r&&a&&(e[r]=e[r]||a)}for(t="/"+n.join("/"),y.test(t)||w("invalid_prefix"),n=0,o=T.length;n<o;++n)T[n].test(t)&&w("invalid_prefix");return{pathPrefix:t,version:n=O(e,"k",!0),a:o=O(e,"am"),c:i=O(e,"rs"),f:e=O(e,"t")}},I=function(e){for(var t=[],n=0,o=e.length;n<o;++n){var i=e[n].replace(/\./g,"_").replace(/-/g,"_");A.test(i)&&t.push(i)}return t.join(",")},O=function(e,t,n){if(!(e=e[t])&&n&&w("missing: "+t),e){if(S.test(e))return e;w("invalid: "+t)}return null},$=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,x=/\/cb=/g,E=/\/\//g;_.m=function(e,t,n,o){return(e=e[0])||w("missing_hint"),"https://apis.google.com"+function(e,t,n,o){e=C(e),N.test(n)||w("invalid_callback"),t=I(t),o=o&&o.length?I(o):null;var i=function(e){return encodeURIComponent(e).replace(/%2C/g,",")};return[encodeURIComponent(e.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",i(e.version),"/m=",i(t),o?"/exm="+i(o):"","/rt=j/sv=1/d=1/ed=1",e.a?"/am="+i(e.a):"",e.c?"/rs="+i(e.c):"",e.f?"/t="+i(e.f):"","/cb=",i(n)].join("")}(e,t,n,o)};var j=decodeURI("%73cript"),k=/^[-+_0-9\/A-Za-z]+={0,2}$/,M=function(e,t){for(var n=[],o=0;o<e.length;++o){var i,s=e[o];if(i=s){e:{for(i=0;i<t.length;i++)if(t[i]===s)break e;i=-1}i=0>i}i&&n.push(s)}return n},P=function(){var t=e.nonce;return void 0!==t?t&&t===String(t)&&t.match(k)?t:e.nonce=null:n.querySelector&&(t=n.querySelector("script[nonce]"))?(t=t.nonce||t.getAttribute("nonce")||"")&&t===String(t)&&t.match(k)?e.nonce=t:e.nonce=null:null},R=function(e){var t=n.createElement(j);t.setAttribute("src",e),null!==(e=P())&&t.setAttribute("nonce",e),t.async="true",(e=n.getElementsByTagName(j)[0])?e.parentNode.insertBefore(t,e):(n.head||n.body||n.documentElement).appendChild(t)},D=function(t,n){var o=n||{};"function"==typeof n&&((o={}).callback=n),function(e,t){var n=t&&t._c;if(n)for(var o=0;o<b.length;o++){var i=b[o][0],s=b[o][1];s&&Object.prototype.hasOwnProperty.call(n,i)&&s(n[i],e,t)}}(t,o),n=t?t.split(":"):[];var i=o.h||function(){var e=l();if(!e)throw Error("Bad hint");return e}(),s=a(e,"ah",c());if(s["::"]&&n.length){t=[];for(var r=null;r=n.shift();){var u=r.split(".");u=s[r]||s[u[1]&&"ns:"+u[0]||""]||i;var p=t.length&&t[t.length-1]||null,d=p;p&&p.hint==u||(d={hint:u,b:[]},t.push(d)),d.b.push(r)}var f=t.length;if(1<f){var h=o.callback;h&&(o.callback=function(){0==--f&&h()})}for(;n=t.shift();)U(n.b,o,n.hint)}else U(n||[],o,i)},U=function(o,i,r){o=function(e){e=e.sort();for(var t=[],n=void 0,o=0;o<e.length;o++){var i=e[o];i!=n&&t.push(i),n=i}return t}(o)||[];var d=i.callback,f=i.config,h=i.timeout,g=i.ontimeout,v=i.onerror,b=void 0;"function"==typeof v&&(b=v);var y=null,T=!1;if(h&&!g||!h&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";v=a(p(r),"r",[]).sort();var S=a(p(r),"L",[]).sort(),N=[].concat(v),A=function(n,o){if(T)return 0;t.clearTimeout(y),S.push.apply(S,C);var i=((u||{}).config||{}).update;if(i?i(f):f&&a(e,"cu",[]).push(f),o){m("me0",n,N);try{!function(e,t,n){L(function(){var n=t===l()?a(u,"_",c()):c();n=a(p(t),"_",n),e(n)},n)}(o,r,b)}finally{m("me1",n,N)}}return 1};0<h&&(y=t.setTimeout(function(){T=!0,g()},h));var C=M(o,S);if(C.length){C=M(o,v);var I=a(e,"CP",[]),O=I.length;if(I[O]=function(t){if(!t)return 0;m("ml1",C,N);var n=function(n){I[O]=null,A(C,t)&&function(t){var n=a(e,"PQ",[]);e.PQ=[];var o=n.length;if(0===o)t();else for(var i=0,s=function(){++i===o&&t()},r=0;r<o;r++)n[r](s)}(function(){d&&d(),n()})},o=function(){var e=I[O+1];e&&e()};0<O&&I[O-1]?I[O]=function(){n(o)}:n(o)},C.length){var k="loaded_"+e.I++;u[k]=function(e){I[O](e),u[k]=null},o=function(e,t,n,o){var i=e.split(";"),s=i.shift(),r=_[s],a=null;return r?a=r(i,t,n,o):w("no hint processor for: "+s),a||w("failed to generate load url"),n=(t=a).match(E),(o=t.match(x))&&1===o.length&&$.test(t)&&n&&1===n.length||w("failed sanity: "+e),a}(r,C,"gapi."+k,v),v.push.apply(v,C),m("ml0",C,N),i.sync||t.___gapisync?function(e){if("loading"!=n.readyState)R(e);else{var t=P(),o="";null!==t&&(o=' nonce="'+t+'"'),n.write("<"+j+' src="'+encodeURI(e)+'"'+o+"></"+j+">")}}(o):R(o)}else I[O](s)}else A(C)&&d&&d()},L=function(t,n){if(e.hee&&0<e.hel)try{return t()}catch(t){n&&n(t),e.hel--,D("debug_error",function(){try{window.___jsl.hefn(t)}catch(e){throw t}})}else try{return t()}catch(e){throw n&&n(e),e}};u.load=function(e,t){return L(function(){return D(e,t)})},f.bs0=window.gapi._bs||(new Date).getTime(),g("bs0"),f.bs1=(new Date).getTime(),g("bs1"),delete window.gapi._bs}.call(void 0),i.load("",{callback:window.gapi_onload,_c:{jsl:{ci:{deviceType:"desktop","oauth-flow":{authUrl:"https://accounts.google.com/o/oauth2/auth",proxyUrl:"https://accounts.google.com/o/oauth2/postmessageRelay",disableOpt:!0,idpIframeUrl:"https://accounts.google.com/o/oauth2/iframe",usegapi:!1},debug:{reportExceptionRate:.05,forceIm:!1,rethrowException:!1,host:"https://apis.google.com"},enableMultilogin:!0,"googleapis.config":{auth:{useFirstPartyAuthV2:!0}},isPlusUser:!0,inline:{css:1},disableRealtimeCallback:!1,drive_share:{skipInitCommand:!0},csi:{rate:.01},client:{cors:!1},isLoggedIn:!0,signInDeprecation:{rate:0},include_granted_scopes:!0,llang:"vi",iframes:{ytsubscribe:{url:"https://www.youtube.com/subscribe_embed?usegapi=1"},plus_share:{params:{url:""},url:":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"},":source:":"3p",playemm:{url:"https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"},partnersbadge:{url:"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"},dataconnector:{url:"https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"},shortlists:{url:""},plus_followers:{params:{url:""},url:":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},post:{params:{url:""},url:":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"},signin:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",methods:["onauth"]},donation:{url:"https://onetoday.google.com/home/donationWidget?usegapi=1"},plusone:{params:{count:"",size:"",url:""},url:":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"},":im_socialhost:":"https://plus.googleapis.com",backdrop:{url:"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"},visibility:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"},additnow:{url:"https://apis.google.com/additnow/additnow.html?usegapi=1",methods:["launchurl"]},":signuphost:":"https://plus.google.com",community:{url:":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},plus:{url:":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},commentcount:{url:":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},zoomableimage:{url:"https://ssl.gstatic.com/microscope/embed/"},appfinder:{url:"https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1"},person:{url:":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},savetodrive:{url:"https://drive.google.com/savetodrivebutton?usegapi=1",methods:["save"]},page:{url:":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},card:{url:":socialhost:/:session_prefix:_/hovercard/card"},youtube:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",methods:["scroll","openwindow"]},plus_circle:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"},rbr_s:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},udc_webconsentflow:{params:{url:""},url:"https://myaccount.google.com/webconsent?usegapi=1"},savetoandroidpay:{url:"https://androidpay.google.com/a/widget/save"},blogger:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",methods:["scroll","openwindow"]},evwidget:{params:{url:""},url:":socialhost:/:session_prefix:_/events/widget?usegapi=1"},surveyoptin:{url:"https://www.google.com/shopping/customerreviews/optin?usegapi=1"},":socialhost:":"https://apis.google.com",hangout:{url:"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},":gplus_url:":"https://plus.google.com",rbr_i:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},share:{url:":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"},comments:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",methods:["scroll","openwindow"]},autocomplete:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/autocomplete"},ratingbadge:{url:"https://www.google.com/shopping/customerreviews/badge?usegapi=1"},appcirclepicker:{url:":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},follow:{url:":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},sharetoclassroom:{url:"https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi=1"},ytshare:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"},family_creation:{params:{url:""},url:"https://families.google.com/webcreation?usegapi=1&usegapi=1"},configurator:{url:":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},savetowallet:{url:"https://androidpay.google.com/a/widget/save"}}},h:"m;/_/scs/apps-static/_/js/k=oz.gapi.vi.J9z6ndYsV7M.O/am=wQ/rt=j/d=1/rs=AGLTcCPCM6y8WtFFze-kj5bTdIDpgkPtyA/m=__features__",u:"https://apis.google.com/js/api.js",hee:!0,fp:"f54531db478cded948b697257d3efa06f8e97252",dpo:!1},fp:"f54531db478cded948b697257d3efa06f8e97252",annotation:["interactivepost","recobar","signin2","autocomplete","profile"],bimodal:["signin","share"]}})},348:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){"use strict";n(350),n(348),n(346),n(344),n(342),n(340);var o=d(n(38));n(179),n(178),n(335),n(333),n(331),n(330),n(328);var i=d(n(109)),s=d(n(307)),r=d(n(306));n(262),n(69),n(253),n(252);var a=d(n(250)),c=d(n(249)),u=d(n(248)),l=d(n(247)),p=d(n(218));function d(e){return e&&e.__esModule?e:{default:e}}window.SockJS=l.default,window.Stomp=p.default,o.default.module("app",[i.default,r.default,"ngMaterial","ngAnimate","toaster","ngResource","ngCookies",a.default]).factory("Intercepter",c.default).config(s.default).config(u.default).run()}});
const info = function(m, {fontSize = 10} = {}){
    console.log(`%c${m}`,`color: #4a4a4a;font-size:${fontSize}pt;`);
};

const log = function(m){
    console.log('%c' + m,'color: #2ecc71;');
};

const warn = function(m){
    console.log('%c' + m,'color: #f39c12;');
};

const error = function(m){
    console.log('%c' + m,'color: #e74c3c;');
};

const mobileCheck = () => {
   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

const openInNewTab = (url) => {
    const w = window.open(url, '_blank');
    if(w.focus){
        w.focus();
    }
}
  
  
const navigateUrlFromGameObject = (id) => {

    if(id === "tent"){
        return openInNewTab("https://tsur.github.io/blog")
    }

    if(id === "campfire"){
        return openInNewTab("https://tidycal.com/zuripabon/15-minute-meeting")
    }

    if(id === "box"){
        return openInNewTab("https://www.npmjs.com/~tsur")
    }

    if(id === "boat"){
        return openInNewTab("https://es.linkedin.com/in/zuripabon")
    }

    if(id === "fox"){
        return openInNewTab("https://github.com/zuripabon")
    }
    
}

const messageFromGameObject = (id) => {

    if(id === "tent"){
        return "wanna read a story?";
    }

    if(id === "campfire"){
        return "want to drink a hot cocoa with me ?";
    }

    if(id === "box"){
        return "my open sourced contributions";
    }

    if(id === "boat"){
        return "navigate my working experience";
    }

    if(id === "fox"){
        return "my spare time ideas and pet-projects";
    }
    
}

const q = (parentSelector, ...q) => document.querySelector(`${parentSelector}${q.reduce((acc, q) => `${acc} ${q}`, '')}`);

let isMessageCardEnabled = false;
let timeId = null;
let latestSelectedGameId;
// Only works for desktop
const handleHoverGameObject = (id, isHoverIn) => {
    const messageParentElement = q('.main .ui .message-desktop');
    const canvas = q('.main canvas');

    isMessageCardEnabled = isHoverIn;

    if(!isHoverIn){
        canvas.style.cursor = "default";
        return messageParentElement.style.display = "none";
    }

    canvas.style.cursor = "pointer";
    const messageElement = q(' .main .ui .message-desktop .message-card');
    messageElement.textContent = messageFromGameObject(id);
}

// Only works for mobile
const handleGameObjectClick = (id) => {
    const messageElement = q(' .main .ui .info .message-card');
    if(timeId){
        clearTimeout(timeId);
    }
    latestSelectedGameId = id;
    messageElement.textContent = messageFromGameObject(id);
    messageElement.style.display = "flex";
    timeId = setTimeout(()=>{
        messageElement.style.display = "none";
        latestSelectedGameId = null;
    }, 3000);

}


function setupUnity(selector, callback) {
    const gameCanvas = q(selector, 'canvas');
    const logoElement = q(selector, '.loading .container .logo');
    const progressBarElement = q(selector, '.loading .container .logo .progress');
    const messageParentElement = q(' .main .ui .message-desktop');

    // const audioElement = q(selector, '.loading .container .clip');

    const buildUrl = "Build";
    const loaderUrl = buildUrl + "/docs.loader.js";
    const config = {
        dataUrl: buildUrl + "/docs.data",
        frameworkUrl: buildUrl + "/docs.framework.js",
        codeUrl: buildUrl + "/docs.wasm",
        // with gzip enabled
        // dataUrl: buildUrl + "/docs.data.gz",
        // frameworkUrl: buildUrl + "/docs.framework.js.gz",
        // codeUrl: buildUrl + "/docs.wasm.gz",
    };

    const isMobile = mobileCheck();

    window.onGameObjectClick = function(id){
        if(!isMobile){
            return navigateUrlFromGameObject(id);
        }
        handleGameObjectClick(id);
    }

    window.onGameObjectHover = function(id, isHoverIn){
        if(isMobile){
            return;
        }
        handleHoverGameObject(id, isHoverIn);
    }

    document.addEventListener('mousemove', function(e){

        if(!isMessageCardEnabled){
            return;
        }

        messageParentElement.style.left = (e.clientX + 3) + 'px';
        messageParentElement.style.top = (e.clientY + 3) + 'px';
        messageParentElement.style.display = "flex";
      });

    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
        createUnityInstance(gameCanvas, config, (progress) => {
            progressBarElement.textContent = (100 * progress).toFixed(0) + "%";
        }).then((unityInstance) => {
            info("Game loaded");
            setTimeout(() => {
                logoElement.style.display = "none";
                toggleCanvasView();
                callback(unityInstance);
            }, 3*1000);
        }).catch((message) => {
          error(message);
        });
    };
    
    document.body.appendChild(script);

}

function resizeCanvas(){
    window.onresize = function(){  toggleCanvasView(); }
};

function toggleCanvasView(){
    const loadingElement = q('.main .loading');
    const toggleOrientationElement = q('.main .loading .container .landscape-loading');
    const uiElement = q('.main .ui');

    if(isLandscapeOrientation()){
        loadingElement.style.display =  "none";
        toggleOrientationElement.style.display = " none";
        loadingElement.style.backgroundColor =  "#black";
        uiElement.style.display = "block";
    }
    else{
        loadingElement.style.display =  "block";
        toggleOrientationElement.style.display = " block";
        loadingElement.style.backgroundColor =  "rgba(219, 170, 170, 0.86)";
        uiElement.style.display = "none";
    }
}
function onStart(selector, unityInstance){
    const messageElement = q('.main .ui .info .message-card');
    resizeCanvas(selector, unityInstance);
    const isMobile = mobileCheck();
    if(!isMobile){
        return;
    }
    messageElement.onclick = function(){
        navigateUrlFromGameObject(latestSelectedGameId);
        latestSelectedGameId = null;
    };
}

function isLandscapeOrientation(){
    return window.innerWidth > window.innerHeight;
}

(function start(selector=".main"){
    info("Hi ;)", {fontSize: 14});

    setupUnity(selector, (unityInstance)=> onStart(selector, unityInstance));
})()

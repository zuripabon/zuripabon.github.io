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
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

const openInNewTab = (url) => window.open(url, '_blank').focus();
  
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
    messageElement.setAttribute('data', id);
    messageElement.textContent = messageFromGameObject(id);
    messageElement.style.display = "flex";
    timeId = setTimeout(()=>{
        messageElement.style.display = "none";
    }, 4000);
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
    messageElement.onclick = function(e){
        const gameObjectId = e.target.getAttribute('data');
        navigateUrlFromGameObject(gameObjectId);
    };
}

function isLandscapeOrientation(){
    return window.innerWidth > window.innerHeight;
}

(function start(selector=".main"){
    info("Hi ;)", {fontSize: 14});

    setupUnity(selector, (unityInstance)=> onStart(selector, unityInstance));
})()

let onGameObjectClick;
let onGameObjectHover;
const info = function(m:string, {bg='', color='white', bold=false, fontSize = 10} = {}){
  console.log(`%c${m}`,`background-color:${bg};color: ${color};font-size:${fontSize}pt;${bold && 'font-weight:bold;'}`);
};

const log = function(m:string){
  console.log('%c' + m,'color: #2ecc71;');
};

const warn = function(m:string){
  console.log('%c' + m,'color: #f39c12;');
};

const error = function(m:string){
  console.log('%c' + m,'color: #e74c3c;');
};

const mobileCheck = () => {
 return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const openInNewTab = (url:string) => {
  const w = window.open(url, '_blank');
  if(w && w.focus){
      w.focus();
  }
}


const navigateUrlFromGameObject = (id:string) => {

  if(id === "tent"){
      return openInNewTab("https://zuripabon.es/blog")
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

const messageFromGameObject = (id:string) => {

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

const q = (parentSelector:string, ...q: (string | undefined)[]) => document.querySelector(`${parentSelector}${q.reduce((acc, q) => `${acc} ${q}`, '')}`);

let isMessageCardEnabled = false;
let timeId: number | null | undefined = null;
let latestSelectedGameId: string | null;

// Only works for desktop
const handleHoverGameObject = (id: string, isHoverIn: boolean) => {
  const messageParentElement = q('.main .ui .message-desktop') as HTMLElement;
  const canvas = q('.main canvas') as HTMLCanvasElement;

  if(!canvas){
    return;
  }

  isMessageCardEnabled = isHoverIn;

  if(!isHoverIn){
      canvas.style.cursor = "default";
      return messageParentElement.style.display = "none";
  }

  canvas.style.cursor = "pointer";
  const messageElement = q(' .main .ui .message-desktop .message-card') as HTMLElement;

  if(messageElement){
    messageElement.textContent = messageFromGameObject(id) || "";
  }
}

// Only works for mobile
const handleGameObjectClick = (id: string) => {
  const messageElement = q(' .main .ui .info .message-card') as HTMLElement;
  if(timeId){
      clearTimeout(timeId);
  }
  latestSelectedGameId = id;
  messageElement.textContent = messageFromGameObject(id) || "";
  messageElement.style.display = "flex";
  timeId = setTimeout(()=>{
      messageElement.style.display = "none";
      latestSelectedGameId = null;
  }, 3000);

}


function setupUnity(selector: string, onProgress:  (progress: number)=> void, callback: { (unityInstance: any): void; (arg0: any): void; }) {
  const gameCanvas = q(selector, 'canvas') as HTMLCanvasElement;
  const messageParentElement = q(' .main .ui .message-desktop') as HTMLElement;

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

  if(typeof window !== 'undefined'){
    onGameObjectClick = function(id: string){
      if(!isMobile){
          return navigateUrlFromGameObject(id);
      }
      handleGameObjectClick(id);
    }

    onGameObjectHover = function(id: any, isHoverIn: any){
        if(isMobile){
            return;
        }
        handleHoverGameObject(id, isHoverIn);
    }
  }
 
  document.addEventListener('mousemove', function(e){

      if(!isMessageCardEnabled || !messageParentElement){
          return;
      }

      messageParentElement.style.left = (e.clientX + 3) + 'px';
      messageParentElement.style.top = (e.clientY + 3) + 'px';
      messageParentElement.style.display = "flex";
    });

  const script = document.createElement("script");
  script.src = loaderUrl;
  script.onload = () => {
      createUnityInstance(gameCanvas, config, (progress: number) => {
        onProgress(100 * progress)
      }).then((unityInstance) => {
          info("Game loaded");
          setTimeout(() => {
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
  const toggleOrientationElement = q('.main .loading .container .landscape-loading') as HTMLElement;
  const uiElement = q('.main .ui') as HTMLElement;

  if(isLandscapeOrientation()){
      toggleOrientationElement.style.display = " none";
      uiElement.style.display = "block";
  }
  else{
      toggleOrientationElement.style.display = " block";
      uiElement.style.display = "none";
  }
}


function onStart(selector:string, unityInstance: any){
    const messageElement = q('.main .ui .info .message-card') as HTMLElement;
    resizeCanvas();
    const isMobile = mobileCheck();
    if(!isMobile){
        return;
    }
    messageElement.onclick = function(){
        navigateUrlFromGameObject(latestSelectedGameId || "");
        latestSelectedGameId = null;
    };
}


function isLandscapeOrientation(){
    return window.innerWidth > window.innerHeight;
}

export default function start(selector=".webgl", onProgress: (progress: number) => void){
    
    info(`I'm using Astro, Svelte and ThreeJs`, {bg: '#543375', fontSize: 14});
    info(`wanna know more? talk to me at reach.zuripabon@gmail.com`, {bg: '#f0baf3', bold: true, color: 'black', fontSize: 10});

    let progress = 0;
    let c = setInterval(()=>{
        progress += 10;
        if(progress >= 100){
            onProgress(100);
            clearInterval(c);
            return;
        }
        onProgress(progress)
        
    }, 300)
    
    // setupUnity(selector, onProgress, (unityInstance: any)=> onStart(selector, unityInstance));
}

declare global {
  interface Window {
    onGameObjectClick: (id:string) => void;
    onGameObjectHover: (id:string, isHoverIn:boolean) => void;
  }
}


const info = function(m:string, {bg='', color='white', bold=false, fontSize = 10} = {}){
  console.log(`%c${m}`,`background-color:${bg};color: ${color};font-size:${fontSize}pt;${bold && 'font-weight:bold;'}`);
};


const error = function(m:string){
  console.log('%c' + m,'color: #e74c3c;');
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

const q = (parentSelector:string, ...q: (string | undefined)[]) => document.querySelector(`${parentSelector}${q.reduce((acc, q) => `${acc} ${q}`, '')}`);

function startUnity(selector: string) {
  const uiElement = q(selector, '.webgl-ui') as HTMLElement;
  const canvas = q(selector, 'canvas') as HTMLElement
  canvas.style.display = "block";
  uiElement.style.display = "block";
}

function setupUnity(selector: string, onProgress:  (progress: number) => void) {
  const gameCanvas = q(selector, 'canvas') as HTMLCanvasElement;

  const buildUrl = "docs/Build";
  const loaderUrl = buildUrl + "/docs.loader.js";
  // const loaderUrl = buildUrl + "/build.loader.js";

  const config = {
      dataUrl: buildUrl + "/docs.data",
      frameworkUrl: buildUrl + "/docs.framework.js",
      codeUrl: buildUrl + "/docs.wasm",
      // dataUrl: buildUrl + "/build.data.gz",
      // frameworkUrl: buildUrl + "/build.framework.js.gz",
      // codeUrl: buildUrl + "/build.wasm.gz",
  };

  const script = document.createElement("script");
  script.src = loaderUrl;
  script.onload = () => {
      createUnityInstance(gameCanvas, config, (progress: number) => {
        onProgress((100 * progress)-1)
      }).then(() => {
          setTimeout(() => {
            onProgress(100)
          }, 3*1000);
      }).catch((message) => {
        error(message);
      });
  };
  
  document.body.appendChild(script);
}

export function loadGame(
  onProgress: (progress: number) => void,
  OnItemHover?: (id:string, state: boolean) => void,
  onItemClick?: (id:string) => void,
){
    
  info(`I'm using Astro, Svelte and ThreeJs`, {bg: '#543375', fontSize: 14});
  info(`wanna know more? talk to me at reach.zuripabon@gmail.com`, {bg: '#f0baf3', bold: true, color: 'black', fontSize: 10});

  setupUnity(".webgl", onProgress);

  if(typeof window === 'undefined'){
    return;
  }

  if(onItemClick){
    window.onGameObjectClick = function(id: string){
      return onItemClick(id);
    }
  }

  if(OnItemHover){
    window.onGameObjectHover = function(id: string, isHoverIn: boolean){
      return OnItemHover(id, isHoverIn);
    }
  }
}

export function startGame(){

  info(`I'm using Astro, Svelte and ThreeJs`, {bg: '#543375', fontSize: 14});
  info(`wanna know more? talk to me at reach.zuripabon@gmail.com`, {bg: '#f0baf3', bold: true, color: 'black', fontSize: 10});

  startUnity(".webgl");
}
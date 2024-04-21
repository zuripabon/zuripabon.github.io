
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


const q = (parentSelector:string, ...q: (string | undefined)[]) => document.querySelector(`${parentSelector}${q.reduce((acc, q) => `${acc} ${q}`, '')}`);

function startUnity(selector: string) {
  const profileCardElement = q(selector, '.profile') as HTMLElement;
  const controlsCardElement = q(selector, '.controls-card') as HTMLElement;
  const menuElement = q(selector, '.navbar') as HTMLElement;
  const canvas = q(selector, 'canvas') as HTMLElement
  canvas.style.display = "block";
  profileCardElement.style.display = "flex";
  controlsCardElement.style.display = "flex";
  menuElement.style.display = "flex";
}

function setupUnity(selector: string, onProgress:  (progress: number) => void) {
  const gameCanvas = q(selector, 'canvas') as HTMLCanvasElement;

  // const prefix = 'docs/';
  // @todo use wWhen building
  const prefix = '';
  const buildUrl = prefix + "Build";
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
          }, 3*1200);
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
    
  info(`I'm using Astro, Svelte and Unity WebGL`, {bg: '#543375', fontSize: 14});
  info(`wanna know more? talk to me at hola@zuripabon.es`, {bg: '#f0baf3', bold: true, color: 'black', fontSize: 10});

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
  startUnity(".webgl");
}
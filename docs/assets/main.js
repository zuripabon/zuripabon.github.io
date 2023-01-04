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

const q = (parentSelector, ...q) => document.querySelector(`${parentSelector}${q.reduce((acc, q) => `${acc} ${q}`, '')}`);

function setupUnity(selector, callback) {
    const gameCanvas = q(selector, 'canvas');
    const logoElement = q(selector, '.logo');
    const progressBarElement = q(selector, '.progress');
    const progressBarFullElement = q(selector, '.progress .full');
    const progressBarEmptyElement = q(selector, '.progress .empty');
    const splashScreenElement = q(selector, '.splash');

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


    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
        createUnityInstance(gameCanvas, config, (progress) => {
            progressBarFullElement.style.width = (100 * progress) + "%";
            progressBarEmptyElement.style.width = (100 * (1 - progress)) + "%";
        }).then((unityInstance) => {
            info("Game loaded");
            
            splashScreenElement.style.display =  "block";
         
            setTimeout(()=>{
                progressBarFullElement.style.width = 93
            },1*1000);
            setTimeout(()=>{
                progressBarFullElement.style.width = 96
            },2*1000);
            setTimeout(() => {
                progressBarFullElement.style.width = 100
                progressBarElement.style.display = "none";
                logoElement.style.display =  "none";
                splashScreenElement.style.display =  "none";
            }, 3*1000);
            callback(unityInstance);
        }).catch((message) => {
          error(message);
        });
    };
    
    document.body.appendChild(script);

}

function resizeCanvas(selector, unityInstance){

    const gameContainer = q(selector);

    const initialDimensions = {
        width: parseInt(gameContainer.style.width, 10), 
        height: parseInt(gameContainer.style.height, 10)
    };

    let gCanvasElement = null;

    if(window.screen){
        screen.orientation.lock('landscape');
    }

};

(function start(selector="#gameContainer"){
    info("Hi ;)", {fontSize: 14});

    setupUnity(selector, (unityInstance)=> resizeCanvas(selector, unityInstance));
})()

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
    const logoElement = q(selector, '.loading .container .logo');
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


    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
        createUnityInstance(gameCanvas, config).then((unityInstance) => {
            info("Game loaded");
            setTimeout(() => {
                // audioElement.remove();
                logoElement.style.display = "none";
                toggleCanvasView();
            }, 3*1000);
            callback(unityInstance);
        }).catch((message) => {
          error(message);
        });
    };
    
    document.body.appendChild(script);

}

function resizeCanvas(selector, unityInstance){
    window.onresize = function(){  toggleCanvasView(); }
};

function toggleCanvasView(){
    const loadingElement = q('.main .loading');
    const toggleOrientationElement = q('.main .loading .container .landscape-loading');

    if(isLandscapeOrientation()){
        loadingElement.style.display =  "none";
        toggleOrientationElement.style.display = " none";
        loadingElement.style.backgroundColor =  "#black";
    }
    else{
        loadingElement.style.display =  "block";
        toggleOrientationElement.style.display = " block";
        loadingElement.style.backgroundColor =  "rgba(199, 57, 57, 0.86)";
    }
}

function isLandscapeOrientation(){
    return window.innerWidth > window.innerHeight;
}

(function start(selector=".main"){
    info("Hi ;)", {fontSize: 14});

    setupUnity(selector, (unityInstance)=> resizeCanvas(selector, unityInstance));
})()

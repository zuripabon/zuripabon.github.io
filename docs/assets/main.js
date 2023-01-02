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
    const loaderUrl = buildUrl + "/build.loader.js";
    const config = {
        dataUrl: buildUrl + "/build.data",
        frameworkUrl: buildUrl + "/build.framework.js",
        codeUrl: buildUrl + "/build.wasm",
        // streamingAssetsUrl: "StreamingAssets",
        // companyName: "DefaultCompany",
        // productName: "AWebGame",
        // productVersion: "1.0.0",
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

function resizeCanvas(selector){

    const gameContainer = q(selector);

    const initialDimensions = {
        width: parseInt(gameContainer.style.width, 10), 
        height: parseInt(gameContainer.style.height, 10)
    };

    let gCanvasElement = null;

    const getCanvasFromMutationsList = (mutationsList) => {
        for (let mutationItem of mutationsList){
            for (let addedNode of mutationItem.addedNodes){
                if (addedNode.id === 'canvas'){
                    warn("canvas found")
                    return addedNode;
                }
            }
        }
        return null;
    }

    const setDimensions = () => {
        gCanvasElement.style.display = 'none';
        var winW = parseInt(window.getComputedStyle(gameContainer).width, 10);
        var winH = parseInt(window.getComputedStyle(gameContainer).height, 10);
        var scale = Math.min(winW / initialDimensions.width, winH / initialDimensions.height);
        gCanvasElement.style.display = '';

        var fitW = Math.round(initialDimensions.width * scale * 100) / 100;
        var fitH = Math.round(initialDimensions.height * scale * 100) / 100;

        if (gCanvasElement) {
            gCanvasElement.setAttribute('width', fitW);
            gCanvasElement.setAttribute('height', fitH);
        }
    }

    const registerCanvasWatcher = () => {
        let debounceTimeout = null;
        const debouncedSetDimensions = () => {
            if (debounceTimeout !== null) {
                clearTimeout(debounceTimeout);
            }
            debounceTimeout = setTimeout(setDimensions, 200);
        }
        window.addEventListener('resize', debouncedSetDimensions, false);
        setDimensions();
    }


    new MutationObserver(function (mutationsList) {
        const canvas = getCanvasFromMutationsList(mutationsList)
        if (canvas){
            gCanvasElement = canvas;
            registerCanvasWatcher();

            new MutationObserver(function (attributesMutation) {
                this.disconnect();
                setTimeout(setDimensions, 1)
            }).observe(canvas, {attributes:true});

            this.disconnect();
        }
    }).observe(gameContainer, {childList:true});

};

(function start(selector="#gameContainer"){
    info("Hi ;)", {fontSize: 14});

    setupUnity(selector, ()=> resizeCanvas(selector));
})()

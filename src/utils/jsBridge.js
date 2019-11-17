export default function (options){
    if(typeof options !=="object"){
        throw new TypeError("jsBridge function param type is invalid")
    }
    if(typeof options.type !== "string"){
        throw new TypeError("jsBridge options.type must be an string")
    }
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify(options))
}
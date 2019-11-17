import jsBridge from './jsBridge'


export function setTitle(title){
    jsBridge({
        type:"setTitle",
        title
    })
}

export function pushNotification(message){
    jsBridge({
        type:"pushNotification",
        message
    })
}

export function openWebView(url){
    jsBridge({
        type:"openWebView",
        url
    })
}
const SPLITTER = '#';
const ZERO_INDEX  = 0;
const ZERO_FLAG = 0;
const ONE_FLAG = 1;
let INITIAL_URL_COUNT = 1;


let squashButton = document.getElementById('squash-button');
squashButton.addEventListener("click",async ()=>{
    let allTabs = await chrome.tabs.query({
        active: false,
        currentWindow: true
    });
    allTabs[allTabs.length] = (await chrome.tabs.query({
        active: true,
        currentWindow: true
    }))[ZERO_INDEX]
    
    // squashing Tabs
    let ids = return_tab_ids(allTabs, ZERO_FLAG)
    chrome.tabs.remove(ids);

})

let squashdiffPoint = document.getElementById('squash-diff-button');
squashdiffPoint.addEventListener("click",async ()=>{
    // squashing logic
    let allTabs = await chrome.tabs.query({
        active: false,
        currentWindow: true
    });
    allTabs[allTabs.length] = (await chrome.tabs.query({
        active: true,
        currentWindow: true
    }))[ZERO_INDEX]
    
    let ids = return_tab_ids(allTabs, ONE_FLAG)
    chrome.tabs.remove(ids);

})

function return_tab_ids(allTabs,flag){
    urlCounter = {};
    removeTabIds = [];
    let tabUrl;
    for(let i = 0; i < allTabs.length; i++){
        if(flag){
            tabUrl = allTabs[i].url.split(SPLITTER)[ZERO_INDEX];
        }
        else{
            tabUrl = allTabs[i].url
        }
        if(urlCounter[tabUrl]){
            removeTabIds.push(allTabs[i].id)
        }
        else urlCounter[tabUrl] = INITIAL_URL_COUNT;
    }

    return removeTabIds
}
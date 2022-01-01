let squashButton = document.getElementById('squash-button');

squashButton.addEventListener("click",async ()=>{
    // squashing logic

    // getting all tabs 
    let allTabs = await chrome.tabs.query({
        active: false,
        currentWindow: true
    });
    let urls = [];
    let ids = [];
    // getting tab ids
    for (let  i = 0; i < allTabs.length ; i ++){
        if (urls.includes(allTabs[i].url)) ids.push(allTabs[i].id)
        else urls.push(allTabs[i].url);
    }
    // squashing Tabs
    let removeTabPromise = chrome.tabs.remove(ids)

})

let squashdiffPoint = document.getElementById('squash-diff-button');
squashdiffPoint.addEventListener("click",async ()=>{
    // squashing logic

    // getting all tabs 
    let allTabs = await chrome.tabs.query({
        active: false,
        currentWindow: true
    });
    let urls = [];
    let ids = [];

    // getting tab ids
    for (let  i = 0; i < allTabs.length ; i ++){
        let tabUrl = allTabs[i].url.split('#')[0];
        
        if (urls.includes(tabUrl)) ids.push(allTabs[i].id)

        else urls.push(tabUrl);
        
    }
    // squashing Tabs
    let removeTabPromise = chrome.tabs.remove(ids)

})

// console.log(Sizzle(".ldTitle a")[0].href)
chrome.extension.sendRequest({redirect: Sizzle(".ldTitle a")[0].href});

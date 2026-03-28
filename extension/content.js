document.addEventListener("copy", async () => {
  const text = await navigator.clipboard.readText();

  chrome.runtime.sendMessage({
    type: "COPY",
    payload: text,
  });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "COPY") {
    chrome.storage.local.set({
      copiedData: message.payload,
    });
  }
});
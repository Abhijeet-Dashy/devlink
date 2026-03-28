document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("copiedData", (data) => {
    document.getElementById("content").value = data.copiedData || "";
  });

  document.getElementById("saveBtn").addEventListener("click", async () => {
    const content = document.getElementById("content").value;

    const token = localStorage.getItem("accessToken"); // later fix

    await fetch("http://localhost:5000/api/v1/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content,
        type: "text",
        folderId: "YOUR_FOLDER_ID",
      }),
    });
  });
});
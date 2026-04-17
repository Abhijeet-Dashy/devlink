document.addEventListener("DOMContentLoaded", async () => {
  const API_URL = "https://devlink-v9e2.onrender.com/api";
  
  // elements
  const loader = document.getElementById("loader");
  const authView = document.getElementById("auth-view");
  const workspaceView = document.getElementById("workspace-view");
  const logoutBtn = document.getElementById("logoutBtn");

  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");
  const authError = document.getElementById("authError");

  const saveForm = document.getElementById("saveForm");
  const folderSelect = document.getElementById("folderSelect");
  const typeSelect = document.getElementById("typeSelect");
  const contentInput = document.getElementById("contentInput");
  const noteInput = document.getElementById("noteInput");
  const saveStatus = document.getElementById("saveStatus");
  const commitBtn = document.getElementById("commitBtn");

  // State
  let globalToken = null;

  // Utilities
  const showView = (view) => {
    loader.classList.add("hidden");
    authView.classList.add("hidden");
    workspaceView.classList.add("hidden");
    if (view === "auth") {
      authView.classList.remove("hidden");
      logoutBtn.classList.add("hidden");
    } else if (view === "workspace") {
      workspaceView.classList.remove("hidden");
      logoutBtn.classList.remove("hidden");
    } else {
      loader.classList.remove("hidden");
      logoutBtn.classList.add("hidden");
    }
  };

  const showStatus = (msg, isError = false) => {
    saveStatus.textContent = msg;
    saveStatus.classList.remove("hidden", "status-success", "status-error");
    saveStatus.classList.add(isError ? "status-error" : "status-success");
    setTimeout(() => saveStatus.classList.add("hidden"), 3000);
  };

  // Initialize
  const initialize = async () => {
    showView("loader");
    const { token } = await chrome.storage.local.get("token");
    if (token) {
      globalToken = token;
      await loadWorkspace();
    } else {
      showView("auth");
    }
  };

  const loadWorkspace = async () => {
    try {
      showView("loader");
      
      // Fetch Folders
      const res = await fetch(`${API_URL}/folders`, {
        headers: { "Authorization": `Bearer ${globalToken}` }
      });
      if (res.status === 401) throw new Error("Unauthorized");
      
      const data = await res.json();
      if (data.success) {
        folderSelect.innerHTML = `<option value="" disabled selected>SELECT A NODE...</option>`;
        data.data.forEach(f => {
          const opt = document.createElement("option");
          opt.value = f._id;
          opt.textContent = f.name;
          folderSelect.appendChild(opt);
        });

        if(data.data.length > 0) folderSelect.value = data.data[0]._id; // default to first

        // Buffer Copied Data
        const { copiedData, copiedType } = await chrome.storage.local.get(["copiedData", "copiedType"]);
        if (copiedData) {
           contentInput.value = copiedData;
           if(copiedType) typeSelect.value = copiedType;
        }

        showView("workspace");
      } else {
         throw new Error("Failed to load");
      }
    } catch (e) {
      console.warn(e);
      await handleLogout();
    }
  };

  const handleLogout = async () => {
    globalToken = null;
    await chrome.storage.local.remove("token");
    showView("auth");
  };

  // Listeners
  logoutBtn.addEventListener("click", handleLogout);

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    authError.classList.add("hidden");
    const submitBtn = loginForm.querySelector("button[type=submit]");
    submitBtn.textContent = "SYNCHRONIZING...";
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput.value, password: passwordInput.value })
      });
      const data = await res.json();
      if (data.success) {
        globalToken = data.data.accessToken;
        await chrome.storage.local.set({ token: globalToken });
        await loadWorkspace();
      } else {
        throw new Error(data.message || "Invalid credentials");
      }
    } catch (error) {
       authError.textContent = error.message;
       authError.classList.remove("hidden");
    } finally {
       submitBtn.textContent = "AUTHENTICATE";
    }
  });

  saveForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    if(!folderSelect.value) {
      showStatus("SELECT DIRECTORY FIRST", true);
      return;
    }

    commitBtn.textContent = "SYNCING...";
    commitBtn.disabled = true;

    try {
      const res = await fetch(`${API_URL}/items`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${globalToken}`
        },
        body: JSON.stringify({
          content: contentInput.value.trim(),
          note: noteInput.value.trim(),
          type: typeSelect.value,
          folderId: folderSelect.value
        })
      });

      const data = await res.json();
      if(data.success) {
        showStatus("PAYLOAD SECURED");
        contentInput.value = "";
        noteInput.value = "";
        await chrome.storage.local.remove(["copiedData", "copiedType"]);
      } else {
        throw new Error(data.message || "Failed to sync");
      }
    } catch (e) {
      console.warn(e);
      showStatus("SYNC FAILURE", true);
    } finally {
      commitBtn.textContent = "COMMIT FRAGMENT";
      commitBtn.disabled = false;
    }
  });

  // Start
  initialize();
});
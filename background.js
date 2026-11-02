const MAGNET_PREFIX = "magnet:?xt=urn:btih:";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "completeMagnet",
    title: "补全磁力链接并复制",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== "completeMagnet") return;

  const selected = (info.selectionText || "").trim();
  if (!selected) return;

  const lower = selected.toLowerCase();
  let result;
  if (lower.startsWith(MAGNET_PREFIX.toLowerCase()) || lower.startsWith("magnet:?")) {
    // 已经是磁力链接，保持原样
    result = selected;
  } else {
    // 补全前缀
    result = MAGNET_PREFIX + selected;
  }

  // 在页面上下文写入剪贴板（比后台写入更可靠）
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: copyToClipboard,
    args: [result]
  });
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const div = document.createElement("div");
    div.textContent = "已复制磁力链接";
    div.style.cssText =
      "position:fixed;top:12px;left:50%;transform:translateX(-50%);" +
      "z-index:2147483647;background:#2B6CB0;color:#fff;padding:8px 14px;" +
      "border-radius:6px;font-size:13px;box-shadow:0 2px 8px rgba(0,0,0,.3);" +
      "font-family:sans-serif;max-width:90vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 1800);
  }).catch((e) => {
    console.error("复制失败", e);
  });
}

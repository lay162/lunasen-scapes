function getCardUrl() {
  const url = new URL(window.location.href);
  url.hash = "";
  url.search = "";
  return url.toString();
}

function openModal(view) {
  const modal = document.getElementById("modal");
  const copyView = document.getElementById("copyView");
  const qrView = document.getElementById("qrView");
  if (!modal || !copyView || !qrView) return;
  modal.classList.add("open");
  copyView.classList.toggle("active", view === "copy");
  qrView.classList.toggle("active", view === "qr");
  if (view === "qr") generateQr();
}

function closeModal() {
  const modal = document.getElementById("modal");
  const copyView = document.getElementById("copyView");
  const qrView = document.getElementById("qrView");
  if (!modal || !copyView || !qrView) return;
  modal.classList.remove("open");
  copyView.classList.remove("active");
  qrView.classList.remove("active");
}

async function copyUrl() {
  const text = getCardUrl();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  const btn = document.getElementById("copyURL");
  if (!btn) return;
  const prev = btn.textContent;
  btn.textContent = "Copied";
  setTimeout(() => {
    btn.textContent = prev;
  }, 1200);
}

function nativeShare() {
  const url = getCardUrl();
  const payload = {
    title: "LUNA SEN-Scapes — Business Card",
    text: "LUNA SEN-Scapes — Business Card",
    url,
  };
  if (navigator.share) {
    navigator.share(payload).catch(() => openModal("copy"));
    return;
  }
  openModal("copy");
}

let qrRenderedFor = null;
function generateQr() {
  const container = document.getElementById("qr");
  if (!container) return;
  const url = getCardUrl();
  if (qrRenderedFor === url) return;
  qrRenderedFor = url;
  container.innerHTML = "";
  new QRCode(container, {
    text: url,
    width: 220,
    height: 220,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M,
  });
}

function getLiveCardData() {
  if (window.SWMDBC && typeof window.SWMDBC.getDefaultCardData === "function") {
    return window.SWMDBC.getDefaultCardData();
  }
  return {
    fullName: "LUNA SEN-Scapes",
    company: "LUNA SEN-Scapes Ltd",
    email: "info@lunasen-scapes.co.uk",
    phone: "+447375996207",
    website: "https://lunasen-scapes.co.uk/",
    cardUrl: getCardUrl(),
    profilePhoto: new URL("luna-logo.png", window.location.href).toString(),
  };
}

function initNfc() {
  const cardData = getLiveCardData();
  if (window.SWMNFCRuntime && typeof window.SWMNFCRuntime.initLiveCard === "function") {
    window.SWMNFCRuntime.initLiveCard(cardData);
  }
}

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    Boolean(window.navigator.standalone)
  );
}

function initInstall() {
  const btn = document.getElementById("installApp");
  const hint = document.getElementById("installHint");
  if (!btn) return;

  if (isStandalone()) {
    btn.hidden = true;
    if (hint) {
      hint.textContent = "This card is on your phone. Open the LUNA SEN-Scapes icon on your home screen to share it.";
    }
    return;
  }

  let deferred = null;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferred = event;
  });
  window.addEventListener("appinstalled", () => {
    btn.hidden = true;
    if (hint) {
      hint.textContent = "This card is on your phone. Open the LUNA SEN-Scapes icon on your home screen to share it.";
    }
  });

  btn.addEventListener("click", async () => {
    if (deferred) {
      await deferred.prompt();
      deferred = null;
      return;
    }
    if (hint) {
      hint.textContent =
        "iPhone: tap Share, then Add to Home Screen. Android Chrome: tap Add to phone, or the menu → Add to Home screen / Install app.";
    }
  });
}

function init() {
  const share = document.getElementById("share");
  const showQR = document.getElementById("showQR");
  const closeBtn = document.getElementById("close");
  const copyBtn = document.getElementById("copyURL");
  const modal = document.getElementById("modal");
  const vcard = document.getElementById("vcard");
  const profileImage = document.getElementById("profileImage");

  if (profileImage) {
    profileImage.addEventListener("error", () => {
      if (profileImage.dataset.fallback) return;
      profileImage.dataset.fallback = "1";
      profileImage.src = "/brand/logo.png";
    });
  }

  if (share) {
    share.addEventListener("click", (e) => {
      e.preventDefault();
      if ("NDEFReader" in window && window.SWMNFCRuntime) {
        window.SWMNFCRuntime.shareCard(getLiveCardData()).catch(() => nativeShare());
        return;
      }
      nativeShare();
    });
  }
  if (showQR) showQR.addEventListener("click", (e) => (e.preventDefault(), openModal("qr")));
  if (closeBtn) closeBtn.addEventListener("click", (e) => (e.preventDefault(), closeModal()));
  if (copyBtn) copyBtn.addEventListener("click", (e) => (e.preventDefault(), copyUrl()));
  if (vcard) {
    vcard.addEventListener("click", () => {
      if (window.SWMNFCRuntime && typeof window.SWMNFCRuntime.logTap === "function") {
        window.SWMNFCRuntime.logTap("tap_save", getLiveCardData());
      }
    });
  }
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  initInstall();
  initNfc();
}

document.addEventListener("DOMContentLoaded", init);

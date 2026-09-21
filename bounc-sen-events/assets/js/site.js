/* Bounc-SEN Events Ltd — site behaviour.
   Vanilla JS, no dependencies, loaded with `defer`. Every feature is optional:
   if the markup it needs is not on the page it simply does nothing. */
(function () {
  "use strict";

  var $ = function (sel, root) {
    return (root || document).querySelector(sel);
  };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  /* ---------------------------------------------------------------- nav -- */
  function initNav() {
    var toggle = $("[data-nav-toggle]");
    var panel = $("#mobile-nav");
    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });

    // Collapse when the viewport grows past the mobile breakpoint.
    var mq = window.matchMedia("(min-width: 62rem)");
    var sync = function () {
      if (mq.matches) {
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    };
    if (mq.addEventListener) {
      mq.addEventListener("change", sync);
    } else {
      mq.addListener(sync);
    }
  }

  /* ------------------------------------------------------------ filters -- */
  function initFilters() {
    var bar = $("[data-filter-bar]");
    var grid = $("[data-product-grid]");
    if (!bar || !grid) return;

    var buttons = $$("[data-filter]", bar);
    var products = $$("[data-category]", grid);
    var empty = $("[data-filter-empty]");
    var count = $("[data-filter-count]");

    function apply(category, push) {
      var shown = 0;
      products.forEach(function (product) {
        var cats = (product.getAttribute("data-category") || "").split(/\s+/);
        var match = category === "all" || cats.indexOf(category) !== -1;
        product.hidden = !match;
        if (match) shown++;
      });

      buttons.forEach(function (button) {
        button.setAttribute(
          "aria-pressed",
          String(button.getAttribute("data-filter") === category)
        );
      });

      if (empty) empty.hidden = shown !== 0;
      if (count) {
        var noun = shown === 1 ? "item" : "items";
        if (category === "all") {
          count.textContent = "Showing all " + shown + " " + noun + ".";
        } else {
          var label = buttons
            .filter(function (b) {
              return b.getAttribute("data-filter") === category;
            })
            .map(function (b) {
              return b.textContent.trim();
            })[0];
          // Items can belong to more than one category — a soft play set is
          // also a set of shapes and mats — so say which filter is applied
          // rather than let the overlap look like a broken filter.
          count.textContent =
            "Showing " + shown + " " + noun + " in " + label + ".";
        }
      }

      if (push) {
        var url = category === "all" ? location.pathname : location.pathname + "#" + category;
        history.replaceState(null, "", url);
      }
    }

    bar.addEventListener("click", function (event) {
      var button = event.target.closest("[data-filter]");
      if (!button) return;
      apply(button.getAttribute("data-filter"), true);
    });

    var initial = (location.hash || "").replace("#", "");
    var known = buttons.map(function (b) {
      return b.getAttribute("data-filter");
    });
    apply(known.indexOf(initial) !== -1 ? initial : "all", false);
  }

  /* ----------------------------------------------------------- lightbox -- */
  function initLightbox() {
    var dialog = $("#lightbox");
    if (!dialog || typeof dialog.showModal !== "function") return;

    var image = $("[data-lightbox-image]", dialog);
    var caption = $("[data-lightbox-caption]", dialog);

    document.addEventListener("click", function (event) {
      var trigger = event.target.closest("[data-lightbox]");
      if (trigger) {
        image.src = trigger.getAttribute("data-lightbox");
        image.alt = trigger.getAttribute("data-lightbox-alt") || "";
        caption.textContent = trigger.getAttribute("data-lightbox-alt") || "";
        dialog.showModal();
        return;
      }
      if (event.target.closest("[data-lightbox-close]")) dialog.close();
    });

    // Click on the backdrop (outside the panel) closes the dialog.
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", function () {
      image.removeAttribute("src");
    });
  }

  /* ---------------------------------------------------------- postcodes -- */
  // North West England has 14 principal postcode areas. Core routes are run
  // directly from Wirral; regional/extended work may be fulfilled with sister
  // company King of the Castles. Every result still asks the team to confirm
  // the exact address, access and travel price before a booking is accepted.
  // Keep these groups in sync with the postcode matrix on areas.html.
  var CORE = ["CH", "L", "CW", "WA"];
  var REGIONAL = ["M", "WN", "SK", "PR", "BL", "OL", "BB", "FY"];
  var EXTENDED = ["LA", "CA"];

  function initPostcode() {
    var form = $("[data-postcode-form]");
    if (!form) return;

    var input = $("input", form);
    var result = $("[data-postcode-result]");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = (input.value || "").trim().toUpperCase().replace(/\s+/g, " ");
      var outward = value.split(" ")[0];
      var letters = (outward.match(/^[A-Z]+/) || [""])[0];

      result.hidden = false;
      result.className = "result";

      if (!letters) {
        result.classList.add("result--warn");
        result.textContent =
          "Pop in the first part of your postcode — for example CH41, L18, WA8 or SK9.";
        return;
      }

      if (CORE.indexOf(letters) !== -1) {
        result.classList.add("result--ok");
        result.textContent =
          "Good news — " + outward +
          " is inside our core Wirral, Merseyside and Cheshire route. " +
          "Send a quote request and we will confirm availability, access and the final delivery price.";
      } else if (REGIONAL.indexOf(letters) !== -1) {
        result.classList.add("result--info");
        result.textContent =
          outward +
          " is in our wider North West partner-delivery area. We may fulfil it with sister company " +
          "King of the Castles; ask for a quote and we will confirm the crew and any travel cost up front.";
      } else if (EXTENDED.indexOf(letters) !== -1) {
        result.classList.add("result--info");
        result.textContent =
          outward +
          " is in the extended North West area. Longer-distance delivery depends on the equipment, " +
          "date and route, so send a quote request and we will confirm it before you commit.";
      } else {
        result.classList.add("result--warn");
        result.textContent =
          "We do not run a regular route to " + outward +
          ". Our sister company King of the Castles also delivers nationwide, so it is still worth " +
          "asking — but delivery is not confirmed until you have a written quote.";
      }
    });
  }

  /* --------------------------------------------------------------- toast -- */
  var toastTimer;
  function showToast(title, text) {
    var toast = $("#toast");
    if (!toast) return;
    $("[data-toast-title]", toast).textContent = title;
    $("[data-toast-text]", toast).textContent = text;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.hidden = true;
    }, 8000);
  }

  /* ---------------------------------------------------------- quote form -- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    // Fallback for local previews and older browsers. The live custom domain
    // will use HTTPS, where the Clipboard API above is available.
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    var copied = document.execCommand("copy");
    field.remove();
    return copied
      ? Promise.resolve()
      : Promise.reject(new Error("Clipboard unavailable"));
  }

  function initQuoteForm() {
    var form = $("[data-quote-form]");
    if (!form) return;

    // Deep link from a product card: hire.html -> contact.html?item=Dinosaur...
    var params = new URLSearchParams(location.search);
    var item = params.get("item");
    var equipment = form.elements.equipment;
    if (item && equipment) {
      equipment.value = item;
      form.scrollIntoView({ block: "start" });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var get = function (key) {
        return String(data.get(key) || "").trim();
      };

      var lines = [
        "Quote request — Bounc-SEN Events Ltd",
        "",
        "Name: " + get("name"),
        "Phone: " + get("phone"),
        "Email: " + (get("email") || "not given"),
        "Event postcode: " + get("postcode").toUpperCase(),
        "Event date: " + (get("date") || "not decided yet"),
        "Venue type: " + (get("venue") || "not given"),
        "Equipment: " + (get("equipment") || "not decided yet"),
        "Guests / ages: " + (get("guests") || "not given"),
        "",
        "Sensory and access needs:",
        get("needs") || "none given",
        "",
        "Message:",
        get("message") || "none given",
      ];

      var facebook = form.getAttribute("data-facebook") || "";
      var facebookWindow = window.open(facebook, "_blank");
      if (facebookWindow) facebookWindow.opener = null;

      copyText(lines.join("\n")).then(
        function () {
          showToast(
            "Quote details copied",
            "Facebook is opening — choose Message, paste these details and send them to Bounc-SEN Events."
          );
        },
        function () {
          showToast(
            "Facebook is opening",
            "Your browser blocked copying. Open Message and copy the form details manually, or call 07830 852 359."
          );
        }
      );
    });
  }

  /* ----------------------------------------------------------- year stamp -- */
  function initYear() {
    $$("[data-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initFilters();
    initLightbox();
    initPostcode();
    initQuoteForm();
    initYear();
  });
})();

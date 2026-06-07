function showNotice(message) {
  const notice = document.querySelector("#notice");
  if (!notice) return;
  notice.hidden = false;
  notice.textContent = message;
}

function storedLabels() {
  try {
    return JSON.parse(localStorage.getItem("meatos-pack-labels") || "[]");
  } catch {
    return [];
  }
}

function saveLabels(labels) {
  localStorage.setItem("meatos-pack-labels", JSON.stringify(labels));
}

function appendLabelToTables(label) {
  document.querySelectorAll("#createdLabels tbody, #packLabelTable tbody").forEach((tbody) => {
    const tr = document.createElement("tr");
    tr.innerHTML = "<td>" + label.barcode + "</td><td>" + label.product + "</td><td>" + label.channel + "</td><td>" + label.weight + " kg</td><td>" + label.useBy + "</td><td>" + label.template + "</td><td>0</td>";
    tbody.prepend(tr);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  storedLabels().forEach(appendLabelToTables);

  const scaleWeight = document.querySelector("#scaleWeight");
  const fulfilWeight = document.querySelector("#fulfilWeight");
  if (scaleWeight && fulfilWeight) {
    scaleWeight.textContent = Number(fulfilWeight.value || 0).toFixed(3) + " kg";
    fulfilWeight.addEventListener("input", () => {
      scaleWeight.textContent = Number(fulfilWeight.value || 0).toFixed(3) + " kg";
    });
  }

  document.querySelector("#printLabel")?.addEventListener("click", () => {
    const labels = storedLabels();
    const next = labels.length + 4;
    const label = {
      barcode: "PL-WHO-" + String(next).padStart(6, "0"),
      product: "Beef Diced",
      channel: "WHOLESALE",
      weight: Number(document.querySelector("#fulfilWeight")?.value || 2.45).toFixed(3),
      useBy: "2026-06-14",
      template: "Wholesale Catchweight"
    };
    labels.push(label);
    saveLabels(labels);
    appendLabelToTables(label);
    showNotice("Printed " + label.barcode + ". pack_label record created, source batch balance reduced, and DN-00124 updated.");
  });

  document.querySelector("#managerOverride")?.addEventListener("click", () => {
    const reason = window.prompt("Manager override reason required");
    showNotice(reason ? "Manager override recorded: " + reason : "Manager override cancelled. A reason is required.");
  });

  document.querySelector("#fastIntake")?.addEventListener("click", () => {
    showNotice("Fast intake created BEEF-FAST-999 with minimum supplier, EC, use-by, origin and received weight details.");
  });

  document.querySelector("#confirmIntake")?.addEventListener("click", () => {
    showNotice("Stock Intake Batch BEEF-NEW-607 created with lite batch balance fields.");
  });

  document.querySelector("#printProductionLabel")?.addEventListener("click", () => {
    const labels = storedLabels();
    const next = labels.length + 4;
    const label = {
      barcode: "PL-PRO-" + String(next).padStart(6, "0"),
      product: "Beef Diced",
      channel: "PRODUCTION",
      weight: Number(document.querySelector("#prodWeight")?.value || 1).toFixed(3),
      useBy: "2026-06-14",
      template: "Production Bulk"
    };
    labels.push(label);
    saveLabels(labels);
    showNotice("Production label " + label.barcode + " printed from output batch and source batches.");
  });

  document.querySelectorAll("[data-reprint]").forEach((button) => {
    button.addEventListener("click", () => {
      const barcode = button.dataset.reprint;
      const countEl = document.querySelector('[data-count-for="' + barcode + '"]');
      const next = Number(countEl?.textContent || 0) + 1;
      if (countEl) countEl.textContent = String(next);
      showNotice(barcode + " reprinted from original pack_label. Same barcode, weight and use-by; reprint_count is now " + next + ".");
    });
  });

  document.querySelector("#saveReconcile")?.addEventListener("click", () => {
    showNotice("Batch adjustment saved and audit_log action STOCK_ADJUSTED recorded.");
  });

  document.querySelectorAll("[data-delivery-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const delivered = button.dataset.deliveryAction === "delivered";
      showNotice(delivered ? "Delivery marked DELIVERED with received-by details." : "Delivery marked FAILED with reason required.");
    });
  });

  document.querySelectorAll("[data-scope]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-scope]").forEach((item) => item.classList.remove("primary"));
      button.classList.add("primary");
      const text = button.dataset.scope === "hq"
        ? "Head office user sees all branches, all orders, invoices and statements."
        : "Branch user sees own branch only, including branch delivery notes and orders.";
      const target = document.querySelector("#scopeText");
      if (target) target.textContent = text;
    });
  });
});

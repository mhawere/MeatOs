const state = {
  role: "admin",
  screen: "Dashboard",
  kioskStep: "login",
  kioskUser: null,
  selectedOrderId: null,
  selectedLineId: null,
  selectedBatchId: null,
  labelWeight: "2.450",
  productionSourceIds: [],
  shopProductId: 1,
  wholesaleScope: "headOffice",
  lastPrintedLabelId: null
};

const mock = {
  users: [
    { id: 1, username: "admin", fullName: "Aisha Khan", role: "Admin", active: true },
    { id: 2, username: "manager", fullName: "Mark Doyle", role: "Manager", active: true },
    { id: 3, username: "operator1", fullName: "Leah Murphy", role: "Operator", active: true },
    { id: 4, username: "driver1", fullName: "Tom Evans", role: "Driver", active: true }
  ],
  categories: [
    { id: "meat", name: "Meat", parentId: null },
    { id: "beef", name: "Beef", parentId: "meat" },
    { id: "chicken", name: "Chicken", parentId: "meat" },
    { id: "lamb", name: "Lamb", parentId: "meat" },
    { id: "fish", name: "Fish", parentId: null }
  ],
  suppliers: [
    { id: 1, name: "Supplier A Meats", ecNumber: "EC-IE-1124", contact: "goodsin@supplier-a.example", openingBalance: 1840, active: true },
    { id: 2, name: "Supplier B Foods", ecNumber: "EC-UK-4477", contact: "orders@supplier-b.example", openingBalance: 920, active: true },
    { id: 3, name: "Fresh Coast Fish", ecNumber: "EC-IE-8821", contact: "sales@freshcoast.example", openingBalance: 610, active: true }
  ],
  products: [
    { id: 1, name: "Beef Diced", categoryId: "beef", attributes: ["Diced", "Fresh"], pricePerKg: 10.9, vat: "0%", valueAdded: false, allergens: "None", weightRange: "0.8-2.5 kg", template: "Wholesale Catchweight" },
    { id: 2, name: "Beef Topside", categoryId: "beef", attributes: ["Whole cut"], pricePerKg: 12.4, vat: "0%", valueAdded: false, allergens: "None", weightRange: "1.5-5.0 kg", template: "Production Bulk" },
    { id: 3, name: "Beef Chuck", categoryId: "beef", attributes: ["Bone-out"], pricePerKg: 9.75, vat: "0%", valueAdded: false, allergens: "None", weightRange: "1.0-4.0 kg", template: "Wholesale Catchweight" },
    { id: 4, name: "Chicken 65 Cut", categoryId: "chicken", attributes: ["65 cut", "Marinated"], pricePerKg: 7.2, vat: "0%", valueAdded: true, allergens: "Mustard, Milk", weightRange: "0.7-1.5 kg", template: "Retail Priced" },
    { id: 5, name: "Chicken Legs Curry Cut", categoryId: "chicken", attributes: ["Curry cut"], pricePerKg: 5.8, vat: "0%", valueAdded: false, allergens: "None", weightRange: "0.8-2.0 kg", template: "Wholesale Catchweight" },
    { id: 6, name: "Lamb Curry Cut", categoryId: "lamb", attributes: ["Curry cut"], pricePerKg: 11.6, vat: "0%", valueAdded: false, allergens: "None", weightRange: "0.8-2.0 kg", template: "Wholesale Catchweight" },
    { id: 7, name: "Fish Steaks", categoryId: "fish", attributes: ["Steaks"], pricePerKg: 13.5, vat: "0%", valueAdded: false, allergens: "Fish", weightRange: "0.5-1.4 kg", template: "Retail Priced" }
  ],
  batches: [
    { id: 101, batchNo: "BEEF-B001", productId: 2, supplierId: 1, supplierBatchRef: "SA-240607-BT", supplierEcNumber: "EC-IE-1124", supplierUseBy: "2026-06-14", origin: "Ireland", receivedKg: 40, usedKg: 16, wasteKg: 2, remainingKg: 22, status: "OPEN", temperature: 2.1 },
    { id: 102, batchNo: "BEEF-B004", productId: 3, supplierId: 2, supplierBatchRef: "SB-240607-BC", supplierEcNumber: "EC-UK-4477", supplierUseBy: "2026-06-15", origin: "United Kingdom", receivedKg: 31, usedKg: 12, wasteKg: 1, remainingKg: 18, status: "OPEN", temperature: 2.4 },
    { id: 103, batchNo: "BEEF-H009", productId: 1, supplierId: 1, supplierBatchRef: "SA-240605-HOLD", supplierEcNumber: "EC-IE-1124", supplierUseBy: "2026-06-11", origin: "Ireland", receivedKg: 20, usedKg: 0, wasteKg: 0, remainingKg: 20, status: "HOLD", temperature: 4.8 },
    { id: 201, batchNo: "CHIK-C017", productId: 4, supplierId: 2, supplierBatchRef: "SB-240607-C65", supplierEcNumber: "EC-UK-4477", supplierUseBy: "2026-06-12", origin: "United Kingdom", receivedKg: 34, usedKg: 10, wasteKg: 0.5, remainingKg: 23.5, status: "OPEN", temperature: 2.7 },
    { id: 202, batchNo: "CHIK-C021", productId: 5, supplierId: 2, supplierBatchRef: "SB-240607-CL", supplierEcNumber: "EC-UK-4477", supplierUseBy: "2026-06-13", origin: "United Kingdom", receivedKg: 45, usedKg: 22, wasteKg: 1, remainingKg: 22, status: "OPEN", temperature: 2.5 },
    { id: 301, batchNo: "LAMB-L014", productId: 6, supplierId: 1, supplierBatchRef: "SA-240606-LC", supplierEcNumber: "EC-IE-1124", supplierUseBy: "2026-06-16", origin: "Ireland", receivedKg: 25, usedKg: 6, wasteKg: 0.5, remainingKg: 18.5, status: "OPEN", temperature: 2.2 },
    { id: 401, batchNo: "FISH-F003", productId: 7, supplierId: 3, supplierBatchRef: "FC-240607-FS", supplierEcNumber: "EC-IE-8821", supplierUseBy: "2026-06-09", origin: "Ireland", receivedKg: 18, usedKg: 4, wasteKg: 0, remainingKg: 14, status: "OPEN", temperature: 1.1 }
  ],
  outputBatches: [
    { id: 501, number: "OUT-BEEF-0001", productId: 1, sourceBatchIds: [101, 102], packagingType: "VACUUM", packDate: "2026-06-07", totalWeight: 18.2, numberOfPacks: 8 },
    { id: 502, number: "OUT-CHIK-0002", productId: 4, sourceBatchIds: [201], packagingType: "MAP", packDate: "2026-06-07", totalWeight: 9.6, numberOfPacks: 10 }
  ],
  customers: [
    { id: 1, name: "ABC Butchers HQ", type: "Wholesale", branch: "Head Office", creditLimit: 6000, balance: 1840, active: true },
    { id: 2, name: "ABC Butchers", type: "Wholesale", branch: "Dublin 7", creditLimit: 6000, balance: 1840, active: true },
    { id: 3, name: "Curry House Central", type: "Wholesale", branch: "Main Kitchen", creditLimit: 3000, balance: 780, active: true },
    { id: 4, name: "Retail Customer", type: "Retail", branch: "Online", creditLimit: 0, balance: 0, active: true }
  ],
  customerPrices: [
    { customerId: 1, productId: 1, pricePerKg: 9.95 },
    { customerId: 1, productId: 5, pricePerKg: 5.35 },
    { customerId: 3, productId: 4, pricePerKg: 6.65 }
  ],
  orders: [
    {
      id: 9001,
      orderNo: "ORD-00124",
      customerId: 2,
      branch: "Dublin 7",
      type: "Wholesale",
      channel: "Wholesale Portal",
      status: "NEW",
      due: "2026-06-07 14:00",
      lines: [
        { id: 9101, productId: 1, qtyKg: 12, packedKg: 0, status: "OPEN", notes: "Diced for stew" }
      ]
    },
    {
      id: 9002,
      orderNo: "ORD-00125",
      customerId: 3,
      branch: "Main Kitchen",
      type: "Wholesale",
      channel: "Phone",
      status: "IN_PROGRESS",
      due: "2026-06-07 16:00",
      lines: [
        { id: 9201, productId: 4, qtyKg: 10, packedKg: 1.8, status: "OPEN", notes: "65 cut, small trays" },
        { id: 9202, productId: 5, qtyKg: 8, packedKg: 0, status: "OPEN", notes: "Curry cut" }
      ]
    },
    {
      id: 9003,
      orderNo: "WEB-00418",
      customerId: 4,
      branch: "Online",
      type: "Retail",
      channel: "Shopfront",
      status: "NEW",
      due: "2026-06-08 10:00",
      lines: [
        { id: 9301, productId: 7, qtyKg: 1, packedKg: 0, status: "OPEN", notes: "Two steaks" },
        { id: 9302, productId: 6, qtyKg: 1.5, packedKg: 0, status: "OPEN", notes: "Curry cut" }
      ]
    }
  ],
  deliveryNotes: [
    { id: 7001, number: "DN-00124", orderId: 9001, status: "OPEN", lines: [] },
    { id: 7002, number: "DN-00125", orderId: 9002, status: "OPEN", lines: [] },
    { id: 7003, number: "DN-00418", orderId: 9003, status: "OPEN", lines: [] }
  ],
  invoices: [
    { id: 8001, number: "INV-00911", customerId: 2, amount: 842.1, due: "2026-06-21", status: "OPEN" },
    { id: 8002, number: "INV-00912", customerId: 3, amount: 316.8, due: "2026-06-20", status: "OPEN" },
    { id: 8003, number: "CRN-00031", customerId: 2, amount: -42.5, due: "2026-06-07", status: "COMPLETED" }
  ],
  labels: [
    { id: 1, outputBatchId: 502, orderLineId: 9201, productId: 4, sourceBatchId: 201, actualWeightKg: 0.92, pricePerKg: 7.2, totalPrice: 6.62, useBy: "2026-06-12", barcodeValue: "PL-RET-000001", template: "Retail Priced", channel: "RETAIL", printedBy: "operator1", printedAt: "2026-06-07 09:18", reprintCount: 0, voided: false },
    { id: 2, outputBatchId: 501, orderLineId: 9101, productId: 1, sourceBatchId: 101, actualWeightKg: 2.45, pricePerKg: null, totalPrice: null, useBy: "2026-06-14", barcodeValue: "PL-WHO-000002", template: "Wholesale Catchweight", channel: "WHOLESALE", printedBy: "operator1", printedAt: "2026-06-07 09:45", reprintCount: 0, voided: false },
    { id: 3, outputBatchId: 501, orderLineId: null, productId: 1, sourceBatchId: 102, actualWeightKg: 1.0, pricePerKg: null, totalPrice: null, useBy: "2026-06-15", barcodeValue: "PL-PRO-000003", template: "Production Bulk", channel: "PRODUCTION", printedBy: "operator1", printedAt: "2026-06-07 10:02", reprintCount: 1, voided: false }
  ],
  audit: [
    { time: "2026-06-07 09:45", user: "operator1", action: "LABEL_PRINTED", entity: "pack_label", note: "PL-WHO-000002 created" },
    { time: "2026-06-07 10:05", user: "manager", action: "STOCK_ADJUSTED", entity: "stock_intake_batch", note: "BEEF-B001 trimming loss 1.000 kg" },
    { time: "2026-06-07 10:20", user: "operator1", action: "LABEL_REPRINTED", entity: "pack_label", note: "PL-PRO-000003 reprint count increased" }
  ],
  drivers: [
    { id: 1, orderId: 9001, deliveryNote: "DN-00124", address: "11 Market Road, Dublin 7", status: "DISPATCHED", receivedBy: "", note: "" },
    { id: 2, orderId: 9002, deliveryNote: "DN-00125", address: "5 Kitchen Lane, Dublin 1", status: "NEW", receivedBy: "", note: "" }
  ],
  labelTemplates: [
    { id: 1, name: "Retail Priced", channel: "RETAIL", size: "80 x 60 mm", elements: "Product, weight, price, use-by, barcode, allergens" },
    { id: 2, name: "Wholesale Catchweight", channel: "WHOLESALE", size: "100 x 75 mm", elements: "Product, weight, use-by, supplier EC, barcode" },
    { id: 3, name: "Production Bulk", channel: "PRODUCTION", size: "100 x 75 mm", elements: "Output batch, source batches, use-by, barcode" }
  ]
};

const roleConfig = {
  admin: {
    label: "Admin UI",
    screens: ["Dashboard", "Users & Roles", "Products", "Categories & Attributes", "Suppliers", "Customers", "Pricing", "Label Templates", "VAT & Settings", "Hardware / Stations", "Audit Log", "Reports"]
  },
  manager: {
    label: "Manager UI",
    screens: ["Dashboard", "Orders", "Production", "Stock Intake", "Batch Balance", "Reconcile Batch", "Customers", "Invoices", "Credit Notes", "Reports", "Audit Log"]
  },
  kiosk: {
    label: "Kiosk / Operations",
    screens: ["Login", "Home", "Add Stock", "Orders", "Production", "Reprint Label", "Pack Labels"]
  },
  driver: {
    label: "Driver UI",
    screens: ["Dashboard", "Today\u2019s Deliveries", "Delivery Detail", "View Delivery Note", "Completed Deliveries", "Failed Deliveries"]
  },
  wholesale: {
    label: "Wholesale Portal",
    screens: ["Dashboard", "Place Order", "Quick Reorder", "My Orders", "Delivery Notes", "Invoices", "Statements", "Branches", "Branch Users", "Account"]
  },
  shopfront: {
    label: "Retail Shopfront",
    screens: ["Home", "Shop", "Product Detail", "Cart", "Checkout", "My Account", "Order History"]
  }
};

const el = {
  roleSwitcher: document.querySelector(".role-switcher"),
  screenNav: document.querySelector("#screenNav"),
  root: document.querySelector("#appRoot"),
  pageTitle: document.querySelector("#pageTitle"),
  pageKicker: document.querySelector("#pageKicker"),
  currentRole: document.querySelector("#currentRole"),
  notice: document.querySelector("#notice"),
  scalePanel: document.querySelector("#scalePanel"),
  scaleWeight: document.querySelector("#scaleWeight")
};

function product(id) {
  return mock.products.find((item) => item.id === Number(id));
}

function supplier(id) {
  return mock.suppliers.find((item) => item.id === Number(id));
}

function customer(id) {
  return mock.customers.find((item) => item.id === Number(id));
}

function order(id) {
  return mock.orders.find((item) => item.id === Number(id));
}

function orderLine(lineId) {
  for (const ord of mock.orders) {
    const line = ord.lines.find((item) => item.id === Number(lineId));
    if (line) return { order: ord, line };
  }
  return null;
}

function categoryName(id) {
  const found = mock.categories.find((item) => item.id === id);
  return found ? found.name : id;
}

function statusBadge(status) {
  return `<span class="status ${status}">${status}</span>`;
}

function money(value) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR" }).format(value);
}

function kg(value) {
  return `${Number(value).toFixed(3)} kg`;
}

function nowStamp() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function table(columns, rows) {
  const head = columns.map((col) => `<th>${col}</th>`).join("");
  const body = rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");
  return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

function metricCards(items) {
  return `<div class="grid cards">${items.map((item) => `
    <article class="card metric">
      <span class="muted">${item.label}</span>
      <strong>${item.value}</strong>
      <span class="small">${item.note}</span>
    </article>
  `).join("")}</div>`;
}

function setNotice(message) {
  if (!message) {
    el.notice.hidden = true;
    el.notice.textContent = "";
    return;
  }
  el.notice.hidden = false;
  el.notice.textContent = message;
}

function switchRole(role) {
  state.role = role;
  state.screen = roleConfig[role].screens[0];
  if (role === "kiosk") state.kioskStep = "login";
  setNotice("");
  render();
}

function switchScreen(screen) {
  state.screen = screen;
  if (state.role === "kiosk") {
    state.kioskStep = screen.toLowerCase().replace(/ /g, "-");
    if (screen === "Login") state.kioskStep = "login";
    if (screen === "Home") state.kioskStep = "home";
  }
  setNotice("");
  render();
}

function render() {
  renderChrome();
  if (state.role === "admin") renderAdmin();
  if (state.role === "manager") renderManager();
  if (state.role === "kiosk") renderKiosk();
  if (state.role === "driver") renderDriver();
  if (state.role === "wholesale") renderWholesale();
  if (state.role === "shopfront") renderShopfront();
}

function renderChrome() {
  el.roleSwitcher.innerHTML = Object.entries(roleConfig).map(([key, value]) => `
    <button class="${state.role === key ? "active" : ""}" data-role="${key}">${value.label.replace(" / Operations", "")}</button>
  `).join("");

  el.roleSwitcher.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => switchRole(button.dataset.role));
  });

  const config = roleConfig[state.role];
  el.currentRole.textContent = config.label;
  el.pageKicker.textContent = config.label;
  el.pageTitle.textContent = state.screen;
  el.scalePanel.hidden = state.role !== "kiosk";
  el.screenNav.innerHTML = config.screens.map((screen) => `
    <button class="${state.screen === screen ? "active" : ""}" data-screen="${screen}">${screen}</button>
  `).join("");
  el.screenNav.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => switchScreen(button.dataset.screen));
  });
}

function renderAdmin() {
  const screen = state.screen;
  if (screen === "Dashboard") {
    el.root.innerHTML = `${metricCards([
      { label: "Today's orders", value: mock.orders.length, note: "Wholesale and retail" },
      { label: "Orders in fulfilment", value: mock.orders.filter((item) => item.status === "IN_PROGRESS").length, note: "On the floor now" },
      { label: "Labels printed today", value: mock.labels.length, note: "Pack label records" },
      { label: "Batches on hold", value: mock.batches.filter((item) => item.status === "HOLD").length, note: "Needs manager review" },
      { label: "Invoices due", value: mock.invoices.filter((item) => item.status === "OPEN").length, note: "Accounts receivable" },
      { label: "Supplier balances", value: money(mock.suppliers.reduce((sum, item) => sum + item.openingBalance, 0)), note: "Opening AP balance" }
    ])}
    <div class="grid two-col" style="margin-top:14px">
      <section class="panel"><h3>Core Traceability Flow</h3><p class="screen-note">Stock Intake Batch to Output Batch to Pack Label to Delivery Note to Invoice. This prototype keeps lite batch balances and avoids warehouse bin logic.</p>${traceabilityFlow()}</section>
      <section class="panel"><h3>Recent Audit Log</h3>${auditList()}</section>
    </div>`;
    return;
  }

  if (screen === "Users & Roles") {
    el.root.innerHTML = `<div class="toolbar"><button class="btn primary">+ User</button><button class="btn">Reset Password</button><button class="btn">Assign Role</button></div>` + table(
      ["Username", "Full Name", "Role", "Active", "Actions"],
      mock.users.map((item) => [item.username, item.fullName, item.role, item.active ? "Yes" : "No", `<button class="btn">Edit</button>`])
    );
    return;
  }

  if (screen === "Products") {
    el.root.innerHTML = `<div class="toolbar"><button class="btn primary">+ Product</button><button class="btn">Import Price List</button></div>` + productTable();
    return;
  }

  if (screen === "Categories & Attributes") {
    el.root.innerHTML = `<div class="grid two-col">
      <section class="panel"><h3>Categories</h3>${table(["Category", "Parent", "Used For"], mock.categories.map((item) => [item.name, item.parentId ? categoryName(item.parentId) : "-", "Tiles, product grouping, batch matching"]))}</section>
      <section class="panel"><h3>Attributes</h3>${table(["Attribute", "Values"], [["Cut type", "Diced, Curry cut, 65 cut, Steaks"], ["Packaging", "MAP, Vacuum, As received"], ["Processing", "Value-added, Fresh, Bone-out"]])}</section>
    </div>`;
    return;
  }

  if (screen === "Suppliers") {
    el.root.innerHTML = supplierManagement();
    return;
  }

  if (screen === "Customers") {
    el.root.innerHTML = table(["Customer", "Type", "Branch", "Credit Limit", "Balance", "Active"], mock.customers.map((item) => [item.name, item.type, item.branch, money(item.creditLimit), money(item.balance), item.active ? "Yes" : "No"]));
    return;
  }

  if (screen === "Pricing") {
    el.root.innerHTML = `<p class="screen-note">Customer prices override default product prices. Wholesale labels can omit price while invoices still use the customer/default price rule.</p>${table(["Customer", "Product", "Customer Price", "Default Price"], mock.customerPrices.map((item) => [customer(item.customerId).name, product(item.productId).name, money(item.pricePerKg), money(product(item.productId).pricePerKg)]))}`;
    return;
  }

  if (screen === "Label Templates") {
    el.root.innerHTML = `<div class="grid two-col">
      <section>${table(["Template", "Channel", "Stock Size", "Elements"], mock.labelTemplates.map((item) => [item.name, item.channel, item.size, item.elements]))}</section>
      <section class="label-preview">${labelPreview(mock.labels[0])}</section>
    </div>`;
    return;
  }

  if (screen === "VAT & Settings") {
    el.root.innerHTML = `<div class="grid two-col">
      <section class="panel"><h3>VAT Bands</h3>${table(["Name", "Rate", "Applied To"], [["Zero Rated", "0%", "Fresh meat and fish"], ["Standard", "23%", "Future prepared goods"], ["Reduced", "13.5%", "Future services"]])}</section>
      <section class="panel"><h3>System Settings</h3>${table(["Setting", "Value"], [["Establishment EC number", "EC-IE-9988"], ["Default label language", "English"], ["Use-by gate", "Required before print"], ["Warehouse bins", "Not used in this prototype"]])}</section>
    </div>`;
    return;
  }

  if (screen === "Hardware / Stations") {
    el.root.innerHTML = `<div class="grid two-col">
      <section class="panel"><h3>Stations</h3>${table(["Station", "Area", "Default Printer"], [["Kiosk 1", "Packing room", "Zebra ZD621"], ["Kiosk 2", "Goods-in", "Zebra GK420"], ["Office", "Accounts", "PDF Preview"]])}</section>
      <section class="panel"><h3>Printers</h3>${table(["Printer", "Type", "Connection", "Default"], [["Zebra ZD621", "Label", "192.168.0.42", "Yes"], ["Office Laser", "A4", "Queue: ACCOUNTS", "No"]])}</section>
    </div>`;
    return;
  }

  if (screen === "Audit Log") {
    el.root.innerHTML = auditTable();
    return;
  }

  renderReports();
}

function renderManager() {
  const screen = state.screen;
  if (screen === "Dashboard") {
    el.root.innerHTML = `${metricCards([
      { label: "New orders", value: mock.orders.filter((item) => item.status === "NEW").length, note: "Awaiting floor action" },
      { label: "Orders being packed", value: mock.orders.filter((item) => item.status === "IN_PROGRESS").length, note: "Live work" },
      { label: "Batches available", value: mock.batches.filter((item) => item.status === "OPEN").length, note: "OPEN only" },
      { label: "Reconciliation needed", value: mock.batches.filter((item) => item.status === "HOLD").length, note: "Held batch review" },
      { label: "Credit warnings", value: "1", note: "Customer near limit" },
      { label: "Dispatches today", value: mock.drivers.length, note: "Assigned routes" }
    ])}<div class="grid two-col" style="margin-top:14px"><section class="panel"><h3>Order Monitor</h3>${orderTable(true)}</section><section class="panel"><h3>Batch Balance Snapshot</h3>${batchBalanceTable()}</section></div>`;
    return;
  }

  if (screen === "Orders") {
    el.root.innerHTML = orderTable(true);
    return;
  }

  if (screen === "Production") {
    el.root.innerHTML = productionSummary();
    return;
  }

  if (screen === "Stock Intake") {
    el.root.innerHTML = stockIntakeOverview();
    return;
  }

  if (screen === "Batch Balance") {
    el.root.innerHTML = `<div class="toolbar"><select><option>All categories</option><option>Beef</option><option>Chicken</option></select><select><option>OPEN</option><option>HOLD</option><option>COMPLETED</option></select><button class="btn">Apply</button></div>${batchBalanceTable()}`;
    return;
  }

  if (screen === "Reconcile Batch") {
    el.root.innerHTML = reconcileForm();
    document.querySelector("#reconcileSave")?.addEventListener("click", saveReconcile);
    return;
  }

  if (screen === "Customers") {
    el.root.innerHTML = table(["Customer", "Branch", "Balance", "Credit Limit", "Status"], mock.customers.filter((item) => item.type === "Wholesale").map((item) => [item.name, item.branch, money(item.balance), money(item.creditLimit), item.balance > item.creditLimit * 0.75 ? statusBadge("HOLD") : statusBadge("OPEN")]));
    return;
  }

  if (screen === "Invoices") {
    el.root.innerHTML = table(["Invoice", "Customer", "Amount", "Due", "Status"], mock.invoices.filter((item) => item.number.startsWith("INV")).map((item) => [item.number, customer(item.customerId).name, money(item.amount), item.due, statusBadge(item.status)]));
    return;
  }

  if (screen === "Credit Notes") {
    el.root.innerHTML = table(["Credit Note", "Customer", "Amount", "Status"], mock.invoices.filter((item) => item.number.startsWith("CRN")).map((item) => [item.number, customer(item.customerId).name, money(item.amount), statusBadge(item.status)]));
    return;
  }

  if (screen === "Audit Log") {
    el.root.innerHTML = auditTable();
    return;
  }

  renderReports();
}

function renderKiosk() {
  if (!state.kioskUser && state.kioskStep !== "login") {
    state.kioskStep = "login";
    state.screen = "Login";
  }

  const stepTitle = {
    login: "Login",
    home: "Home",
    "add-stock": "Add Stock",
    orders: "Orders",
    production: "Production",
    "reprint-label": "Reprint Label",
    "pack-labels": "Pack Labels"
  }[state.kioskStep] || "Home";
  el.pageTitle.textContent = stepTitle;

  if (state.kioskStep === "login") {
    el.root.innerHTML = `<section class="form-panel kiosk-login">
      <h3>Kiosk Login</h3>
      <div class="form-grid">
        <div class="field full"><label>Username</label><select id="kioskUser">${mock.users.filter((item) => ["Operator", "Manager", "Admin"].includes(item.role)).map((item) => `<option value="${item.username}">${item.username} - ${item.fullName}</option>`).join("")}</select></div>
        <div class="field full"><label>Password</label><input id="kioskPassword" type="password" value="demo"></div>
      </div>
      <div class="split-actions"><button id="kioskLoginBtn" class="btn primary">Login</button></div>
    </section>`;
    document.querySelector("#kioskLoginBtn").addEventListener("click", () => {
      state.kioskUser = document.querySelector("#kioskUser").value;
      state.kioskStep = "home";
      state.screen = "Home";
      setNotice(`Logged in as ${state.kioskUser}.`);
      render();
    });
    return;
  }

  if (state.kioskStep === "home") {
    el.root.innerHTML = `<div class="kiosk-shell">
      <div class="kiosk-buttons">
        ${kioskTile("Add Stock", "add-stock")}
        ${kioskTile("Orders", "orders")}
        ${kioskTile("Production", "production")}
        ${kioskTile("Reprint Label", "reprint-label")}
      </div>
      <section class="panel"><h3>Traceability Rules On This Station</h3><p class="screen-note">Labels are blocked until product, source batch, supplier, EC number, supplier batch ref, use-by, actual weight and required origin are present. Reprints reuse the original pack label record.</p></section>
    </div>`;
    bindKioskTiles();
    return;
  }

  if (state.kioskStep === "add-stock") {
    renderAddStock();
    return;
  }

  if (state.kioskStep === "orders") {
    renderKioskOrders();
    return;
  }

  if (state.kioskStep === "production") {
    renderKioskProduction();
    return;
  }

  if (state.kioskStep === "reprint-label") {
    renderReprint();
    return;
  }

  el.root.innerHTML = packLabelTable();
}

function renderDriver() {
  const screen = state.screen;
  if (screen === "Dashboard" || screen === "Today\u2019s Deliveries") {
    el.root.innerHTML = `${metricCards([
      { label: "Assigned today", value: mock.drivers.length, note: "Routes ready" },
      { label: "Delivered", value: mock.drivers.filter((item) => item.status === "DELIVERED").length, note: "Completed" },
      { label: "Failed", value: mock.drivers.filter((item) => item.status === "FAILED").length, note: "Needs office review" }
    ])}<div class="grid cards" style="margin-top:14px">${mock.drivers.map(deliveryCard).join("")}</div>`;
    bindDriverButtons();
    return;
  }

  if (screen === "Delivery Detail" || screen === "View Delivery Note") {
    const delivery = mock.drivers[0];
    const ord = order(delivery.orderId);
    el.root.innerHTML = `<div class="grid two-col"><section class="panel"><h3>${ord.orderNo}</h3>${deliveryCard(delivery)}</section><section class="panel"><h3>${delivery.deliveryNote}</h3>${deliveryNoteTable(ord.id)}</section></div>`;
    bindDriverButtons();
    return;
  }

  if (screen === "Completed Deliveries") {
    el.root.innerHTML = driverStatusList("DELIVERED");
    return;
  }

  el.root.innerHTML = driverStatusList("FAILED");
}

function renderWholesale() {
  const screen = state.screen;
  if (screen === "Dashboard") {
    el.root.innerHTML = `<div class="toolbar"><button class="btn ${state.wholesaleScope === "headOffice" ? "primary" : ""}" data-scope="headOffice">Head office view</button><button class="btn ${state.wholesaleScope === "branch" ? "primary" : ""}" data-scope="branch">Branch view</button></div>
    ${metricCards([
      { label: "Current orders", value: visibleWholesaleOrders().length, note: state.wholesaleScope === "headOffice" ? "All branches" : "Own branch only" },
      { label: "Outstanding balance", value: money(customer(1).balance), note: "HQ-level credit" },
      { label: "Credit limit", value: money(customer(1).creditLimit), note: "Shared by branches" },
      { label: "Latest invoices", value: mock.invoices.filter((item) => item.number.startsWith("INV")).length, note: "Viewable online" }
    ])}`;
    bindWholesaleScope();
    return;
  }

  if (screen === "Place Order") {
    el.root.innerHTML = `<p class="screen-note">Pricing uses customer price where available, otherwise default product price.</p>${table(["Product", "Cut / Variant", "Price", "Qty", "Notes", "Add"], mock.products.map((item) => [item.name, item.attributes.join(", "), money(priceForCustomer(1, item.id)), `<input value="1.000" aria-label="Qty for ${item.name}">`, `<input value="${item.categoryId === "chicken" ? "Curry / 65 cut" : ""}" aria-label="Notes">`, `<button class="btn">Add</button>`]))}`;
    return;
  }

  if (screen === "Quick Reorder") {
    el.root.innerHTML = table(["Previous Order", "Branch", "Lines", "Action"], visibleWholesaleOrders().map((item) => [item.orderNo, item.branch, item.lines.map((line) => product(line.productId).name).join(", "), `<button class="btn primary">Reorder</button>`]));
    return;
  }

  if (screen === "My Orders") {
    el.root.innerHTML = orderTable(false, visibleWholesaleOrders());
    return;
  }

  if (screen === "Delivery Notes") {
    el.root.innerHTML = table(["Delivery Note", "Order", "Status", "Lines"], mock.deliveryNotes.filter((dn) => visibleWholesaleOrders().some((ord) => ord.id === dn.orderId)).map((dn) => [dn.number, order(dn.orderId).orderNo, statusBadge(dn.status), dn.lines.length || "Pending"]));
    return;
  }

  if (screen === "Invoices") {
    el.root.innerHTML = table(["Invoice", "Customer", "Amount", "Due", "Status"], mock.invoices.filter((item) => item.number.startsWith("INV")).map((item) => [item.number, customer(item.customerId).name, money(item.amount), item.due, statusBadge(item.status)]));
    return;
  }

  if (screen === "Statements") {
    el.root.innerHTML = `<section class="panel"><h3>June Statement</h3>${table(["Date", "Document", "Debit", "Credit", "Balance"], [["2026-06-01", "Opening Balance", money(1200), "-", money(1200)], ["2026-06-07", "INV-00911", money(842.1), "-", money(2042.1)], ["2026-06-07", "CRN-00031", "-", money(42.5), money(1999.6)]])}</section>`;
    return;
  }

  if (screen === "Branches") {
    const rows = state.wholesaleScope === "headOffice" ? mock.customers.filter((item) => item.type === "Wholesale") : mock.customers.filter((item) => item.id === 2);
    el.root.innerHTML = table(["Branch", "Account", "Address", "Visible To"], rows.map((item) => [item.branch, item.name, item.branch === "Dublin 7" ? "11 Market Road, Dublin 7" : "Main office", state.wholesaleScope === "headOffice" ? "Head office" : "Branch user"]));
    return;
  }

  if (screen === "Branch Users") {
    el.root.innerHTML = table(["User", "Scope", "Branch", "Can Order"], [["hq.orders", "Head office", "All branches", "Yes"], ["dublin7.user", "Branch", "Dublin 7", "Yes"]]);
    return;
  }

  el.root.innerHTML = `<section class="panel"><h3>Account</h3>${table(["Account", "Value"], [["Credit limit", money(customer(1).creditLimit)], ["Outstanding balance", money(customer(1).balance)], ["Pricing rule", "Customer price first, default product price fallback"], ["Branch visibility", state.wholesaleScope === "headOffice" ? "All branches" : "Own branch only"]])}</section>`;
}

function renderShopfront() {
  const screen = state.screen;
  if (screen === "Home") {
    el.root.innerHTML = `<section class="panel"><h3>Fresh Meat Shop</h3><p class="screen-note">Retail shopfront prototype with product photos, catchweight messaging, cut options and account/order history screens.</p><button class="btn primary" id="shopNow">Shop Now</button></section><div class="shop-grid" style="margin-top:14px">${mock.products.slice(0, 4).map(shopProductCard).join("")}</div>`;
    document.querySelector("#shopNow").addEventListener("click", () => switchScreen("Shop"));
    bindShopCards();
    return;
  }

  if (screen === "Shop") {
    el.root.innerHTML = `<div class="shop-grid">${mock.products.map(shopProductCard).join("")}</div>`;
    bindShopCards();
    return;
  }

  if (screen === "Product Detail") {
    const item = product(state.shopProductId);
    el.root.innerHTML = `<div class="grid two-col">
      <section class="panel">
        <div class="photo-placeholder">Product photo</div>
        <h3>${item.name}</h3>
        <p><strong>${money(item.pricePerKg)} per kg</strong></p>
        <p class="muted">Approximate weight range: ${item.weightRange}</p>
        <div class="pill-list">${item.attributes.map((attr) => `<span class="pill">${attr}</span>`).join("")}</div>
        <p><strong>Allergens:</strong> ${item.valueAdded ? item.allergens : "None declared"}</p>
        <p class="catchweight">Final price may vary slightly because fresh meat is weighed after packing. You will only be charged for the actual packed weight.</p>
        <div class="split-actions"><button class="btn primary">Add to Cart</button><button class="btn">Choose Cut</button></div>
      </section>
      <section class="panel"><h3>Cut Options</h3>${table(["Option", "Available"], [["Curry cut", "Yes"], ["Diced", "Yes"], ["Tray packed", "Yes"], ["Vacuum packed", "Selected at checkout"]])}</section>
    </div>`;
    return;
  }

  if (screen === "Cart") {
    el.root.innerHTML = `<section class="panel"><h3>Cart</h3>${table(["Product", "Approx Weight", "Guide Price"], [["Beef Diced", "1.500 kg", money(1.5 * product(1).pricePerKg)], ["Fish Steaks", "0.800 kg", money(0.8 * product(7).pricePerKg)]])}<p class="catchweight">Final price may vary slightly because fresh meat is weighed after packing. You will only be charged for the actual packed weight.</p></section>`;
    return;
  }

  if (screen === "Checkout") {
    el.root.innerHTML = `<section class="form-panel"><h3>Checkout</h3><div class="form-grid"><div class="field"><label>Name</label><input value="Retail Customer"></div><div class="field"><label>Collection / Delivery</label><select><option>Collect in store</option><option>Local delivery</option></select></div><div class="field full"><label>Cut notes</label><textarea>Pack separately where possible.</textarea></div></div><div class="split-actions"><button class="btn primary">Place Order</button></div></section>`;
    return;
  }

  if (screen === "My Account") {
    el.root.innerHTML = `<section class="panel"><h3>My Account</h3>${table(["Field", "Value"], [["Name", "Retail Customer"], ["Email", "customer@example.com"], ["Payment", "Authorise/capture can be added later"], ["Default fulfilment", "Collect in store"]])}</section>`;
    return;
  }

  el.root.innerHTML = table(["Order", "Date", "Status", "Items"], mock.orders.filter((item) => item.type === "Retail").map((item) => [item.orderNo, item.due.slice(0, 10), statusBadge(item.status), item.lines.map((line) => product(line.productId).name).join(", ")]));
}

function traceabilityFlow() {
  return `<div class="grid cards">
    ${["Stock Intake Batch", "Output Batch", "Pack Label", "Delivery Note", "Invoice", "Customer"].map((item) => `<div class="card"><strong>${item}</strong></div>`).join("")}
  </div>`;
}

function productTable() {
  return table(
    ["Product", "Category", "Attributes", "Price/kg", "VAT", "Value Added", "Label Template", "Active"],
    mock.products.map((item) => [item.name, categoryName(item.categoryId), item.attributes.join(", "), money(item.pricePerKg), item.vat, item.valueAdded ? "Yes" : "No", item.template, "Yes"])
  );
}

function supplierManagement() {
  return `<div class="toolbar"><button class="btn primary">+ Supplier</button><button class="btn">Barcode Mappings</button></div>` + table(
    ["Supplier", "EC No.", "Contact", "Opening Balance", "Active", "Actions"],
    mock.suppliers.map((item) => [item.name, item.ecNumber, item.contact, money(item.openingBalance), item.active ? "Yes" : "No", `<button class="btn">Edit</button>`])
  );
}

function orderTable(managerActions = false, list = mock.orders) {
  return table(
    ["Order No.", "Customer", "Branch", "Type", "Channel", "Status", "Due", "Action"],
    list.map((item) => [
      item.orderNo,
      customer(item.customerId).name,
      item.branch,
      item.type,
      item.channel,
      statusBadge(item.status),
      item.due,
      managerActions ? `<button class="btn">Open</button> <button class="btn warning">Override</button>` : `<button class="btn">View</button>`
    ])
  );
}

function batchBalanceTable() {
  return table(
    ["Batch", "Product", "Supplier", "Use-by", "Received kg", "Used kg", "Waste kg", "Remaining kg", "Status"],
    mock.batches.map((item) => [
      item.batchNo,
      product(item.productId).name,
      supplier(item.supplierId).name,
      item.supplierUseBy,
      kg(item.receivedKg),
      kg(item.usedKg),
      kg(item.wasteKg),
      kg(item.remainingKg),
      statusBadge(item.status)
    ])
  );
}

function productionSummary() {
  return `<div class="grid two-col">
    <section class="panel"><h3>Output Batches</h3>${table(["Output Batch", "Product", "Sources", "Packs", "Total Weight"], mock.outputBatches.map((item) => [item.number, product(item.productId).name, item.sourceBatchIds.map((id) => mock.batches.find((batch) => batch.id === id).batchNo).join(", "), item.numberOfPacks, kg(item.totalWeight)]))}</section>
    <section class="panel"><h3>Production Rules</h3><p class="screen-note">Output Batch is the bridge from raw material to finished packed product. Source batches are linked through output_batch_source and each tray label creates a pack_label record.</p></section>
  </div>`;
}

function stockIntakeOverview() {
  return table(["Batch", "Product", "Supplier Batch Ref", "EC No.", "Origin", "Temperature", "Balance"], mock.batches.map((item) => [item.batchNo, product(item.productId).name, item.supplierBatchRef, item.supplierEcNumber, item.origin, `${item.temperature.toFixed(1)} C`, `${kg(item.remainingKg)} remaining`]));
}

function reconcileForm() {
  const batch = mock.batches[0];
  return `<section class="form-panel">
    <h3>Reconcile Batch</h3>
    <div class="form-grid">
      <div class="field"><label>Batch</label><select id="reconcileBatch">${mock.batches.map((item) => `<option value="${item.id}">${item.batchNo} - ${product(item.productId).name}</option>`).join("")}</select></div>
      <div class="field"><label>System remaining kg</label><input value="${batch.remainingKg.toFixed(3)}" readonly></div>
      <div class="field"><label>Physical counted kg</label><input id="physicalKg" value="21.000"></div>
      <div class="field"><label>Reason</label><select id="reconcileReason"><option>TRIMMING_LOSS</option><option>WASTE</option><option>SHORT_DELIVERY</option><option>CORRECTION</option><option>PRODUCTION_DIFF</option></select></div>
      <div class="field full"><label>Note</label><textarea id="reconcileNote">End-of-day floor count.</textarea></div>
    </div>
    <div class="split-actions"><button id="reconcileSave" class="btn primary">Save Adjustment</button></div>
  </section>`;
}

function saveReconcile() {
  const batchId = Number(document.querySelector("#reconcileBatch").value);
  const physicalKg = Number(document.querySelector("#physicalKg").value);
  const batch = mock.batches.find((item) => item.id === batchId);
  const adjustment = physicalKg - batch.remainingKg;
  batch.remainingKg = physicalKg;
  batch.usedKg = Math.max(0, batch.receivedKg - batch.wasteKg - batch.remainingKg);
  mock.audit.unshift({ time: nowStamp(), user: "manager", action: "STOCK_ADJUSTED", entity: "stock_intake_batch", note: `${batch.batchNo} ${adjustment.toFixed(3)} kg ${document.querySelector("#reconcileReason").value}` });
  setNotice(`Batch ${batch.batchNo} reconciled. Adjustment ${adjustment.toFixed(3)} kg recorded to audit log.`);
  render();
}

function auditList() {
  return `<div class="stack">${mock.audit.slice(0, 4).map((item) => `<div class="card"><strong>${item.action}</strong><p class="small">${item.time} by ${item.user}</p><p>${item.note}</p></div>`).join("")}</div>`;
}

function auditTable() {
  return table(["Time", "User", "Action", "Entity", "Note"], mock.audit.map((item) => [item.time, item.user, item.action, item.entity, item.note]));
}

function renderReports() {
  el.root.innerHTML = `<div class="grid three-col">
    <section class="panel"><h3>Batch / Recall Report</h3><p class="screen-note">Search by supplier batch, intake batch, output batch, label barcode, product or date range.</p>${table(["Back", "Forward"], [["Supplier, EC, supplier batch, use-by, origin", "Output batch, pack labels, orders, delivery notes, invoices, customers"]])}</section>
    <section class="panel"><h3>Stock Intake Report</h3>${stockIntakeOverview()}</section>
    <section class="panel"><h3>Temperature Log Register</h3>${table(["Batch", "Supplier", "Temperature"], mock.batches.map((item) => [item.batchNo, supplier(item.supplierId).name, `${item.temperature.toFixed(1)} C`]))}</section>
  </div>`;
}

function kioskTile(label, step) {
  return `<button class="kiosk-tile" data-step="${step}">${label}</button>`;
}

function bindKioskTiles() {
  document.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.kioskStep = button.dataset.step;
      state.screen = roleConfig.kiosk.screens.find((screen) => screen.toLowerCase().replace(/ /g, "-") === state.kioskStep) || "Home";
      render();
    });
  });
}

function renderAddStock() {
  el.root.innerHTML = `<div class="grid two-col">
    <section class="form-panel">
      <h3>Add Stock</h3>
      <div class="form-grid">
        <div class="field full"><label>Scan supplier barcode or select product</label><input id="intakeScan" value="SA-240607-BT"></div>
        <div class="field"><label>Product</label><select id="intakeProduct">${mock.products.map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}</select></div>
        <div class="field"><label>Supplier</label><select id="intakeSupplier">${mock.suppliers.map((item) => `<option value="${item.id}">${item.name}</option>`).join("")}</select></div>
        <div class="field"><label>Supplier batch ref</label><input id="intakeRef" value="NEW-BOX-607"></div>
        <div class="field"><label>EC number</label><input id="intakeEc" value="EC-IE-1124"></div>
        <div class="field"><label>Supplier use-by</label><input id="intakeUseBy" type="date" value="2026-06-17"></div>
        <div class="field"><label>Origin</label><input id="intakeOrigin" value="Ireland"></div>
        <div class="field"><label>Temperature</label><input id="intakeTemp" value="2.3"></div>
        <div class="field"><label>Received kg</label><input id="intakeKg" value="18.000"></div>
        <div class="field"><label>Invoice number</label><input id="intakeInvoice" value="SUP-INV-607"></div>
      </div>
      <div class="split-actions"><button id="confirmIntake" class="btn primary">Confirm Stock Intake Batch</button><button class="btn">Use Scale Weight</button></div>
    </section>
    <section class="panel"><h3>Current Intake Batches</h3>${batchBalanceTable()}</section>
  </div>`;
  document.querySelector("#confirmIntake").addEventListener("click", createIntakeFromForm);
}

function createIntakeFromForm() {
  const supplierId = Number(document.querySelector("#intakeSupplier").value);
  const received = Number(document.querySelector("#intakeKg").value);
  const nextId = Math.max(...mock.batches.map((item) => item.id)) + 1;
  const prod = product(document.querySelector("#intakeProduct").value);
  const newBatch = {
    id: nextId,
    batchNo: `${prod.categoryId.toUpperCase()}-${String(nextId).slice(-3)}`,
    productId: prod.id,
    supplierId,
    supplierBatchRef: document.querySelector("#intakeRef").value,
    supplierEcNumber: document.querySelector("#intakeEc").value,
    supplierUseBy: document.querySelector("#intakeUseBy").value,
    origin: document.querySelector("#intakeOrigin").value,
    receivedKg: received,
    usedKg: 0,
    wasteKg: 0,
    remainingKg: received,
    status: "OPEN",
    temperature: Number(document.querySelector("#intakeTemp").value)
  };
  mock.batches.unshift(newBatch);
  mock.audit.unshift({ time: nowStamp(), user: state.kioskUser, action: "STOCK_INTAKE_CREATED", entity: "stock_intake_batch", note: `${newBatch.batchNo} created from kiosk Add Stock` });
  setNotice(`Stock Intake Batch ${newBatch.batchNo} created with ${kg(received)} remaining.`);
  renderAddStock();
}

function renderKioskOrders() {
  const selectedOrder = order(state.selectedOrderId) || mock.orders[0];
  state.selectedOrderId = selectedOrder.id;
  const selectedLine = selectedOrder.lines.find((item) => item.id === state.selectedLineId) || selectedOrder.lines[0];
  state.selectedLineId = selectedLine.id;
  const matchingBatches = categoryMatchedBatches(selectedLine.productId);

  el.root.innerHTML = `<div class="kiosk-flow">
    <section class="stack">
      <section class="panel">
        <h3>Open Order Queue</h3>
        <div class="order-lines">${mock.orders.map((item) => `<button class="touch-row ${item.id === selectedOrder.id ? "active" : ""}" data-order="${item.id}"><span><strong>${item.orderNo}</strong>${customer(item.customerId).name} - ${item.lines.length} line(s)</span>${statusBadge(item.status)}</button>`).join("")}</div>
      </section>
      <section class="panel">
        <h3>Tap Product Line</h3>
        <div class="order-lines">${selectedOrder.lines.map((line) => `<button class="touch-row ${line.id === selectedLine.id ? "active" : ""}" data-line="${line.id}"><span><strong>${product(line.productId).name}</strong>Required ${kg(line.qtyKg)} - Packed ${kg(line.packedKg)}</span>${statusBadge(line.status)}</button>`).join("")}</div>
      </section>
      <section class="panel">
        <h3>Matching OPEN Batches Only</h3>
        <p class="screen-note">For ${product(selectedLine.productId).name}, the list is filtered to ${categoryName(product(selectedLine.productId).categoryId)} source batches. Other categories are hidden.</p>
        <div class="batch-list">${matchingBatches.map((batch) => batchButton(batch)).join("") || `<div class="empty">No matching OPEN batches found.</div>`}</div>
        <div class="split-actions"><button id="confirmBatch" class="btn primary" ${state.selectedBatchId ? "" : "disabled"}>Confirm Batch</button><button id="managerOverride" class="btn warning">Manager Override</button><button id="fastIntake" class="btn">Fast Intake</button></div>
      </section>
    </section>
    <aside class="panel active-order">
      <h3>Active Order</h3>
      <p><strong>${selectedOrder.orderNo}</strong><br>${customer(selectedOrder.customerId).name}<br>${selectedOrder.branch}</p>
      <p><strong>Selected line:</strong><br>${product(selectedLine.productId).name}</p>
      ${labelWorkPanel(selectedOrder, selectedLine)}
    </aside>
  </div>`;

  document.querySelectorAll("[data-order]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedOrderId = Number(button.dataset.order);
      state.selectedLineId = order(state.selectedOrderId).lines[0].id;
      state.selectedBatchId = null;
      renderKioskOrders();
    });
  });
  document.querySelectorAll("[data-line]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedLineId = Number(button.dataset.line);
      state.selectedBatchId = null;
      renderKioskOrders();
    });
  });
  document.querySelectorAll("[data-batch]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedBatchId = Number(button.dataset.batch);
      renderKioskOrders();
    });
  });
  document.querySelector("#confirmBatch")?.addEventListener("click", () => setNotice(`Batch ${mock.batches.find((item) => item.id === state.selectedBatchId).batchNo} confirmed physically on the box.`));
  document.querySelector("#managerOverride")?.addEventListener("click", managerOverride);
  document.querySelector("#fastIntake")?.addEventListener("click", fastIntakeForLine);
  document.querySelector("#printLabel")?.addEventListener("click", () => printFulfilmentLabel(selectedOrder, selectedLine));
  document.querySelector("#weightInput")?.addEventListener("input", (event) => {
    state.labelWeight = event.target.value;
    el.scaleWeight.textContent = `${Number(state.labelWeight || 0).toFixed(3)} kg`;
  });
}

function categoryMatchedBatches(productId) {
  const selectedProduct = product(productId);
  return mock.batches.filter((batch) => {
    const batchProduct = product(batch.productId);
    return batch.status === "OPEN" && batchProduct.categoryId === selectedProduct.categoryId;
  });
}

function batchButton(batch) {
  return `<button class="batch-row ${state.selectedBatchId === batch.id ? "active" : ""}" data-batch="${batch.id}">
    <strong>${batch.batchNo} - ${product(batch.productId).name}</strong>
    ${supplier(batch.supplierId).name} | Use-by ${batch.supplierUseBy} | ${kg(batch.remainingKg)} remaining | ${batch.origin}
  </button>`;
}

function labelWorkPanel(selectedOrder, selectedLine) {
  const batch = mock.batches.find((item) => item.id === state.selectedBatchId);
  const draft = batch ? buildDraftLabel(selectedOrder, selectedLine, batch) : null;
  return `<div class="stack">
    <div class="field"><label>Actual weight kg</label><input id="weightInput" value="${state.labelWeight}"></div>
    <div class="label-preview">${draft ? labelPreview(draft) : `<h3>Label Preview</h3><p class="muted">Select a matching OPEN source batch to preview and print.</p>`}</div>
    <button id="printLabel" class="btn success" ${draft ? "" : "disabled"}>Print Label</button>
    <p class="small">Print gate checks product, source batch, supplier, supplier batch ref, EC number, use-by, actual weight and origin.</p>
  </div>`;
}

function buildDraftLabel(selectedOrder, selectedLine, batch) {
  const item = product(selectedLine.productId);
  const channel = selectedOrder.type === "Retail" ? "RETAIL" : "WHOLESALE";
  const price = channel === "RETAIL" ? item.pricePerKg : null;
  return {
    id: "DRAFT",
    outputBatchId: null,
    orderLineId: selectedLine.id,
    productId: item.id,
    sourceBatchId: batch.id,
    actualWeightKg: Number(state.labelWeight),
    pricePerKg: price,
    totalPrice: price ? Number(state.labelWeight) * price : null,
    useBy: batch.supplierUseBy,
    barcodeValue: "Generated at print",
    template: channel === "RETAIL" ? "Retail Priced" : "Wholesale Catchweight",
    channel,
    printedBy: state.kioskUser,
    printedAt: "Generated at print",
    reprintCount: 0,
    voided: false
  };
}

function validateDraftLabel(label) {
  const batch = mock.batches.find((item) => item.id === label.sourceBatchId);
  const missing = [];
  if (!label.productId) missing.push("product");
  if (!batch) missing.push("source batch");
  if (!batch?.supplierId) missing.push("supplier");
  if (!batch?.supplierBatchRef) missing.push("supplier batch ref");
  if (!batch?.supplierEcNumber) missing.push("EC number");
  if (!label.useBy) missing.push("use-by date");
  if (!Number(label.actualWeightKg)) missing.push("actual weight");
  if (!batch?.origin) missing.push("origin");
  return missing;
}

function printFulfilmentLabel(selectedOrder, selectedLine) {
  const batch = mock.batches.find((item) => item.id === state.selectedBatchId);
  const draft = buildDraftLabel(selectedOrder, selectedLine, batch);
  const missing = validateDraftLabel(draft);
  if (missing.length) {
    setNotice(`Label blocked. Missing: ${missing.join(", ")}.`);
    return;
  }

  const output = {
    id: Math.max(...mock.outputBatches.map((item) => item.id)) + 1,
    number: `OUT-${product(selectedLine.productId).categoryId.toUpperCase()}-${String(mock.outputBatches.length + 1).padStart(4, "0")}`,
    productId: selectedLine.productId,
    sourceBatchIds: [batch.id],
    packagingType: selectedOrder.type === "Retail" ? "MAP" : "VACUUM",
    packDate: "2026-06-07",
    totalWeight: Number(state.labelWeight),
    numberOfPacks: 1
  };
  mock.outputBatches.push(output);

  const nextId = Math.max(...mock.labels.map((item) => item.id)) + 1;
  const barcode = `PL-${draft.channel.slice(0, 3)}-${String(nextId).padStart(6, "0")}`;
  const label = { ...draft, id: nextId, outputBatchId: output.id, barcodeValue: barcode, printedAt: nowStamp() };
  mock.labels.unshift(label);
  state.lastPrintedLabelId = label.id;

  const weight = Number(label.actualWeightKg);
  selectedLine.packedKg = Number((selectedLine.packedKg + weight).toFixed(3));
  selectedOrder.status = "IN_PROGRESS";
  batch.usedKg = Number((batch.usedKg + weight).toFixed(3));
  batch.remainingKg = Number(Math.max(0, batch.remainingKg - weight).toFixed(3));

  const note = mock.deliveryNotes.find((item) => item.orderId === selectedOrder.id);
  note.lines.push({ labelId: label.id, orderLineId: selectedLine.id, productId: selectedLine.productId, actualWeightKg: weight, barcodeValue: barcode });
  mock.audit.unshift({ time: nowStamp(), user: state.kioskUser, action: "LABEL_PRINTED", entity: "pack_label", note: `${barcode} created and ${note.number} updated` });
  setNotice(`Printed ${barcode}. pack_label record created, batch balance reduced, and ${note.number} updated.`);
  renderKioskOrders();
}

function managerOverride() {
  const reason = window.prompt("Manager override reason required");
  if (!reason) {
    setNotice("Manager override cancelled. A reason is required.");
    return;
  }
  const allOpen = mock.batches.filter((item) => item.status === "OPEN");
  state.selectedBatchId = allOpen[0]?.id || null;
  mock.audit.unshift({ time: nowStamp(), user: "manager", action: "BATCH_CHANGED", entity: "stock_intake_batch", note: `Override used: ${reason}` });
  setNotice(`Manager override recorded: ${reason}. All OPEN batches may be selected for this exception.`);
  renderKioskOrders();
}

function fastIntakeForLine() {
  const selected = orderLine(state.selectedLineId);
  const item = product(selected.line.productId);
  const nextId = Math.max(...mock.batches.map((batch) => batch.id)) + 1;
  const newBatch = {
    id: nextId,
    batchNo: `${item.categoryId.toUpperCase()}-FAST-${String(nextId).slice(-3)}`,
    productId: item.id,
    supplierId: 1,
    supplierBatchRef: `FAST-${selected.order.orderNo}`,
    supplierEcNumber: "EC-IE-1124",
    supplierUseBy: "2026-06-14",
    origin: item.categoryId === "beef" ? "Ireland" : "United Kingdom",
    receivedKg: 8,
    usedKg: 0,
    wasteKg: 0,
    remainingKg: 8,
    status: "OPEN",
    temperature: 2.6
  };
  mock.batches.unshift(newBatch);
  state.selectedBatchId = newBatch.id;
  mock.audit.unshift({ time: nowStamp(), user: state.kioskUser, action: "FAST_INTAKE_CREATED", entity: "stock_intake_batch", note: `${newBatch.batchNo} created during fulfilment` });
  setNotice(`${newBatch.batchNo} created from minimum fast intake details and selected for fulfilment.`);
  renderKioskOrders();
}

function renderKioskProduction() {
  const selectedProduct = product(1);
  const sourceIds = state.productionSourceIds.length ? state.productionSourceIds : [101, 102];
  state.productionSourceIds = sourceIds;
  const sources = sourceIds.map((id) => mock.batches.find((batch) => batch.id === id)).filter(Boolean);
  const inTolerance = Number(state.labelWeight) >= 0.95 && Number(state.labelWeight) <= 1.05;
  el.root.innerHTML = `<div class="grid two-col">
    <section class="form-panel">
      <h3>Production Run</h3>
      <div class="form-grid">
        <div class="field"><label>Product</label><select id="prodProduct">${mock.products.map((item) => `<option value="${item.id}" ${item.id === selectedProduct.id ? "selected" : ""}>${item.name}</option>`).join("")}</select></div>
        <div class="field"><label>Target weight kg</label><input value="1.000"></div>
        <div class="field"><label>Tolerance kg</label><input value="0.050"></div>
        <div class="field"><label>Tray weight kg</label><input id="prodWeight" value="${state.labelWeight}"></div>
        <div class="field full"><label>Source batches</label><div class="batch-list">${categoryMatchedBatches(selectedProduct.id).map((batch) => `<button type="button" class="batch-row ${sourceIds.includes(batch.id) ? "active" : ""}" data-prod-source="${batch.id}"><strong>${batch.batchNo}</strong>${product(batch.productId).name} - ${kg(batch.remainingKg)} remaining</button>`).join("")}</div></div>
      </div>
      <div class="split-actions"><button id="createOutput" class="btn primary">Create Output Batch</button><button id="printTray" class="btn success" ${inTolerance ? "" : "disabled"}>Print Tray Label</button></div>
      <p class="small">${inTolerance ? "Tray is in tolerance." : "Tray outside tolerance. Label blocked."}</p>
    </section>
    <section class="label-preview">${labelPreview({ id: "DRAFT", productId: selectedProduct.id, sourceBatchId: sources[0]?.id, actualWeightKg: Number(state.labelWeight), pricePerKg: null, totalPrice: null, useBy: sources[0]?.supplierUseBy || "2026-06-14", barcodeValue: "Generated at print", template: "Production Bulk", channel: "PRODUCTION", printedBy: state.kioskUser, printedAt: "Generated at print", reprintCount: 0 })}</section>
  </div>`;

  document.querySelectorAll("[data-prod-source]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.prodSource);
      state.productionSourceIds = state.productionSourceIds.includes(id) ? state.productionSourceIds.filter((value) => value !== id) : [...state.productionSourceIds, id];
      renderKioskProduction();
    });
  });
  document.querySelector("#prodWeight").addEventListener("input", (event) => {
    state.labelWeight = event.target.value;
    el.scaleWeight.textContent = `${Number(state.labelWeight || 0).toFixed(3)} kg`;
    renderKioskProduction();
  });
  document.querySelector("#createOutput").addEventListener("click", () => setNotice("Output Batch ready. Source batches are linked through output_batch_source mock data."));
  document.querySelector("#printTray").addEventListener("click", printProductionLabel);
}

function printProductionLabel() {
  const selectedProduct = product(1);
  const sources = state.productionSourceIds.map((id) => mock.batches.find((batch) => batch.id === id)).filter(Boolean);
  if (!sources.length) {
    setNotice("Select at least one source batch before printing.");
    return;
  }
  const output = {
    id: Math.max(...mock.outputBatches.map((item) => item.id)) + 1,
    number: `OUT-PROD-${String(mock.outputBatches.length + 1).padStart(4, "0")}`,
    productId: selectedProduct.id,
    sourceBatchIds: sources.map((batch) => batch.id),
    packagingType: "MAP",
    packDate: "2026-06-07",
    totalWeight: Number(state.labelWeight),
    numberOfPacks: 1
  };
  mock.outputBatches.push(output);
  const nextId = Math.max(...mock.labels.map((item) => item.id)) + 1;
  const label = {
    id: nextId,
    outputBatchId: output.id,
    orderLineId: null,
    productId: selectedProduct.id,
    sourceBatchId: sources[0].id,
    actualWeightKg: Number(state.labelWeight),
    pricePerKg: null,
    totalPrice: null,
    useBy: sources[0].supplierUseBy,
    barcodeValue: `PL-PRO-${String(nextId).padStart(6, "0")}`,
    template: "Production Bulk",
    channel: "PRODUCTION",
    printedBy: state.kioskUser,
    printedAt: nowStamp(),
    reprintCount: 0,
    voided: false
  };
  mock.labels.unshift(label);
  mock.audit.unshift({ time: nowStamp(), user: state.kioskUser, action: "LABEL_PRINTED", entity: "pack_label", note: `${label.barcodeValue} production tray label created` });
  setNotice(`Production label ${label.barcodeValue} printed. One pack_label record created for the tray.`);
  renderKioskProduction();
}

function renderReprint() {
  const rows = mock.labels.map((item) => [
    item.barcodeValue,
    product(item.productId).name,
    kg(item.actualWeightKg),
    item.useBy,
    item.template,
    item.reprintCount,
    `<button class="btn primary" data-reprint="${item.id}">Reprint</button>`
  ]);
  el.root.innerHTML = `<div class="grid two-col">
    <section class="panel"><h3>Search Label</h3><div class="field"><label>Barcode / output batch / order / product</label><input id="reprintSearch" value="${state.lastPrintedLabelId ? mock.labels.find((item) => item.id === state.lastPrintedLabelId)?.barcodeValue || "" : "PL-WHO-000002"}"></div><p class="screen-note">Reprints use the original pack_label record and only increase reprint_count.</p>${table(["Barcode", "Product", "Weight", "Use-by", "Template", "Reprints", "Action"], rows)}</section>
    <section class="label-preview">${labelPreview(mock.labels[0])}</section>
  </div>`;
  document.querySelectorAll("[data-reprint]").forEach((button) => {
    button.addEventListener("click", () => reprintLabel(Number(button.dataset.reprint)));
  });
}

function reprintLabel(id) {
  const label = mock.labels.find((item) => item.id === id);
  label.reprintCount += 1;
  mock.audit.unshift({ time: nowStamp(), user: state.kioskUser, action: "LABEL_REPRINTED", entity: "pack_label", note: `${label.barcodeValue} reprinted from original record` });
  setNotice(`${label.barcodeValue} reprinted. Same weight ${kg(label.actualWeightKg)}, same use-by ${label.useBy}, same barcode. Reprint count is now ${label.reprintCount}.`);
  renderReprint();
}

function labelPreview(label) {
  if (!label) return `<h3>Label Preview</h3><p class="muted">No label selected.</p>`;
  const item = product(label.productId);
  const batch = mock.batches.find((entry) => entry.id === label.sourceBatchId);
  return `<h3>${item.name}</h3>
    <p><strong>${label.channel}</strong> | ${label.template}</p>
    <p>Weight: <strong>${kg(label.actualWeightKg)}</strong><br>Use-by: <strong>${label.useBy}</strong></p>
    ${label.pricePerKg ? `<p>Price/kg: ${money(label.pricePerKg)}<br>Total: <strong>${money(label.totalPrice)}</strong></p>` : `<p>No price printed on this label.</p>`}
    <p class="small">Source: ${batch ? `${batch.batchNo} | ${supplier(batch.supplierId).name} | ${batch.supplierEcNumber} | ${batch.origin}` : "Generated at print"}</p>
    <span class="barcode"></span><span class="barcode-text">${label.barcodeValue}</span>
    <p class="small">Printed by ${label.printedBy}; reprints ${label.reprintCount}</p>`;
}

function packLabelTable() {
  return table(["Barcode", "Product", "Channel", "Weight", "Use-by", "Template", "Printed By", "Printed At", "Reprints"], mock.labels.map((item) => [item.barcodeValue, product(item.productId).name, item.channel, kg(item.actualWeightKg), item.useBy, item.template, item.printedBy, item.printedAt, item.reprintCount]));
}

function deliveryCard(delivery) {
  const ord = order(delivery.orderId);
  return `<article class="card">
    <h3>${customer(ord.customerId).name}</h3>
    <p><strong>Branch:</strong> ${ord.branch}<br><strong>Address:</strong> ${delivery.address}<br><strong>Order:</strong> ${ord.orderNo}<br><strong>Delivery Note:</strong> ${delivery.deliveryNote}</p>
    <p>${statusBadge(delivery.status)}</p>
    <div class="split-actions"><button class="btn" data-view-delivery="${delivery.id}">View Items</button><button class="btn success" data-delivered="${delivery.id}">Mark Delivered</button><button class="btn warning" data-failed="${delivery.id}">Failed Delivery</button></div>
  </article>`;
}

function bindDriverButtons() {
  document.querySelectorAll("[data-delivered]").forEach((button) => {
    button.addEventListener("click", () => {
      const delivery = mock.drivers.find((item) => item.id === Number(button.dataset.delivered));
      delivery.status = "DELIVERED";
      delivery.receivedBy = "Store manager";
      delivery.note = `Delivered at ${nowStamp()}`;
      setNotice(`${delivery.deliveryNote} marked delivered.`);
      renderDriver();
    });
  });
  document.querySelectorAll("[data-failed]").forEach((button) => {
    button.addEventListener("click", () => {
      const delivery = mock.drivers.find((item) => item.id === Number(button.dataset.failed));
      delivery.status = "FAILED";
      delivery.note = "Customer closed";
      setNotice(`${delivery.deliveryNote} marked failed: customer closed.`);
      renderDriver();
    });
  });
  document.querySelectorAll("[data-view-delivery]").forEach((button) => {
    button.addEventListener("click", () => {
      state.screen = "Delivery Detail";
      render();
    });
  });
}

function deliveryNoteTable(orderId) {
  const note = mock.deliveryNotes.find((item) => item.orderId === orderId);
  if (!note?.lines.length) return `<div class="empty">No packed labels on this delivery note yet.</div>`;
  return table(["Barcode", "Product", "Actual Weight"], note.lines.map((line) => [line.barcodeValue, product(line.productId).name, kg(line.actualWeightKg)]));
}

function driverStatusList(status) {
  const items = mock.drivers.filter((item) => item.status === status);
  return items.length ? `<div class="grid cards">${items.map(deliveryCard).join("")}</div>` : `<div class="empty">No ${status.toLowerCase()} deliveries.</div>`;
}

function visibleWholesaleOrders() {
  const wholesaleOrders = mock.orders.filter((item) => item.type === "Wholesale");
  return state.wholesaleScope === "headOffice" ? wholesaleOrders : wholesaleOrders.filter((item) => item.branch === "Dublin 7");
}

function bindWholesaleScope() {
  document.querySelectorAll("[data-scope]").forEach((button) => {
    button.addEventListener("click", () => {
      state.wholesaleScope = button.dataset.scope;
      renderWholesale();
    });
  });
}

function priceForCustomer(customerId, productId) {
  return mock.customerPrices.find((item) => item.customerId === customerId && item.productId === productId)?.pricePerKg || product(productId).pricePerKg;
}

function shopProductCard(item) {
  return `<article class="card">
    <div class="photo-placeholder">Product photo</div>
    <h3>${item.name}</h3>
    <p><strong>${money(item.pricePerKg)} per kg</strong></p>
    <p class="muted">${item.weightRange}</p>
    <div class="pill-list">${item.attributes.slice(0, 2).map((attr) => `<span class="pill">${attr}</span>`).join("")}</div>
    <div class="split-actions"><button class="btn primary" data-shop-product="${item.id}">View</button><button class="btn">Add</button></div>
  </article>`;
}

function bindShopCards() {
  document.querySelectorAll("[data-shop-product]").forEach((button) => {
    button.addEventListener("click", () => {
      state.shopProductId = Number(button.dataset.shopProduct);
      switchScreen("Product Detail");
    });
  });
}

render();

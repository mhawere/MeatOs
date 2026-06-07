# MeatOS UI Prototype

This version is split into individual static HTML pages so the platform can be reviewed from the UI and data-model point of view.

## How to open

Open `index.html` in a browser. It is a UI map with links into each area.

No install step, server, database or framework is required.

## Folder structure

- `admin/` - Admin configuration screens.
- `manager/` - Operational control and exception screens.
- `kiosk/` - Touch-first operations screens.
- `driver/` - Delivery workflow screens.
- `wholesale/` - Wholesale customer portal screens.
- `shopfront/` - Retail ecommerce screens.
- `styles.css` - Shared visual system.
- `app.js` - Small shared JavaScript for prototype interactions.

## What changed from the single-page prototype

The original prototype rendered every screen from one JavaScript app. This version creates one HTML file per screen, for example:

- `admin/products.html`
- `manager/batch-balance.html`
- `kiosk/orders.html`
- `wholesale/place-order.html`
- `shopfront/product-detail.html`

Each screen includes a "Model touchpoints" strip showing which data-model entities that UI touches.

## Rules represented

- Goods-in creates a `stock_intake_batch` with lite batch balance fields.
- Kiosk fulfilment shows only OPEN source batches that match the order product category.
- Beef Diced shows beef batches only.
- Output Batch remains the bridge from raw material to finished packed product.
- Printing a label creates a `pack_label` mock record.
- Reprinting keeps the original barcode, weight and use-by and increments `reprint_count`.
- Fast intake during fulfilment is represented before label printing.
- Wholesale branch visibility and customer price fallback are represented.
- Retail catchweight messaging is shown on product and cart screens.

## Not implemented yet

- No backend, database, authentication, printer or scale integration.
- No warehouse bins or complex inventory locations.
- No payment processor.
- Reports are static UI views only.

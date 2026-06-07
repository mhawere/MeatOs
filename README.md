# Meat Processing & Wholesale Platform UI Prototype

This is a static frontend prototype built with plain HTML, CSS and vanilla JavaScript.

## How to open

Open `index.html` in a browser. No install step, server, database or build tool is required.

## Screens included

- Admin UI: dashboard, users and roles, products, categories and attributes, suppliers, customers, pricing, label templates, VAT/settings, hardware/stations, audit log and reports.
- Manager UI: dashboard, order monitor, production, stock intake overview, batch balance, reconcile batch, customers, invoices, credit notes, reports and audit log.
- Kiosk / Operations UI: login, home, add stock, order fulfilment, fast intake during fulfilment, production label printing, reprint label and pack label record view.
- Driver UI: dashboard, today's deliveries, delivery detail, delivery note, delivered and failed delivery states.
- Wholesale Customer Portal: dashboard, place order, quick reorder, orders, delivery notes, invoices, statements, branches, branch users and account.
- Retail Shopfront: home, shop, product detail, cart, checkout, account and order history.

## Where mock data lives

All mock data is in `app.js` in the `mock` object. It includes products, categories, suppliers, stock intake batches, output batches, customers, customer prices, orders, delivery notes, invoices, pack labels, audit entries and driver deliveries.

## Rules implemented

- Goods-in creates a Stock Intake Batch with lite batch balance fields: received, used, waste and remaining kilograms.
- Output Batch is represented as the bridge from intake source batches to finished pack labels.
- Kiosk fulfilment filters source batches to OPEN batches in the selected product category. For example, Beef Diced only shows OPEN beef batches.
- Manager override requires a reason and writes an audit entry.
- Label printing is blocked unless required traceability fields are present.
- Every simulated print creates a `pack_label` mock record with actual weight, use-by, barcode, template, printed by and printed at.
- Fulfilment label printing also updates the mock delivery note and reduces the source batch balance.
- Fast intake during fulfilment creates a minimum OPEN Stock Intake Batch before printing.
- Reprinting uses the original `pack_label`, keeps the same weight, use-by and barcode, and increments `reprint_count`.
- Wholesale portal visibility demonstrates head office versus branch user scope.
- Wholesale pricing uses customer price where available, otherwise default product price.
- Retail product detail shows catchweight messaging and allergen information where relevant.

## Not implemented yet

- No backend, database, authentication or printer integration.
- No real scale integration.
- No warehouse bins, advanced stock reservation engine or complex inventory locations.
- No payment processor integration.
- Reports are on-screen mock views only; export to PDF or Excel is left for a later build.

# 01 — Notification API Basics

## 🎯 Goal

Show a **browser notification** using only the Notification API.
No Service Worker, no Push, no server. Just the raw API.

## 🧠 What You'll Learn

- How to request permission with `Notification.requestPermission()`
- How to display a notification with `new Notification()`
- Why user interaction is required to request permission
- How the browser's permission model works

## 📄 Files

| File | Purpose |
|------|---------|
| `index.html` | A button that triggers a notification |
| `app.js` | The JavaScript logic that handles permissions and display |

## 🚀 How to Run

1. Open `index.html` in a browser — **must be HTTPS or `localhost`**
2. Click the "Show Notification" button
3. Grant the permission when prompted
4. See the notification appear

### Quick way to serve it locally:

```bash
cd 01-basics
python3 -m http.server 8001

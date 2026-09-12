# Push Notifications Lab 🔔

A hands-on learning repository for **Web Push Notifications**, built from scratch using vanilla JavaScript and PHP. No frameworks, no libraries — just the raw specifications.

## 🎯 What You'll Learn

- How the **Notification API** works
- How **Service Workers** enable offline + push functionality
- How the **Push API** subscribes users to notifications
- How **VAPID** authenticates your server (RFC 8292)
- How **message encryption** works (RFC 8291)
- How to build a complete, production-ready push system from the ground up

## 📚 Learning Path

Follow the folders in order:

| # | Topic | What You Build |
|---|-------|----------------|
| **01** | [Notification API Basics](01-basics/) | Local notifications using only the Notification API |
| **02** | [Service Workers](02-service-worker/) | An offline-capable Service Worker |
| **03** | [Push Subscription](03-push-subscription/) | Users subscribe to push notifications |
| **04** | [Web Push Crypto](04-web-push-crypto/) | Hand-rolled RFC 8291 encryption in PHP |
| **05** | [Send Push Server](05-send-push-server/) | An admin panel that sends pushes |
| **06** | [VAPID Keys](06-vapid-keys/) | Generate, verify, and rotate VAPID keys |
| **07** | [Advanced Patterns](07-advanced-patterns/) | Auto-prune, categories, scheduling, analytics |
| **08** | [Full Example](08-full-example/) | A complete working push notification app |

## 🚀 Quick Start

Each folder has its own `README.md` that explains:
- **What** you're building
- **Why** it works that way
- **How** to run the example
- **Common pitfalls** to watch out for

## 🔑 Prerequisites

- A modern browser (Chrome 60+, Firefox 55+, Edge 79+, Safari 16.4+)
- PHP 7.4+ with the `openssl` extension (for server examples)
- **HTTPS** or `localhost` — browsers require a secure context for push notifications to work

## ⚠️ Security Notes

- **NEVER** commit real VAPID private keys to a public repo
- **NEVER** commit real `subscriptions.json` files with live endpoints
- **ALWAYS** use HTTPS in production
- The `.gitignore` in this repo already excludes common secret files

## 📖 References

- [RFC 8030 — Generic Event Delivery Using HTTP Push](https://datatracker.ietf.org/doc/html/rfc8030)
- [RFC 8188 — Encrypted Content-Encoding for HTTP](https://datatracker.ietf.org/doc/html/rfc8188)
- [RFC 8291 — Message Encryption for Web Push](https://datatracker.ietf.org/doc/html/rfc8291)
- [RFC 8292 — VAPID for Web Push](https://datatracker.ietf.org/doc/html/rfc8292)
- [MDN — Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
- [web.dev — Notifications](https://web.dev/notifications/)

## 📄 License

MIT — free to use, learn, and build on.

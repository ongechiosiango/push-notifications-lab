// ==========================================
// 01 — Notification API Basics
// ==========================================

const btn = document.getElementById('notifyBtn');
const status = document.getElementById('status');

/**
 * Update the status message on the page.
 */
function setStatus(text) {
    status.textContent = 'Status: ' + text;
}

/**
 * Check support on page load.
 */
if (!('Notification' in window)) {
    setStatus('❌ Notification API not supported in this browser');
    btn.disabled = true;
} else {
    console.log('Notification.permission:', Notification.permission);
    setStatus('Ready. Permission is "' + Notification.permission + '"');
}

/**
 * Handle the button click.
 */
btn.addEventListener('click', async () => {
    // 1. Sanity check
    if (!('Notification' in window)) {
        setStatus('❌ Not supported');
        return;
    }

    // 2. Request permission if not already granted/denied
    let permission = Notification.permission;
    if (permission === 'default') {
        console.log('Requesting permission…');
        permission = await Notification.requestPermission();
    }
    console.log('Permission result:', permission);
    setStatus('Permission: ' + permission);

    // 3. Show the notification if granted
    if (permission === 'granted') {
        const notification = new Notification('Hello from 01-basics! 👋', {
            body: 'This is a basic browser notification. Click to focus the tab.',
            icon: 'data:image/svg+xml,' + encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">' +
                '<circle cx="50" cy="50" r="45" fill="#0984e3"/>' +
                '<text x="50" y="68" font-size="52" text-anchor="middle" fill="white">🔔</text>' +
                '</svg>'
            ),
            tag: 'basics-demo',   // prevents duplicates with the same tag
            requireInteraction: false,
        });

        // Click handler — focus the page
        notification.onclick = () => {
            console.log('Notification clicked');
            window.focus();
            notification.close();
        };

        // Close handler
        notification.onclose = () => {
            console.log('Notification closed');
        };

        // Error handler
        notification.onerror = (err) => {
            console.error('Notification error:', err);
        };

        setStatus('✅ Notification shown successfully');
    } else if (permission === 'denied') {
        setStatus('❌ Permission denied. Enable in browser settings.');
    } else {
        setStatus('⚠️ Permission dismissed without a choice.');
    }
});

// ==========================================
// Bonus — log when the page becomes visible
// ==========================================
document.addEventListener('visibilitychange', () => {
    console.log('Visibility:', document.hidden ? 'hidden' : 'visible');
});

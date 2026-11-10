# ChangeBell

ChangeBell is a browser extension for Google Chrome and Microsoft Edge. It watches the text you select on a web page. It reloads the page on a schedule, compares the selected fragment with what it saw before and alerts you with a sound, a notification and an animated tab icon when the text changes. The interface is available in English and Russian.

## License and origin

ChangeBell is a modified version of **Check4Change 2.4**, Copyright 2006–2015 Ronen Zilberman, which is free software licensed under the GNU General Public License, version 3 or (at your option) any later version.

This modified version was created in 2026. It is distributed under the same license: GNU GPL version 3 or any later version. The full text of the license is in `LICENSE.txt`. Files derived from the original carry a notice saying so in their headers.

ChangeBell is not affiliated with or endorsed by the author of Check4Change.

### Changes from the original

**Rebuilt as a Manifest V3 extension.**
- A service worker replaces the background page.
- Waits are scheduled with `chrome.alarms`.
- Job state lives in `chrome.storage.session`.
- The alert sound plays from an offscreen document.

**Removed the online service integration.** The extension no longer uses installation IDs, cookies, usage statistics, a premium tier or e-mail alerts. It sends nothing anywhere.

**New name, icons and sounds.** The extension has a new name, new icons, a new tab-icon animation and six new alert sounds, all created for this version.

**Interface.**
- Russian translation with a language switch in the settings.
- Dialogs fit their height to their content.
- The help text is rewritten.

**Reloading.**
- The page is reloaded in place, which keeps the original Referer and doesn't add history entries.
- POST form results are re-submitted.
- POST pages whose body can't be replayed are reloaded with GET.

**Libraries.** jQuery is updated to 3.7.1 and Bootstrap to 4.6.2.

**Fixes.**
- Lower bound of the random interval.
- Element ids are no longer changed while restoring the selection.
- The text of the notification is cleaner.

## Install

From the Chrome Web Store, or for development:

1. Open `chrome://extensions` (in Microsoft Edge: `edge://extensions`).
2. Turn on Developer mode.
3. Click "Load unpacked" and select this folder.

## Privacy

ChangeBell processes everything locally in the browser. Settings and an optional custom alert sound are kept in local extension storage. The monitored page address, the selected text and, for pages produced by a form, the form fields needed to reload the page are kept in session storage (fields of login, payment or one-time-code forms are never kept), which is cleared when the browser closes. Nothing is sent to the developer or to any third party.

## Third-party components

- jQuery 3.7.1 — MIT License, OpenJS Foundation and other contributors.
- Bootstrap 4.6.2 (bundle, includes Popper.js 1.16.1) — MIT License.
- Featherlight 1.7.14 — MIT License, Noël Raoul Bossart.

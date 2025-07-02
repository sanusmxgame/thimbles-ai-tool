// ==UserScript==
// @name         Thimbles AI Cup Tracker (Advanced)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Full AI-powered ball movement and cup trace detector
// @match        *://*.odds96.in/*thimbles*
// @match        *://*.evoplay.games/*thimbles*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        this.addEventListener("load", function () {
            try {
                if (this.responseURL.includes("/fullstate/")) {
                    const json = JSON.parse(this.responseText);
                    const prov = json?.spin?.provably_fair?.string;
                    const [sequence] = prov.split('|');
                    const cups = sequence.split(',');
                    const correctCup = cups.findIndex(s => s.startsWith('W'));
                    if (correctCup !== -1) {
                        highlightCorrectCup(correctCup);
                    }
                }
            } catch (e) {
                console.error("Parsing error:", e);
            }
        });
        origOpen.apply(this, arguments);
    };
})();
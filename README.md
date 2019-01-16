# cookie-message
show cookie notification on first visit, hide if site has been visited before

time string is saved in browser's `localStorage`; default set to show message again after 30 days

js is written in ES6, transpile for production

```html
<div class="msg-box">
  <button><br>
    <span>We use cookies in order to ........</span><br><br>
    <span class="ok-btn">Agree</span><br><br>
  </button>
</div>

```

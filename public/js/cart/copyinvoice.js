window.addEventListener("load", () => {
    let binance = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
    let bitcoin = document.getElementById("satoshinakamoto");
  
    binance.onmessage = event => {
      let confirm = JSON.parse(event.data);
        if(localStorage.getItem('banklogs')){
          bitcoin.innerHTML = `
            <i class="fas fa-spin fa-sync-alt spinner-bordez"></i> awaiting 
            <span id="the-one">
              ${(localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5)}
            </span> bitcoin payment
          `;
        }
    }
    
    document.getElementById("copy-text").addEventListener("click", function (ev) {
      ev.preventDefault();
      document.getElementById("text-to-copy").select();
      var copiez;
      try {
        copiez = document.execCommand("copy");
      } catch (ex) {
        copiez = false;
      }
      ;
      if (copiez) {
        document.getElementById("copy-text").innerHTML = `Copied`;
        document.getElementById("copy-text").style.background = "gold";
      }
    });
    document.getElementById("text-to-copy").addEventListener("click", function (eve) {
      eve.preventDefault();
      document.getElementById("text-to-copy").select();
      var copied;
      try {
        copied = document.execCommand("copy");
      } catch (ex) {
        copied = false;
      }
      ;
      if (copied) {
        document.getElementById("copy-text").innerHTML = `Copied`;
        document.getElementById("copy-text").style.background = "gold";
      }
    });
  });
      
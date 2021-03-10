/* eslint-env jquery, browser */
$(document).ready(() => {

  // Place JavaScript code here...
  if(window.location.href.indexOf("requestwicode") > -1){
    //updateLogs();
    var logLoop = setInterval(updateLogs, 2000);

    var qrcode = new QRCode("qrCodeDiv");
    var elText = document.getElementById("wiCodeText").innerHTML;
    qrcode.makeCode(elText);
  }

  function updateLogs(){
    var transactionId = document.getElementById('trxId').innerHTML;
    console.log(transactionId);
    $.ajax({
      url: "./transaction?trxId=" + transactionId, 
      type: 'GET',
      success: function (data) {
          var result = JSON.stringify(data);
          result = $.parseJSON(result);
          // this.update({logs: result.transactionData.transactionProcessingLogs});
          var logsHtml = "<ol>";
          var index;
          for (index = 0; index < result.transactionData.transactionProcessingLogs.length; ++index) {
            logsHtml += "<li>" + result.transactionData.transactionProcessingLogs[index] + "</li>";
          }
          logsHtml +="</ol>"
          $("#logParagraph").html(logsHtml);
      },
      error: function (err) {
          console.log("Error: " + err);
      }
    })
  }
});


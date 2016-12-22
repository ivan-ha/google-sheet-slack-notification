// function to send highlighted cells to Slack using webhook
function postToSlack() {
    var url = "[YOUR_SLACK_WEBHOOK_URL]";

    var range = SpreadsheetApp.getActiveRange();
    var values = range.getValues();

    var payload = {
        "username": "webhook-bot",
        "text": JSON.stringify(values)
    };

    var options = {
        "method": "post",
        "payload": JSON.stringify(payload)
    };

    return UrlFetchApp.fetch(url, options);
}
function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", deviceInfo, true);
}

function msg()
{
    alert("button clicked");
}
function myhttprequest(){

            var request = new XMLHttpRequest();
            request.open("GET", "http://localhost/test.php?helpmsg=yaxerabi", true);
            request.onreadystatechange = function(){

                if(request.readyState == 4){

                    if(request.status == 200 || request.status == 0){

                        parse_events(JSON.parse( request.responseText ));

                    }

                }

            }

            request.send();

};
        
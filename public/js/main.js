var iAmListening = {
  // -----------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------
  //
  //                              ALL YOUR CODE GOES IN HERE
  //
  // I didn't see a need to take a dependency on jQuery judging by the code I've seen so far so I
  // just wrote what I needed in raw JavaScript. Check out this site for other useful utils. If you
  // need to take a dep on jQuery for something else you can remove the ready handler and clean up
  // my selectors.
  //                          http://youmightnotneedjquery.com/

  renderLoadingScreen: function () {
    console.log("rendering loading screen");
    // Render your fun ear!
  },

  tearDownLoadingScreen: function () {
    console.log("tearing down loading screen");
    // Remove the loading screen from the page or at least hide it
  },

  renderResults: function (data) {
    console.log("rendering results");
    // Render the results in a hidden div
  },

  unhideResults: function () {
    console.log("unhiding results");
    // Unhide the div
  },

  renderErrorPage: function () {
    console.log("rendering error page");
    // Show something if the request fails for some reason
  },

  // -----------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------

  ready: function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  },

  loadResults: function () {
    // GET /results-partial
    return fetch("/results-partial")
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }

        // The response comes in as a stream - convert it down to a String
        return response.blob()
          .then(function (responseBlob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.addEventListener("loadend", function() {
                resolve(reader.result);
              });
              reader.readAsBinaryString(responseBlob);
            });
          });
      })
      .then(function (code) {
        // Create a script tag and insert the server generated code. This is only just barely one
        // step removed from a data API but if you wanted the data you'd have to fisrt parse the JS
        // which makes this a pretty crumby API to rely on. It's of course still possible but it's
        // not that likely. This is a rough equivalent of an eval statement so please please please
        // keep the cross-domain security policy tight.
        var s = document.createElement('script');
        s.type = 'text/javascript';
        try {
          s.appendChild(document.createTextNode(code));
          document.body.appendChild(s);
        } catch (e) {
          s.text = code;
          document.body.appendChild(s);
        }
      })
      .catch(function (error) {
        console.warn("Sorry, there was an error making that request", error);
      });
  }
}

// Start the application after the document has finished loading
iAmListening.ready(function () {
  "use strict";

  // Attach an event listener to the form sumbit button
  document.getElementById("email-form").addEventListener("submit", function (ev) {
    ev.preventDefault();

    Promise.resolve(iAmListening.renderLoadingScreen())
      .then(iAmListening.loadResults)
      .then(iAmListening.tearDownLoadingScreen)
      .then(iAmListening.unhideResults)
      .catch(iAmListening.renderErrorPage);
  });
});

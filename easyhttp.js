// this file is the actual library

/*
EasyHTTP is a custom AJAX Library
   - In order to test, we'll need something to test with. We'll need a RESTful API that utilizes GET-POST-PUT-DELETE requests in order to modify some kind of resource
   - We'll use JSONPlaceholder, a fake online REST API for testing and prototyping
   - This is going to be an ES5 object-oriented library, so we'll be using prototypes instead of classes
      - We'll revisit this with the new fetchAPI() instead of AJAX
*/

// easyHTTP constructor
function easyHTTP() {
   this.http = new XMLHttpRequest();
}

// FOUR DIFFERENT PROTOTYPE METHODS

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
   this.http.open('GET', url, true);

   let self = this;

   this.http.onload = function() {
      if(self.http.status === 200){
         callback(null, self.http.responseText);
      } else {
         callback('Error: ' + self.http.status);
      }
   }

   this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback){
   this.http.open('POST', url, true);

   this.http.setRequestHeader('Content-type', 'application/json');

   //onload
   let self = this;
   this.http.onload = function() {
      callback(null, self.http.responseText);
   }

   this.http.send(JSON.stringify(data));
}
// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
   this.http.open('PUT', url, true);

   this.http.setRequestHeader('Content-type', 'application/json');

   //onload
   let self = this;
   this.http.onload = function() {
      callback(null, self.http.responseText);
   }

   this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
   this.http.open('DELETE', url, true);

   let self = this;

   this.http.onload = function() {
      if(self.http.status === 200){
         callback(null, 'Post Deleted');
      } else {
         callback('Error: ' + self.http.status);
      }
   }

   this.http.send();
}
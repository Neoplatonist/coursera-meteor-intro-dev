if (Meteor.isClient) {

  Template.time.helpers({
    currentDate: function () {
      var currentDate = new Date;
      return currentDate;
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

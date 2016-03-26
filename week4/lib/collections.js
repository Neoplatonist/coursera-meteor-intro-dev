// Collections

Images = new Mongo.Collection("images");

// Sets security on Images Collection
Images.allow({
  insert: function(userId, doc){
    console.log("Accessed Security of Images Collection");
    if (Meteor.user()) { // User Logged In ??
      doc.createdBy = userId;
      if (userId != doc.createdBy){ //images owned by user ??
        return false;
      } else { //allow user
        return true;
      }
    } else { // not logged in
      return false;
    }
  },
  remove: function(userId, doc){
    return true;
  }
});

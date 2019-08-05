Template.well.helpers({
	'demographic': function(){
		return Demographic.findOne();
	},

	'preference': function(){
		console.log(Preferences.findOne().selected);
		return Preferences.findOne().selected[0];
	},

	'preference2': function(){
		return Preferences.findOne().selected[1];
	},

  bmiCondition: function(){
    const object = Demographic.findOne();
		console.log(object);
    if(object.bmi<=21){
      return "Underweight";
    }else if(object.bmi<=27){
      return "Normal";
    }else if(object.bmi<=32){
      return "Overweight";
    }else{
      return "Obese";
    }
  }
})

Template.well.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    },

    'click .js-edit-preference': function(event){
        event.preventDefault();
        Router.go('/well4');
    },

    'click .js-edit-demographic': function(event){
        event.preventDefault();
        Router.go('/well5');
    },

    'click .js-go-basket': function(event){
        event.preventDefault();
        Router.go('/well2');
    },
});

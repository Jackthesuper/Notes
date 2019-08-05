Template.well4.helpers({
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
    if(object.bmi<=21){
      return "Underweight";
    }else if(object.bmi<=27){
      return "Normal";
    }else if(object.bmi<=32){
      return "Overweight";
    }else{
      return "Obese";
    }
  },
})

Template.well4.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    },

    'click .js-submit': function(event){
        event.preventDefault();
			  var selected = [];
			  selected = $('.selectpicker').val();
				console.log("hey u clicked");
				const preference=
				{user:Meteor.userId(), selected: selected};
				console.log(preference);
				Meteor.call("submitPreferences", preference);
				console.log("finished");
        Router.go('/well');
    },

    'click .js-cancel': function(event){
        event.preventDefault();
        Router.go('/well');
    },

    'click .js-go-home': function(event){
        event.preventDefault();
        Router.go('/well');
    },
});

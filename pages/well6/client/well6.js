Template.well6.helpers({
	'mealsTotal': function(){
		const obj = Meals.findOne();
		const total = obj.zn+obj.sa+obj.vc+obj.ct+obj.rv+obj.aa;
		return total;
	},

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

Template.well6.events({
	'click .logout': function(event){
			event.preventDefault();
			Meteor.logout();
			Router.go('/login');
	},

  'click .js-go-home': function(event){
      event.preventDefault();
      Router.go('/well');
  },

	'click .js-call': function(event){
			event.preventDefault();
			window.alert("Please wait our staff to call you!");
	},

	'click .js-edit-preference': function(event){
			event.preventDefault();
			Router.go('/well4');
	},

	'click .js-edit-demographic': function(event){
			event.preventDefault();
			Router.go('/well5');
	},

});

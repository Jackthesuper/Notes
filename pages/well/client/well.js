Template.well.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    counter1: 0,
		counter2: 1,
		counter3: 0,
		total: 1,
  });
  console.dir(this.state);
});

Template.well.helpers({
	theCounterNumber: function(digit){
    const instance = Template.instance();
    const c = instance.state.get("counter"+digit);
    return c;
  },

	theCounter: function(digit){
    const instance = Template.instance();
    const c = instance.state.get("counter"+digit);
    if(c==0){
			return true;
		}else{
			return false;
		}
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

		"click .js-add-basket": function(event,instance){
			const counter = "counter"+event.target.dataset.message;
			const c = instance.state.get(counter);
      const t = instance.state.get("total");
      if(t==10){
        window.alert("You can't add more than 10 meals!");
        return;
      }
      instance.state.set(counter,c+1);
      instance.state.set("total", t+1);
	  },

		"click .js-minus-basket": function(event,instance){
			const counter = "counter"+event.target.dataset.message;
      const c = instance.state.get(counter);
      const t = instance.state.get("total");
      console.log(c);
      if(c==0){
        return;
      }
      instance.state.set(counter,c-1);
      instance.state.set("total", t-1);
    },
});

Template.well2.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    counter1:0,
    counter2:0,
    counter3:0,
    counter4:0,
    counter5:0,
    total:0,
  });
  console.log("creating the template");
  console.dir(this.state);
});

Template.well2.helpers({
  theCounter: function(digit){
    const instance = Template.instance();
    return instance.state.get("counter"+digit);
  },

  theTotal: function(){
    const instance = Template.instance();
    return instance.state.get("total");
  },

  theRest: function(){
    const instance = Template.instance();
    return 10-(instance.state.get("total"));

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
});


Template.well2.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    },

    'click .js-go-home': function(event){
        event.preventDefault();
        Router.go('/meal_selecction');
    },

    'click .js-place-order': function(event){
        event.preventDefault();
        Router.go('/order_placed');
    },

    "click .js-pusher": function(event,instance){
      event.preventDefault();
      const counter = "counter"+event.target.dataset.message;
      const c = instance.state.get(counter);
      const t = instance.state.get("total");
      if(c==3){
        window.alert("For each meal, you can only add 3 orders at most!");
        return;
      }
      if(t==10){
        window.alert("You can't add more than 10 meals!");
        return;
      }
      instance.state.set(counter,c+1);
      instance.state.set("total", t+1);
    },

    "click .js-puller": function(event,instance){
      event.preventDefault();
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

    'click .js-edit-preference': function(event){
  			event.preventDefault();
  			Router.go('/preference');
  	},

  	'click .js-edit-demographic': function(event){
  			event.preventDefault();
  			Router.go('/demographic');
  	},
    
    "click .js-close": function(event,instance){
      event.preventDefault();
      window.alert("This close button feature not available now!");
    },

    'click .js-call': function(event){
        event.preventDefault();
        window.alert("Please wait our staff to call you!");
    },
});

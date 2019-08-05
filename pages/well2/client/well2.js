Template.well2.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    counter1:2,
    counter2:1,
    counter3:1,
    counter4:0,
    counter5:1,
    total:5,
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
        Router.go('/well');
    },

    'click .js-place-order': function(event){
        event.preventDefault();
        Router.go('/well3');
    },

    "click .js-pusher": function(event,instance){
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

    "click .js-puller": function(event,instance){
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

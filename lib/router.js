// Router.configure({
//   layoutTemplate: 'layout',
// });
Router.route('/',{name:"register"});
Router.route('/about',{name:"about"});
Router.route('/symptoms',{name:"symptoms"});
Router.route('/comments',{name:"comments"});
Router.route('/symptomsDb',{name:"symptomsDb"});
Router.route('/commentSubmit',{name:"commentSubmit"});
Router.route('/quiz1',{name:"quiz1"});
Router.route('/draw',{name:"draw"});
Router.route('/testing',{name:"testing"});
Router.route('/sponsors',{name:"sponsors"});
Router.route('/setting',{name:"setting"});
Router.route('/meal_selecction',{name:"well"});
Router.route('/review_your_order',{name:"well2"});
Router.route('/order_placed',{name:"well3"});
Router.route('/preference',{name:"well4"});
Router.route('/demographic',{name:"well5"});
Router.route('/intro',{name:"well6"});
Router.route('/login',{name:"login"});
Router.route('/symptomsSubmit',{name:"symptomsSubmit"});
Router.route('/showRides');
Router.route('/issues');
Router.route('/showride/:_id',
       {name:"showRide",
        data: function(){
          check(this.params._id, String);
					const c = Rides.findOne({_id:this.params._id});
					console.dir(c);
					return c
				}
  		 }
);
Router.route('/showIssues/:_id',
       {name:"showIssue",
        data: function(){
          check(this.params._id, String);
					const c = Issues.findOne({_id:this.params._id});
					console.dir(c);
					return c
				}
  		 }
);

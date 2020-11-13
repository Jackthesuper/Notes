Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        const username = event.target.registerUname.value;
        const password = event.target.registerPassword.value;
        const object =
        {username: username, password: password};
        // console.dir(object);
        // Meteor.call("insertUser",object);
        Accounts.createUser({
            username: object.username,
            password: object.password,
        },function(error){
          if(error){
            console.log(error.reason);
            window.alert(error.reason);
            return;
          }else{
            const meals = {
              user: Meteor.userId(),
              zn: 0,
              sa: 0,
              vc: 0,
              ct: 0,
              rv: 0,
              aa: 0
            }
            Meteor.call("insertMeals", meals);
            Router.go('/intro');
          }
        });
    }
});

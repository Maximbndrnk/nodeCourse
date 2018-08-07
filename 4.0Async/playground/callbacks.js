let getUser = (id, callback) => {
    let user =  {
        id,
        name: 'Max'
    };
    callback(user);
};

getUser(31, (user) => {
    console.log(user);
});
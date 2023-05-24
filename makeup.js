let users = {}
let props = {}
//DashBoard Requests
app.get('/dashboard(.ejs)?',async (req, res) =>{
    users = await user.find({})
    props = await property.find({})
    allProp=Array.from(props);
    allUsers = Array.from(users)
    const totalPrice = allProp.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0);
    const locationCounts = allProp.reduce((countMap, obj) => {
        const location = obj.location;
        countMap[location] = (countMap[location] || 0) + 1;
        return countMap;
    }, {});
    const sortedLocations = Object.keys(locationCounts).sort((a, b) => locationCounts[b] - locationCounts[a]);
    const top3Locations = sortedLocations.slice(0, 3);
    const top3Objects = allProp.filter(obj => top3Locations.includes(obj.location)).slice(0 , 3).map(obj => obj.location)
    const data = {
        avgPrice: `${Math.ceil(totalPrice/allProp.length)} EGP`,
        noOfUsers: users.length,
        top3Objects: top3Objects,
        percentp: 75,
        percentu: 45
    }
    res.render('dashboard',{data});
})

//Customers Requests

app.get('/customers(.ejs)?', async(req, res) =>{
    users = await user.find({})
    res.render('customers', {users})
})

app.post('/customers(.ejs)?', async(req, res)=> {
    let username_in = req.body.username_inp
    let password_in = req.body.password_inp
    let email_in = req.body.email_inp
    let phone_in = req.body.phone_inp
    let checkboxChecked = req.body.admin_check === 'checked'

    if(checkboxChecked){
        await user.create({
            username: username_in,
            email: email_in,
            phone: phone_in,
            pass: password_in,
            Role: 'Admin'
        });
    } else{
        await user.create({
            username: username_in,
            email: email_in,
            phone: phone_in,
            pass: password_in,
            Role: 'User'
        });
    }
})

app.get('/users(.ejs)?', async (req, res) =>{
    users = await user.find({})
    allUsers = Array.from(users)
    res.render('users', {allUsers: allUsers})
})
app.get('/addproperty(.ejs)?',(req, res) =>{
    res.render('addproperty')
})

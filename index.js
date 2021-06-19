const db = firebase.firestore();

const addUser1 = async(firstName, lastName, email, ps) => {
    const docRef = await db.collection('users').add({
        username: `${firstName} ${lastName}`,
        email: email,
        password: ps,
    });
    console.log(docRef.id);
};

/*For sign-in*/ 
const signIn = () => {
    // const data = Array.form(document.querySelectorAll('#signInForm input')).reduce((acc, input) => ({...acc, [input.id]: input.value}), {}); 
    const data = $('#signInForm').serializeArray();
    
};

/*For sign-up*/
const signUp = () => {
    // const data = Array.form(document.querySelectorAll('#registrationForm input')).reduce((acc, input) => ({...acc, [input.id]: input.value}),{}); 
    const data = $('#registrationForm').serializeArray();
    Event.preventDefault();
    addUser(data.firstName, data.lastName, data.email, data.ps)
    console.log(data)
}

$('#registrationForm').on('submit', (event) => {
    event.preventDefault();
    const data = $('#registrationForm').serializeArray();
    addUser(data.firstName, data.lastName, data.email, data.ps)
    console.log(data)
})



// // Possibly the best method but I am not sure if it works
// const getData = () => {
//     const data = $('#registrationForm').append($('#signInForm').serializeArray());
//     addUser(data.firstName, data.lastName, data.email, data.ps)
// }
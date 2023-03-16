export const sendEmail = async (name, email, message) => {

        const encodedName = (name);
        const encodedEmail = (email);
        const encodedMessage = (message);
    await fetch('/sendEmail.php', {
        
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body:
            {   name: encodedName, 
                email: encodedEmail, 
                message: encodedMessage }
        
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
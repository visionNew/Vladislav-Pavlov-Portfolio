export const sendEmail = async (name, email, message) => {

        const encodedName = encodeURIComponent(name);
        const encodedEmail = encodeURIComponent(email);
        const encodedMessage = encodeURIComponent(message);
    await fetch('http://localhost/send-email.php', {
        
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {   name: encodedName, 
                email: encodedEmail, 
                message: encodedMessage }
        )
    })
        // .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
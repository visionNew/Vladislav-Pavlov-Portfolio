export const sendEmail = async (name, email, message) => {

    await fetch('/sendEmail.php', {
        
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {   name , 
                email, 
                message }
        )
    })
        .then()
        .then(data => {
            console.log('Success:');
        })
        .catch(error => {
            console.error('Error:');
        });
    };
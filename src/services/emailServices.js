export const sendEmail = async (name, email, message) => {

    await fetch('/sendEmail.php', {
        
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body:
            {   name , 
                email, 
                message }
        
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
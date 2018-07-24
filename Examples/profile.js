const https = require('https');

function printMessage(user, badges, points) {
  const message = `${user} has ${badges} badge(s) and ${points} JS points`;
  console.log(message);
}

function printError(message) {
  console.error(message);
}

function getProfile(username) {
  try {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if (response.statusCode === 200) {
        let body = ""
      
        response.on('data', data => {
          body += data.toString();
        });

        response.on('end', () => {
          try {
            var profile = JSON.parse(body);  
            console.log(username);                          
            printMessage(profile.name, profile.badges.length, profile.points.JavaScript);
            console.log('');
          } catch (error) {
            console.error('Your input does not exist');
          }
        });  
        
      } else {
        const statusError = `Status Code: ${response.statusCode}`;
        printError(statusError);
      }
    });
    request.on('error', error => printError('Problem with Request'));
  } catch (error) {
    printError('Problem with Request');
  }
}

module.exports.getProfile = getProfile;
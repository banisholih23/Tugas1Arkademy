module.exports = function usernameCheck(username) {
	const regexUser = /^[a-zA-Z0-9]{5,12}$/;
    console.log(`${username}: ${regexUser.test(username)}`);
}

module.exports = function passwordCheck(pass) {
    const regexPass = /^[a-zA-Z]{8}$/;
    console.log(`${pass}: ${regexPass.test(pass)}`);
}
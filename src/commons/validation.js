//정규식
const regEmail = /([\w-.]+)@([\w-.]+)$/;

//유효성 검사 
const emailCheck = (email) => regEmail.test(email);
const passwordCheck = (password) => password.length > 7;

export { passwordCheck, emailCheck };
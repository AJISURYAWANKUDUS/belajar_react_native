export const getuserlogin = (email)=>{
    let username = email.toLowerCase().trim();
    // let password = pass.toLowerCase().trim();
    const url = 'http://192.168.43.15/movie/android/login_react.php?username=${username}';
    return fetch(url).then((res)=>res.json());
}
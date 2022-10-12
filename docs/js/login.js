
// firebase の初期化
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged( user => {
  let h1   = document.querySelector('h1');
  let main = document.querySelector('#main-content');

  if ( user != null ){
    if ( user.emailVerified == false ){
      h1.innerText   = 'ユーザ登録が完了しました';
      user.sendEmailVerification();
      main.innerHTML = user.email + 'に確認メールを送信しました';
    }else{
      h1.innerText   = 'ようこそ、' + user.displayName + 'さん';
      document.getElementById('main-content').innerHTML = '<a href="./top.html">Topへ</a>';
    }
  }else{
    h1.innerText = 'Sign up';
  }
});

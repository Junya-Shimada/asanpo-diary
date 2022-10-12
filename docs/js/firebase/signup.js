
// firebase の初期化
firebase.initializeApp(firebaseConfig);

var uiConfig = {
    // signInSuccessUrl: './html/login.html', // ログインに成功したときに飛ぶページ
    signInSuccessUrl: './top.html', // ログインに成功したときに飛ぶページ
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID 
            //メール認証のみ使用する。google 認証などを使う場合はさらに羅列する。
        }
    ],

    tosUrl: '/kiyaku.html',           // 規約とかを描いたページ
    privacyPolicyUrl: '/policy.html'  // プライバシーポリシーを描いたページ
};

// firebase auth ui を使用
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);
if (getParameterByName("church") != null) {
    var church = getParameterByName("church")

    document.getElementById("church_input").value = church
}

var firebaseConfig = {
    apiKey: "AIzaSyD8tpGXe_T2dBda_nmDvw-yBU2Nei_FnQQ",
    authDomain: "hhpc-weekly-givings-website.firebaseapp.com",
    databaseURL: "https://hhpc-weekly-givings-website.firebaseio.com",
    projectId: "hhpc-weekly-givings-website",
    storageBucket: "hhpc-weekly-givings-website.appspot.com",
    messagingSenderId: "861520292247",
    appId: "1:861520292247:web:4392f3600045bdeac7fcd2",
    measurementId: "G-0ZX7NWDH4Z"
}

firebase.initializeApp(firebaseConfig)

var database = firebase.database()

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("signing_in_p").style.visibility = "visible"
        var churchCode = user.email.split("@")[1].split(".")[0]
        window.location.href = `./viewfunds.html?church=${churchCode}`
        return
    } else {
        // user signed out
    }
})

function signIn() {
    firebase.auth().signInWithEmailAndPassword(`${document.getElementById("fwo_input").value}@${document.getElementById("church_input").value.toLowerCase()}.com`, document.getElementById("pin_input").value).catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message

        window.location.href = "./index.html?message=signInFailed"
        return
    })
}
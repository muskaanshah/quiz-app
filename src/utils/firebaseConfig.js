import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBpLtrD2y1ozvC4yXiaHbmhpQ2Sva-1_Vo",
    authDomain: "quiz-ea83d.firebaseapp.com",
    projectId: "quiz-ea83d",
    storageBucket: "quiz-ea83d.appspot.com",
    messagingSenderId: "560975269339",
    appId: "1:560975269339:web:323c1485473b5634626bfe",
    measurementId: "G-PE8EKF5FLP",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };

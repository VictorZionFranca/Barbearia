import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { firebaseConfig } from "./assets/js/firebaseConfig.js";

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verifica se o usuário está autenticado
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Se o usuário não estiver autenticado, redireciona para o login
        window.location.replace("index.html");
    }
});

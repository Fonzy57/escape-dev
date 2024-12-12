document.getElementById("enigme-form1").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    const userAnswer = document.getElementById("answer1").value.trim().toLowerCase();
    const correctAnswer = "mineur";

    const resultDiv = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        resultDiv.style.color = "green";
        resultDiv.textContent = "Correct ! La réponse est 'Mineur'";
        document.getElementById("container1").style.display = "none";
        document.getElementById("container2").style.display = "block";
        document.getElementById("answer2").focus();
    } else {
        resultDiv.style.color = "red";
        resultDiv.textContent = "Faux ! Réessayez.";
    }
});

document.getElementById("enigme-form2").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    const userAnswer = document.getElementById("answer2").value;
    const correctAnswer = "57"; // La somme des nombres de 1 à 11 sauf 9

    const resultDiv = document.getElementById("result2");

    if (userAnswer === correctAnswer) {
        resultDiv.textContent = "";

        // Affiche le bouton "Passer à l'étape suivante"
        const goNextButton = document.getElementById("goNext");
        goNextButton.style.display = "block";

        // Désactive le bouton et l'entrée de la 2ème énigme
        const button2 = document.getElementById("button2");
        button2.disabled = true;
        button2.style.cursor = "default";
        document.getElementById("answer2").disabled = true;
    } else {
        resultDiv.style.color = "red";
        resultDiv.textContent = "Faux ! Réessayez.";
    }
});

function goNext () {
    window.location.href = "../the-end/index.html"; // Redirige vers l'énigme suivante
}
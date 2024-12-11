
document.getElementById("enigme-form1").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    const userAnswer = document.getElementById("answer1").value.trim().toLowerCase();
    const correctAnswer = "mineur";

    const resultDiv = document.getElementById("result");

    if (userAnswer === correctAnswer) {
        resultDiv.style.color = "green";
        resultDiv.textContent = "Correct ! La réponse est 'Mineur'";
        document.getElementById("container2").classList.remove('container2Disabled');
        document.getElementById("container2").classList.add('container2Enabled');
        document.getElementById("button2").disabled = false;
        document.getElementById("answer2").disabled = false;

    } else {
        resultDiv.style.color = "red";
        resultDiv.textContent = "Faux ! Réessayez.";
    }
});

document.getElementById("enigme-form2").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    const userAnswer = document.getElementById("answer2").value;
    const correctAnswer = "57"; // La somme des nombres de 1 à 11 sauf 9

    const resultDiv = document.getElementById("enigme-form2").nextElementSibling;

    if (userAnswer === correctAnswer) {
        resultDiv.style.color = "green";
        resultDiv.textContent = "Correct ! La réponse est '57'.";
    } else {
        resultDiv.style.color = "red";
        resultDiv.textContent = "Faux ! Réessayez.";
    }
});

// }
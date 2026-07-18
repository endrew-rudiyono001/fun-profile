// Flip cards fakta seru
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
});

// Generator pertanyaan icebreaker
const questions = [
  "Kalau bisa punya satu superpower, kamu pilih apa dan kenapa?",
  "Lebih suka pantai atau gunung? Ceritain alasannya dong.",
  "Film atau series apa yang bisa kamu tonton berkali-kali?",
  "Kalau dapet libur mendadak 3 hari, mau ngapain?",
  "Ada nggak makanan yang orang lain suka tapi kamu nggak doyan?",
  "Kalau harus pindah kota, kamu pilih ke mana?",
  "Kebiasaan random yang orang lain suka heran denger?",
  "Lebih suka rencana matang atau dadakan?",
  "Satu skill yang pengen banget kamu kuasai tahun ini?",
  "Kalau jadi karakter kartun, kamu pengen jadi siapa?"
];

const questionBox = document.getElementById('questionBox');
const rollBtn = document.getElementById('rollBtn');

rollBtn.addEventListener('click', () => {
  questionBox.style.opacity = 0;
  setTimeout(() => {
    const q = questions[Math.floor(Math.random() * questions.length)];
    questionBox.textContent = q;
    questionBox.style.opacity = 1;
  }, 200);
});

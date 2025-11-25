// === CONFIGURATIONS ===
const PHONE_NUMBER = "6281224630915";
const BUSINESS_NAME = "Dimsum Rasa Prima";

// Format link WhatsApp
function waLink(message) {
  return "https://wa.me/" + PHONE_NUMBER + "?text=" + encodeURIComponent(message);
}

// Tombol navigation WhatsApp
document.getElementById("orderNow").href = waLink("Halo, saya mau pesan. Saya lihat dari website " + BUSINESS_NAME + ". Mohon infonya.");

// Tombol "Pesan Sekarang" di Hero
document.getElementById("orderHero").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = waLink("Halo, saya mau pesan Dimsum. Mohon infonya.");
});

// Footer WA
document.getElementById("waFooter").href = waLink("Halo, saya mau pesan.");

// Link telepon
document.getElementById("phoneLink").href = "tel:+62" + PHONE_NUMBER.replace(/^62/, "");

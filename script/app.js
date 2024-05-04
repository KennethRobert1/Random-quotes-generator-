const quotes = [
    "Wote wakubwa hakuna dogo wa kumtuma maandazi, By Young Killer",
    "Hakuna timu inacheza vibaya kama simba, By Njox",
    "Hakuna timu inacheza vibaya kama simba, By Njox Lee",
    "Nikiona mtu amepost receipts after kuspend najua huyo hajazoea hiyo pesa ata ye inamstua, By Ngo'mbe Mweusi Dulazack",
    "Unabembeleza msichana akuje mkule pesa yako by Ngo'mbe Mweusi",
    "Kitambo nilikuwa memelord mmoja goated sana,sai ata nikijikumbusha tu najikumbusha, I'm still a legend though,  By Ngo'mbe Mweusi",
    "A kumamake Spurs Hakuna team hapa Mzee, By Mbwa Mwizi",
    "Amekuja nimejipigia Abdul, By Mbwa Mwizi"
];

function generateQoute() {
    const rand = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerHTML = quotes[rand];
}
function generateRandomLiveEmail(baseEmail) {
    const [localPart, domain] = baseEmail.split('@');
    const match = domain.match(/^([^.]+)\.live$/);
    if (match) {
        // Generate a random uppercase letter
        const randomAlpha = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // 'A'-'Z'
        // Generate a random 2-digit number
        const randomNumber = Math.floor(10 + Math.random() * 90); // 10-99
        const newDomain = `${randomAlpha}${randomNumber}.live`;
        return `${localPart}@${newDomain}`;
    } else {
        // If not a .live domain, just return the base email
        return baseEmail;
    }
}

const baseEmail = "qatestautomation1@02.live";
const modifiedEmail = generateRandomLiveEmail(baseEmail);

module.exports = modifiedEmail;

console.log(modifiedEmail);
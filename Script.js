document.getElementById('generate-film').addEventListener('click', async function() {
    const prompt = document.getElementById('film-prompt').value;
    const theme = document.getElementById('theme').value;
    if (!prompt) {
        alert('Please enter a film story');
        return;
    }
    document.getElementById('film-container').innerHTML = `
        <p class="text-center text-purple-500">Generating cinematic adventure...</p>
    `;
    setTimeout(() => {
        document.getElementById('film-container').innerHTML = `
            <video controls class="w-full rounded-lg cinematic-zoom">
                <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_1mb.mp4" type="video/mp4">
            </video>
        `;
    }, 4000);
});

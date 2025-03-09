
const token="api key";
const inputTxt = document.getElementById("input");
const image = document.getElementById("image");
const button = document.getElementById("btn");








async function query() {
    image.src="/loading.gif";
	const response = await fetch(
		age",
		{
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ "inputs": inputTxt.value }),
		}
	);
	const result = await response.blob();
	return result;
}
button.addEventListener('click', async function() {
    try {
        const response = await query();
        const objectURL = URL.createObjectURL(response);
        
        // Set image source
        image.src = objectURL;
        
        const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', async function () {
	const fileUrl = 'https://example.com/path/to/your/file.pdf'; // Replace with your file URL
	const fileName = 'filename.pdf'; // Replace with your desired filename
	downloadButton.addEventListener('click', function () {
		// Add loading state
		this.classList.add('loading');
		
		// Simulate download completion
		setTimeout(() => {
			// Remove loading state after download completes
			this.classList.remove('loading');
		}, 1500);
	});
});

    } catch (error) {
        console.error(error);
    }
}
);
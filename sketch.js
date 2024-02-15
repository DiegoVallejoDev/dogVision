let video;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide(); // Hide the video element
}

function draw() {
    background(255);
    image(video, 0, 0, width, height);

    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
        // Remove the red channel
        pixels[i] = 0;
    }
    updatePixels();

    // Apply blur
    filter(BLUR, 4);
}
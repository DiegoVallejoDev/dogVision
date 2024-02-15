let video;

function setup() {
    createCanvas(640, 480);

    // Use the back camera by specifying the video source
    const constraints = {
        video: {
            facingMode: {
                exact: 'environment' // 'environment' refers to the back camera
            }
        }
    };

    video = createCapture(constraints);
    video.size(width, height);
    video.hide();
}

function draw() {
    background(255);
    image(video, 0, 0, width, height);
    loadPixels();

    for (let i = 0; i < pixels.length; i += 4) {
        pixels[i] = 0; // Remove the red channel
    }

    updatePixels();
    filter(BLUR, 4);
}
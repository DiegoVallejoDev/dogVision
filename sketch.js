let video;

function setup() {
    const canvas = createCanvas(640, 480, { willReadFrequently: true });
    //CanvasRenderingContext2D has a willReadFrequently property set to true
    const canvasRenderingContext2D = canvas.elt.getContext('2d');
    canvasRenderingContext2D.willReadFrequently = true;


    // Specify constraints for the back and front cameras
    const backCamConstraints = {
        video: {
            facingMode: 'environment', // Use back camera
        }
    };

    const frontCamConstraints = {
        video: {
            facingMode: 'user', // Use front camera
        }
    };

    // Try to use back camera, and if not available, use front camera
    video = createCapture(backCamConstraints, function (stream) {
        if (!stream) {
            video = createCapture(frontCamConstraints); // Fall back to front camera
        }
    });

    video.size(width, height);
    video.hide();
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
    filter(BLUR, 4);
}
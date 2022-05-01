song1 = "";
song2 = "";


song1_status = "";
song2_status = "";


scorerightwrist = 0;
scoreleftwrist = 0;
rightwristx = 0;
rightwristy = 0;
leftwristx = 0;
leftwristy = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
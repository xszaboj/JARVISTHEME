function createParticles(){
    var canvas = document.getElementById('particle1');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 70);
    context.lineTo(10, 85);
    context.lineTo(10, 135);
    context.lineTo(0, 150);
    context.lineTo(0, 480);
    context.lineTo(5, 490);
    context.lineTo(10, 490);
    context.lineTo(20, 490);
    context.lineTo(20, 250);
    context.lineTo(10, 235);
    context.lineTo(10, 185);
    context.lineTo(20, 170);
    context.lineTo(20, 40);
    context.lineTo(10, 30);
    context.lineTo(10, 20);

    context.closePath();
    context.lineWidth = 1;
    context.fillStyle = 'rgba(2,254,255,0.3)';
    context.fill();
    context.strokeStyle = 'transparent';
    context.stroke();

    var canvas = document.getElementById('particle1_1');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.lineTo(0, 0);
    context.lineTo(10, 15);
    context.lineTo(10, 65);
    context.lineTo(0, 80);
    context.lineTo(0, 0);

    context.closePath();
    context.lineWidth = 1;
    context.fillStyle = 'rgba(2,254,255,0.3)';
    context.fill();
    context.strokeStyle = 'transparent';
    context.stroke();

    var canvas = document.getElementById('particle1_2');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.lineTo(10, 80);
    context.lineTo(0, 65);
    context.lineTo(0, 15);
    context.lineTo(10, 0);
    context.lineTo(10, 80);

    context.closePath();
    context.lineWidth = 1;
    context.fillStyle = 'rgba(2,254,255,0.3)';
    context.fill();
    context.strokeStyle = 'transparent';
    context.stroke();
}
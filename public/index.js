// AFRAME.registerComponent('listen-to-scale', {
//     init:  function() {
//         this.handleClick = this.handleClick.bind(this);
//         const [up, down] = document.querySelectorAll('.controls button');
//         this.numberScale = 0;
//         this.initialScale = this.el.object3D.scale.x; 
//         up.addEventListener('click', this.handleClick);
//         down.addEventListener('click', this.handleClick);
//     },

//     handleClick: function(e) {
//         if(e.target.id === 'up') {
//             if(this.numberScale < 5) {
//                 this.numberScale++;
//             }
//         }
//         else {
//             if(this.numberScale > 0) {
//                 this.numberScale--;
//             }
//         }

//         const newScale = this.initialScale + this.initialScale * (0.5 * this.numberScale);

//         this.el.object3D.scale.x = 
//             this.el.object3D.scale.y = 
//                 this.el.object3D.scale.z = newScale;
//     }
// });
const {mouse , left , up , right , down } = require('@nut-tree/nut-js');

(async () =>{
    await mouse.move(down(200));
    await mouse.move(left(200));

})() ;
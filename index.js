// const paint = document.querySelector('#paint')

// let ctx = paint.getContext('2d')
// let x = 0
// let y = 0
// let rect = paint.getBoundingClientRect()
// console.log(rect)
// let style = '#000'
// let isDrawing = false

// paint.addEventListener('mousedown', e => {
//     x = e.clientX - rect.left
//     y = e.clientY - rect.top
//     isDrawing = true
// })

// paint.addEventListener('mousemove', e => {
//     if(isDrawing === true) {
//         lineDraw(ctx, x, y, (e.clientX - rect.left), (e.clientY - rect.top), style)
//         x = e.clientX - rect.left
//         y = e.clientY - rect.top
//     }
// })

// paint.addEventListener('mouseup', e => {
//     x = e.clientX - rect.left
//     y = e.clientY - rect.top
//     isDrawing = false
//     x = 0
//     y = 0
// })


// function lineDraw(ctx, x1, y1, x2, y2, styleColor) {
//     ctx.beginPath()
//     ctx.strokeStyle = styleColor
//     ctx.lineWidth = 5
//     ctx.moveTo(x1, y1)
//     ctx.lineTo(x2, y2)
//     ctx.lineCap = ctx.lineJoin = 'round'
//     ctx.shadowColor = styleColor
//     ctx.stroke()
//     // ctx.closePath()
// }


function dragBox(el) {
    let pos1 = 0
    let pos2 = 0
    let pos3 = 0
    let pos4 = 0
    if(el) {
        el.onmousedown = dragMouseDown
    } else {
        el.onmousedown = dragMouseDown
    }

    function dragMouseDown(e) {
        e = e || window.event
        e.preventDefault();
        pos3 = e.clientX
        pos4 = e.clientY
        document.onmouseup = closeDragElement
        document.onmousemove = elementDrag
    }
    
    function elementDrag(e) {
        e = e || window.event
        e.preventDefault();
        pos1 = pos3 - e.clientX
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY
        el.style.top = (el.offsetTop - pos2) + 'px'
        el.style.left = (el.offsetLeft - pos1) + 'px'
        if (el.offsetTop + 100 > 650) {
            el.style.transform = 'scale(0.7)'
        } else if (el.offsetTop + 100 < 650) {
            el.style.transform = 'scale(1)'
        }
    }
    
    function closeDragElement() {
        if (el.offsetTop + 100 > 650) {
            el.style.display = 'none'
        } else if (el.offsetTop + 100 < 650) {
            el.style.display = 'block'
        }
        document.onmouseup = null
        document.onmousemove = null
    }
}

dragBox(document.querySelector('.draggable'))
dragBox(document.querySelector('.draggable2'))
dragBox(document.querySelector('.draggable3'))
dragBox(document.querySelector('.draggable4'))
dragBox(document.querySelector('.draggable5'))

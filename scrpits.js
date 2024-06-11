let stack = [];

document.addEventListener("DOMContentLoaded", function() {
    updateStackDisplay();

    // Add event listeners for buttons
    document.getElementById('pushButton').addEventListener('click', push);
    document.getElementById('popButton').addEventListener('click', pop);
    document.getElementById('peekButton').addEventListener('click', peek);
});

function updateStackDisplay() {
    const stackContainer = document.getElementById('stackContainer');
    stackContainer.innerHTML = '';
    stack.forEach(element => {
        const div = document.createElement('div');
        div.className = 'stack-element';
        div.innerText = element;
        stackContainer.appendChild(div);
    });
}

function push() {
    const value = document.getElementById('stackValue').value;
    if (value) {
        stack.push(value);
        document.getElementById('stackValue').value = '';
        updateStackDisplay();
    } else {
        alert('Ingrese un valor para push.');
    }
}

function pop() {
    if (stack.length > 0) {
        const poppedValue = stack.pop();
        updateStackDisplay();
        document.getElementById('output').innerText = `Elemento removido: ${poppedValue}`;
    } else {
        alert('La pila está vacía.');
    }
}

function peek() {
    if (stack.length > 0) {
        const topValue = stack[stack.length - 1];
        document.getElementById('output').innerText = `Elemento superior: ${topValue}`;
    } else {
        alert('La pila está vacía.');
    }
}

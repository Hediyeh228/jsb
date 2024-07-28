document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    const dingSound = document.getElementById('ding-sound');

    orderButton.addEventListener('click', handleOrder);

    function handleOrder() {
        const name = document.getElementById('name').value.trim();
        const base = document.getElementById('base').value;
        const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(fruit => fruit.value);
        const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(extra => extra.value);

        if (name === '' || fruits.length === 0) {
            alert('Please enter your name and select at least one fruit.');
            return;
        }

        const smoothie = new Smoothie(name, base, fruits, extras);
        displayOrder(smoothie);
        dingSound.play();
    }

    class Smoothie {
        constructor(name, base, fruits, extras) {
            this.name = name;
            this.base = base;
            this.fruits = fruits;
            this.extras = extras;
        }

        getDescription() {
            return `${this.name} ordered a smoothie with ${this.base} base, containing ${this.fruits.join(', ')}, and extras: ${this.extras.length > 0 ? this.extras.join(', ') : 'none'}.`;
        }
    }

    function displayOrder(smoothie) {
        const orderSummary = document.getElementById('order-summary');
        orderSummary.innerHTML = `
            <div class="order-item">
                <span>${smoothie.getDescription()}</span>
            </div>
        `;
    }
});

const ladder = {
    stop: 0,
    up() {
        this.stop++;
        return this;
    },
    down() {
        this.stop--;
        return this;
    },
    showStep: function () {
        console.log(this.stop);
        return this;
    }

}

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().up().down().showStep();
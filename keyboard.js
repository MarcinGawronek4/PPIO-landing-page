var wrapper = new Vue({
    el: '.pianoWrapper',
    data: {
        background: "#FFFFFF",
        notes: [
            {key: 65, name: "C2.mp3"},
            {key: 83, name: "D2.mp3"},
            {key: 68, name: "E2.mp3"},
            {key: 70, name: "F2.mp3"},
            {key: 71, name: "G2.mp3"},
            {key: 72, name: "A2.mp3"},
            {key: 74, name: "B2.mp3"},
            {key: 75, name: "C3.mp3"},
            {key: 76, name: "D3.mp3"},
            {key: 90, name: "E3.mp3"},
            {key: 88, name: "F3.mp3"},
            {key: 67, name: "G3.mp3"},
            {key: 86, name: "A3.mp3"},
            {key: 66, name: "B3.mp3"},
            {key: 78, name: "C4.mp3"},
            {key: 77, name: "D4.mp3"},
            {key: 188, name: "E4.mp3"},
            {key: 81, name: "Db2.mp3"},
            {key: 87, name: "Eb2.mp3"},
            {key: 69, name: "Gb2.mp3"},
            {key: 82, name: "Ab2.mp3"},
            {key: 84, name: "Bb2.mp3"},
            {key: 89, name: "Db3.mp3"},
            {key: 85, name: "Eb3.mp3"},
            {key: 73, name: "Gb3.mp3"},
            {key: 79, name: "Ab3.mp3"},
            {key: 80, name: "Bb3.mp3"},
            {key: 219, name: "Db4.mp3"},
            {key: 221, name: "Eb4.mp3"}
        ]
    },
    methods: {
        /* Playing the note */
        playNote: function (note) {
            if (note) {
                var audio = new Audio("notes/" + note);
                audio.play();

            }
        },
        /* Monitoring pressed keys and changing the color of key on the piano */
        keyMonitor: function (evt) {
            for (var key of this.notes)
                if (evt.keyCode == key.key) {
                    this.playNote(key.name);
                    this.$refs[key.key].style.background = "#696969";
                    setTimeout(() => {
                        this.$refs[evt.keyCode].style.background = "#FFFFFF"
                    }, 100);

                }
        },

    }

})
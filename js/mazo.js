class Juego {
    mezclarMezcla (deck){
        var v1 = deck.length - 1;
        var v2;
        var temp;
        mover(v1, v2, temp, deck);

        function mover(v1, v2, temp, deck) {
            if (v1 > 0) {
                v2 = Math.floor(Math.random() * (v1 + 1));
                temp = deck[v1];
                deck[v1] = deck[v2];
                deck[v2] = temp;
                v1--;
                mover(v1, v2, temp, deck);
            }
            return deck;
        }
    }
}
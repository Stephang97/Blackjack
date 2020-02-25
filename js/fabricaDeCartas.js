class FabricaDeCartas {
    constructor() {
        this.palo = [new Palo('trébol', 'negro', '♣'), new Palo('corazón', 'negro', '♠'), new Palo('corazón', 'rojo', '♥'), new Palo('diamante', 'rojo', '♦')];
        this.texto = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.mazo = [];
        this.deckMezclado = [];
        this.imagenes = ['cartas/trebol/TA.png', 'cartas/trebol/T2.png', 'cartas/trebol/T3.png', 'cartas/trebol/T4.png', 'cartas/trebol/T5.png', 'cartas/trebol/T6.png',
            'cartas/trebol/T7.png', 'cartas/trebol/T8.png', 'cartas/trebol/T9.png', 'cartas/trebol/T10.png', 'cartas/trebol/TJ.png', 'cartas/trebol/TQ.png', 'cartas/trebol/TK.png',
            'cartas/corazon negro/CNA.png', 'cartas/corazon negro/CN2.png', 'cartas/corazon negro/CN3.png', 'cartas/corazon negro/CN4.png', 'cartas/corazon negro/CN5.png', 'cartas/corazon negro/CN6.png', 'cartas/corazon negro/CN7.png',
            'cartas/corazon negro/CN8.png', 'cartas/corazon negro/CN9.png', 'cartas/corazon negro/CN10.png', 'cartas/corazon negro/CNJ.png', 'cartas/corazon negro/CNQ.png', 'cartas/corazon negro/CNK.png', 'cartas/corazon rojo/CRA.png',
            'cartas/corazon rojo/CR2.png', 'cartas/corazon rojo/CR3.png', 'cartas/corazon rojo/CR4.png', 'cartas/corazon rojo/CR5.png', 'cartas/corazon rojo/CR6.png', 'cartas/corazon rojo/CR7.png', 'cartas/corazon rojo/CR8.png', 'cartas/corazon rojo/CR9.png',
            'cartas/corazon rojo/CR10.png', 'cartas/corazon rojo/CRJ.png', 'cartas/corazon rojo/CRQ.png', 'cartas/corazon rojo/CRK.png', 'cartas/brillo/BA.png', 'cartas/brillo/B2.png', 'cartas/brillo/B3.png', 'cartas/brillo/B4.png', 'cartas/brillo/B5.png',
            'cartas/brillo/B6.png', 'cartas/brillo/B7.png', 'cartas/brillo/B8.png', 'cartas/brillo/B9.png', 'cartas/brillo/B10.png', 'cartas/brillo/BJ.png', 'cartas/brillo/BQ.png', 'cartas/brillo/BK.png'
        ];
    }

    crear()  {
        var val = [0];
        var i=0;
            if(this.mazo.length == 0){
                this.palo.forEach(reyes=>{
                    this.texto.forEach(re=>{
                        if(re =='A'){
                            val = [1, 11]

                        } else if (re =='J' || re =='Q' || re =='K'){
                            val = [10];
                        }else{
                            val = [parseInt(re)];
                        }

                        let cart =  new Carta (re, reyes.nombre, val, this.imagenes[i]);
                        i++;
                        this.mazo.push(cart);
                    })
                })
            }
            return this.mazo
        }

        mezclar(){
            let numCartas = this.mazo.length;
            let posAleatoria;

            this.mazo.forEach((rec)=> {

                posAleatoria = Math.floor(Math.random() * numCartas);

                this.deckMezclado[posAleatoria] = rec;
            })
            return this.deckMezclado;
        }

        pedir(){
            let quitar = nuevo.mazo.pop();
            document.getElementById('cambioCarta').src=quitar.imagen;
            console.log(quitar)
            let img = document.createElement('img');
            let conten = document.getElementById('cartasJugadasJugador')
            img.setAttribute('src', `${quitar.imagen}`)
            img.setAttribute('style',`width:100px; height:140px;`);
            conten.appendChild(img);
            
        }

}
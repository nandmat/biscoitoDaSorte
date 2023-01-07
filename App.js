import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Não compense na ira o que lhe falta na razão.',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'Não há que ser forte. Há que ser flexível.',
      'Siga os bons e aprenda com eles.',
      'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Os defeitos são mais fortes quando o amor é fraco.',
      'Espere pelo mais sábio dos conselhos: o tempo.',
      'Todas as coisas são difíceis antes de se tornarem fáceis.',
      'Vencer é 90 por cento suor e 10 por cento de engenho.'
    ]
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length )

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')

    })
  
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Abrir Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#fff',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    backgroundColor:'#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default App;
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {

const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
const [jogadorAtual, setJogadorAtual] = useState('X');
const [mensagem, setMensagem] = useState('');
const [corMensagem, setCorMensagem] = useState('black');

const azul = '#0000FF';
const verde = "#94E9D4";

const trocarBotao = (indice) => {

    if(tabuleiro[indice] !== null || mensagem !== ''){
      return;
    }

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[indice] = jogadorAtual;
    setTabuleiro(novoTabuleiro);

    const vencedor = verificarVencedor(novoTabuleiro);
    if (vencedor) {
      setMensagem(`Jogador ${vencedor} venceu!`);
      setCorMensagem(vencedor === 'X' ? azul : verde);
      return;
    }

    if (novoTabuleiro.every(celula => celula !== null)){
      setMensagem('Empate!')
      setCorMensagem('black');
    }

    setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
};

const verificarVencedor = (tabuleiro) => {
const combinacoesVitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


  for (let i = 0; i < combinacoesVitoria.length; i++){
    const [a, b, c] = combinacoesVitoria[i];
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]){
      return tabuleiro[a];
    }
  }
  return null;
};

const resetarJogo = () => {
  setTabuleiro(Array(9).fill(null));
  setJogadorAtual('X');
  setMensagem('');
  setCorMensagem('black');
};

const renderizarCelula = (indice) => (
  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(indice)}>
    <Text style={[Styles.texto, { color: tabuleiro[indice] === 'X' ? azul : verde }]}>
      {tabuleiro[indice]}
    </Text>
  </TouchableOpacity>
);


	return (
    
    <View style={Styles.container}>
      <Text style={Styles.titulo}>Jogo da Velha</Text>

<View style={Styles.linha}>
  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(0)}>
    <Text style={[Styles.texto, { color: tabuleiro[0] === 'X' ? azul : verde }]}>
      {tabuleiro[0]}
    </Text>
  </TouchableOpacity>

  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(1)}>
    <Text style={[Styles.texto, { color: tabuleiro[1] === 'X' ? azul : verde }]}>
      {tabuleiro[1]}
    </Text>
  </TouchableOpacity>

  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(2)}>
    <Text style={[Styles.texto, { color: tabuleiro[2] === 'X' ? azul : verde }]}>
      {tabuleiro[2]}
    </Text>
  </TouchableOpacity>
</View>



                
<View style={Styles.linha}>
  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(3)}>
    <Text style={[Styles.texto, { color: tabuleiro[3] === 'X' ? azul : verde }]}>
      {tabuleiro[3]}
    </Text>
  </TouchableOpacity>

  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(4)}>
    <Text style={[Styles.texto, { color: tabuleiro[4] === 'X' ? azul : verde }]}>
      {tabuleiro[4]}
    </Text>
  </TouchableOpacity>

  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(5)}>
    <Text style={[Styles.texto, { color: tabuleiro[5] === 'X' ? azul : verde }]}>
      {tabuleiro[5]}
    </Text>
  </TouchableOpacity>
</View>


                
<View style={Styles.linha}>
  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(6)}>
    <Text style={[Styles.texto, { color: tabuleiro[6] === 'X' ? azul : verde }]}>
      {tabuleiro[6]}
    </Text>
  </TouchableOpacity>

  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(7)}>
    <Text style={[Styles.texto, { color: tabuleiro[7] === 'X' ? azul : verde }]}>
      {tabuleiro[7]}
    </Text>
  </TouchableOpacity>

  <TouchableOpacity style={Styles.botao} onPress={() => trocarBotao(8)}>
    <Text style={[Styles.texto, { color: tabuleiro[8] === 'X' ? azul : verde }]}>
      {tabuleiro[8]}
    </Text>
  </TouchableOpacity>
</View>


    {/* Mensagem de vitória ou empate */}
    <Text style={[Styles.mensagem, { color: corMensagem}]}>
    {mensagem}
    </Text>

    {/* Botão para reiniciar o jogo */}
    <TouchableOpacity style={Styles.resetBtn} onPress={resetarJogo}>
    <Text style={Styles.textoReset}>Resetar</Text>
    </TouchableOpacity>
    </View>

	);
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  botao: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#CCC',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 50,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  mensagem: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
  },
  resetBtn: {
    backgroundColor: '#94E9D4',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    width: 150,
  },
  textoReset: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
});


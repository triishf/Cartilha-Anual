import * as React from 'react';
import { Pressable, View, Text, StyleSheet, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'center',}}>
        <b>Cartilha anual</b>

        <p>
          Todos os anos temos como objetivo melhorar a conciência da população sobre os cuidados que a OMS sugere
        </p>
        <p/>
        Este aplicativo tem o objetivo de mostrar cada mês do ano sobre os perigos causados por algumas doenças.
      </Text>
      <Image
      style={{height:160, width:250}}
      source={require('./assets/png/cores1.png')}
      />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10,  }}>
      
      </Pressable>
      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#ee82ee"
        onPress={() => navigation.openDrawer()}
        />
      </div>
    </View>
  );
}

function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 25, fontSize: 16, tWeight: 'bold', textAlign: 'center',
        }}>
      <b>Qual a importância dessas campanhas e o que aprender com elas?</b>
      <p/>
        As campanhas mensais temáticas expostas acima são um alerta para a conscientização sobre a prevenção de doenças, abertura de debates sobre cada doença, prevenção e troca de experiências com pessoas que superaram a doença.

      </Text>
      <Image
      style={{height:185, width:250,}}
      source={require('./assets/png/cores2.jpeg')}
      />

      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10,  }}>
      
      </Pressable>
      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#663399"
        onPress={() => navigation.openDrawer()}
        />
      </div>
    </View>
  );
}

function Janeiro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Janeiro Branco</b>
      </Text>
      <Text
        style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
        }}>
        Janeiro Branco é um alerta sobre a saúde mental. A campanha visa demonstrar a importância que cuidar da saúde não significa apenas cuidar da saúde do corpo. Cuidar da mente também é fundamental para o total bem-estar e equilíbrio entre corpo e mente.
      </Text>
       <Image
        style={{ height: 150, width: 150, }}
        source={require('./assets/png/janeiro1.png')}
        />

     <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
      </Pressable>
      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#c0c0c0"
        onPress={() => navigation.openDrawer()}
        />
      </div>
    </View>
  );
}

function Fevereiro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Fevereiro Roxo e amarelo</b>
      </Text>
      <Text
      style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify',
      }}>
        Fevereiro Roxo é o mês de conscientização sobre as doenças: lúpus, fibromialgia e mal de alzheimer. O Fevereiro Laranja, por sua vez, conscientiza sobre a leucemia. 
      </Text>
      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/fevereiro1.png')}
      />

      <Pressable 
      onPress={() => navigation.openDrawer()}
      style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
      
      </Pressable>
      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#663399"
        onPress={() => navigation.openDrawer()}
        />
    </div>
    </View>
  );
}

function Marco({ navigation}) {
  return(
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Março Azul</b>
      </Text>
      <Text
      style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify', }}>
      O Março Azul traz o debate sobre a prevenção ao câncer colorretal.
      </Text>

      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/marco1.png')}
      />

      <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
      
      </Pressable>
      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#1e90ff"
        onPress={() => navigation.openDrawer()}
        />
      </div>
    </View>
  );
}

function Abril({ navigation}) {
  return(
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Abril Verde e Azul</b>
      </Text>
      <Text
      style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify', }}>
      Abril Verde significa a conscientização sobre a importância da segurança no trabalho. O mês também é chamado de Abril Azul para trazer o debate sobre o autismo, que tem a data 02.04 como o Dia Mundial da Conscientização do Autismo.
      </Text>

      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/abril1.png')}
      />

      <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
      
      </Pressable>
      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#228b22"
        onPress={() => navigation.openDrawer()}
        />
      </div>
    </View>
  );
}

function Maio({ navigation}) {
  return(
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Maio Amarelo e Vermelho</b>
      </Text>
      <Text
      style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify', }}>
      O Maio Amarelo reacende o debate sobre a prevenção de acidentes de trânsito. Já o Maio Vermelho tem por objetivo prevenir a hepatite.
      </Text>

      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/maio1.png')}
      />

      <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
      </Pressable>

      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#ffd700"
        onPress={() => navigation.openDrawer()}
        />
      </div>
    </View>
  );
}

function Junho({ navigation}) {
  return(
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Junho Vermelho e Laranja</b>
      </Text>
      <Text
      style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify', }}>
      Vermelho é a cor comemorativa do mês de junho sobre a importância da doação de sangue, que tem a data 14.06 como o Dia Mundial do Doador de Sangue. E o Junho Laranja é voltado para a conscientização sobre a anemia e leucemia.
      </Text>

      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/junho1.png')}
      />

      <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
      </Pressable>


      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#b22222"
        onPress={() => navigation.openDrawer()}
        />
      </div>
    </View>
  );
}

function Julho({ navigation}) {
  return(
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Julho Amarelo</b>
      </Text>
      <Text
      style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify', }}>
      O Julho Amarelo traz à tona a conscientização sobre as hepatites virais e também sobre o câncer ósseo.
      </Text>

      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/julho1.png')}
      />

      <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
      </Pressable>


      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#ffd700"
        onPress={() => navigation.openDrawer()}
        />
      </div>

    </View>
  );
}

function Agosto({ navigation}) {
  return(
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Agosto dourado</b>
      </Text>
      <Text
      style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify', }}>
      O Agosto Dourado é o mês de informação sobre o aleitamento materno, que, inclusive, tem os dias entre 01 a 07 de agosto como a Semana Mundial da Amamentação.
      </Text>

      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/agosto1.png')}
      />

      <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
      </Pressable>


      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#daa520"
        onPress={() => navigation.openDrawer()}
        />
      </div>
    </View>
  );
}

function Setembro({ navigation}) {
  return(
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Setembro verde, amarelo e vermelho</b>
      </Text>
      <Text
      style={{ margin: 25, fontSize: 16, tWeight: 'bold', textAlign: 'justify', }}>
      Verde é a cor do mês de setembro para a conscientização sobre a doação de órgãos e prevenção ao câncer de intestino. Neste mês, a data 27 de setembro é o Dia Nacional de Doação de Órgãos e Tecidos. Outra cor para o mês de setembro é o amarelo, que tem como objetivo a prevenção ao suicídio. Setembro também recebe a cor vermelha para a conscientização sobre a prevenção das doenças cardiovasculares.
      </Text>

      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/setembro1.png')}
      />

      <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
      </Pressable>


      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#b22222"
        onPress={() => navigation.openDrawer()}
        />
      </div>
    </View>
  );
}
 
function Outubro({ navigation}) {
  return(
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Outubro rosa</b>
      </Text>
      <Text
      style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify', }}>
      Sendo o mês mais divulgado e conhecido por todos, o Outubro Rosa é dedicado à conscientização sobre o câncer de mama, foi criado nos Estados Unidos na década de 1990.
      </Text>

      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/outubro1.png')}
      />

      <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
      </Pressable>


      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#dda0dd"
        onPress={() => navigation.openDrawer()}
        />
      </div>

    </View>
  );
}

function Novembro({ navigation}) {
  return(
    <View style={styles.container}>
      <Text
      style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
        <b>Novembro azul e dourado</b>
      </Text>

      <Text
      style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify', }}>
      O mês de novembro também é bastante conhecido por ser o mês azul, de combate ao câncer de próstata e ao diabetes. O mês também tem a cor dourada, em referência à conscientização sobre o câncer infanto-juvenil.
      </Text>

      <Image
      style={{height:150, width: 150, }}
      source={require('./assets/png/novembro1.png')}
      />

      <Pressable
      onPress={() => navigation.openDrawer()}
      style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
      </Pressable>

      <div style={{boxShadow: '1px 1px 3px black'}}>
        <Button
        title="Voltar"
        color="#daa520"
        onPress={() => navigation.openDrawer()}
        />
      </div>

    </View>
  );
}

function Dezembro({ navigation}) {

  return(
    <View style={styles.container}>
    <Text
    style={{ margin: 25, fontSize: 20, tWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
      <b>Dezembro Vermelho e laranja</b>
    </Text>
    <Text
    style={{ margin: 25, fontSize: 18, tWeight: 'bold', textAlign: 'justify', }}>
    O mês de dezembro também tem mais de uma cor, o vermelho e o laranja. O Dezembro Vermelho ressalta a importância da prevenção contra a AIDS, e o Dezembro Laranja traz o debate sobre o combate ao câncer de pele.
    </Text>

    <Image
    style={{height:150, width: 150, }}
    source={require('./assets/png/dezembro1.png')}
    />

    <Pressable
    onPress={() => navigation.openDrawer()}
    style={{ padding:10, marginBottom: 10, marginTop: 10 }}>
    </Pressable>


    <div style={{boxShadow: '1px 1px 3px black'}}>
      <Button
      title="Voltar"
      color="#b22222"
      onPress={() => navigation.openDrawer()}
      />
    </div>

    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Janeiro" component={Janeiro} />
        <Drawer.Screen name="Fevereiro" component={Fevereiro} />
        <Drawer.Screen name="Março" component={Marco} />
        <Drawer.Screen name="Abril" component={Abril} />
        <Drawer.Screen name="Maio" component={Maio} />
        <Drawer.Screen name="Junho" component={Junho} />
        <Drawer.Screen name="Julho" component={Julho} />
        <Drawer.Screen name="Agosto" component={Agosto} />
        <Drawer.Screen name="Setembro" component={Setembro} />
        <Drawer.Screen name="Outubro" component={Outubro} />
        <Drawer.Screen name="Novembro" component={Novembro} />
        <Drawer.Screen name="Dezembro" component={Dezembro} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
})

export default App;
import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const  [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }


  const completeTask =(index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      {/*Today's task*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the task will go! */}
          {
            taskItems.map((item, index) =>{
              return(
                <TouchableOpacity key={index} onPress={() => completeTask()}>

                  <Task  text ={item}/>
                </TouchableOpacity>
              )
            })
          }
          {/* <Task text = {"Task 1"}/>
          <Task text = {"Task 2"}/> */}
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView behavior={Platform.OS ==="android" ? "padding": "height"} 
      style={styles.writeTaskWrapper}>
        <TextInput style ={styles.input} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() =>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: "bold"
  },
  items:{
    marginTop:30, 

  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    marginLeft:1
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:'#C0C0C0',
    borderWidth:1,
    marginRight:1
  },
  addText:{},

});

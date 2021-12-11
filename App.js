import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { FlatList, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskComponent from './components/TaskComponent';

export default function App() {
  const [taskTitle,setTaskTitle]= useState('');

  const [taskItems,setTaskItems]= useState([]);

  const [incompleteTasksCount, setIncompleteTasksCount] = useState(0);

  const getIncompletTasksCount = () => {
    var count = 0;
    taskItems.forEach((taskItem) => {
      if (taskItem.isDone === false) {
        count++;
      }
    })
    setIncompleteTasksCount(count);
  }

  useEffect(() => {
    getIncompletTasksCount();
  }, [taskItems])

  const handelAddTask =()=>{
    const task = {
      taskTitle: taskTitle,
      isDone: false
    }
    setTaskItems([...taskItems,task])
    setTaskTitle('')
    Keyboard.dismiss()
  }

  const switchCompleteTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy[index].isDone = !itemCopy[index].isDone;
    setTaskItems(itemCopy);
  }

  const deleteTask =(index)=>{
    let itemCopy =[...taskItems];
    itemCopy.splice(index,1);
    setTaskItems(itemCopy);
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.tasksWrapper}> 
        <Text style ={styles.sectionTitel}>
          Today Tasks {incompleteTasksCount} From {taskItems.length}
        </Text>


      <View View style={styles.items}>
          {
            taskItems.map((item ,index)=>{
              return (
              <View key={index} style={styles.renderd}>
                  <TaskComponent  item={item} callback={() => switchCompleteTask(index)} />
                  <TouchableOpacity style={styles.squere} onPress= {()=>deleteTask(index)}><Text style={styles.tex}>X</Text></TouchableOpacity>
              </View>
                )
            })
          }
      </View>
        
      </View>
      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder="Write a task" value={taskTitle} onChangeText={text =>setTaskTitle(text)}/>
        <TouchableOpacity  onPress={()=>handelAddTask()}>
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
    backgroundColor: '#e8eaed',

  },

  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
sectionTitel:{
  fontSize:24,
fontWeight:'bold'
},
items:{
  marginTop:30,
},

writeTaskWrapper:{
  position:'absolute',
  bottom:60,
  width:"100%",
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
},
input:{
  paddingVertical:15,
  width:250,
  paddingHorizontal:16,
  backgroundColor:'#fff',
  borderRadius:60,
  borderColor:'#c0c0c0',
  borderWidth:1,
},
addWrapper:{
  width:60,
  height:60,
  borderRadius:70,
  backgroundColor:'#fff',
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#c0c0c0',
  borderWidth:1,
},
addText:{},
renderd:{
  flexDirection:'row',
  justifyContent:"space-between"
},
squere:{
  width:24,
  height:24,
  backgroundColor:"#55bcf6",
  opacity:0.4,
  borderRadius:6, 
  marginRight:20,
  marginTop:14
},
tex:{
  textAlign:'center'
}
});

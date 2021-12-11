import React,{useState} from "react";

import { View , Text , StyleSheet, TouchableOpacity } from "react-native";



const TaskComponent =(props)=>{

    
    return (
        <View style={styles.item} >
            <View style={styles.itemLeft}>
                <View style={styles.squere}>
                </View>
                <Text style={{
                    ...styles.itemText,
                    textDecorationLine: props.item.isDone === true ? "line-through" : 'none'
                }}>{props.item.taskTitle}</Text>
            </View>
            <TouchableOpacity onPress={()=> props.callback()}
            
         ><View style={{backgroundColor:props.item.isDone === true ? '#00ff00' : '#ff0000',width:15,height:10}}
         ></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({


    
    item:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
        width :'85%'
    },
    itemLeft:{

        flexDirection:"row",
        alignItems:"center",
        flexWrap:'wrap'
    },
    squere:{
        width:20,
        height:20,
        backgroundColor:"#55bcf6",
        opacity:0.4,
        borderRadius:6, 
        marginRight:20
    },
    itemText:{
        maxWidth:'80%',
        fontSize:18 ,
    },
    circular:{
        width:12,
        height:12,
        borderRadius:6,
        borderColor:'#55bcf6',
        borderWidth:2
        // backgroundColor:{color}
    },
});


export default TaskComponent;
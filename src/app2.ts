import  express, { NextFunction, Request, Response }  from "express";
import { ITodo, ITodo2 } from "./types/generalTypes";
let prompt = require('prompt');
prompt.start();

    const app = express();
    const port = 9001;
    let todos:ITodo2[] = []

    app.use(express.json())

    todos.push(
        {
        id:"1",
        title:"Task Manager",
        desccription:"super",
        status:true?"Done":"Not Done",
        deadline: 8+"_Houres"
    },{
        id:"2",
        title:"Java Task Manager",
        desccription:"super",
        status:false?"Done":"Not Done",
        deadline: 8+"_Houres"
    },{
        id:"3",
        title:"PHP Task Manager",
        desccription:"super",
        status:true?"Done":"Not Done",
        deadline: 8+"_Houres"
    }
    );

    prompt.get(['search'], function (res:any, result:any ) {
        console.log(`Title: ${result.search}`)
        let z = result.search.toLowerCase() || result.search.toLowerCase() 
        for(let i=0;i<todos.length;i++){
  if(todos[i].title.toLowerCase() === z || todos[i].title.toLowerCase() === z){
            console.log(todos[i])
        }
    }
    })
 


    app.get('/',(req:Request,res:Response)=>{
        console.log(req.body)
          return  res.send(todos);
         })

         

         app.get('/todo/:title',(req,res)=>{
                const {title}=req.params;
                let z = title.toLowerCase() || title.toLowerCase() 
                todos.map((search)=>{
 return  search.title.toLowerCase()===z || search.title.toUpperCase()===z? res.json(search) : "Not Found"
                    
                })
               })



    app.post("/todo",(req:Request,res:Response)=>{
        const newTodo=req.body as ITodo2;
        todos.push(newTodo)
        res.json({
            message:"Todo added"
        })
    })

    app.put("/todo/:id",(req,res)=>{
        const updateTodo = req.body as ITodo2;
        const { id } = req.params;
       const updateTodoList = todos.filter((todo)=>{
        return todo.id !== id ;
       })

       updateTodoList.push(updateTodo)
       todos = updateTodoList;
       return res.json({
        message:"Todo Update"
       })
    })


    app.delete('/todo/:id',(req,res)=>{
        const { id } = req.params;
       const updateTodoList = todos.filter((todo)=>{
        return todo.id !== id ;
       });
       todos = updateTodoList;
       return res.json({
        message:"Todo Deleted"
       })
    })
    


    app.listen(port, () => {
        //  console.log(`Example app listening at http://localhost:${port}`)
         })
import  express, { NextFunction, Request, Response }  from "express";
import { ITodo } from "./types/generalTypes";

    const app = express();
    const port = 8001;
    let todos:ITodo[] = []

    app.use(express.json())

    todos.push({
        id:"1",
        name:"Nawaf",
        grade:"100"
    });


    app.get('/todo',(req:Request,res:Response)=>{
        console.log(req.body)
          return  res.send(todos);
         })

    app.post("/todo",(req:Request,res:Response)=>{
        const newTodo=req.body as ITodo;
        todos.push(newTodo)
        res.json({
            message:"Todo added"
        })
    })

    app.put("/todo/:id",(req,res)=>{
        const updateTodo = req.body as ITodo;
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
         console.log(`Example app listening at http://localhost:${port}`)
         })
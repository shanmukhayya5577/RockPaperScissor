import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'rockpaper';

  txt:any=""
  user:any
  system:any

  ngOnInit(): void {

  let btns=document.getElementById("btns")
    let btn=btns?.querySelectorAll(".btn")
    let systemArr=["rock","paper","scissor"]
    btn?.forEach((user:any)=>{
      user.addEventListener("click",()=>{
    let rand=Math.floor(Math.random()*3)
    this.user=user.value
    this.system=systemArr[rand]
        console.log(rand)
        console.log(systemArr[rand]); 
        if (user.value ===systemArr[rand]) {
          this.txt="RESTART"
        }else if(user.value==="paper" && systemArr[rand]==="rock"){
          this.txt="You won"
        }
        else if(user.value==="scissor" && systemArr[rand]==="rock"){
          this.txt="You loose"
        }
        else if(user.value==="rock" && systemArr[rand]==="paper"){
          this.txt="You loose"
        }
        else if(user.value==="scissor" && systemArr[rand]==="paper"){
          this.txt="You win"
        }
        else if(user.value==="rock" && systemArr[rand]==="scissor"){
          this.txt="You win"
        } else if(user.value==="paper" && systemArr[rand]==="scissor"){
          this.txt="You loose"
        }
      })

    })
  }

}

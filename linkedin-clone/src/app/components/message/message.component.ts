import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  isExpanded : boolean = true;
  messages = messageList;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeExpand() {
    this.isExpanded = !this.isExpanded    
  }


}

const messageList = [
  {
    name : "Rohan Arya",
    icon:"../../../assets/images/usericon1.jpg",
    lastMessageBy: 'You',
    lastMessage: "Hi how are you rohan hope you are fine and doing well. Ok we'll catch up later"
  },
  {
    name : "Umesh Moorthy",
    icon:"../../../assets/images/usericon2.png",
    lastMessageBy: 'Umesh',
    lastMessage: "Talk to you after sometimes bye"
  },{
    name : "Bharani",
    icon:"../../../assets/images/usericon3.png",
    lastMessageBy: 'You',
    lastMessage: "It's ok"
  },
  {
    name : "Rohan Arya",
    icon:"../../../assets/images/usericon1.jpg",
    lastMessageBy: 'You',
    lastMessage: "😂 😂 😂 😂"
  },
  {
    name : "Rohid Kumar",
    icon:"../../../assets/images/usericon1.jpg",
    lastMessageBy: 'You',
    lastMessage: "Hi how are you rohan hope you are fine and doing well. Ok we'll catch up later"
  },
  {
    name : "Vikram",
    icon:"../../../assets/images/usericon2.png",
    lastMessageBy: 'Umesh',
    lastMessage: "Talk to you after sometimes bye"
  },{
    name : "Anu Priya",
    icon:"../../../assets/images/usericon3.png",
    lastMessageBy: 'You',
    lastMessage: "It's ok"
  },
  {
    name : "Rohan Arya",
    icon:"../../../assets/images/usericon1.jpg",
    lastMessageBy: 'You',
    lastMessage: "😂 😂 😂 😂"
  },
  {
    name : "Ajith Kumar",
    icon:"../../../assets/images/usericon1.jpg",
    lastMessageBy: 'You',
    lastMessage: "Hi how are you rohan hope you are fine and doing well. Ok we'll catch up later"
  },
  {
    name : "Joseph Vijay",
    icon:"../../../assets/images/usericon2.png",
    lastMessageBy: 'Umesh',
    lastMessage: "Talk to you after sometimes bye"
  },{
    name : "Bharani boopalan",
    icon:"../../../assets/images/usericon3.png",
    lastMessageBy: 'You',
    lastMessage: "It's ok"
  },
  {
    name : "Rohan Arya",
    icon:"../../../assets/images/usericon1.jpg",
    lastMessageBy: 'You',
    lastMessage: "😂 😂 😂 😂"
  }
]
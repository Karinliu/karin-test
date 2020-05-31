import React, { Component } from 'react'
import {Title, Header, PinkLinkList, TitleCategory} from '../components/';
import {myAccount} from '../assets/';


class Chat extends Component {
    render() {
      const items =  myAccount.chat_link.map(data => 
            <PinkLinkList 
                    contact={data.contact}
                    user_link={data.user_link}
                    image_link={data.image_link}/>)


        return (
        	 <>
            <Header text="Terug"
                    textLink ="/Support"/>
            <div className="container pink-list list-help-page">
              <Title classes="header-title" text="Chatten"/> 
              <TitleCategory title="Open"/>
              <div className="row item-list">
                    {items}
                </div>
            </div>
            </>
        )
    }
}

export default Chat
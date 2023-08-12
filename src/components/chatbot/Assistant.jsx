import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const steps = [
    {
        id: '0',
        message: 'Hello, I am Steve, your Banking assistant',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please tell us your name',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'Register User', trigger:'5' },  
            { value: 2, label: 'Login User', trigger:'6' },
            { value: 3, label: 'Types of Account', trigger:'7' },
            { value: 4, label: 'Services We Offer', trigger:'8' },
            { value: 5, label: 'Invest With Us', trigger:'9' },
 
        ],
    },
    {
        id: '5',
        message: 'Head over to the Register User Option and fill in the details to register yourself with us',
        //end: true,
        trigger: 4
        
      },
      {
        id: '6',
        message: 'Head over to the Login User Option and enter your credentials to login to starting banking with us',
        //end: true,
        trigger: 4
        
      },
      {
        id: '7',
        message: 'We offer 3 types of accounts: Savings Account, Current Account and Fixed Deposit Account',
        //end: true,
        trigger: 4
        
      },
      {
        id: '8',
        message: 'We offer a wide range of services like: Online Banking, Mobile Banking, ATM Banking, Debit Card, Credit Card, Net Banking, etc.',
        //end: true,
        trigger: 4
      },
      {
        id: '9',
        message: 'Head over to the Invest With Us Option and fill in the details to start investing with us',
        //end: true,
        trigger: 4
      },
];


 

const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 

const config = {
    
    floating: true,
    enableSmoothScroll :true,
};

const Assistant = () => {
  return (
    <div >
         <ThemeProvider theme={theme}>
                <ChatBot
 
                   
                    headerTitle="Steve"
                    // speechSynthesis={{ enable: true, lang: 'en' }}
                    recognitionEnable={true}
                    recognitionPlaceholder
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
    </div>
  )
}

export default Assistant
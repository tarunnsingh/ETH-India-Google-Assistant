'use-strict'

const { 
    dialogflow,
    SimpleResponse,
    Suggestions,
    LinkOutSuggestion,
    BrowseCarousel,
    BrowseCarouselItem,
    Image,
    BasicCard,
    SignIn,
    RegisterUpdate,
    Button,
  } = require("actions-on-google");

const functions = require('firebase-functions');
const app = dialogflow()
const axios = require('axios')

import { Lendroid } from 'lendroid'
const options = {
    apiEndpoint: 'https://ethindia.appspot.com/offers',
    stateCallback: () => _this.setState({ lastSync: Date.now() }),
    relayer,
    wranglers : [
        {
          label: 'Default Simple Wrangler',
          address: '0x0f02a30cA336EC791Ac8Cb40816e4Fc5aeB57E38',
          apiLoanRequests: 'https://lendroidwrangler.com'
        }
      ],
    CONTRACT_ADDRESSES = {
        DAI: {
          1: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
          42: '0xC4375B7De8af5a38a93548eb8453a498222C4fF2',
          def: ABIs.ERC20ABI
          // def: ABIs.DAIABI
        },
        DGX: {
          1: '0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF',
          42: '0x7d6D31326b12B6CBd7f054231D47CbcD16082b71',
          def: ABIs.ERC20ABI
          // def: ABIs.DGXABI
        },
        USDC: {
          1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          42: '0x507aac698a8f2dcd2a6f48090972cdcd5342e5f9',
          def: ABIs.ERC20ABI
        }
      },
    provider : 'window.web3.currentProvider'
  }  
const LendroidJS = new Lendroid(options)

app.intent('Lend', (conv, { param }) => {
    // INPUTS TO BE TAKEN
    const samplePost = {
        loanAmountOffered: '4.123',
        interestRatePerDay: '0.008',
        loanDuration: '43200',
        offerExpiry: '1534352398',
        relayerFeeLST: '0.01',
        monitoringFeeLST: '0.01',
        rolloverFeeLST: '0.01',
        closureFeeLST: '0.01',
        wrangler: '0x0f02a30cA336EC791Ac8Cb40816e4Fc5aeB57E38',
        lender: '0x7faEDdF6825824F133831811771b74aFf7a4bE6c',
        borrower: '',
        creatorSalt: '0x92c0b12fa215396ed0867a9a871aee1a17657643',
        collateralToken: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
        loanToken: '0xC4375B7De8af5a38a93548eb8453a498222C4fF2',
        relayer: '',
        collateralAmount: '0'
      }
      
      return LendroidJS.onCreateOrder(samplePost, (response) => {
        console.log(response)
      })  
      

});







exports.fulfillment = functions.https.onRequest(app);
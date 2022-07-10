import { SauceAddToCart } from "./pages/sauceAddToCart.cy.js";
import { TestItemInCart } from "./test/testItemInCart.cy.js";
import {TestDeleteItem} from "./test/testDeleteItem.cy.js";
import {GetoutSauce} from "./pages/getoutSauce.cy.js";
import {LoginSauce} from "./pages/LoginSauce.cy.js"
import{MainPage} from "./pages/mainPage.cy.js"


let mainPage =  new MainPage() 
let login = new LoginSauce()
let sauceAddToCart = new SauceAddToCart()
let testItem = new TestItemInCart()
let testDelete_Item = new TestDeleteItem()
let logout = new GetoutSauce()


describe('saucedemo', () => {

  beforeEach(() => {
    mainPage.visitMainPage()

  })

  it('login saucedemo', () => {
    
    login.loginSauce()
    sauceAddToCart.addToCart()
    testItem.test_item()
    testDelete_Item.testDeleteItem()
    logout.logoutSauce() 

  })
  

})


 

 
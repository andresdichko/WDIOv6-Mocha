const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
var assert = require("assert");

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
            
    }); 
       it('should login with valid credentials2', () => {
        LoginPage.open();


        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');

    });    it('should login with valid credentials3', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');

    });    it('ERROR TEST 99876', () => {
        LoginPage.open();
        LoginPage.login('tomadsadasdasdsmith', 'SuperSecretPassword!');
        browser.pause(2006)
        title = browser.getTitle();
        assert.strictEqual(title, "Google Search");
        
    });
});




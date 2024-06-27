describe('SauceDemo Test', () => {
    it('User success login', async () => {
        await browser.url('https://www.saucedemo.com');
        const usernameTextbox = await $('#user-name');
        const passwordTextbox = await $('#password');
        const loginButton = await $('//input[@value="Login"]');
  
        await usernameTextbox.waitForDisplayed({ timeout: 3000 });
        await usernameTextbox.setValue('standard_user');
        await passwordTextbox.setValue('secret_sauce');
        await loginButton.click();
        await browser.pause(3000);
    });
  
    it('User berada di dashboard setelah login', async () => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        const cartIcon = await $('#shopping_cart_container');
        
        await expect(cartIcon).toBeDisplayed();
        await browser.pause(2000);
    });
  
    it('Add item to cart', async () => {
        const addBackpack = await $('#add-to-cart-sauce-labs-backpack');
    
        await addBackpack.click();
        await browser.pause(3000);
    });
    it('item sukses ditambahkan ke cart', async () => {
        const cartContainer = await $('#shopping_cart_container');
        const removeBag = await $('#remove-sauce-labs-backpack');
    
        await cartContainer.click();
        await expect(removeBag).toBeDisplayed();
        await browser.pause(3000);
      });
  })
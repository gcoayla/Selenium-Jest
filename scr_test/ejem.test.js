const {Builder,By,Key,util} = require("selenium-webdriver");

test('Verificar la calculadora de porcentajes 10% de 50', async () => {
  jest.setTimeout(50000);
  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://www.calculator.net/percent-calculator.html");
  await driver.findElement(By.id("cpar1")).sendKeys("10");
  await driver.findElement(By.id("cpar2")).sendKeys("50");
  await driver.findElement(By.xpath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]')).click();
  var result = await driver.findElement(By.className('h2result')).getText();
  driver.close();
  expect(result).toBe("Result: 5");
  
  })
  test('Verificar la calculadora de porcentajes A% de 50', async () => {
    jest.setTimeout(50000);
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.calculator.net/percent-calculator.html");
    await driver.findElement(By.id("cpar1")).sendKeys("A");
    await driver.findElement(By.id("cpar2")).sendKeys("50");
    await driver.findElement(By.xpath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]')).click();
    var result = await driver.findElement(By.xpath('//*[@id="content"]/p[2]/font')).getText();
    driver.close();
    expect(result).toBe("Please provide two numeric values in any fields below.");
    })

  test('Verificar la calculadora de porcentajes 5294967296% de 5294967296', async () => {
    jest.setTimeout(50000);
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.calculator.net/percent-calculator.html");
    await driver.findElement(By.id("cpar1")).sendKeys("5294967296");
    await driver.findElement(By.id("cpar2")).sendKeys("5294967296");
    await driver.findElement(By.xpath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]')).click();
    var result = await driver.findElement(By.className('h2result')).getText();
    driver.close();
    expect(result).toBe("Result: 2.803667866571E+17");
    })

    
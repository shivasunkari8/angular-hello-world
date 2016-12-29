describe('Protractor Demo App', function() {
    beforeEach(function() {
        browser.get('http://localhost:3003/#!/hello');
    });
    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Hello World');
    });
    it('should display "Hello, World!"', function() {
        var greeting = element(by.binding('name'));
        expect(greeting.getText()).toEqual('Hello, World!')
    });
});
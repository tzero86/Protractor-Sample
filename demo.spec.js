
describe('A very simple first test', () => {
    
    it('should let me open apple.com', () => {
        browser.get('https://cloud.google.com/blog/');
        expect(browser.getTitle()).toEqual('Google Cloud Blog | News, Features and Announcements');
    });

});
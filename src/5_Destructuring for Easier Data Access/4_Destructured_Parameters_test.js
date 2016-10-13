//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('Destructured Parameters', () => {
    it('basic', () => {
        let temp;
        //uses destructuring to pull out the necessary data
        function setCookie(name, value, { secure, path, domain, expires }) {
            temp=secure
        }
        setCookie("type", "js", {
            secure: true,
            expires: 60000
        });

        expect(temp === true).toEqual(true); 
    });

    it('Destructured Parameters Are Required', () => {
        let temp=false;
        //uses destructuring to pull out the necessary data
        function setCookie(name, value, { secure, path, domain, expires }) {
            temp=secure
        }
        
        try{
            setCookie("type", "js");
        }catch (e){
            temp=true
        }
        expect(temp === true).toEqual(true);
    });

    it('work around', () => {
        let temp=false;
        //uses destructuring to pull out the necessary data
        function setCookie(name, value, { secure, path, domain, expires } = {}) {
            temp=secure
        }

        try{
            setCookie("type", "js");
        }catch (e){
            temp=true
        }
        expect(temp === undefined).toEqual(true);
    });

    it('Default Values for Destructured Parameters', () => {
        let temp;
        (function setCookie(name, value,
            {
                secure = false,
                path = "/",
                domain = "example.com",
                expires = new Date(Date.now() + 360000000)
            } = {}
        ) {
            temp=secure;
        })();
        expect(temp === false).toEqual(true);
    });
});


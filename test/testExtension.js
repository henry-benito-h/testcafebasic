fixture("My Fixture")
    .page("http://www.google.com");

    test("My Test", async (t) => {
        test("My Test", async (t) => {
            
            })
            .before(async (t) => {
                // inject in the test context any input data needed to run this specific test
                t.ctx.inputData = inputData;
            })
            .after(async (t) => {
                // test finalization code
            });
        
    });
    
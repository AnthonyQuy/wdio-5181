describe('suite definition', function () {

    this.afterEach(function () {
        this.test.error(new Error('just because'));
    })

    it('spec definition 1', function () {
        console.log('spec definition 1');
    })

})
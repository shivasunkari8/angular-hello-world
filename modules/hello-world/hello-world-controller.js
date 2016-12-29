
class HelloWorldController {
    static get $inject() {
        return ['$scope'];
    }
    constructor($scope) {
        this.$scope = $scope;
        this.$scope.name = 'Hari';
    }
}
export default HelloWorldController;

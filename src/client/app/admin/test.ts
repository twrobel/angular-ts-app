export class AdminController implements IAdminController {
	title: string;
	static $inject = ['logger'];
	/* @ngInject */
	constructor(private logger: any) {
	}
	activate(): void {
		var a = 1;
	}
}
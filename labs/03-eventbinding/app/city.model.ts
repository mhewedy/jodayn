export class City{
	constructor(
		readonly id: number,
		readonly name: string,
		readonly province: string,
		readonly highlights?: string[]
	){	}
}

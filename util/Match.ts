export function splitMatch (
	query:string,
	from:Array<string>
):Array<string|undefined> {
	return from.filter((f:string) => (
		`${query}`.indexOf(f) != -1
	));
}
export function filter (
	query: string,
	from: {[x:string]:Array<string>}
):string {
	const result:Array<string> = [];
	Object.entries(from)
		.forEach(([k, v]:[k:string, v:Array<string>]) => (
			v.forEach((f:string) => {
				if (query && (splitMatch(
					query,
					f.split('&')
				).length == f.split('&').length)) {
					result.push(k);
				}
			})
		));
	return result[0] || '';
}

module.exports = function(
	project,
) {
	let messages = [];
	/*for (let model of project.models || []) {
		if (model.connection) {
			messages.push({
				rule: 'test-rule',
				location: `model:${model._model}`,
				path: `/projects/${project.name}/files/${model._model}.model.lkml`,
				exempt: false,
				level: 'error', // info | warning | error
				description: `Connection test failed: ${model.connection}`,
			});
		}
	}
*/
	
	messages.push({
				rule: 'test-rule-2',
				location: `model:TEST`,
				path: `TEST`,
				exempt: false,
				level: 'error', // info | warning | error
				description: JSON.stringify(project),
			});
	
	return {
		messages,
	};

	
};

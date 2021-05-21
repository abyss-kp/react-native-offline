// export function configureFakeBackend() {
// 	let realFetch = window.fetch;
// 	window.fetch = function (url, opts) {
// 		const { method, headers } = opts;
// 		const body = opts.body && JSON.parse(opts.body);

// 		return new Promise((resolve, reject) => {
// 			// wrap in timeout to simulate server api call
// 			setTimeout(handleRoute, 1000);

// 			function handleRoute() {
// 				switch (true) {
// 					case url.endsWith('/add') && method === 'POST':
// 						return addToDo();
// 					case url.endsWith('/active') && method === 'GET':
// 						return getActivePosts();
// 					case url.endsWith('/completed') && method === 'GET':
// 						return; //getCompletedPosts();
// 					case url.endsWith('/all') && method === 'GET':
// 						return; //getAllPosts();
// 					// case url.match(/\/users\/\d+$/) && method === 'DELETE':
// 					// 	return deleteUser();
// 					default:
// 						// pass through any requests not handled above
// 						return realFetch(url, opts)
// 							.then((response) => resolve(response))
// 							.catch((error) => reject(error));
// 				}
// 			}

// 			// route functions
// 			function addToDo() {
// 				const { todo, timeStamp } = body;
// 				return ok({ todo, timeStamp });
// 			}

// 			function register() {
// 				const user = body;

// 				if (users.find((x) => x.username === user.username)) {
// 					return error(`Username  ${user.username} is already taken`);
// 				}

// 				// assign user id and a few other properties then save
// 				user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
// 				users.push(user);
// 				localStorage.setItem('users', JSON.stringify(users));

// 				return ok();
// 			}

// 			function getUsers() {
// 				if (!isLoggedIn()) return unauthorized();

// 				return ok(users);
// 			}

// 			function deleteUser() {
// 				if (!isLoggedIn()) return unauthorized();

// 				users = users.filter((x) => x.id !== idFromUrl());
// 				localStorage.setItem('users', JSON.stringify(users));
// 				return ok();
// 			}

// 			// helper functions

// 			function ok(body) {
// 				resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
// 			}

// 			function unauthorized() {
// 				resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
// 			}

// 			function error(message) {
// 				resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
// 			}

// 			function isLoggedIn() {
// 				return headers['Authorization'] === 'Bearer fake-jwt-token';
// 			}

// 			function idFromUrl() {
// 				const urlParts = url.split('/');
// 				return parseInt(urlParts[urlParts.length - 1]);
// 			}
// 		});
// 	};
// }

export const apiUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:5000'
		: 'someUrl'


export const LOCAL_STORAGE_TOKEN_NAME = 'huimitu'
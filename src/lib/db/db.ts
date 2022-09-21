import * as PouchDB from 'pouchdb';

export const db = new PouchDB(
	'http://cl8c3mb0b0003bumgg16sg9s4:ZEwZflSUI0tDhWa4TzdV4jf4@94.130.110.212:9000/cl8c3mb0c0005bumg56ctcutl',
	{ skip_setup: true }
);

'use strict';

angular.module('app').constant(
		'REST_URL', 
			{
			    // login
			    'login': '/login',
			    'logout': '/logout',

				// invoke
				//'invoke': '/channels/mychannel/chaincodes/mycc/invoke',
				'invoke': '/channels/mychannel/chaincodes/mycc',
                // query
				'query': '/channels/mychannel/chaincodes/mycc/query'
				// 'query': '/channels/mychannel/chaincodes/mycc'

			}
	);
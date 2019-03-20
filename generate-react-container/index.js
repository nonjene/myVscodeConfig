
/* IF resource */import {EXAMPLE_RESOURCE} from 'constants/Resources';
/* ENDIF */
import {connect} from 'react-redux';
/* IF resource */import {fetchRequest} from 'actions/resources';
import isLoading from 'selectors/isLoading';
import getResource from 'selectors/getResource';
/* ENDIF */
import __ComponentName__ from './__ComponentName__';
/* IF resource */

export default connect(state => {
	return {
		resource: getResource(state, EXAMPLE_RESOURCE),
		isLoading: isLoading(state, EXAMPLE_RESOURCE),
	};
}, {
	fetch: fetchRequest(EXAMPLE_RESOURCE),
})(__ComponentName__);

/* ENDIF */
/* IF !resource */
export default connect()(__ComponentName__);
/* ENDIF */

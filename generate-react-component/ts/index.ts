/* IF resource */import { connect } from 'react-redux';
import { AppState } from 'store';
import { ME } from 'constants/Resources';
import { fetchRequest } from 'utils/resource';
import __ComponentName__, {
    OwnProps,
    StateProps,
    DispatchProps,
} from './__ComponentName__';

const mapStateToProps = (state: AppState): StateProps => {
    return {
        userId: state.me.id,
    };
};

const mapDispathToProps = {
    fetchMe: fetchRequest(ME),
};

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispathToProps
)(__ComponentName__);
/* ENDIF */
/* IF !resource */export { default } from './__ComponentName__';
/* ENDIF */
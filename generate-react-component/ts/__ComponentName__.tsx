/* IF class */import React, { PureComponent } from 'react';
/* ENDIF *//* IF !class */import React from 'react';
/* ENDIF */
import { DisplayText } from '@shopify/polaris';

export interface OwnProps {}

/* IF resource */export interface StateProps {
    userId?: string;
}
export interface DispatchProps {
    fetchMe: () => void;
}

type Props = StateProps & DispatchProps;
/* ENDIF */
/* IF class */

export default class __ComponentName__ extends PureComponent<Props> {
    public render(): JSX.Element {
        return (
            <DisplayText>
                This is {'<__ComponentName__ />'} with StateProps:
                {this.props.userId}
            </DisplayText>
        );
    }
}
/* ENDIF */
/* IF !class */
export default function __ComponentName__(props: OwnProps): JSX.Element {
	return (
		<DisplayText>{props}</DisplayText>
	);
}
/* ENDIF */
/**
 * Singleton event emitter. Used to emit events on store actions.
 * Such events can be listened to outside of the widget.
 */

import mitt from 'mitt';
import { SelectionActionEvents } from './selection';
import { UIActionEvents } from './ui';
import { UserActionEvents } from './users';

type Events = SelectionActionEvents & UserActionEvents & UIActionEvents;

export const emitter = mitt<Events>();

import {Injectable} from 'angular2/angular2';
import {Dispatcher} from '../../dispatcher/dispatcher';
import {UserActionType} from '../action-constants';
import {BackendMessagingService} from '../../channel/backend-messaging-service';

@Injectable()
/**
 * User Actions
 */
export class UserActions {

  constructor(
    private dispatcher: Dispatcher,
    private messagingService: BackendMessagingService
  ) {
  }

  /**
   * Get the component tree data from back-end
   */
  startComponentTreeInspection() {

    this.messagingService.sendMessageToBackend({
      actionType: UserActionType.START_COMPONENT_TREE_INSPECTION
    });

    // This is not strictly needed for now.
    // Just a broadcast that this was sent.
    // But, we might want to listen to this in the future.
    // For example: show indication that request has been sent on the UI
    this.dispatcher.messageBus.next({
      actionType: UserActionType.START_COMPONENT_TREE_INSPECTION
    });

  }

  /**
   * Select a node to be highlighted
   * @param  {Object} options.node
   */
  selectNode({ node }) {

    this.dispatcher.messageBus.next({
      actionType: UserActionType.SELECT_NODE,
      node
    });

  }

  /**
   * Search for a node to be highlighted
   * @param  {String} options.query
   */
  searchNode({ query }) {

    this.dispatcher.messageBus.next({
      actionType: UserActionType.SEARCH_NODE,
      query
    });

  }

}
